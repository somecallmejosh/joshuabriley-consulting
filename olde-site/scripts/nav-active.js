(function () {
  const normalize = (p) => {
    if (!p) return '/';
    try {
      p = new URL(p, window.location.origin).pathname;
    } catch (e) {
      return '/';
    }
    if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
    return p || '/';
  };

  const current = normalize(window.location.pathname);

  const isMatch = (linkPath) => {
    if (linkPath === '/') return current === '/';
    return current === linkPath || current.startsWith(linkPath + '/');
  };

  const navLinks = document.querySelectorAll(
    'header nav a[href], header .mobile-menu a[href]'
  );

  navLinks.forEach((a) => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || /^https?:/i.test(href)) {
      a.removeAttribute('aria-current');
      return;
    }
    if (isMatch(normalize(href))) {
      a.setAttribute('aria-current', 'page');
    } else {
      a.removeAttribute('aria-current');
    }
  });
})();
