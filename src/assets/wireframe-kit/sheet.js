/* Leader lines and callout placement.
 *
 * A sheet author marks a target with data-note="3" and writes the matching
 * <li data-for="3"> in the gutter. Everything geometric is derived here after
 * layout: where the callout sits, where its disc sits, and the dashed path that
 * joins the two. That keeps fifteen sheets consistent without any of them
 * hand-placing a line.
 *
 * Runs synchronously at the end of the document; render.mjs waits on fonts
 * before shooting, and re-runs this once fonts have settled.
 */
(function () {
  const GAP = 20; // minimum vertical space between two stacked callouts
  const ELBOW = 30; // the vertical jog happens just short of the disc

  function draw() {
    const body = document.querySelector('.sheet-body');
    const list = document.querySelector('.notes');
    if (!body || !list) return;

    const svg = document.querySelector('svg.leaders');
    const base = body.getBoundingClientRect();
    const cs = getComputedStyle(document.documentElement);
    const dotX = parseFloat(cs.getPropertyValue('--dot-x'));
    const noteX = parseFloat(cs.getPropertyValue('--note-x'));

    // Reset any previous pass so re-running is idempotent.
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    list.querySelectorAll('.note-dot').forEach((d) => d.remove());

    const items = [...list.querySelectorAll('li[data-for]')]
      .map((li) => {
        const id = li.dataset.for;
        const target = document.querySelector(`[data-note="${id}"]`);
        if (!target) {
          console.warn(`sheet.js: no [data-note="${id}"] for callout ${id}`);
          return null;
        }
        const r = target.getBoundingClientRect();
        const side = target.dataset.noteSide || 'right';
        // data-note-dy biases the anchor along the element's edge. A full-width
        // target (a sidebar, a toolbar) otherwise anchors at its exact middle,
        // which sends the leader straight through whatever sits beside it.
        const dy = +(target.dataset.noteDy || 0);
        const ax =
          side === 'left' ? r.left - base.left : r.right - base.left;
        const ay =
          (side === 'top'
            ? r.top - base.top
            : side === 'bottom'
              ? r.bottom - base.top
              : r.top + r.height / 2 - base.top) + dy;
        return { li, id, ax, ay, h: li.offsetHeight };
      })
      .filter(Boolean)
      .sort((a, b) => a.ay - b.ay);

    // Place each callout at its anchor's height, then push later ones down so
    // nothing collides. Callouts therefore read top-to-bottom in the same order
    // as the things they point at.
    let floor = 0;
    for (const it of items) {
      const top = Math.max(it.ay - 6, floor);
      it.top = top;
      it.li.style.top = `${top}px`;
      floor = top + it.h + GAP;
    }

    const ns = 'http://www.w3.org/2000/svg';
    items.forEach((it, i) => {
      // The disc is numbered by position, not by the author's data-for. Callouts
      // must read 1..n down the page, and two anchors a few pixels apart would
      // otherwise print out of order depending on which element was taller.
      const dot = document.createElement('span');
      dot.className = 'note-dot';
      dot.textContent = String(i + 1);
      dot.style.left = `${dotX - noteX}px`;
      dot.style.top = '0px';
      it.li.appendChild(dot);

      const dy = it.top + 10.5; // disc centre
      const dx = dotX - 10.5; // disc left edge

      // The jog sits just left of the disc, so the long run of the leader stays
      // on the anchor's own line and the eye can follow it straight across.
      // Clamped on both sides: never left of the anchor (which would double the
      // line back on itself), and never past the disc (which would overshoot it
      // and draw the elbow in the margin beyond).
      const elbowX = Math.min(Math.max(dx - ELBOW, it.ax + 12), dx - 8);
      const d =
        Math.abs(dy - it.ay) < 1.5
          ? `M ${it.ax} ${it.ay} H ${dx - 6}`
          : `M ${it.ax} ${it.ay} H ${elbowX} V ${dy} H ${dx - 6}`;

      const path = document.createElementNS(ns, 'path');
      path.setAttribute('d', d);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', '#c8552f');
      path.setAttribute('stroke-width', '1');
      path.setAttribute('stroke-dasharray', '3 3');
      svg.appendChild(path);

      // The small filled dot that lands on the artwork.
      const anchor = document.createElementNS(ns, 'circle');
      anchor.setAttribute('cx', it.ax);
      anchor.setAttribute('cy', it.ay);
      anchor.setAttribute('r', '3');
      anchor.setAttribute('fill', '#c8552f');
      svg.appendChild(anchor);
    });

    // The gutter is absolutely positioned, so the sheet has no idea how tall it
    // is. Give the body a floor so the full-page screenshot includes every note.
    const stage = document.querySelector('.stage, .flow');
    const stageH = stage ? stage.getBoundingClientRect().height : 0;
    body.style.minHeight = `${Math.max(stageH, floor - GAP)}px`;
  }

  window.__drawSheet = draw;
  draw();
})();
