import { describe, expect, it } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { ThemeProvider } from '@/context/ThemeProvider';
import { useThemeAccent } from '@/hooks/useThemeAccent';
import { THEME_SWATCHES } from '@/data/theme';

const AMBER = THEME_SWATCHES.find((swatch) => swatch.name === 'Amber')!;

function AccentProbe() {
  const { accent, setAccent } = useThemeAccent();
  return <button onClick={() => setAccent(AMBER.hex)}>{accent}</button>;
}

describe('ThemeProvider', () => {
  it('applies the default accent as the --kq-accent CSS custom property', () => {
    render(
      <ThemeProvider>
        <AccentProbe />
      </ThemeProvider>,
    );

    expect(document.documentElement.style.getPropertyValue('--kq-accent')).toBe(
      THEME_SWATCHES[0]!.hex,
    );
  });

  it('updates the CSS custom property when the accent changes', () => {
    render(
      <ThemeProvider>
        <AccentProbe />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByRole('button'));

    expect(document.documentElement.style.getPropertyValue('--kq-accent')).toBe(AMBER.hex);
  });
});
