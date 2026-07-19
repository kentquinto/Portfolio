import {
  ABOUT_BIO_PARAGRAPHS,
  ABOUT_POLAROIDS,
  ABOUT_STICKY_NOTES,
  ABOUT_TAGS,
} from '@/data/about';
import { Polaroid } from './Polaroid';
import { StickyNote } from './StickyNote';
import styles from './About.module.css';

export function About() {
  return (
    <div className={styles.root}>
      <div className={styles.bioColumn}>
        <div className={styles.eyebrow}>02 — ABOUT</div>
        <h2 className={styles.heading}>The person behind the pixels.</h2>
        {ABOUT_BIO_PARAGRAPHS.map((paragraph) => (
          <p key={paragraph} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
        <div className={styles.tags}>
          {ABOUT_TAGS.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.collage}>
        {ABOUT_POLAROIDS.map((polaroid) => (
          <Polaroid key={polaroid.caption} polaroid={polaroid} />
        ))}
        {ABOUT_STICKY_NOTES.map((note) => (
          <StickyNote key={note.text} note={note} />
        ))}
      </div>
    </div>
  );
}
