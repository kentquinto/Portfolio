export interface ExperienceEntry {
  role: string;
  company: string;
  years: string;
  /** A lighthearted "open slot" marker rather than a real entry — styled distinctly. */
  isFuture?: boolean;
}

export const EXPERIENCE_TIMELINE: readonly ExperienceEntry[] = [
  {
    role: 'Bachillerato of Science',
    company: 'ETP Xavier, Barcelona',
    years: 'Sep 2017 — May 2019',
  },
  {
    role: 'Hospitality Professional',
    company: 'Multiple Hotels & Restaurants, Barcelona',
    years: 'Jun 2019 — Nov 2025',
  },
  {
    role: 'Full-Stack Web Development',
    company: 'IT Academy, Barcelona',
    years: 'Feb 2026 — Present',
  },
  {
    role: 'Your company, maybe? →',
    company: "Let's talk.",
    years: 'Open',
    isFuture: true,
  },
];
