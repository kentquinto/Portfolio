import { useThemeAccent } from '@/hooks/useThemeAccent';
import { THEME_SWATCHES } from '@/data/theme';
import styles from './ThemeSwitcherPanel.module.css';

export function ThemeSwitcherPanel() {
  const { accent, setAccent } = useThemeAccent();

  return (
    <div className={styles.panel}>
      <div className={styles.title}>Theme switcher</div>
      <div className={styles.subtitle}>Pick an accent color</div>
      <div className={styles.swatches}>
        {THEME_SWATCHES.map((swatch) => (
          <button
            key={swatch.name}
            type="button"
            aria-label={swatch.name}
            className={styles.swatch}
            style={{
              background: swatch.hex,
              borderColor: accent === swatch.hex ? 'var(--kq-ink)' : 'transparent',
            }}
            onClick={() => setAccent(swatch.hex)}
          />
        ))}
      </div>
      <div className={styles.previewWrap}>
        <div className={styles.previewPill}>Live preview</div>
      </div>
    </div>
  );
}
