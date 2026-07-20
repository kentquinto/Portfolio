import type { AboutStickyNote } from '@/data/about';
import styles from './StickyNote.module.css';

const COLOR_CLASS: Record<AboutStickyNote['color'], string> = {
  amber: styles.amber,
  green: styles.green,
};

export function StickyNote({ note }: { note: AboutStickyNote }) {
  return (
    <div
      className={`${styles.note} ${COLOR_CLASS[note.color]}`}
      style={{ ...note.position, transform: `rotate(${note.rotationDeg}deg)` }}
    >
      {note.text}
    </div>
  );
}
