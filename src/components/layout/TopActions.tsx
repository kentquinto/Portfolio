import { SITE_EMAIL, SITE_RESUME_HREF } from '@/data/site';
import styles from './TopActions.module.css';

export function TopActions() {
  return (
    <div className={styles.actions}>
      <a href={`mailto:${SITE_EMAIL}`} className={styles.email}>
        EMAIL
      </a>
      <a href={SITE_RESUME_HREF} target="_blank" rel="noopener" className={styles.resume}>
        RESUME
      </a>
    </div>
  );
}
