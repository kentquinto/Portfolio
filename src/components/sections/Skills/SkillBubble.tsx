import { motion, useTransform } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';
import { useIsMobile } from '@/hooks/useIsMobile';
import type { Skill } from '@/data/skills';
import styles from './SkillBubble.module.css';

const ITEM_STAGGER_SPREAD = 0.1;

interface SkillBubbleProps {
  skill: Skill;
  sectionIndex: number;
  itemIndex: number;
  isActive: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export function SkillBubble({
  skill,
  sectionIndex,
  itemIndex,
  isActive,
  onHoverStart,
  onHoverEnd,
}: SkillBubbleProps) {
  const { opacity, y } = useReveal(sectionIndex, itemIndex, ITEM_STAGGER_SPREAD);
  const scale = useTransform(opacity, (value) => 0.85 + value * 0.15);
  const isMobile = useIsMobile();
  const left = (isMobile && skill.mobileX) || skill.x;
  const top = (isMobile && skill.mobileY) || skill.y;

  return (
    <motion.div
      className={styles.wrapper}
      style={{
        left,
        top,
        width: skill.sizePx,
        height: skill.sizePx,
        opacity,
        y,
        scale,
      }}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <div
        className={`${styles.bubble} ${styles[skill.color]}`}
        style={{ animationDuration: `${skill.floatDurationS}s` }}
      >
        <span className={styles.label}>{skill.name}</span>
      </div>
      {isActive && <div className={styles.tooltip}>{skill.note}</div>}
    </motion.div>
  );
}
