import { useMotionValue, type MotionValue } from 'framer-motion';
import type { MouseEvent } from 'react';

const TILT_PERSPECTIVE_PX = 900;
const TILT_MAX_DEG = 9;
const TILT_LIFT_PX = -8;
const TILT_SCALE = 1.02;

interface UseCardTiltResult {
  transform: MotionValue<string>;
  onMouseMove: (event: MouseEvent<HTMLElement>) => void;
  onMouseLeave: () => void;
}

/** Tilts an element toward the cursor's position within its own bounds, resetting on mouse leave. */
export function useCardTilt(): UseCardTiltResult {
  const transform = useMotionValue('none');

  const onMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    transform.set(
      `perspective(${TILT_PERSPECTIVE_PX}px) rotateX(${py * -TILT_MAX_DEG}deg) rotateY(${px * TILT_MAX_DEG}deg) translateY(${TILT_LIFT_PX}px) scale(${TILT_SCALE})`,
    );
  };

  const onMouseLeave = () => transform.set('none');

  return { transform, onMouseMove, onMouseLeave };
}
