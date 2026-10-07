import { StyleStage, type SlideMeta } from '../deck';

export const meta: SlideMeta = { title: 'Estilo · Flat 2D', seccion: 'Estilos · 04', transition: 'slide' };

const RAYS = Array.from({ length: 12 }, (_, index) => index * 30);

function Cloud({ top, size, duration, delay }: { top: string; size: number; duration: number; delay: number }) {
  return (
    <svg viewBox="0 0 120 50" style={{ position: 'absolute', top, left: 0, width: `${size}vw`, animation: `flat-cloud ${duration}s linear infinite`, animationDelay: `${delay}s` }}>
      <g fill="#fff">
        <circle cx="35" cy="30" r="16" />
        <circle cx="58" cy="22" r="20" />
        <circle cx="84" cy="30" r="15" />
        <rect x="25" y="30" width="70" height="16" rx="8" />
      </g>
    </svg>
  );
}

function Tree({ x, scale, delay }: { x: number; scale: number; delay: number }) {
  return (
    <g transform={`translate(${x} 0) scale(${scale})`}>
      <g style={{ transformOrigin: '0 560px', animation: `flat-sway 3.4s ease-in-out ${delay}s infinite`, transformBox: 'view-box' }}>
        <rect x="-8" y="500" width="16" height="70" fill="#8d5524" />
        <circle cx="0" cy="480" r="46" fill="#2a9d8f" />
        <circle cx="-26" cy="505" r="30" fill="#2a9d8f" />
        <circle cx="28" cy="505" r="30" fill="#21867a" />
      </g>
    </g>
  );
}

export default function EstiloFlat2d() {
  return (
    <StyleStage number="04" name="Flat 2D" background="#ffe8d6" color="#264653" fontFamily="'Poppins', sans-serif">
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <g transform="translate(1250 230)">
          <g style={{ transformOrigin: '0 0', animation: 'flat-spin 24s linear infinite', transformBox: 'view-box' }}>
            {RAYS.map((angle) => (
              <rect key={angle} x="-8" y="-170" width="16" height="48" rx="8" fill="#ffb703" transform={`rotate(${angle})`} />
            ))}
          </g>
          <circle r="96" fill="#ffb703" />
        </g>
        <path d="M0 640 Q300 470 620 600 T1240 560 T1600 610 V900 H0Z" fill="#e9c46a" />
        <path d="M0 720 Q380 580 760 690 T1600 690 V900 H0Z" fill="#2a9d8f" />
        <path d="M0 810 Q450 720 900 800 T1600 790 V900 H0Z" fill="#264653" />
        <Tree x={260} scale={1} delay={0} />
        <Tree x={470} scale={0.7} delay={0.6} />
        <Tree x={1180} scale={0.85} delay={1.1} />
      </svg>
      <Cloud top="12%" size={16} duration={46} delay={-8} />
      <Cloud top="26%" size={11} duration={62} delay={-30} />
      <Cloud top="6%" size={9} duration={54} delay={-48} />
      <h1 style={{ position: 'absolute', left: '6vw', top: '7vw', margin: 0, fontSize: '9vw', lineHeight: 0.95, fontWeight: 800, letterSpacing: '-0.03em' }}>
        Flat<br />
        <span style={{ color: '#e76f51' }}>2D</span>
      </h1>
    </StyleStage>
  );
}
