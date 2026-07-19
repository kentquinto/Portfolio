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

  return (
    <motion.div className={styles.marker} style={{ opacity, y }}>
      {isAbove && <RoleCompany entry={entry} className={styles.labelAbove} />}
      <div className={styles.dot} />
      {!isAbove && <RoleCompany entry={entry} className={styles.labelBelow} />}
      <div className={styles.years}>{entry.years}</div>
    </motion.div>
  );
}
