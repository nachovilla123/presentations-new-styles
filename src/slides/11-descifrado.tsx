import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Frame, useScramble, type SlideMeta } from '../deck';

export const meta: SlideMeta = {
  title: 'Texto que se descifra',
  seccion: 'Efectos · 02',
  variante: 'corte',
  transition: 'fade',
};

const LOG_LINES = [
  '> leyendo el brief con atención',
  '> generando 3 direcciones visuales',
  '> iterando hasta que se vea bien',
  '> exportando componentes y tokens',
  '> listo para presentar.',
] as const;

interface ScrambleLineProps {
  text: string;
  delayMs: number;
}

function ScrambleLine({ text, delayMs }: ScrambleLineProps) {
  const decoded = useScramble(text, delayMs);
  return (
    <p style={{ margin: 0, fontFamily: 'var(--font-code)', fontSize: 'clamp(16px, 2.1vw, 40px)', lineHeight: 1.7, minHeight: '1.7em', color: decoded === text ? 'var(--color-fg)' : 'var(--color-acento)' }}>
      {decoded}
    </p>
  );
}

export default function Descifrado() {
  // Remounting the lines replays the whole sequence.
  const [replayCount, setReplayCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setReplayCount((current) => current + 1), 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Frame meta={meta} isCentered>
      <p className="portada-kicker reveal">
        <span className="pk-num">02</span>
        <span>Decodificando</span>
      </p>
      <div key={replayCount} className="mt-l">
        {LOG_LINES.map((line, index) => (
          <ScrambleLine key={line} text={line} delayMs={400 + index * 1300} />
        ))}
      </div>
      <motion.div
        key={`bar-${replayCount}`}
        style={{ height: 3, marginTop: '3vh', background: 'var(--color-acento)', transformOrigin: 'left' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 7.2, delay: 0.4, ease: 'linear' }}
      />
    </Frame>
  );
}
