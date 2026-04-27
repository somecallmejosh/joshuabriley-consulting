import { describe, expect, it } from 'vitest';
import { cx } from '~/lib/cx';

describe('cx', () => {
  it('joins truthy class strings with spaces', () => {
    expect(cx('a', 'b', 'c')).toBe('a b c');
  });

  it('drops falsy values', () => {
    expect(cx('a', false, undefined, null, '', 'b')).toBe('a b');
  });

  it('preserves order', () => {
    expect(cx('z', 'a', 'm')).toBe('z a m');
  });
});
