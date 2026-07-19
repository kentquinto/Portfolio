import { useDrawingCanvas } from '@/hooks/useDrawingCanvas';
import styles from './DrawPanel.module.css';

export function DrawPanel() {
  const { canvasRef, clear } = useDrawingCanvas();

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <div className={styles.title}>Draw something</div>
        <button type="button" className={styles.clearButton} onClick={clear}>
          CLEAR
        </button>
      </div>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
