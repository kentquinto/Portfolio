import { ScrollProvider } from '@/context/ScrollProvider';
import { ScrollContainer } from '@/components/layout/ScrollContainer';
import { ProgressBar } from '@/components/layout/ProgressBar';
import { NavRail } from '@/components/layout/NavRail';
import { TopActions } from '@/components/layout/TopActions';
import { SectionShell } from '@/components/layout/SectionShell';
import { SECTIONS } from '@/data/sections';
import styles from './Portfolio.module.css';

/**
 * Section content is filled in one at a time (see docs/design-brief.md); until
 * a section's own component lands, its slot renders this placeholder label so
 * scroll/nav/reveal behavior stays fully testable in the meantime.
 */
function SectionPlaceholder({ index, label }: { index: number; label: string }) {
  return (
    <p className={styles.placeholderLabel}>
      {String(index + 1).padStart(2, '0')} — {label}
    </p>
  );
}

export function Portfolio() {
  return (
    <ScrollProvider>
      <div className={styles.root}>
        <ProgressBar />
        <NavRail />
        <TopActions />
        <ScrollContainer>
          {SECTIONS.map((section, index) => (
            <SectionShell key={section.id} index={index} label={section.navLabel}>
              <SectionPlaceholder index={index} label={section.navLabel} />
            </SectionShell>
          ))}
        </ScrollContainer>
      </div>
    </ScrollProvider>
  );
}
