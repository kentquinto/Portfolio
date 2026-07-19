import type { ReactNode } from 'react';
import { useScrollContext } from '@/hooks/useScrollContext';
import styles from './ScrollContainer.module.css';

/** The single horizontally- (or, on mobile, vertically-) scrolling track holding every section. */
export function ScrollContainer({ children }: { children: ReactNode }) {
  const { scrollerRef } = useScrollContext();

  return (
    <div ref={scrollerRef} className={styles.scroller}>
      {children}
    </div>
  );
}
