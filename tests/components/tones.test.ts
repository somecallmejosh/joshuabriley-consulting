import { describe, expect, it } from 'vitest';
import { TONES, toneStyles } from '~/lib/tones';

describe('tones', () => {
  it('every tone in TONES has a complete style mapping', () => {
    for (const tone of TONES) {
      const styles = toneStyles[tone];
      expect(styles).toBeDefined();
      expect(styles.surface).toMatch(/^bg-/);
      expect(styles.text).toMatch(/^text-/);
      expect(styles.border).toMatch(/^border-/);
      expect(styles.ring).toMatch(/^focus-visible:outline-/);
    }
  });
});
