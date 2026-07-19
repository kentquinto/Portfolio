import type { AboutPolaroid } from '@/data/about';
import styles from './Polaroid.module.css';

export function Polaroid({ polaroid }: { polaroid: AboutPolaroid }) {
  return (
    <div
      className={styles.card}
      style={{
        ...polaroid.position,
        width: polaroid.widthPx,
        zIndex: polaroid.zIndex,
        transform: `rotate(${polaroid.rotationDeg}deg)`,
      }}
    >
      <div className={styles.image} style={{ height: polaroid.imageHeightPx }} />
      <div className={styles.caption}>{polaroid.caption}</div>
    </div>
  );
}
