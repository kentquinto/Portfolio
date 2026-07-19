import { useContext } from 'react';
import { ThemeContext, type ThemeContextValue } from '@/context/themeContext';

export function useThemeAccent(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeAccent must be used within a ThemeProvider');
  }
  return context;
}
