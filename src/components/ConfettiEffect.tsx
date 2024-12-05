'use client'

import { useEffect, useCallback } from 'react' // Import useCallback
import confetti from 'canvas-confetti'

const ConfettiEffect = () => {
  const triggerInitialConfetti = useCallback(() => { // Use useCallback
    const duration = 15 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    const interval: NodeJS.Timeout = setInterval(function() {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      
      confetti(Object.assign({}, defaults, { 
        particleCount, 
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ff0000', '#00ff00', '#0000ff'],
      }))
      confetti(Object.assign({}, defaults, { 
        particleCount, 
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ff00ff', '#ffff00', '#00ffff'],
      }))
    }, 250)
  }, []) // Add dependencies if needed

  useEffect(() => {
    triggerInitialConfetti()
  }, [triggerInitialConfetti]) // Include triggerInitialConfetti in the dependency array

  const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min
  }

  return null
}

export default ConfettiEffect
