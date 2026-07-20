import readingBreakImage from '@/assets/about/reading-break.webp';
import deskSetupImage from '@/assets/about/desk-setup.webp';
import offTheClockImage from '@/assets/about/off-the-clock.webp';

export const ABOUT_BIO_PARAGRAPHS: readonly string[] = [
  "Hey there! 👋 I'm Kent! A full-stack developer who spent years in hospitality before switching to code. I build with PHP, Laravel, React, and MySQL, bringing the same customer-focused, detail-obsessed mindset from hotels and restaurants to software.",
  'Currently sharpening my craft at IT Academy Barcelona while shipping full projects end to end — from REST APIs to production deploys. Alongside my studies, I also build custom websites and portfolio sites for clients.',
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
  /** Falls back to the striped placeholder in Polaroid when omitted. */
  imageSrc?: string;
}

export const ABOUT_POLAROIDS: readonly AboutPolaroid[] = [
  {
    caption: 'a quick reset',
    rotationDeg: -7,
    position: { left: '8%', top: '6%' },
    widthPx: 180,
    imageHeightPx: 180,
    imageSrc: readingBreakImage,
  },
  {
    caption: 'coding session',
    rotationDeg: 5,
    position: { left: '30%', top: '32%' },
    widthPx: 170,
    imageHeightPx: 170,
    zIndex: 2,
    imageSrc: deskSetupImage,
  },
  {
    caption: 'off the clock',
    rotationDeg: -3,
    position: { left: '2%', top: '56%' },
    widthPx: 150,
    imageHeightPx: 140,
    imageSrc: offTheClockImage,
  },
];

export type StickyNoteColor = 'amber' | 'green';

export interface AboutStickyNote {
  text: string;
  rotationDeg: number;
  position: CollagePosition;
  color: StickyNoteColor;
  /**
   * z-index alone (see StickyNote.module.css) keeps the note's text readable
   * over a polaroid it overlaps, but "Always shipping." lands squarely over
   * the coding-session photo at mobile's narrower collage width — reads
   * better fully clear of the photo than sitting on top of it. Fixed px
   * (not a % of collage height) so it stays pinned just past that
   * polaroid's actual rendered bottom regardless of small height tweaks.
   */
  mobilePosition?: CollagePosition;
}

export const ABOUT_STICKY_NOTES: readonly AboutStickyNote[] = [
  { text: 'Coffee-powered.', rotationDeg: 6, position: { right: '6%', top: '2%' }, color: 'amber' },
  {
    text: 'Always shipping.',
    rotationDeg: -5,
    position: { right: '2%', top: '48%' },
    color: 'green',
    mobilePosition: { right: '2%', top: '452px' },
  },
];
