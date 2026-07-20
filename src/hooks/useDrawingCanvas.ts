import { useCallback, useEffect, useRef, type RefObject } from 'react';
import { useThemeAccent } from '@/hooks/useThemeAccent';

const STROKE_WIDTH_PX = 3;

interface UseDrawingCanvasResult {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  clear: () => void;
}

/**
 * Free-draw canvas: stroke color tracks the current theme accent. The
 * in-progress stroke (isDrawing/lastX/lastY) is kept as local mutable state
 * outside React, per the design brief, so drawing doesn't trigger re-renders.
 */
export function useDrawingCanvas(): UseDrawingCanvasResult {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { accent } = useThemeAccent();
  const accentRef = useRef(accent);
  accentRef.current = accent;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resize();

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    // Pointer Events (not Mouse Events) so drawing works identically for
    // mouse, touch, and pen — a touch drag never fires 'mousemove', only a
    // single synthetic compatibility 'mousedown'/'mouseup' pair on tap.
    const getPosition = (event: PointerEvent): [number, number] => {
      const rect = canvas.getBoundingClientRect();
      return [event.clientX - rect.left, event.clientY - rect.top];
    };

    const handlePointerDown = (event: PointerEvent) => {
      isDrawing = true;
      [lastX, lastY] = getPosition(event);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!isDrawing) return;
      const [x, y] = getPosition(event);
      context.strokeStyle = accentRef.current;
      context.lineWidth = STROKE_WIDTH_PX;
      context.lineCap = 'round';
      context.beginPath();
      context.moveTo(lastX, lastY);
      context.lineTo(x, y);
      context.stroke();
      [lastX, lastY] = [x, y];
    };

    const handlePointerUp = () => {
      isDrawing = false;
    };

    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerleave', handlePointerUp);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
    window.addEventListener('resize', resize);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerleave', handlePointerUp);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const clear = useCallback(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (canvas && context) context.clearRect(0, 0, canvas.width, canvas.height);
  }, []);

  return { canvasRef, clear };
}
