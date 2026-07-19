import { useMotionValueEvent, type MotionValue } from 'framer-motion';
import { useState } from 'react';

/**
 * Derives the rounded, discrete "active section" index from the continuous
 * scroll-progress motion value, only re-rendering when that integer changes.
 */
export function useNavActiveIndex(scrollProgress: MotionValue<number>): number {
  const [activeIndex, setActiveIndex] = useState(() => Math.round(scrollProgress.get()));

  useMotionValueEvent(scrollProgress, 'change', (latest) => {
    const rounded = Math.round(latest);
    setActiveIndex((current) => (current === rounded ? current : rounded));
  });

  return activeIndex;
}
