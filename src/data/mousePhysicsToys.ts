import type { PaletteColor } from '@/data/palette';

export type ToyShape = 'circle' | 'square' | 'ring';

export interface PhysicsToy {
  id: string;
  shape: ToyShape;
  color: PaletteColor | 'ink';
  opacity?: number;
  sizePx: number;
  x: string;
  y: string;
}

export const MOUSE_PHYSICS_TOYS: readonly PhysicsToy[] = [
  { id: 'toy-1', shape: 'circle', color: 'violet', opacity: 0.85, sizePx: 60, x: '20%', y: '30%' },
  { id: 'toy-2', shape: 'square', color: 'amber', sizePx: 44, x: '55%', y: '20%' },
  { id: 'toy-3', shape: 'circle', color: 'green', opacity: 0.8, sizePx: 70, x: '70%', y: '55%' },
  { id: 'toy-4', shape: 'square', color: 'coral', sizePx: 36, x: '35%', y: '60%' },
  { id: 'toy-5', shape: 'ring', color: 'ink', sizePx: 50, x: '15%', y: '70%' },
];
