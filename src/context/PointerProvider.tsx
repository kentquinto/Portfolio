import { useEffect, type ReactNode } from 'react';
import { useMotionValue } from 'framer-motion';
import { PointerContext } from '@/context/pointerContext';

/**
 * Tracks raw viewport-relative pointer position as shared motion values, so
 * parallax and magnetic-button effects don't each need their own listener.
 * Stays frozen at the viewport center (i.e. every dependent effect is a
 * no-op) when the user prefers reduced motion.
 */
export function PointerProvider({ children }: { children: ReactNode }) {
  const x = useMotionValue(window.innerWidth / 2);
  const y = useMotionValue(window.innerHeight / 2);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handlePointerMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener('mousemove', handlePointerMove);
    return () => window.removeEventListener('mousemove', handlePointerMove);
  }, [x, y]);

  return <PointerContext.Provider value={{ x, y }}>{children}</PointerContext.Provider>;
}
