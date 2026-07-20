import { LanguageCard } from './LanguageCard';
import { LANGUAGES } from '@/data/languages';
import { SECTIONS } from '@/data/sections';
import styles from './Languages.module.css';

const LANGUAGES_SECTION_INDEX = SECTIONS.findIndex((section) => section.id === 'languages');

export function Languages() {
  return (
    <div className={styles.root}>
      <div className={styles.eyebrow}>07 — LANGUAGES</div>
      <h2 className={styles.heading}>Words I work in.</h2>
      <div className={styles.row}>
        {LANGUAGES.map((language, index) => (
          <LanguageCard
            key={language.code}
            language={language}
            sectionIndex={LANGUAGES_SECTION_INDEX}
            itemIndex={index}
          />
        ))}
      </div>
    </div>
  );
}
