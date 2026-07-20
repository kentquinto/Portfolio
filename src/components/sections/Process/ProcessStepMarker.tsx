import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';
import type { ProcessStep } from '@/data/process';
import styles from './ProcessStepMarker.module.css';

const ITEM_STAGGER_SPREAD = 0.11;

interface ProcessStepMarkerProps {
  step: ProcessStep;
  stepNumber: number;
  sectionIndex: number;
  itemIndex: number;
}

export function ProcessStepMarker({
  step,
  stepNumber,
  sectionIndex,
  itemIndex,
}: ProcessStepMarkerProps) {
  const { opacity, y } = useReveal(sectionIndex, itemIndex, ITEM_STAGGER_SPREAD);

  return (
    <motion.div className={styles.marker} style={{ opacity, y }}>
      <div className={`${styles.circle} ${styles[step.color]}`}>
        {String(stepNumber).padStart(2, '0')}
      </div>
      <div className={styles.label}>{step.label}</div>
    </motion.div>
  );
}
