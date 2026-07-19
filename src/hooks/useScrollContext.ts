import { useContext } from 'react';
import { ScrollContext, type ScrollContextValue } from '@/context/scrollContext';

export function useScrollContext(): ScrollContextValue {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
}
