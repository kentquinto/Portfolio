import { createContext, type RefObject } from 'react';
import type { MotionValue } from 'framer-motion';

export interface ScrollContextValue {
  scrollProgress: MotionValue<number>;
  navActiveIndex: number;
  isMobile: boolean;
  scrollerRef: RefObject<HTMLDivElement | null>;
  scrollToSection: (index: number) => void;
}

export const ScrollContext = createContext<ScrollContextValue | null>(null);
