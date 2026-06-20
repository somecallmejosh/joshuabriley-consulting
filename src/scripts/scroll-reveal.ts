const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReduced && 'IntersectionObserver' in window) {
  const main = document.getElementById('main') ?? document.querySelector('main');

  if (main) {
    const targets = new Set<Element>();

    main.querySelectorAll(':scope > section').forEach((section, i) => {
      if (i === 0) return;
      const content = Array.from(section.children).find(
        (child) => child.getAttribute('aria-hidden') !== 'true',
      );
      targets.add(content ?? section);
    });

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      targets.add(el);
    });

    // Stagger groups: the direct children of a [data-reveal-stagger] container
    // cascade in, each delayed a little more than the last, instead of the
    // whole block mounting at once. Decorative (aria-hidden) children are
    // skipped so they don't hold a slot in the cascade.
    const STAGGER_STEP = 70; // ms between siblings
    document.querySelectorAll<HTMLElement>('[data-reveal-stagger]').forEach((group) => {
      let i = 0;
      Array.from(group.children).forEach((child) => {
        if (!(child instanceof HTMLElement)) return;
        if (child.getAttribute('aria-hidden') === 'true') return;
        child.style.transitionDelay = `${i * STAGGER_STEP}ms`;
        targets.add(child);
        i += 1;
      });
    });

    if (targets.size > 0) {
      const viewportH = window.innerHeight || document.documentElement.clientHeight;
      const visibleOnLoad = new Set<Element>();

      // Read phase: measure all rects before mutating classes so the browser
      // does a single layout, not one forced reflow per element.
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportH * 0.92 && rect.bottom > 0) {
          visibleOnLoad.add(el);
        }
      });

      // Write phase: apply classes in one batch.
      targets.forEach((el) => {
        el.classList.add('scroll-reveal');
        if (visibleOnLoad.has(el)) el.classList.add('is-visible');
      });

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          });
        },
        // threshold:0 — fire as soon as any pixel crosses in. A nonzero ratio
        // would never be reached on very tall blog bodies (viewportH / bodyH < it),
        // leaving them stuck at opacity:0. rootMargin handles the reveal timing.
        { rootMargin: '0px 0px -8% 0px', threshold: 0 },
      );

      targets.forEach((el) => io.observe(el));
    }
  }
}
