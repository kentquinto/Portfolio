import { createContext } from 'react';
import type { MotionValue } from 'framer-motion';

export interface PointerContextValue {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export const PointerContext = createContext<PointerContextValue | null>(null);
