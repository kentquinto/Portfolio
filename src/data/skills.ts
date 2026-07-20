import type { PaletteColor } from '@/data/palette';

export interface Skill {
  name: string;
  note: string;
  sizePx: number;
  x: string;
  y: string;
  color: PaletteColor;
  floatDurationS: number;
  /**
   * Desktop's scattered positions assume a much wider, shorter canvas —
   * packed into the narrow, taller mobile one, they overlap heavily and
   * a couple push past the right edge entirely. These lay all 9 out as a
   * spacious two-column stack instead (see Skills.module.css's taller
   * mobile canvas height).
   */
  mobileX?: string;
  mobileY?: string;
}

export const SKILLS: readonly Skill[] = [
  {
    name: 'PHP',
    note: 'Server-side scripting',
    sizePx: 106,
    x: '6%',
    y: '14%',
    mobileX: '4%',
    mobileY: '0%',
    color: 'violet',
    floatDurationS: 7,
  },
  {
    name: 'Laravel',
    note: 'APIs & MVC architecture',
    sizePx: 128,
    x: '28%',
    y: '4%',
    mobileX: '50%',
    mobileY: '0%',
    color: 'green',
    floatDurationS: 6.4,
  },
  {
    name: 'React.js',
    note: 'Component-driven UIs',
    sizePx: 96,
    x: '52%',
    y: '16%',
    mobileX: '4%',
    mobileY: '21%',
    color: 'amber',
    floatDurationS: 7.6,
  },
  {
    name: 'MySQL',
    note: 'Relational data design',
    sizePx: 132,
    x: '14%',
    y: '48%',
    mobileX: '4%',
    mobileY: '38%',
    color: 'coral',
    floatDurationS: 6.8,
  },
  {
    name: 'Docker',
    note: 'Containerized deployments',
    sizePx: 108,
    x: '44%',
    y: '54%',
    mobileX: '4%',
    mobileY: '60%',
    color: 'violet',
    floatDurationS: 7.2,
  },
  {
    name: 'JavaScript',
    note: 'Interactive front-ends',
    sizePx: 92,
    x: '68%',
    y: '10%',
    mobileX: '50%',
    mobileY: '21%',
    color: 'green',
    floatDurationS: 6.6,
  },
  {
    name: 'REST APIs',
    note: 'Auth & integrations',
    sizePx: 118,
    x: '74%',
    y: '44%',
    mobileX: '52%',
    mobileY: '38%',
    color: 'coral',
    floatDurationS: 7.4,
  },
  {
    name: 'Tailwind CSS',
    note: 'Rapid, responsive styling',
    sizePx: 100,
    x: '60%',
    y: '68%',
    mobileX: '50%',
    mobileY: '60%',
    color: 'amber',
    floatDurationS: 6.2,
  },
  {
    name: 'Claude Code',
    note: 'AI pair programming',
    sizePx: 112,
    x: '84%',
    y: '22%',
    mobileX: '34%',
    mobileY: '79%',
    color: 'coral',
    floatDurationS: 6.9,
  },
];
