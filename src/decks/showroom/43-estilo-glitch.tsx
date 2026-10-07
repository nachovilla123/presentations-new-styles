import { StyleStage, type CssVars, type SlideMeta } from '../../deck';

export const meta: SlideMeta = { title: 'Estilo · Glitch', seccion: 'Estilos · 11', transition: 'none' };

const TEARS: readonly CssVars[] = [
  { '--dur': '2.6s', '--delay': '0s' },
  { '--dur': '3.4s', '--delay': '-1.2s' },
  { '--dur': '4.1s', '--delay': '-2.6s' },
];

export default function EstiloGlitch() {
  return (
    <StyleStage number="11" name="Glitch" background="#050505" color="#fff">
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
        <div className="glitch-stack" style={{ fontSize: '17vw', letterSpacing: '-0.02em' }}>
          <span>GLITCH</span>
          <span className="gl-r" aria-hidden>GLITCH</span>
          <span className="gl-c" aria-hidden>GLITCH</span>
        </div>
      </div>
      <p style={{ position: 'absolute', left: '5vw', top: '4vw', margin: 0, fontFamily: 'var(--font-code)', fontSize: '1.1vw', letterSpacing: '0.3em', color: '#22e8ff' }}>
        ▍SIGNAL_LOST // 0xDEADBEEF
      </p>
      <p style={{ position: 'absolute', right: '5vw', bottom: '5vw', margin: 0, fontFamily: 'var(--font-code)', fontSize: '1.1vw', letterSpacing: '0.3em', color: '#ff2a55', animation: 'blink 1s steps(1) infinite' }}>
        ERROR 404 — REALITY NOT FOUND
      </p>
      {TEARS.map((vars, index) => (
        <i key={index} className="tear" style={vars} />
      ))}
      <div className="scanlines" />
    </StyleStage>
  );
}
