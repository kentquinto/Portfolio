import { useMotionValue } from 'framer-motion';
import type { PointerEvent } from 'react';
import { PhysicsToy } from './PhysicsToy';
import { MOUSE_PHYSICS_TOYS } from '@/data/mousePhysicsToys';
import styles from './MousePhysicsPanel.module.css';

/** Far enough off-screen that every toy's repel falloff resolves to zero once the cursor leaves. */
const FAR_AWAY_PX = -10_000;

export function MousePhysicsPanel() {
  const pointerX = useMotionValue(FAR_AWAY_PX);
  const pointerY = useMotionValue(FAR_AWAY_PX);

  // Pointer Events (not Mouse Events) so a touch drag repels the shapes too —
  // a touch drag never fires 'mousemove', only a single synthetic
  // compatibility mousemove/mousedown on tap, so the shapes stayed still.
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    pointerX.set(event.clientX);
    pointerY.set(event.clientY);
  };

  const handlePointerLeave = () => {
    pointerX.set(FAR_AWAY_PX);
    pointerY.set(FAR_AWAY_PX);
  };

  return (
    <div
      className={styles.panel}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className={styles.title}>Mouse physics</div>
      {MOUSE_PHYSICS_TOYS.map((toy) => (
        <PhysicsToy key={toy.id} toy={toy} pointerX={pointerX} pointerY={pointerY} />
      ))}
    </div>
  );
}
