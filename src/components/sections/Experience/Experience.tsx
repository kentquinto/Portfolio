import { ExperienceMarker } from './ExperienceMarker';
import { EXPERIENCE_TIMELINE } from '@/data/experience';
import { SECTIONS } from '@/data/sections';
import styles from './Experience.module.css';

const EXPERIENCE_SECTION_INDEX = SECTIONS.findIndex((section) => section.id === 'experience');

export function Experience() {
  return (
    <div className={styles.root}>
      <div className={styles.eyebrow}>06 — EXPERIENCE</div>
      <h2 className={styles.heading}>Where I've worked.</h2>
      <div className={styles.timeline}>
        <div className={styles.line} />
        <div className={styles.markers}>
          {EXPERIENCE_TIMELINE.map((entry, index) => (
            <ExperienceMarker
              key={entry.role}
              entry={entry}
              isAbove={index % 2 === 0}
              sectionIndex={EXPERIENCE_SECTION_INDEX}
              itemIndex={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
