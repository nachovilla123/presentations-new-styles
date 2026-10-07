import { StyleStage, type CssVars, type SlideMeta } from '../deck';

export const meta: SlideMeta = { title: 'Estilo · Risograph', seccion: 'Estilos · 09', transition: 'fade' };

const PINK = '#ff48b0';
const BLUE = '#2b59c3';

export default function EstiloRisograph() {
  const pinkDots: CssVars = { left: '4vw', bottom: '4vw', width: '36vw', height: '16vw', '--ink': PINK };
  const blueDots: CssVars = { right: '4vw', top: '5vw', width: '30vw', height: '14vw', '--ink': BLUE, transform: 'scaleX(-1)' };
  return (
    <StyleStage number="09" name="Risograph" background="#f1ead8" color="#1a1a1a" fontFamily="'Rubik Mono One', sans-serif">
      <div className="riso-dots" style={pinkDots} />
      <div className="riso-dots" style={blueDots} />
      <div className="riso-layer" style={{ left: '14vw', top: '8vw', width: '30vw', height: '30vw', borderRadius: '50%', background: PINK, animationDuration: '4.4s' }} />
      <div className="riso-layer" style={{ left: '28vw', top: '12vw', width: '34vw', height: '26vw', background: BLUE, animationDuration: '3.6s', animationDirection: 'alternate-reverse' }} />
      <div className="riso-layer" style={{ right: '12vw', bottom: '10vw', width: '0', height: '0', borderLeft: '9vw solid transparent', borderRight: '9vw solid transparent', borderBottom: `15vw solid ${PINK}` }} />
      <h1 className="riso-layer" style={{ left: '6vw', bottom: '12vw', margin: 0, fontSize: '9.6vw', lineHeight: 1, color: PINK, animationDuration: '3.2s' }}>RISO</h1>
      <h1 className="riso-layer" style={{ left: '6vw', bottom: '12vw', margin: 0, fontSize: '9.6vw', lineHeight: 1, color: BLUE, animationDuration: '4.1s', animationDirection: 'alternate-reverse' }}>RISO</h1>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', mixBlendMode: 'multiply', opacity: 0.5 }}>
        <filter id="riso-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="4" />
          <feColorMatrix values="0 0 0 0 0.25  0 0 0 0 0.2  0 0 0 0 0.15  0 0 0 0.9 -0.25" />
        </filter>
        <rect width="100%" height="100%" filter="url(#riso-grain)" />
      </svg>
    </StyleStage>
  );
}
