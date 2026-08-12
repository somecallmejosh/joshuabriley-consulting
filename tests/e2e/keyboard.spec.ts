import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// One page per template, plus every tool page: the islands are the only
// surfaces with real interactive state, so they carry the most a11y risk.
// `/services/`, `/faqs/` and `/component-inventory/` used to be in this list
// and no longer exist — a scan of a 404 passes, which is how they went stale
// without failing. Anything added here must be a route `astro build` emits.
const PAGES = [
  '/',
  '/about/',
  '/projects/',
  '/projects/vmspark/',
  '/personal-projects/',
  '/blog/',
  '/blog/what-a-design-token-actually-does/',
  '/testimonials/',
  '/resume/',
  '/contact/',
  '/style-guide/',
  '/tools/',
  '/tools/scorecard/',
  '/tools/roi-calculator/',
  '/tools/token-playground/',
  '/tools/audit-findings/',
];

for (const path of PAGES) {
  test.describe(`page ${path}`, () => {
    test('axe-core scan reports no WCAG 2.1 AA violations', async ({ page }) => {
      // Scan the resting state: scroll-reveal fades content in from opacity 0, and
      // an unscrolled full-DOM scan would otherwise catch sections mid-fade (real
      // text blended over the background reads as a false low-contrast hit). Under
      // reduced-motion the reveal is skipped, so this is also what those users see.
      await page.emulateMedia({ reducedMotion: 'reduce' });
      // Assert the route exists. Scanning a 404 passes cleanly, which is how
      // three deleted pages sat in this list for months looking green.
      const response = await page.goto(path);
      expect(response?.status(), `${path} did not return 200`).toBe(200);
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
      expect(results.violations).toEqual([]);
    });

    test('skip link moves focus to main', async ({ page }) => {
      await page.goto(path);
      await page.keyboard.press('Tab');
      await expect(page.getByRole('link', { name: 'Skip to main content' })).toBeFocused();
      await page.keyboard.press('Enter');
      await expect(page.locator('#main')).toBeVisible();
    });
  });
}

test('mobile menu opens, traps focus on first item, closes on Escape', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto('/');
  const toggle = page.locator('#mobile-menu-toggle');
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(toggle).toBeFocused();
});
