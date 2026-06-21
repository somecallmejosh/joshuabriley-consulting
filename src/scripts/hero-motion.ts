/**
 * hero-motion — shared motion helper for the hero "header illustrations".
 *
 * The illustrations are decorative (`aria-hidden`) collages of absolutely-positioned
 * cards. Their connector lines used to be hand-placed in fixed SVG viewBox coordinates
 * while the cards used percentage positioning, so the lines never actually landed on the
 * cards. This module fixes that once: it measures the *real* rendered position of each
 * card with getBoundingClientRect and draws connector paths that terminate on the card
 * borders — then optionally animates a pulse travelling along each path (GSAP +
 * MotionPathPlugin).
 *
 * Reduced motion is handled centrally: when the user prefers reduced motion we still draw
 * the static connectors (so the composition is complete and legible) but create no pulses
 * and no looping timelines.
 */
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

export { gsap, MotionPathPlugin };

const SVGNS = 'http://www.w3.org/2000/svg';

export const reduceMotion = (): boolean =>
  typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

interface Box {
  cx: number;
  cy: number;
  w: number;
  h: number;
}

/** Element box in the connector SVG's own pixel coordinate space. */
function boxInSvg(svg: SVGSVGElement, el: Element): Box {
  const s = svg.getBoundingClientRect();
  const r = el.getBoundingClientRect();
  return {
    cx: r.left + r.width / 2 - s.left,
    cy: r.top + r.height / 2 - s.top,
    w: r.width,
    h: r.height,
  };
}

/** Point on `box`'s border along the ray toward (tx,ty), pushed out by `pad` px. */
function edge(box: Box, tx: number, ty: number, pad = 4): { x: number; y: number } {
  const dx = tx - box.cx;
  const dy = ty - box.cy;
  if (dx === 0 && dy === 0) return { x: box.cx, y: box.cy };
  const hw = box.w / 2;
  const hh = box.h / 2;
  const t = 1 / Math.max(Math.abs(dx) / hw, Math.abs(dy) / hh);
  const len = Math.hypot(dx, dy) || 1;
  return { x: box.cx + dx * (t + pad / len), y: box.cy + dy * (t + pad / len) };
}

