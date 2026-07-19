import { ProcessStepMarker } from './ProcessStepMarker';
import { PROCESS_STEPS } from '@/data/process';
import { SECTIONS } from '@/data/sections';
import styles from './Process.module.css';

const PROCESS_SECTION_INDEX = SECTIONS.findIndex((section) => section.id === 'process');

export function Process() {
  return (
    <div className={styles.root}>
      <div className={styles.eyebrow}>05 — PROCESS</div>
      <h2 className={styles.heading}>How the work happens.</h2>
      <div className={styles.timeline}>
        <div className={styles.line} />
        <div className={styles.steps}>
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStepMarker
              key={step.label}
              step={step}
              stepNumber={index + 1}
              sectionIndex={PROCESS_SECTION_INDEX}
              itemIndex={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
