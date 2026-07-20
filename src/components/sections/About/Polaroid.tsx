import type { CSSProperties } from 'react';
import type { AboutPolaroid } from '@/data/about';
import styles from './Polaroid.module.css';

export function Polaroid({ polaroid }: { polaroid: AboutPolaroid }) {
  return (
    <div
      className={styles.card}
      style={
        {
          ...polaroid.position,
          width: polaroid.widthPx,
          zIndex: polaroid.zIndex,
          // Rotation is piped through a custom property (rather than a literal
          // transform here) so the stylesheet's :hover rule can add a scale
          // on top of it — an inline `transform` would otherwise always win
          // over any transform declared in CSS, hover included.
          '--rotation': `${polaroid.rotationDeg}deg`,
        } as CSSProperties
      }
    >
      <div className={styles.image} style={{ height: polaroid.imageHeightPx }}>
        {polaroid.imageSrc && (
          <img src={polaroid.imageSrc} alt={polaroid.caption} className={styles.photo} />
        )}
      </div>
      <div className={styles.caption}>{polaroid.caption}</div>
    </div>
  );
}
