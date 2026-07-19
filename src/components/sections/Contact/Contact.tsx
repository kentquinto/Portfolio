import { motion } from 'framer-motion';
import { useMagnetic } from '@/hooks/useMagnetic';
import { SITE_EMAIL, SITE_GITHUB_URL, SITE_LINKEDIN_URL, SITE_RESUME_HREF } from '@/data/site';
import styles from './Contact.module.css';

const CURRENT_YEAR = new Date().getFullYear();

export function Contact() {
  const { nodeRef: emailRef, x: emailX, y: emailY } = useMagnetic<HTMLAnchorElement>();

  return (
    <div className={styles.root}>
      <div className={styles.eyebrow}>09 — CONTACT</div>
      <h2 className={styles.heading}>
        Let's build something <em className={styles.accentWord}>memorable</em>.
      </h2>
      <motion.a
        ref={emailRef}
        href={`mailto:${SITE_EMAIL}`}
        className={styles.emailLink}
        style={{ x: emailX, y: emailY }}
      >
        {SITE_EMAIL}
        <span className={styles.emailGlyph}>→</span>
      </motion.a>
      <div className={styles.linkRow}>
        <a href={SITE_LINKEDIN_URL} target="_blank" rel="noopener">
          LINKEDIN
        </a>
        <a href={SITE_GITHUB_URL} target="_blank" rel="noopener">
          GITHUB
        </a>
        <a href={SITE_RESUME_HREF} target="_blank" rel="noopener" className={styles.resumePill}>
          RESUME
        </a>
      </div>
      <div className={styles.footer}>© {CURRENT_YEAR} Kent Quinto. Built with care.</div>
    </div>
  );
}
