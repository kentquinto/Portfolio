import { useIsMobile } from '@/hooks/useIsMobile';

/**
 * Picks a mobile-specific override when one is provided and the viewport is
 * mobile, otherwise falls back to the default (desktop) value. Centralizes
 * the "desktop-tuned position doesn't fit mobile" pattern used across
 * several sections (About's sticky notes, Skills' bubbles, ...) instead of
 * repeating the same fallback in each component.
 */
export function useMobileValue<T>(defaultValue: T, mobileValue: T | undefined): T {
  const isMobile = useIsMobile();
  return (isMobile && mobileValue) || defaultValue;
}
