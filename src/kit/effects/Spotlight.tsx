import { useEffect, useRef, type ReactNode } from 'react';

const IDLE_MS = 2200;

interface SpotlightProps {
  /** The content to reveal; it is rendered twice (dim base + lit copy), so keep it static. */
  children: ReactNode;
}

/** Content stays dim except under a light that follows the pointer (and wanders when idle). */
export function Spotlight({ children }: SpotlightProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    let lastMoveAt = -Infinity;
    let frame = 0;

    const place = (clientX: number, clientY: number) => {
      const bounds = wrapper.getBoundingClientRect();
      wrapper.style.setProperty('--x', `${clientX - bounds.left}px`);
      wrapper.style.setProperty('--y', `${clientY - bounds.top}px`);
    };

    const onPointerMove = (event: PointerEvent) => {
      lastMoveAt = performance.now();
      place(event.clientX, event.clientY);
    };

    const tick = (time: number) => {
      if (time - lastMoveAt > IDLE_MS) {
        const bounds = wrapper.getBoundingClientRect();
        place(
          bounds.left + bounds.width * (0.5 + 0.4 * Math.sin(time / 1900)),
          bounds.top + bounds.height * (0.5 + 0.35 * Math.sin(time / 1300 + 2)),
        );
      }
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onPointerMove);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="spot" style={{ position: 'relative', pointerEvents: 'none' }}>
      <div className="spot-glow" />
      <div className="spot-dim">{children}</div>
      <div className="spot-lit" aria-hidden>
        {children}
      </div>
    </div>
  );
}
