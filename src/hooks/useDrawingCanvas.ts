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

    const getPosition = (event: MouseEvent): [number, number] => {
      const rect = canvas.getBoundingClientRect();
      return [event.clientX - rect.left, event.clientY - rect.top];
    };

    const handleMouseDown = (event: MouseEvent) => {
      isDrawing = true;
      [lastX, lastY] = getPosition(event);
    };

    const handleMouseMove = (event: MouseEvent) => {
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

    const handleMouseUp = () => {
      isDrawing = false;
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseUp);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('resize', resize);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseUp);
      window.removeEventListener('mouseup', handleMouseUp);
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
