import { useEffect, useState } from 'react';
import { MOBILE_BREAKPOINT_PX } from '@/utils/breakpoints';

function matchesMobile(): boolean {
  return window.innerWidth <= MOBILE_BREAKPOINT_PX;
}

/** Tracks the 860px mobile breakpoint, used to switch the scroll axis. */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(matchesMobile);

  useEffect(() => {
    const handleResize = () => setIsMobile(matchesMobile());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}
