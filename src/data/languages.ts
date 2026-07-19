import type { PaletteColor } from '@/data/palette';

export interface Language {
  code: string;
  name: string;
  level: string;
  color: PaletteColor;
  rotationDeg: number;
}

export const LANGUAGES: readonly Language[] = [
  {
    code: 'EN',
    name: 'English',
    level: 'Advanced — Professional',
    color: 'violet',
    rotationDeg: -3,
  },
  { code: 'ES', name: 'Spanish', level: 'Advanced — Professional', color: 'amber', rotationDeg: 2 },
  { code: 'CA', name: 'Catalan', level: 'Advanced — Working', color: 'green', rotationDeg: -1.5 },
  { code: 'TL', name: 'Tagalog', level: 'Native — Professional', color: 'coral', rotationDeg: 1.5 },
];
