import { describe, expect, it } from 'vitest';
import { revealOpacity, revealTranslateY } from './reveal';

describe('revealOpacity', () => {
  it('is fully opaque when scroll progress matches the section index exactly', () => {
    expect(revealOpacity(3, 3)).toBe(1);
  });

  it('fades as scroll progress moves away from the section index', () => {
    const atCenter = revealOpacity(3, 3);
    const oneSectionAway = revealOpacity(2, 3);
    expect(oneSectionAway).toBeLessThan(atCenter);
  });

  it('never goes below zero for sections far from the current scroll position', () => {
    expect(revealOpacity(0, 8)).toBe(0);
  });

  it('staggers list items further down the list to reveal later', () => {
    // scrollProgress offset from the section index so opacity isn't already
    // saturated at 1, otherwise the stagger has nothing to subtract from.
    const firstItem = revealOpacity(2.5, 3, 0);
    const thirdItem = revealOpacity(2.5, 3, 2);
    expect(thirdItem).toBeLessThan(firstItem);
  });
});

describe('revealTranslateY', () => {
  it('has no offset once fully revealed', () => {
    expect(revealTranslateY(1)).toBe(0);
  });

  it('offsets furthest when fully hidden', () => {
    expect(revealTranslateY(0)).toBe(26);
  });
});