/** Quadratic path between two points, bent perpendicular by `curve` (0 = straight). */
function pathD(a: { x: number; y: number }, b: { x: number; y: number }, curve: number): string {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const off = curve * len * 0.25;
  const cx = mx + (-dy / len) * off;
  const cy = my + (dx / len) * off;
  return `M ${a.x.toFixed(1)} ${a.y.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
}

export interface Link {
  from: Element;
  to: Element;
  color: string;
  /** stroke width (px), default 2.5 */
  width?: number;
  /** dash pattern, e.g. '9 8'; omit for solid */
  dash?: string;
  /** bend amount 0..1, default 0.18 */
  curve?: number;
  /** pad endpoints off the card border (px), default 4 */
  pad?: number;
  /** base stroke opacity, default 0.9 */
  opacity?: number;
}

export interface PulseOptions {
  color?: string;
  /** dot radius (px), default 5 */
  size?: number;
  /** travel time (s), default 1.8 */
  duration?: number;
  /** pause between loops (s), default 0.6 */
  repeatDelay?: number;
  /** start delay / stagger (s), default 0 */
  delay?: number;
  /** travel to→from instead of from→to */
  reverse?: boolean;
  ease?: string;
  /** soft glow trail, default true */
  glow?: boolean;
}

export interface LinkHandle {
  path: SVGPathElement;
  get length(): number;
  /** Append a dot that travels the path. Loops forever unless `paused`. */
  addPulse(opts?: PulseOptions & { paused?: boolean }): gsap.core.Tween;
}

export interface ConnectResult {
  links: LinkHandle[];
  reduce: boolean;
  /** Re-measure + redraw (and rebuild pulses). Call on resize. */
  refresh(): void;
  destroy(): void;
}

/**
 * Draw connectors for `links` into `svg`, anchored to the live card positions.
 * Returns handles so the caller can attach travelling pulses / sequence them.
 */
export function connect(svg: SVGSVGElement, links: Link[]): ConnectResult {
  const reduce = reduceMotion();
  svg.setAttribute('fill', 'none');
  // overflow-visible so end-caps and pulses near the border aren't clipped
  svg.style.overflow = 'visible';

  // Per-link saved pulse requests so refresh() can rebuild them identically.
  const pulseReqs: Array<Array<PulseOptions & { paused?: boolean }>> = links.map(() => []);
  const tweens: gsap.core.Tween[] = [];

  const drawPaths = (): SVGPathElement[] =>
    links.map((link) => {
      const fb = boxInSvg(svg, link.from);
      const tb = boxInSvg(svg, link.to);
      const a = edge(fb, tb.cx, tb.cy, link.pad ?? 4);
      const b = edge(tb, fb.cx, fb.cy, link.pad ?? 4);
      const p = document.createElementNS(SVGNS, 'path');
      p.setAttribute('d', pathD(a, b, link.curve ?? 0.18));
      p.setAttribute('stroke', link.color);
      p.setAttribute('stroke-width', String(link.width ?? 2.5));
      p.setAttribute('stroke-linecap', 'round');
      p.setAttribute('fill', 'none');
      p.setAttribute('stroke-opacity', String(link.opacity ?? 0.9));
      if (link.dash) p.setAttribute('stroke-dasharray', link.dash);
      svg.appendChild(p);
      return p;
    });

  let paths = drawPaths();

  const makePulse = (
    pathEl: SVGPathElement,
    color: string,
    o: PulseOptions & { paused?: boolean },
  ): gsap.core.Tween => {
    const dot = document.createElementNS(SVGNS, 'circle');
    const r = o.size ?? 5;
    dot.setAttribute('r', String(r));
    dot.setAttribute('cx', '0');
    dot.setAttribute('cy', '0');
    dot.setAttribute('fill', color);
    if (o.glow !== false) dot.style.filter = `drop-shadow(0 0 6px ${color})`;
    svg.appendChild(dot);
    const tween = gsap.fromTo(
      dot,
      { opacity: 0 },
      {
        duration: o.duration ?? 1.8,
        ease: o.ease ?? 'power1.inOut',
        repeat: o.paused ? 0 : -1,
        repeatDelay: o.repeatDelay ?? 0.6,
        delay: o.delay ?? 0,
        paused: o.paused ?? false,
        keyframes: { opacity: [0, 1, 1, 0] },
        motionPath: {
          path: pathEl,
          align: pathEl,
          alignOrigin: [0.5, 0.5],
          start: o.reverse ? 1 : 0,
          end: o.reverse ? 0 : 1,
        },
      },
    );
    tweens.push(tween);
    return tween;
  };

  const links_: LinkHandle[] = links.map((link, i) => ({
    get path() {
      return paths[i];
    },
    get length() {
      return paths[i].getTotalLength();
    },
    addPulse(opts: PulseOptions & { paused?: boolean } = {}) {
      pulseReqs[i].push(opts);
      return makePulse(paths[i], opts.color ?? link.color, opts);
    },
  }));

  const refresh = (): void => {
    tweens.forEach((t) => t.kill());
    tweens.length = 0;
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    paths = drawPaths();
    if (!reduce) {
      links.forEach((link, i) => {
        pulseReqs[i].forEach((o) => makePulse(paths[i], o.color ?? link.color, o));
      });
    }
  };

  let raf = 0;
  const onResize = (): void => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      // simple width-change debounce via rAF is enough for a hero illustration
      refresh();
    });
  };
  window.addEventListener('resize', onResize);
  // re-measure once fonts settle (card widths can shift)
  if ((document as Document & { fonts?: FontFaceSet }).fonts?.ready) {
    (document as Document & { fonts: FontFaceSet }).fonts.ready.then(() => refresh());
  }

  return {
    links: links_,
    reduce,
    refresh,
    destroy() {
      window.removeEventListener('resize', onResize);
      tweens.forEach((t) => t.kill());
    },
  };
}

/** Run `fn` only when motion is allowed; otherwise apply `rest` immediately. */
export function whenMotion(fn: () => void, rest?: () => void): void {
  if (reduceMotion()) {
    rest?.();
    return;
  }
  fn();
}
