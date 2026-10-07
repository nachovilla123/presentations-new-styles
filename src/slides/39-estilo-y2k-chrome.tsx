import { StyleStage, type SlideMeta } from '../deck';

export const meta: SlideMeta = { title: 'Estilo · Y2K chrome', seccion: 'Estilos · 07', transition: 'zoom' };

const SPARKLES: ReadonlyArray<{ left: string; top: string; size: number; delay: number }> = [
  { left: '8%', top: '14%', size: 5, delay: 0 },
  { left: '84%', top: '10%', size: 7, delay: 0.6 },
  { left: '72%', top: '70%', size: 4, delay: 1.1 },
  { left: '16%', top: '72%', size: 6, delay: 1.6 },
  { left: '48%', top: '8%', size: 3, delay: 2.1 },
  { left: '92%', top: '46%', size: 4, delay: 0.3 },
];

export default function EstiloY2kChrome() {
  return (
    <StyleStage number="07" name="Y2K chrome" background="radial-gradient(circle at 50% 40%, #e9f3ff 0%, #b9d4ff 45%, #9aa8ff 100%)" color="#1c2a44">
      <div className="chrome-ring" style={{ left: '-6vw', bottom: '-10vw', width: '30vw', height: '30vw' }} />
      <div className="chrome-ring" style={{ right: '-4vw', top: '-8vw', width: '24vw', height: '24vw', animationDirection: 'reverse' }} />
      {SPARKLES.map((sparkle) => (
        <svg key={sparkle.left} viewBox="0 0 40 40" style={{ position: 'absolute', left: sparkle.left, top: sparkle.top, width: `${sparkle.size}vw`, animation: `twinkle 2.6s ease-in-out ${sparkle.delay}s infinite` }}>
          <path d="M20 0 C21 14 26 19 40 20 C26 21 21 26 20 40 C19 26 14 21 0 20 C14 19 19 14 20 0Z" fill="#fff" stroke="#6f86c9" strokeWidth="1" />
        </svg>
      ))}
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 className="chrome-text" data-text="Y2K" style={{ margin: 0, fontSize: '22vw', lineHeight: 0.9, letterSpacing: '-0.02em' }}>Y2K</h1>
          <h2 className="chrome-text" data-text="CHROME ✦ 2000" style={{ margin: '1vw 0 0', fontSize: '4.4vw', letterSpacing: '0.18em' }}>CHROME ✦ 2000</h2>
        </div>
      </div>
    </StyleStage>
  );
}
