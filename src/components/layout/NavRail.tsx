import { useScrollContext } from '@/hooks/useScrollContext';
import { SECTIONS } from '@/data/sections';
import styles from './NavRail.module.css';

export function NavRail() {
  const { navActiveIndex, scrollToSection } = useScrollContext();

  return (
    <nav aria-label="Section navigation" className={styles.rail}>
      {SECTIONS.map((section, index) => {
        const isActive = index === navActiveIndex;
        return (
          <button
            key={section.id}
            type="button"
            aria-label={section.navLabel}
            aria-current={isActive ? 'true' : undefined}
            className={styles.item}
            onClick={() => scrollToSection(index)}
          >
            <span className={isActive ? `${styles.dot} ${styles.dotActive}` : styles.dot} />
            <span className={isActive ? `${styles.label} ${styles.labelVisible}` : styles.label}>
              {String(index + 1).padStart(2, '0')} {section.navLabel}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
