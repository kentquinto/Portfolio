import { PALETTE_ORDER, type PaletteColor } from '@/data/palette';

export interface ProcessStep {
  label: string;
  color: PaletteColor;
}

const STEP_LABELS: readonly string[] = [
  'Discover',
  'Research',
  'Sketch',
  'Design',
  'Prototype',
  'Build',
  'Launch',
];

export const PROCESS_STEPS: readonly ProcessStep[] = STEP_LABELS.map((label, index) => ({
  label,
  color: PALETTE_ORDER[index % PALETTE_ORDER.length]!,
}));
