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
      const target = content ?? section;
      target.classList.add('scroll-reveal');
      targets.add(target);
    });

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      el.classList.add('scroll-reveal');
      targets.add(el);
    });

    if (targets.size > 0) {
      const viewportH = window.innerHeight || document.documentElement.clientHeight;
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportH * 0.92 && rect.bottom > 0) {
          el.classList.add('is-visible');
        }
      });

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
      );

      targets.forEach((el) => io.observe(el));
    }
  }
}
