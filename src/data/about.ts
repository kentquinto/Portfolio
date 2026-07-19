export const ABOUT_BIO_PARAGRAPHS: readonly string[] = [
  "Hey there! 👋 I'm Kent! A full-stack developer who spent years in hospitality before switching to code. I build with PHP, Laravel, React, and MySQL, bringing the same customer-focused, detail-obsessed mindset from hotels and restaurants to software.",
  'Currently sharpening my craft at IT Academy Barcelona while shipping full projects end to end — from REST APIs to production deploys.',
];

export const ABOUT_TAGS: readonly string[] = [
  'Based in Barcelona, Spain',
  'Open to opportunities',
  'Career switcher',
];

interface CollagePosition {
  top: string;
  left?: string;
  right?: string;
}

export interface AboutPolaroid {
  caption: string;
  rotationDeg: number;
  position: CollagePosition;
  widthPx: number;
  imageHeightPx: number;
  zIndex?: number;
}

export const ABOUT_POLAROIDS: readonly AboutPolaroid[] = [
  {
    caption: 'photo — studio',
    rotationDeg: -7,
    position: { left: '8%', top: '6%' },
    widthPx: 180,
    imageHeightPx: 180,
  },
  {
    caption: 'photo — desk setup',
    rotationDeg: 5,
    position: { left: '30%', top: '32%' },
    widthPx: 170,
    imageHeightPx: 170,
    zIndex: 2,
  },
  {
    caption: 'photo — sketchbook',
    rotationDeg: -3,
    position: { left: '2%', top: '56%' },
    widthPx: 150,
    imageHeightPx: 140,
  },
];

export type StickyNoteColor = 'amber' | 'green';

export interface AboutStickyNote {
  text: string;
  rotationDeg: number;
  position: CollagePosition;
  color: StickyNoteColor;
}

export const ABOUT_STICKY_NOTES: readonly AboutStickyNote[] = [
  { text: 'Coffee-powered.', rotationDeg: 6, position: { right: '6%', top: '2%' }, color: 'amber' },
  {
    text: 'Always shipping.',
    rotationDeg: -5,
    position: { right: '2%', top: '48%' },
    color: 'green',
  },
];
