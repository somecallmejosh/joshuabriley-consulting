/* Flow-diagram engine.
 *
 * Authoring a flow sheet means declaring nodes on a grid and listing the edges
 * between them. Everything drawn — diamonds, parallelograms, wavy system-message
 * edges, orthogonal connectors and their arrowheads — is derived here, so five
 * flow sheets share one set of shapes and one router instead of five hand-placed
 * SVGs that drift apart.
 *
 * Markup contract:
 *
 *   <div class="flow" data-cols="3" data-colw="300" data-gutter="60" data-rowh="92"
 *        data-edges='[{"from":"a","to":"b","label":"no"}]'>
 *     <svg class="wires"></svg>
 *     <div class="node step" id="a" data-cell="0,1"><span class="t">…</span></div>
 *   </div>
 *
 * data-cell is "row,col"; data-span widens a node across columns. Rectangular
 * and stadium shapes come from CSS borders (crisper than SVG at 2x); only the
 * diamond, parallelogram and wavy-bottom shapes are drawn.
 */
(function () {
  const NS = 'http://www.w3.org/2000/svg';
  const LINE = '#6c737c';

  function layout(flow) {
    const cols = +flow.dataset.cols || 3;
    const colw = +flow.dataset.colw || 300;
    const gut = +flow.dataset.gutter || 60;
    const rowh = +flow.dataset.rowh || 92;

    let maxBottom = 0;
    // .lane and .band let a flow split into swimlanes (what the user does vs
    // what the system does) while staying on the same grid.
    flow.querySelectorAll('.node, .aside, .design-note, .lane, .band').forEach((n) => {
      const cell = n.dataset.cell;
      if (!cell) return;
      const [r, c] = cell.split(',').map(Number);
      const span = +n.dataset.span || 1;
      n.style.position = 'absolute';
      n.style.left = `${c * (colw + gut)}px`;
      n.style.top = `${r * rowh + (+n.dataset.dy || 0)}px`;
      n.style.width = `${colw * span + gut * (span - 1)}px`;
      maxBottom = Math.max(maxBottom, n.offsetTop + n.offsetHeight);
    });

    flow.style.width = `${cols * colw + (cols - 1) * gut}px`;
    flow.style.height = `${maxBottom + 8}px`;
    return { colw, gut, rowh };
  }

  // Where an edge leaves or enters a node, in flow-local coordinates.
  function port(flow, el, side) {
    const b = flow.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const x = r.left - b.left;
    const y = r.top - b.top;
    const w = r.width;
    const h = r.height;
    if (side === 't') return [x + w / 2, y];
    if (side === 'b') return [x + w / 2, y + h];
    if (side === 'l') return [x, y + h / 2];
    return [x + w, y + h / 2];
  }

  // Pick sensible sides when the author did not name them: prefer the axis with
  // the greater separation, so a node directly below is entered from the top.
  function infer(flow, a, b) {
    const ra = a.getBoundingClientRect();
    const rb = b.getBoundingClientRect();
    const dx = rb.left + rb.width / 2 - (ra.left + ra.width / 2);
    const dy = rb.top + rb.height / 2 - (ra.top + ra.height / 2);
    if (Math.abs(dy) >= Math.abs(dx)) {
      return dy > 0 ? ['b', 't'] : ['t', 'b'];
    }
    return dx > 0 ? ['r', 'l'] : ['l', 'r'];
  }

  // `offset` pushes the turning line away from the ports. A loop-back edge
  // leaving and re-entering the same side of a column otherwise turns at the
  // midpoint of two identical x values — i.e. exactly on the column border,
  // where it runs through the left vertex of every diamond it passes.
  function route(s, e, fs, ts, offset = 0) {
    const [sx, sy] = s;
    const [ex, ey] = e;
    const vert = (x) => x === 't' || x === 'b';
    if (!offset && (Math.abs(sx - ex) < 1.5 || Math.abs(sy - ey) < 1.5)) {
      return `M ${sx} ${sy} L ${ex} ${ey}`;
    }
    if (vert(fs) && vert(ts)) {
      const my = (sy + ey) / 2 + offset;
      return `M ${sx} ${sy} V ${my} H ${ex} V ${ey}`;
    }
    if (!vert(fs) && !vert(ts)) {
      // Turn outward on the side the edge actually leaves by.
      const out = fs === 'l' ? -offset : offset;
      const mx = (sx + ex) / 2 + out;
      return `M ${sx} ${sy} H ${mx} V ${ey} H ${ex}`;
    }
    // Mixed: turn once, on the axis the edge leaves by.
    return vert(fs)
      ? `M ${sx} ${sy} V ${ey} H ${ex}`
      : `M ${sx} ${sy} H ${ex} V ${ey}`;
  }

  function shape(svg, flow, node) {
    const b = flow.getBoundingClientRect();
    const r = node.getBoundingClientRect();
    const x = r.left - b.left;
    const y = r.top - b.top;
    const w = r.width;
    const h = r.height;
    const add = (el, attrs) => {
      const n = document.createElementNS(NS, el);
      for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
      svg.appendChild(n);
      return n;
    };
    const base = { fill: '#ffffff', stroke: LINE, 'stroke-width': 1.5 };

    if (node.classList.contains('branch')) {
      add('polygon', {
        ...base,
        points: `${x + w / 2},${y} ${x + w},${y + h / 2} ${x + w / 2},${y + h} ${x},${y + h / 2}`,
      });
    } else if (node.classList.contains('choice')) {
      const k = 18;
      add('polygon', {
        ...base,
        fill: '#f4f5f7',
        points: `${x + k},${y} ${x + w},${y} ${x + w - k},${y + h} ${x},${y + h}`,
      });
    } else if (node.classList.contains('msg')) {
      // Rectangle with a wavy bottom edge — the flowchart convention for a
      // message the system emits rather than a step the user takes.
      const a = 5;
      const q = w / 4;
      add('path', {
        ...base,
        d:
          `M ${x} ${y} H ${x + w} V ${y + h - a} ` +
          `q ${-q / 2} ${-a * 2} ${-q} 0 q ${-q / 2} ${a * 2} ${-q} 0 ` +
          `q ${-q / 2} ${-a * 2} ${-q} 0 q ${-q / 2} ${a * 2} ${-q} 0 Z`,
      });
    }
  }

  function draw(flow) {
    layout(flow);
    const svg = flow.querySelector('svg.wires');
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    // Edge labels go in their own layer appended after the nodes. Drawn into
    // the wire SVG they sit *behind* the node divs, so a label that overruns
    // into a node is silently clipped — the failure looks like a label the
    // author forgot rather than one that collided.
    let labels = flow.querySelector('svg.wire-labels');
    if (!labels) {
      labels = document.createElementNS(NS, 'svg');
      labels.setAttribute('class', 'wire-labels');
      flow.appendChild(labels);
    }
    flow.appendChild(labels);
    while (labels.firstChild) labels.removeChild(labels.firstChild);

    const defs = document.createElementNS(NS, 'defs');
    defs.innerHTML =
      `<marker id="arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" ` +
      `markerHeight="7" orient="auto-start-reverse">` +
      `<path d="M 0 1 L 9 5 L 0 9 z" fill="${LINE}"/></marker>`;
    svg.appendChild(defs);

    // Shapes go down first so connectors and labels sit above them.
    flow.querySelectorAll('.node').forEach((n) => shape(svg, flow, n));

    const edges = JSON.parse(flow.dataset.edges || '[]');
    for (const e of edges) {
      const a = flow.querySelector(`#${e.from}`);
      const b = flow.querySelector(`#${e.to}`);
      if (!a || !b) {
        console.warn(`flow.js: edge ${e.from} → ${e.to} has a missing node`);
        continue;
      }
      const [fi, ti] = infer(flow, a, b);
      const fs = e.fromSide || fi;
      const ts = e.toSide || ti;
      const s = port(flow, a, fs);
      const t = port(flow, b, ts);

      const p = document.createElementNS(NS, 'path');
      p.setAttribute('d', route(s, t, fs, ts, e.offset || 0));
      p.setAttribute('fill', 'none');
      p.setAttribute('stroke', LINE);
      p.setAttribute('stroke-width', '1.5');
      if (e.dashed) p.setAttribute('stroke-dasharray', '4 4');
      // Tethers from a spec aside to the thing it describes carry no arrowhead:
      // they are labels, not steps.
      if (!e.noArrow) p.setAttribute('marker-end', 'url(#arw)');
      if (e.soft) p.setAttribute('stroke', '#bfc4ca');
      svg.appendChild(p);

      if (e.label) {
        const horiz = fs === 'l' || fs === 'r';
        const tx = document.createElementNS(NS, 'text');
        tx.textContent = e.label;
        tx.setAttribute('x', (horiz ? (s[0] + t[0]) / 2 : s[0] + 8) + (e.labelDx || 0));
        tx.setAttribute('y', (horiz ? s[1] - 7 : (s[1] + t[1]) / 2 - 4) + (e.labelDy || 0));
        tx.setAttribute('text-anchor', horiz ? 'middle' : 'start');
        tx.setAttribute('font-family', 'Helvetica, Arial, sans-serif');
        tx.setAttribute('font-size', '11');
        tx.setAttribute('fill', '#6c737c');
        // A white halo keeps the label readable where it has to cross a wire.
        tx.setAttribute('stroke', '#ffffff');
        tx.setAttribute('stroke-width', '3');
        tx.setAttribute('paint-order', 'stroke');
        labels.appendChild(tx);
      }
    }
  }

  window.__drawFlow = () => document.querySelectorAll('.flow').forEach(draw);
  window.__drawFlow();
})();
