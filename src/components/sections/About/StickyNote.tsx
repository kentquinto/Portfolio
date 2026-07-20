import type { AboutStickyNote } from '@/data/about';
import { useIsMobile } from '@/hooks/useIsMobile';
import styles from './StickyNote.module.css';

const COLOR_CLASS: Record<AboutStickyNote['color'], string> = {
  amber: styles.amber,
  green: styles.green,
};

export function StickyNote({ note }: { note: AboutStickyNote }) {
  const isMobile = useIsMobile();
  const position = (isMobile && note.mobilePosition) || note.position;

  return (
    <div
      className={`${styles.note} ${COLOR_CLASS[note.color]}`}
      style={{ ...position, transform: `rotate(${note.rotationDeg}deg)` }}
    >
      {note.text}
    </div>
  );
}
