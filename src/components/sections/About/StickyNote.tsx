import type { AboutStickyNote } from '@/data/about';
import { useMobileValue } from '@/hooks/useMobileValue';
import styles from './StickyNote.module.css';

const COLOR_CLASS: Record<AboutStickyNote['color'], string> = {
  amber: styles.amber,
  green: styles.green,
};

export function StickyNote({ note }: { note: AboutStickyNote }) {
  const position = useMobileValue(note.position, note.mobilePosition);

  return (
    <div
      className={`${styles.note} ${COLOR_CLASS[note.color]}`}
      style={{ ...position, transform: `rotate(${note.rotationDeg}deg)` }}
    >
      {note.text}
    </div>
  );
}
