import { motion, useTransform } from 'framer-motion';
import { useScrollContext } from '@/hooks/useScrollContext';
import { SECTIONS } from '@/data/sections';
import styles from './ProgressBar.module.css';

const LAST_SECTION_INDEX = SECTIONS.length - 1;

export function ProgressBar() {
  const { scrollProgress } = useScrollContext();
  const width = useTransform(scrollProgress, (value) => `${(value / LAST_SECTION_INDEX) * 100}%`);

  return (
    <div className={styles.track}>
      <motion.div className={styles.fill} style={{ width }} />
    </div>
  );
}
