import { useMemo, type ReactNode } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useNavActiveIndex } from '@/hooks/useNavActiveIndex';
import { useKeyboardNav } from '@/hooks/useKeyboardNav';
import { SECTIONS } from '@/data/sections';
import { ScrollContext } from '@/context/scrollContext';

/** Wires up scroll tracking, keyboard nav, and the mobile breakpoint for every consumer below it. */
export function ScrollProvider({ children }: { children: ReactNode }) {
  const isMobile = useIsMobile();
  const { scrollerRef, scrollProgress, scrollToSection } = useScrollProgress(isMobile);
  const navActiveIndex = useNavActiveIndex(scrollProgress);
  useKeyboardNav(navActiveIndex, SECTIONS.length, scrollToSection);

  const value = useMemo(
    () => ({ scrollProgress, navActiveIndex, isMobile, scrollerRef, scrollToSection }),
    [scrollProgress, navActiveIndex, isMobile, scrollerRef, scrollToSection],
  );

  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>;
}
