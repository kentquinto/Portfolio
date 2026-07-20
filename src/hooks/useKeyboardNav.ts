import { useEffect } from 'react';

/** ArrowRight/Down go to the next section, ArrowLeft/Up to the previous. Ignored while drawing. */
export function useKeyboardNav(
  activeIndex: number,
  sectionCount: number,
  scrollToSection: (index: number) => void,
): void {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.tagName === 'CANVAS') return;

      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        scrollToSection(Math.min(sectionCount - 1, activeIndex + 1));
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        scrollToSection(Math.max(0, activeIndex - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, sectionCount, scrollToSection]);
}
