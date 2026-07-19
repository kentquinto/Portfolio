import { createContext } from 'react';

export interface ThemeContextValue {
  accent: string;
  setAccent: (hex: string) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
