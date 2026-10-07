import type { CSSProperties } from 'react';
import { Frame, type SlideMeta } from '../deck';

export const meta: SlideMeta = {
  title: 'Marquesina infinita',
  seccion: 'Efectos · 04',
  variante: 'corte',
  transition: 'slide',
};

interface MarqueeRowProps {
  words: readonly string[];
  durationSeconds: number;
  isReversed?: boolean;
}

function MarqueeRow({ words, durationSeconds, isReversed = false }: MarqueeRowProps) {
  const style = {
    '--marquee-dur': `${durationSeconds}s`,
    '--marquee-dir': isReversed ? 'reverse' : 'normal',
  } as CSSProperties;
  const variants = ['outline', 'solid', 'outline', 'hot'] as const;
  // Two identical halves so translating by -50% loops with no visible jump.
  const half = words.map((word, index) => (
    <span key={`${word}-${index}`} className={`marquee-word ${variants[index % variants.length]}`}>
      {word} ✱
    </span>
  ));
  return (
    <div className="marquee-row">
      <div className="marquee-track" style={style}>
        {half}
        {half}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <Frame meta={meta} isCentered>
      <div className="reveal" style={{ margin: '0 calc(var(--pad) * -1)' }}>
        <MarqueeRow words={['idea', 'prompt', 'prototipo', 'iterar']} durationSeconds={26} />
        <MarqueeRow words={['mover', 'probar', 'mostrar', 'decidir']} durationSeconds={34} isReversed />
        <MarqueeRow words={['diseño', 'código', 'datos', 'criterio']} durationSeconds={22} />
      </div>
    </Frame>
  );
}
