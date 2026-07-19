import { useRef, type RefObject } from 'react';
import { useSpring, useTransform, type MotionValue } from 'framer-motion';

const REPEL_RADIUS_PX = 180;
const REPEL_FORCE_PX = 40;
const SPRING_CONFIG = { stiffness: 300, damping: 20, mass: 0.5 };

interface UseMousePhysicsResult<T extends HTMLElement> {
  ref: RefObject<T | null>;
  x: MotionValue<number>;
  y: MotionValue<number>;
}

/**
 * Pushes the referenced element away from a shared, panel-local pointer
 * position within a falloff radius. Unlike useMagnetic (global cursor,
 * pulls toward), this consumes a pointer position scoped to one container
 * and is pushed far offscreen on mouse-leave so every toy relaxes to rest.
 */
export function useMousePhysics<T extends HTMLElement = HTMLElement>(
  pointerX: MotionValue<number>,
  pointerY: MotionValue<number>,
): UseMousePhysicsResult<T> {
  const ref = useRef<T>(null);

  const offset = useTransform([pointerX, pointerY], (latest: number[]) => {
    const [pointerClientX, pointerClientY] = latest as [number, number];
    const element = ref.current;
    if (!element) return { x: 0, y: 0 };

    const rect = element.getBoundingClientRect();
    const dx = rect.left + rect.width / 2 - pointerClientX;
    const dy = rect.top + rect.height / 2 - pointerClientY;
    const distance = Math.hypot(dx, dy) || 1;
    const force = Math.max(0, 1 - distance / REPEL_RADIUS_PX);

    return {
      x: (dx / distance) * force * REPEL_FORCE_PX,
      y: (dy / distance) * force * REPEL_FORCE_PX,
    };
  });

  const x = useSpring(
    useTransform(offset, (value) => value.x),
    SPRING_CONFIG,
  );
  const y = useSpring(
    useTransform(offset, (value) => value.y),
    SPRING_CONFIG,
  );

  return { ref, x, y };
}
