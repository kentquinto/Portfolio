const REVEAL_GAIN = 1.6;

/**
 * How visible a section (or a staggered item within it) should be, given how
 * close the current scroll position is to that section's index.
 */
export function revealOpacity(
  scrollProgress: number,
  sectionIndex: number,
  itemIndex = 0,
  spread = 0.14,
): number {
  const proximity = 1 - Math.min(1, Math.abs(scrollProgress - sectionIndex));
  return clamp01(proximity * REVEAL_GAIN - itemIndex * spread);
}

/** Vertical offset (px) that pairs with an opacity value: hidden content sits lower. */
export function revealTranslateY(opacity: number, maxOffsetPx = 26): number {
  return Math.round((1 - opacity) * maxOffsetPx);
}

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}
