import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';
import type { ExperienceEntry } from '@/data/experience';
import styles from './ExperienceMarker.module.css';

const ITEM_STAGGER_SPREAD = 0.13;

function RoleCompany({ entry, className }: { entry: ExperienceEntry; className: string }) {
  return (
    <div className={className}>
      <div className={styles.role}>{entry.role}</div>
      <div className={styles.company}>{entry.company}</div>
    </div>
  );
}

function FutureLabel({ entry, className }: { entry: ExperienceEntry; className: string }) {
  return (
    <div className={className}>
      <div className={styles.futureRole}>{entry.role}</div>
      {/* Mirrors RoleCompany's two-line structure so this marker's dot lands
          at the same vertical center as the real, two-line entries. */}
      <div className={styles.futureSubtitle}>{entry.company}</div>
    </div>
  );
}

interface ExperienceMarkerProps {
  entry: ExperienceEntry;
  isAbove: boolean;
  sectionIndex: number;
  itemIndex: number;
}

export function ExperienceMarker({
  entry,
  isAbove,
  sectionIndex,
  itemIndex,
}: ExperienceMarkerProps) {
  const { opacity, y } = useReveal(sectionIndex, itemIndex, ITEM_STAGGER_SPREAD);
  const labelClassName = isAbove ? styles.labelAbove : styles.labelBelow;
  const label = entry.isFuture ? (
    <FutureLabel entry={entry} className={labelClassName} />
  ) : (
    <RoleCompany entry={entry} className={labelClassName} />
  );

  return (
    <motion.div className={styles.marker} style={{ opacity, y }}>
      {isAbove && label}
      <div className={entry.isFuture ? `${styles.dot} ${styles.dotFuture}` : styles.dot} />
      {!isAbove && label}
      <div className={styles.years}>{entry.years}</div>
    </motion.div>
  );
}
