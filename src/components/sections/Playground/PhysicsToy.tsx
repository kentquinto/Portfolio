import { motion, type MotionValue } from 'framer-motion';
import { useMousePhysics } from '@/hooks/useMousePhysics';
import type { PhysicsToy as PhysicsToyData } from '@/data/mousePhysicsToys';
import styles from './PhysicsToy.module.css';

interface PhysicsToyProps {
  toy: PhysicsToyData;
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
}

const SHAPE_CLASS: Record<PhysicsToyData['shape'], string> = {
  circle: styles.circle,
  square: styles.square,
  ring: styles.ring,
};

export function PhysicsToy({ toy, pointerX, pointerY }: PhysicsToyProps) {
  const { ref, x, y } = useMousePhysics<HTMLDivElement>(pointerX, pointerY);

  return (
    <motion.div
      ref={ref}
      className={`${styles.toy} ${SHAPE_CLASS[toy.shape]} ${styles[toy.color]}`}
      style={{
        left: toy.x,
        top: toy.y,
        width: toy.sizePx,
        height: toy.sizePx,
        opacity: toy.opacity,
        x,
        y,
      }}
    />
  );
}
