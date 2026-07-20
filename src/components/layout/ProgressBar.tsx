import { motion, useTransform } from 'framer-motion';
import { useScrollContext } from '@/hooks/useScrollContext';
import { LAST_SECTION_INDEX } from '@/data/sections';
import styles from './ProgressBar.module.css';

export function ProgressBar() {
  const { scrollProgress } = useScrollContext();
  const width = useTransform(scrollProgress, (value) => `${(value / LAST_SECTION_INDEX) * 100}%`);

  return (
    <div className={styles.track}>
      <motion.div className={styles.fill} style={{ width }} />
    </div>
  );
}
