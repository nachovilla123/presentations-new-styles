import { motion } from 'motion/react';
import { StyleStage, type SlideMeta } from '../deck';

export const meta: SlideMeta = { title: 'Estilo · Pop art', seccion: 'Estilos · 03', transition: 'flip' };

/** 24-point starburst: alternate outer / inner radius around the centre. */
const STARBURST = Array.from({ length: 48 }, (_, index) => {
  const angle = (index / 48) * Math.PI * 2;
  const radius = index % 2 === 0 ? 48 : 32;
  return `${50 + Math.cos(angle) * radius},${50 + Math.sin(angle) * radius}`;
}).join(' ');

export default function EstiloPopArt() {
  return (
    <StyleStage number="03" name="Pop art" background="#ffd400" color="#111" fontFamily="'Bangers', cursive">
      <div className="benday" style={{ position: 'absolute', inset: 0 }} />
      <motion.svg
        viewBox="0 0 100 100"
        style={{ position: 'absolute', left: '50%', top: '50%', width: '70vw', marginLeft: '-35vw', marginTop: '-35vw' }}
        initial={{ scale: 0, rotate: -40 }}
        animate={{ scale: [0, 1.15, 1], rotate: [-40, 6, 0] }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.polygon
          points={STARBURST}
          fill="#fff"
          stroke="#111"
          strokeWidth="1.4"
          strokeLinejoin="round"
          animate={{ scale: [1, 1.04, 1], rotate: [0, 3, -3, 0] }}
          style={{ transformOrigin: '50% 50%' }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.svg>
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
        <h1
          style={{ margin: 0, fontSize: '19vw', lineHeight: 0.9, color: '#e4002b', WebkitTextStroke: '0.5vw #111', textShadow: '0.9vw 0.9vw 0 #111', letterSpacing: '0.02em', animation: 'pop-shake 0.5s steps(2) infinite' }}
        >
          POW!
        </h1>
      </div>
      <motion.div
        style={{ position: 'absolute', right: '6vw', top: '6vw', padding: '1.2vw 1.8vw', background: '#fff', border: '0.35vw solid #111', borderRadius: '2vw', fontSize: '3vw', lineHeight: 1, boxShadow: '0.5vw 0.5vw 0 #111' }}
        initial={{ y: -80, opacity: 0, rotate: 8 }}
        animate={{ y: 0, opacity: 1, rotate: -4 }}
        transition={{ type: 'spring', delay: 0.9, stiffness: 200, damping: 12 }}
      >
        ¡DISEÑO CON ACTITUD!
      </motion.div>
    </StyleStage>
  );
}
