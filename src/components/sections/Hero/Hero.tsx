import { motion } from 'framer-motion';
import { useMagnetic } from '@/hooks/useMagnetic';
import { useScrollContext } from '@/hooks/useScrollContext';
import { SECTIONS } from '@/data/sections';
import { SITE_EMAIL, SITE_GITHUB_URL, SITE_LINKEDIN_URL } from '@/data/site';
import styles from './Hero.module.css';

const PROJECTS_SECTION_INDEX = SECTIONS.findIndex((section) => section.id === 'work');

export function Hero() {
  const { scrollToSection } = useScrollContext();
  const { nodeRef: ctaRef, x: ctaX, y: ctaY } = useMagnetic<HTMLButtonElement>();

  return (
    <div className={styles.root}>
      <div className={styles.name}>KENT&nbsp;QUINTO</div>

      <div className={styles.headlineBlock}>
        <div className={styles.eyebrow}>FULL-STACK WEB DEVELOPER</div>
        <h1 className={styles.headline}>
          <span className={styles.line}>Building</span>
          <span className={styles.line}>
            <em className={styles.accentWord}>software</em> people
          </span>
          <span className={styles.line}>rely on.</span>
        </h1>
      </div>

      <div className={styles.footerRow}>
        <motion.button
          ref={ctaRef}
          type="button"
          className={styles.cta}
          style={{ x: ctaX, y: ctaY }}
          onClick={() => scrollToSection(PROJECTS_SECTION_INDEX)}
        >
          Explore the work&nbsp; →
        </motion.button>

        <div className={styles.linksColumn}>
          <div className={styles.socialRow}>
            <a href={`mailto:${SITE_EMAIL}`}>EMAIL</a>
            <a href={SITE_LINKEDIN_URL} target="_blank" rel="noopener">
              LINKEDIN
            </a>
            <a href={SITE_GITHUB_URL} target="_blank" rel="noopener">
              GITHUB
            </a>
          </div>
          <div className={styles.scrollHint}>SCROLL →</div>
        </div>
      </div>
    </div>
  );
}
