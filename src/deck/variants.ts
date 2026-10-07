import type { Variants } from 'motion/react';
import type { TransitionName } from './types';

/** `custom` is the navigation direction: 1 forward, -1 backward. */
export const transitionVariants: Record<TransitionName, Variants> = {
  fade: {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slide: {
    enter: (direction: number) => ({ opacity: 0, x: direction * 120 }),
    center: { opacity: 1, x: 0 },
    exit: (direction: number) => ({ opacity: 0, x: direction * -120 }),
  },
  zoom: {
    enter: { opacity: 0, scale: 1.04 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 },
  },
  flip: {
    enter: (direction: number) => ({ opacity: 0, rotateY: direction * 16 }),
    center: { opacity: 1, rotateY: 0 },
    exit: (direction: number) => ({ opacity: 0, rotateY: direction * -16 }),
  },
  curtain: {
    enter: { clipPath: 'inset(100% 0% 0% 0%)' },
    center: { clipPath: 'inset(0% 0% 0% 0%)' },
    exit: { clipPath: 'inset(0% 0% 100% 0%)' },
  },
  none: {
    enter: { opacity: 1 },
    center: { opacity: 1, transition: { duration: 0 } },
    exit: { opacity: 1, transition: { duration: 0 } },
  },
};
