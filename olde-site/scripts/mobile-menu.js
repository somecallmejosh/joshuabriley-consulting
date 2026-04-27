(function () {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  const focusableSelector =
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function isOpen() {
    return document.body.classList.contains('nav-open');
  }

  function open() {
    document.body.classList.add('nav-open');
    toggle.setAttribute('aria-expanded', 'true');
    const first = menu.querySelector(focusableSelector);
    if (first) first.focus();
  }

  function close({ restoreFocus } = { restoreFocus: true }) {
    document.body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    if (restoreFocus) toggle.focus();
  }

  toggle.addEventListener('click', () => {
    if (isOpen()) close();
    else open();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) {
      e.preventDefault();
      close();
    }
  });

  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) close({ restoreFocus: false });
  });

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 768px)').matches && isOpen()) {
      close({ restoreFocus: false });
    }
  });
})();
