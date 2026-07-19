import { useState } from 'react';
import { SkillBubble } from './SkillBubble';
import { SKILLS } from '@/data/skills';
import { SECTIONS } from '@/data/sections';
import styles from './Skills.module.css';

const SKILLS_SECTION_INDEX = SECTIONS.findIndex((section) => section.id === 'skills');

export function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={styles.root}>
      <div className={styles.eyebrow}>03 — SKILLS</div>
      <h2 className={styles.heading}>Tools I reach for.</h2>
      <div className={styles.subhead}>Hover a bubble for detail</div>
      <div className={styles.canvas}>
        {SKILLS.map((skill, index) => (
          <SkillBubble
            key={skill.name}
            skill={skill}
            sectionIndex={SKILLS_SECTION_INDEX}
            itemIndex={index}
            isActive={hoveredIndex === index}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </div>
  );
}
