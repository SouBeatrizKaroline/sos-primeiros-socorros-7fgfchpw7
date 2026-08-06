import { useCallback } from 'react'

export function useVibration() {
  const vibrate = useCallback((pattern: number | number[] = 80) => {
    if ('vibrate' in navigator) {
      try {
        navigator.vibrate(pattern)
      } catch (e) {
        // Fallback for browsers that restrict vibration without user gesture
      }
    }
  }, [])

  return { vibrate }
}
