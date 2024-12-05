// birthday_card/src/@types/canvas-confetti.d.ts
declare module 'canvas-confetti' {
    interface ConfettiOptions {
      particleCount?: number;
      startVelocity?: number;
      spread?: number;
      ticks?: number;
      zIndex?: number;
      origin?: { x: number; y: number };
      colors?: string[];
    }
  
    export default function confetti(options?: ConfettiOptions): void;
  }