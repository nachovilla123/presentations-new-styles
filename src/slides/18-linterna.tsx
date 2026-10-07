import { useEffect, useRef } from 'react';
import { Frame, type SlideMeta } from '../deck';

export const meta: SlideMeta = {
  title: 'Linterna',
  seccion: 'Efectos · 09',
  variante: 'corte',
  transition: 'zoom',
};

const IDLE_MS = 2200;

/** Reveals the text only where the cursor is; wanders on its own when the mouse is still. */
export default function Linterna() {
  const glowRef = useRef<HTMLDivElement>(null);
  const litTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const litText = litTextRef.current;
    if (!glow || !litText) return;
    let lastMoveAt = -Infinity;
    let frame = 0;

    // The glow covers the whole slide while the mask lives on the text box, so each
    // gets the same viewport point expressed in its own coordinate space.
    const placeAtViewportPoint = (clientX: number, clientY: number) => {
      const glowBounds = glow.getBoundingClientRect();
      const textBounds = litText.getBoundingClientRect();
      glow.style.setProperty('--x', `${clientX - glowBounds.left}px`);
      glow.style.setProperty('--y', `${clientY - glowBounds.top}px`);
      litText.style.setProperty('--x', `${clientX - textBounds.left}px`);
      litText.style.setProperty('--y', `${clientY - textBounds.top}px`);
    };

    const onPointerMove = (event: PointerEvent) => {
      lastMoveAt = performance.now();
      placeAtViewportPoint(event.clientX, event.clientY);
    };

    const tick = (time: number) => {
      if (time - lastMoveAt > IDLE_MS) {
        const bounds = glow.getBoundingClientRect();
        placeAtViewportPoint(
          bounds.left + bounds.width * (0.5 + 0.38 * Math.sin(time / 1900)),
          bounds.top + bounds.height * (0.5 + 0.3 * Math.sin(time / 1300 + 2)),
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
    <Frame
      meta={meta}
      isCentered
      backdrop={
        <div ref={glowRef} className="spot">
          <div className="spot-glow" />
        </div>
      }
    >
      <div style={{ position: 'relative', pointerEvents: 'none' }}>
        <p className="spot-text dim">
          Lo importante
          <br />
          aparece donde
          <br />
          mirás.
        </p>
        <p ref={litTextRef} className="spot-text lit" aria-hidden>
          Lo <span className="accent">importante</span>
          <br />
          aparece donde
          <br />
          mirás.
        </p>
      </div>
    </Frame>
  );
}
