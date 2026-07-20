import { useScrollContext } from '@/hooks/useScrollContext';
import { SECTIONS } from '@/data/sections';
import styles from './MobileScrollNav.module.css';

const LAST_SECTION_INDEX = SECTIONS.length - 1;

/**
 * Mobile-only floating up/down buttons for moving one section at a time.
 * Native touch scroll-chaining (does a swipe scroll this section's own tall
 * content, or advance to the next section?) can't be made fully reliable —
 * two earlier attempts at fixing that with JS confirmed as much. Buttons
 * sidestep the problem entirely: page content always scrolls natively with
 * zero interception, and moving to the next section is an explicit,
 * unambiguous tap instead of a gesture the browser has to guess right.
 * Reuses `scrollToSection`, the same mechanism the nav rail's dots already
 * use, so this needs no new scroll-handling logic of its own.
 */
export function MobileScrollNav() {
  const { navActiveIndex, scrollToSection } = useScrollContext();
  const isFirst = navActiveIndex === 0;
  const isLast = navActiveIndex === LAST_SECTION_INDEX;

  return (
    <div className={styles.nav}>
      <button
        type="button"
        aria-label="Previous section"
        className={styles.button}
        disabled={isFirst}
        onClick={() => scrollToSection(navActiveIndex - 1)}
      >
        ↑
      </button>
      <button
        type="button"
        aria-label="Next section"
        className={styles.button}
        disabled={isLast}
        onClick={() => scrollToSection(navActiveIndex + 1)}
      >
        ↓
      </button>
    </div>
  );
}
