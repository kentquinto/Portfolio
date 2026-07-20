import { MousePhysicsPanel } from './MousePhysicsPanel';
import { ThemeSwitcherPanel } from './ThemeSwitcherPanel';
import { DrawPanel } from './DrawPanel';
import styles from './Playground.module.css';

export function Playground() {
  return (
    <div className={styles.root}>
      <div className={styles.eyebrow}>08 — PLAYGROUND</div>
      <h2 className={styles.heading}>Just for fun.</h2>
      <div className={styles.panels}>
        <MousePhysicsPanel />
        <ThemeSwitcherPanel />
        <DrawPanel />
      </div>
    </div>
  );
}
