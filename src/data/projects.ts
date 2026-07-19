import type { PaletteColor } from '@/data/palette';

export interface Project {
  title: string;
  category: string;
  year: string;
  description: string;
  tag1: string;
  tag2: string;
  color: PaletteColor;
  url: string;
}

export const PROJECTS: readonly Project[] = [
  {
    title: 'TCG Manager — REST API',
    category: 'Backend / API',
    year: '2026',
    description:
      'Laravel 13 REST API for organizing TCG tournaments across 13 games, with role-based access, Passport auth, and TDD via Pest.',
    tag1: 'Laravel',
    tag2: 'Docker',
    color: 'violet',
    url: 'https://github.com/kentquinto/Sprint5-1',
  },
  {
    title: 'TCG Manager — React Frontend',
    category: 'Frontend',
    year: '2026',
    description:
      'React 19 + Vite SPA consuming the TCG Manager API, with token auth, role-aware routing, and a capacity-aware event dashboard.',
    tag1: 'React',
    tag2: 'Vite',
    color: 'amber',
    url: 'https://github.com/kentquinto/Sprint5-2',
  },
  {
    title: 'TODO App',
    category: 'Full-Stack',
    year: '2026',
    description:
      'Team-built multi-user task manager with dual JSON/MySQL persistence, tagging, filtering, and profile management in raw PHP MVC.',
    tag1: 'PHP',
    tag2: 'MySQL',
    color: 'green',
    url: 'https://github.com/aproposito/03_Sprint_03_task',
  },
  {
    title: 'Kent Quinto — Portfolio',
    category: 'Frontend',
    year: '2026',
    description:
      'This site — a horizontally-scrolling React portfolio built with TypeScript and Framer Motion, AI-paired with Claude Code through a full git-flow branch-per-feature workflow.',
    tag1: 'React',
    tag2: 'TypeScript',
    color: 'coral',
    url: 'https://github.com/kentquinto/Portfolio',
  },
];
