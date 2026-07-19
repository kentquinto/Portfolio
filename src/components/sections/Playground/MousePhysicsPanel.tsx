import { useMotionValue } from 'framer-motion';
import type { MouseEvent } from 'react';
import { PhysicsToy } from './PhysicsToy';
import { MOUSE_PHYSICS_TOYS } from '@/data/mousePhysicsToys';
import styles from './MousePhysicsPanel.module.css';

/** Far enough off-screen that every toy's repel falloff resolves to zero once the cursor leaves. */
const FAR_AWAY_PX = -10_000;

export function MousePhysicsPanel() {
  const pointerX = useMotionValue(FAR_AWAY_PX);
  const pointerY = useMotionValue(FAR_AWAY_PX);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    pointerX.set(event.clientX);
    pointerY.set(event.clientY);
  };

  const handleMouseLeave = () => {
    pointerX.set(FAR_AWAY_PX);
    pointerY.set(FAR_AWAY_PX);
  };

  return (
    <div className={styles.panel} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className={styles.title}>Mouse physics</div>
      {MOUSE_PHYSICS_TOYS.map((toy) => (
        <PhysicsToy key={toy.id} toy={toy} pointerX={pointerX} pointerY={pointerY} />
      ))}
    </div>
  );
}
