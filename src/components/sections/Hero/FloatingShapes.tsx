import { motion } from 'framer-motion';
import { useParallax } from '@/hooks/useParallax';
import styles from './FloatingShapes.module.css';

/** The 3 decorative shapes drifting behind the Hero headline, parallaxed against the cursor. */
export function FloatingShapes() {
  const circle = useParallax(34);
  const square = useParallax(20);
  const ring = useParallax(14);

  return (
    <div className={styles.layer} aria-hidden="true">
      <motion.div className={styles.circleWrapper} style={{ x: circle.x, y: circle.y }}>
        <div className={styles.circle} />
      </motion.div>
      <motion.div className={styles.squareWrapper} style={{ x: square.x, y: square.y }}>
        <div className={styles.square} />
      </motion.div>
      <motion.div className={styles.ringWrapper} style={{ x: ring.x, y: ring.y }}>
        <div className={styles.ring} />
      </motion.div>
    </div>
  );
}
