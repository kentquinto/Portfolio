/** The 4-color fixed decorative palette, independent of the swappable --kq-accent. */
export type PaletteColor = 'violet' | 'amber' | 'green' | 'coral';

/** Cycle order used wherever a list of items should rotate through the palette. */
export const PALETTE_ORDER: readonly PaletteColor[] = ['violet', 'amber', 'green', 'coral'];
