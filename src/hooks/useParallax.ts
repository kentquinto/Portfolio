import { useTransform, type MotionValue } from 'framer-motion';
import { usePointerPosition } from '@/hooks/usePointerPosition';

interface ParallaxOffset {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

/** Translates an element opposite the cursor's offset from viewport center, scaled by `depth`. */
export function useParallax(depth: number): ParallaxOffset {
  const { x: pointerX, y: pointerY } = usePointerPosition();

  const x = useTransform(
    pointerX,
    (clientX) => ((clientX - window.innerWidth / 2) / (window.innerWidth / 2)) * depth,
  );
  const y = useTransform(
    pointerY,
    (clientY) => ((clientY - window.innerHeight / 2) / (window.innerHeight / 2)) * depth,
  );

  return { x, y };
}
