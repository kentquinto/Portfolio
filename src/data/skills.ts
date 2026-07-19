import type { PaletteColor } from '@/data/palette';

export interface Skill {
  name: string;
  note: string;
  sizePx: number;
  x: string;
  y: string;
  color: PaletteColor;
  floatDurationS: number;
}

export const SKILLS: readonly Skill[] = [
  {
    name: 'PHP',
    note: 'Server-side scripting',
    sizePx: 106,
    x: '6%',
    y: '14%',
    color: 'violet',
    floatDurationS: 7,
  },
  {
    name: 'Laravel',
    note: 'APIs & MVC architecture',
    sizePx: 128,
    x: '28%',
    y: '4%',
    color: 'green',
    floatDurationS: 6.4,
  },
  {
    name: 'React.js',
    note: 'Component-driven UIs',
    sizePx: 96,
    x: '52%',
    y: '16%',
    color: 'amber',
    floatDurationS: 7.6,
  },
  {
    name: 'MySQL',
    note: 'Relational data design',
    sizePx: 132,
    x: '14%',
    y: '48%',
    color: 'coral',
    floatDurationS: 6.8,
  },
  {
    name: 'Docker',
    note: 'Containerized deployments',
    sizePx: 108,
    x: '44%',
    y: '54%',
    color: 'violet',
    floatDurationS: 7.2,
  },
  {
    name: 'JavaScript',
    note: 'Interactive front-ends',
    sizePx: 92,
    x: '68%',
    y: '10%',
    color: 'green',
    floatDurationS: 6.6,
  },
  {
    name: 'REST APIs',
    note: 'Auth & integrations',
    sizePx: 118,
    x: '74%',
    y: '44%',
    color: 'coral',
    floatDurationS: 7.4,
  },
  {
    name: 'Tailwind CSS',
    note: 'Rapid, responsive styling',
    sizePx: 100,
    x: '60%',
    y: '68%',
    color: 'amber',
    floatDurationS: 6.2,
  },
];
