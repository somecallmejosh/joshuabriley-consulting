import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const PAGES = [
  '/',
  '/about/',
  '/services/',
  '/services/starter/',
  '/projects/',
  '/projects/vmspark/',
  '/faqs/',
  '/contact/',
  '/component-inventory/',
  '/tools/',
  '/tools/scorecard/',
  '/tools/roi-calculator/',
];

for (const path of PAGES) {
  test.describe(`page ${path}`, () => {
    test('axe-core scan reports no WCAG 2.1 AA violations', async ({ page }) => {
      // Scan the resting state: scroll-reveal fades content in from opacity 0, and
      // an unscrolled full-DOM scan would otherwise catch sections mid-fade (real
      // text blended over the background reads as a false low-contrast hit). Under
      // reduced-motion the reveal is skipped, so this is also what those users see.
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto(path);
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
