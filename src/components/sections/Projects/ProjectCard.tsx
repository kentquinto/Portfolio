import { motion } from 'framer-motion';
import { useCardTilt } from '@/hooks/useCardTilt';
import { useReveal } from '@/hooks/useReveal';
import type { Project } from '@/data/projects';
import styles from './ProjectCard.module.css';

const ITEM_STAGGER_SPREAD = 0.1;

interface ProjectCardProps {
  project: Project;
  sectionIndex: number;
  itemIndex: number;
  overlapPx: number;
  zIndex: number;
}

export function ProjectCard({
  project,
  sectionIndex,
  itemIndex,
  overlapPx,
  zIndex,
}: ProjectCardProps) {
  const { opacity, y } = useReveal(sectionIndex, itemIndex, ITEM_STAGGER_SPREAD);
  const { transform, onMouseMove, onMouseLeave } = useCardTilt();

  return (
    <motion.div className={styles.wrapper} style={{ marginLeft: overlapPx, zIndex, opacity, y }}>
      <motion.div
        className={`${styles.card} ${styles[project.color]}`}
        style={{ transform }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className={styles.image}>project image</div>
        <div className={styles.metaRow}>
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <div className={styles.title}>{project.title}</div>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tags}>
          <span className={styles.tag}>{project.tag1}</span>
          <span className={styles.tag}>{project.tag2}</span>
        </div>
        <a href={project.url} target="_blank" rel="noopener" className={styles.link}>
          View project →
        </a>
      </motion.div>
    </motion.div>
  );
}
