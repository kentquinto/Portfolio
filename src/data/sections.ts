export interface SectionMeta {
  id: string;
  navLabel: string;
}

/**
 * One entry per horizontal-scroll section, in display order. `navLabel` is
 * the short word shown in the nav rail; individual sections may use a fuller
 * heading of their own.
 */
export const SECTIONS: readonly SectionMeta[] = [
  { id: 'hero', navLabel: 'Hero' },
  { id: 'about', navLabel: 'About' },
  { id: 'skills', navLabel: 'Skills' },
  { id: 'work', navLabel: 'Work' },
  { id: 'process', navLabel: 'Process' },
  { id: 'experience', navLabel: 'Experience' },
  { id: 'languages', navLabel: 'Languages' },
  { id: 'playground', navLabel: 'Playground' },
  { id: 'contact', navLabel: 'Contact' },
];

/** Index of the last section — the upper bound for clamping/disabling section navigation. */
export const LAST_SECTION_INDEX = SECTIONS.length - 1;
