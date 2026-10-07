import { motion, type TargetAndTransition } from 'motion/react';
import { createContext, useContext, type CSSProperties, type ReactNode } from 'react';

/** Current build step of the visible slide (0 = nothing revealed yet). */
export const StepContext = createContext(0);

export function useStep(): number {
  return useContext(StepContext);
}

export type StepEffect = 'rise' | 'pop' | 'left' | 'right' | 'drop' | 'blur' | 'flip' | 'wipe' | 'stamp';

interface EffectTargets {
  hidden: TargetAndTransition;
  shown: TargetAndTransition;
}

const EFFECTS: Record<StepEffect, EffectTargets> = {
  rise: { hidden: { opacity: 0, y: 44, filter: 'blur(6px)' }, shown: { opacity: 1, y: 0, filter: 'blur(0px)' } },
  pop: { hidden: { opacity: 0, scale: 0.55 }, shown: { opacity: 1, scale: 1 } },
  left: { hidden: { opacity: 0, x: -140 }, shown: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 140 }, shown: { opacity: 1, x: 0 } },
  drop: { hidden: { opacity: 0, y: -110, rotate: -3 }, shown: { opacity: 1, y: 0, rotate: 0 } },
  blur: { hidden: { opacity: 0, filter: 'blur(26px)', scale: 1.1 }, shown: { opacity: 1, filter: 'blur(0px)', scale: 1 } },
  flip: { hidden: { opacity: 0, rotateX: -90 }, shown: { opacity: 1, rotateX: 0 } },
  wipe: { hidden: { opacity: 1, clipPath: 'inset(0 100% 0 0)' }, shown: { opacity: 1, clipPath: 'inset(0 0% 0 0)' } },
  stamp: { hidden: { opacity: 0, scale: 3.2, rotate: -20 }, shown: { opacity: 1, scale: 1, rotate: -6 } },
};

const SPRING_EFFECTS: ReadonlySet<StepEffect> = new Set(['pop', 'drop', 'flip', 'stamp']);

interface StepProps {
  /** The element appears once the slide reaches this step. */
  at: number;
  effect?: StepEffect;
  /** Extra seconds before the effect starts. */
  delay?: number;
  /** Fade this element once a later step is reached, to keep focus on the newest one. */
  isDimmedWhenPast?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/** Reserves its space from the start (no layout jumps) and animates in on its step. */
export function Step({ at, effect = 'rise', delay = 0, isDimmedWhenPast = false, className, style, children }: StepProps) {
  const step = useStep();
  const targets = EFFECTS[effect];
  const isShown = step >= at;
  const target: TargetAndTransition = !isShown
    ? targets.hidden
    : isDimmedWhenPast && step > at
      ? { ...targets.shown, opacity: 0.35 }
      : targets.shown;

  return (
    <motion.div
      className={className}
      style={{ ...style, pointerEvents: isShown ? undefined : 'none' }}
      initial={targets.hidden}
      animate={target}
      transition={
        SPRING_EFFECTS.has(effect)
          ? { type: 'spring', stiffness: 240, damping: 19, delay }
          : { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }
      }
    >
      {children}
    </motion.div>
  );
}
