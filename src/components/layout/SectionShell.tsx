import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';
import styles from './SectionShell.module.css';

interface SectionShellProps {
  index: number;
  label: string;
  /** Rendered as a sibling of the reveal-animated content, e.g. Hero's parallax shapes. */
  decoration?: ReactNode;
  children: ReactNode;
}

/**
 * Common per-section frame: full-viewport sizing, alternating paper
 * background, and the scroll-tied reveal animation. Individual sections own
 * their own internal layout inside `children`.
 */
export function SectionShell({ index, label, decoration, children }: SectionShellProps) {
  const { opacity, y } = useReveal(index);
  const isAltBackground = index % 2 === 1;

  return (
    <section
      data-screen-label={label}
      className={isAltBackground ? `${styles.section} ${styles.alt}` : styles.section}
    >
      {decoration}
      <motion.div className={styles.content} style={{ opacity, y }}>
        {children}
      </motion.div>
    </section>
  );
}
