import { useTransform, type MotionValue } from 'framer-motion';
import { useScrollContext } from '@/hooks/useScrollContext';
import { revealOpacity, revealTranslateY } from '@/utils/reveal';

interface RevealMotionValues {
  opacity: MotionValue<number>;
  y: MotionValue<number>;
}

/** Scroll-tied opacity/translateY for a section (or a staggered item within one). */
export function useReveal(sectionIndex: number, itemIndex = 0, spread = 0.14): RevealMotionValues {
  const { scrollProgress } = useScrollContext();
  const opacity = useTransform(scrollProgress, (value) =>
    revealOpacity(value, sectionIndex, itemIndex, spread),
  );
  const y = useTransform(opacity, (value) => revealTranslateY(value));

  return { opacity, y };
}
