import { useRef, type RefObject } from 'react';
import { useTransform, type MotionValue } from 'framer-motion';
import { usePointerPosition } from '@/hooks/usePointerPosition';

const MAGNETIC_RADIUS_PX = 140;
const MAGNETIC_PULL = 0.28;

interface UseMagneticResult<T extends HTMLElement> {
  nodeRef: RefObject<T | null>;
  x: MotionValue<number>;
  y: MotionValue<number>;
}

/** Pulls the referenced element toward the cursor when it's within `radiusPx`, capped by `pull`. */
export function useMagnetic<T extends HTMLElement = HTMLElement>(
  radiusPx = MAGNETIC_RADIUS_PX,
  pull = MAGNETIC_PULL,
): UseMagneticResult<T> {
  const ref = useRef<T>(null);
  const { x: pointerX, y: pointerY } = usePointerPosition();

  const offset = useTransform([pointerX, pointerY], (latest: number[]) => {
    const [clientX, clientY] = latest as [number, number];
    const element = ref.current;
    if (!element) return { x: 0, y: 0 };

    const rect = element.getBoundingClientRect();
    const dx = clientX - (rect.left + rect.width / 2);
    const dy = clientY - (rect.top + rect.height / 2);
    const distance = Math.hypot(dx, dy);

    return distance < radiusPx ? { x: dx * pull, y: dy * pull } : { x: 0, y: 0 };
  });

  const x = useTransform(offset, (value) => value.x);
  const y = useTransform(offset, (value) => value.y);

  return { nodeRef: ref, x, y };
}
