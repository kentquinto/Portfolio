import { ProjectCard } from './ProjectCard';
import { PROJECTS } from '@/data/projects';
import { SECTIONS } from '@/data/sections';
import styles from './Projects.module.css';

const PROJECTS_SECTION_INDEX = SECTIONS.findIndex((section) => section.id === 'work');
const CARD_OVERLAP_PX = -40;

export function Projects() {
  return (
    <div className={styles.root}>
      <div className={styles.eyebrow}>04 — SELECTED WORK</div>
      <h2 className={styles.heading}>A few favorites.</h2>
      <div className={styles.row}>
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            sectionIndex={PROJECTS_SECTION_INDEX}
            itemIndex={index}
            overlapPx={index === 0 ? 0 : CARD_OVERLAP_PX}
            zIndex={PROJECTS.length - index}
          />
        ))}
      </div>
    </div>
  );
}
