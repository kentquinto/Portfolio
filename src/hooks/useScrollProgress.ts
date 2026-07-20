import { useMotionValue, type MotionValue } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';
import { SECTIONS } from '@/data/sections';

const LAST_SECTION_INDEX = SECTIONS.length - 1;

interface UseScrollProgressResult {
  scrollerRef: React.RefObject<HTMLDivElement | null>;
  scrollProgress: MotionValue<number>;
  scrollToSection: (index: number) => void;
}

/**
 * Owns the scroll container ref and derives a continuous 0..N-1
 * `scrollProgress` motion value from it, so downstream reveal/parallax
 * animations can subscribe without triggering React re-renders per frame.
 * On desktop, vertical wheel input is remapped to horizontal scroll.
 */
export function useScrollProgress(isMobile: boolean): UseScrollProgressResult {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useMotionValue(0);
  const pendingFrame = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    if (pendingFrame.current !== null) return;

    pendingFrame.current = requestAnimationFrame(() => {
      pendingFrame.current = null;
      const scroller = scrollerRef.current;
      if (!scroller) return;

      // clientHeight is the scroller's actual rendered height — unlike
      // window.innerHeight, it can't drift out of sync with where sections
      // really sit as mobile browser chrome (address bar) shows/hides.
      const raw = isMobile
        ? scroller.scrollTop / scroller.clientHeight
        : scroller.scrollLeft / window.innerWidth;
      scrollProgress.set(Math.max(0, Math.min(LAST_SECTION_INDEX, raw)));
    });
  }, [isMobile, scrollProgress]);

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      if (isMobile) return;
      const scroller = scrollerRef.current;
      if (!scroller) return;
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

      event.preventDefault();
      scroller.scrollLeft += event.deltaY;
    },
    [isMobile],
  );

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.addEventListener('scroll', handleScroll, { passive: true });
    scroller.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      scroller.removeEventListener('scroll', handleScroll);
      scroller.removeEventListener('wheel', handleWheel);
      if (pendingFrame.current !== null) cancelAnimationFrame(pendingFrame.current);
    };
  }, [handleScroll, handleWheel]);

  const scrollToSection = useCallback(
    (index: number) => {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const clampedIndex = Math.max(0, Math.min(LAST_SECTION_INDEX, index));
      if (isMobile) {
        scroller.scrollTo({ top: clampedIndex * scroller.clientHeight, behavior: 'smooth' });
      } else {
        scroller.scrollTo({ left: clampedIndex * window.innerWidth, behavior: 'smooth' });
      }
    },
    [isMobile],
  );

  return { scrollerRef, scrollProgress, scrollToSection };
}
