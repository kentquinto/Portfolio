export interface ThemeSwatch {
  name: string;
  hex: string;
}

/** The 4 accent choices offered by the Playground's theme switcher. */
export const THEME_SWATCHES: readonly ThemeSwatch[] = [
  { name: 'Violet', hex: '#7d6bf0' },
  { name: 'Amber', hex: '#f0b53d' },
  { name: 'Green', hex: '#4bb17e' },
  { name: 'Coral', hex: '#ef7a6b' },
];

export const DEFAULT_THEME_ACCENT = THEME_SWATCHES[0]!.hex;
