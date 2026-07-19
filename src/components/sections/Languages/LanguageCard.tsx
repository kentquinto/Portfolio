import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';
import type { Language } from '@/data/languages';
import styles from './LanguageCard.module.css';

const ITEM_STAGGER_SPREAD = 0.15;

interface LanguageCardProps {
  language: Language;
  sectionIndex: number;
  itemIndex: number;
}

export function LanguageCard({ language, sectionIndex, itemIndex }: LanguageCardProps) {
  const { opacity, y } = useReveal(sectionIndex, itemIndex, ITEM_STAGGER_SPREAD);

  return (
    <motion.div
      className={`${styles.card} ${styles[language.color]}`}
      style={{ opacity, y, rotate: language.rotationDeg }}
    >
      <div className={styles.badge}>{language.code}</div>
      <div className={styles.name}>{language.name}</div>
      <div className={styles.level}>{language.level}</div>
    </motion.div>
  );
}
