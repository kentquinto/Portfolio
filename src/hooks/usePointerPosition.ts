import { useContext } from 'react';
import { PointerContext, type PointerContextValue } from '@/context/pointerContext';

export function usePointerPosition(): PointerContextValue {
  const context = useContext(PointerContext);
  if (!context) {
    throw new Error('usePointerPosition must be used within a PointerProvider');
  }
  return context;
}
