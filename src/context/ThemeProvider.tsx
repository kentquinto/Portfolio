import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { DEFAULT_THEME_ACCENT } from '@/data/theme';
import { ThemeContext } from '@/context/themeContext';

const ACCENT_CSS_VAR = '--kq-accent';

/**
 * Owns the current accent color and keeps it mirrored onto the
 * `--kq-accent` CSS custom property on `<html>`, so plain CSS (`var(--kq-accent)`)
 * picks up theme changes site-wide without prop-drilling.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [accent, setAccent] = useState(DEFAULT_THEME_ACCENT);

  useEffect(() => {
    document.documentElement.style.setProperty(ACCENT_CSS_VAR, accent);
  }, [accent]);

  const setAccentCallback = useCallback((hex: string) => setAccent(hex), []);

  return (
    <ThemeContext.Provider value={{ accent, setAccent: setAccentCallback }}>
      {children}
    </ThemeContext.Provider>
  );
}
