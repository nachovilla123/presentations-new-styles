import { useEffect, useState } from 'react';

const GLYPHS = '!<>-_\\/[]{}=+*^?#01';

/** Decodes `target` left to right, showing random glyphs for unresolved characters. */
export function useScramble(target: string, startDelayMs = 0, perCharMs = 38): string {
  const [text, setText] = useState('');

  useEffect(() => {
    const startedAt = performance.now() + startDelayMs;
    const timer = setInterval(() => {
      const elapsedMs = performance.now() - startedAt;
      if (elapsedMs < 0) return;
      const resolvedCount = Math.floor(elapsedMs / perCharMs);
      if (resolvedCount > target.length) {
        setText(target);
        clearInterval(timer);
        return;
      }
      setText(
        target
          .split('')
          .map((char, index) => {
            if (char === ' ' || index < resolvedCount) return char;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join(''),
      );
    }, 40);
    return () => clearInterval(timer);
  }, [target, startDelayMs, perCharMs]);

  return text;
}
