import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { StyleStage, type SlideMeta } from '../deck';

export const meta: SlideMeta = { title: 'Estilo · Line art', seccion: 'Estilos · 20', transition: 'fade' };

const PETAL_ANGLES = [0, 60, 120, 180, 240, 300] as const;
const RAY_ANGLES = Array.from({ length: 12 }, (_, index) => index * 30);

interface StrokeProps {
  d: string;
  delay: number;
  duration?: number;
}

function Stroke({ d, delay, duration = 1.1 }: StrokeProps) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke="#111"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration, delay, ease: 'easeInOut' }}
    />
  );
}

export default function EstiloLineArt() {
  // Remounting redraws the whole illustration from scratch.
  const [drawCount, setDrawCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setDrawCount((current) => current + 1), 11000);
    return () => clearInterval(timer);
  }, []);

  return (
    <StyleStage number="20" name="Line art" background="#fbfaf6" color="#111" fontFamily="'Poppins', sans-serif">
      <svg key={drawCount} viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <Stroke d="M300 810 H1300" delay={0} duration={1.4} />
        <Stroke d="M980 620 L1010 810 H1170 L1200 620 Z" delay={0.5} />
        <Stroke d="M960 620 H1220" delay={1.1} duration={0.6} />
        <Stroke d="M1090 620 C 1070 520, 1130 440, 1090 340" delay={1.4} duration={1.3} />
        <Stroke d="M1098 500 C 1190 470, 1230 520, 1180 560 C 1150 570, 1110 540, 1098 500" delay={2.2} />
        <Stroke d="M1078 430 C 990 400, 950 450, 1000 490 C 1030 500, 1070 470, 1078 430" delay={2.7} />
        <g transform="translate(1090 300)">
          {PETAL_ANGLES.map((angle, index) => (
            <motion.circle
              key={angle}
              cx={Math.cos((angle * Math.PI) / 180) * 52}
              cy={Math.sin((angle * Math.PI) / 180) * 52}
              r="30"
              fill="none"
              stroke="#111"
              strokeWidth="5"
              initial={{ pathLength: 0, rotate: -90 }}
              animate={{ pathLength: 1, rotate: -90 }}
              transition={{ duration: 0.7, delay: 3.2 + index * 0.18 }}
              style={{ transformOrigin: `${Math.cos((angle * Math.PI) / 180) * 52}px ${Math.sin((angle * Math.PI) / 180) * 52}px` }}
            />
          ))}
          <motion.circle r="26" fill="#e8482b" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 4.5 }} />
        </g>
        <g transform="translate(1380 190)">
          <Stroke d="M-60 0 A60 60 0 1 0 60 0 A60 60 0 1 0 -60 0" delay={0.8} duration={1.2} />
          {RAY_ANGLES.map((angle, index) => (
            <motion.line
              key={angle}
              x1="0"
              y1="-86"
              x2="0"
              y2="-120"
              stroke="#111"
              strokeWidth="5"
              strokeLinecap="round"
              transform={`rotate(${angle})`}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, delay: 2 + index * 0.08 }}
            />
          ))}
        </g>
      </svg>
      <h1 style={{ position: 'absolute', left: '6vw', top: '6vw', margin: 0, fontSize: '8vw', lineHeight: 0.95, fontWeight: 500, letterSpacing: '-0.04em' }}>
        Line<br />art
      </h1>
      <p style={{ position: 'absolute', left: '6vw', top: '22vw', margin: 0, width: '24vw', fontSize: '1.3vw', lineHeight: 1.5, color: '#555' }}>
        Un solo trazo, un solo grosor. La forma se explica sola, sin relleno.
      </p>
    </StyleStage>
  );
}
