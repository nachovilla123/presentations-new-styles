import { motion } from 'motion/react';
import { StyleStage, type SlideMeta } from '../../deck';

export const meta: SlideMeta = { title: 'Estilo · Bauhaus', seccion: 'Estilos · 14', transition: 'curtain' };

const SPRING = { type: 'spring', stiffness: 70, damping: 14 } as const;

export default function EstiloBauhaus() {
  return (
    <StyleStage number="14" name="Bauhaus" background="#efe8d6" color="#111" fontFamily="'Jost', sans-serif">
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <motion.rect x="880" y="80" width="560" height="560" fill="#f2b705" initial={{ y: -700 }} animate={{ y: 80 }} transition={{ ...SPRING, delay: 0.1 }} />
        <motion.circle cx="1160" cy="360" r="190" fill="#d62718" initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ transformOrigin: '1160px 360px' }} transition={{ ...SPRING, delay: 0.5 }} />
        <motion.g initial={{ x: -900 }} animate={{ x: 0 }} transition={{ ...SPRING, delay: 0.3 }}>
          <polygon points="140,640 440,640 290,380" fill="#1f4e9e" />
          <rect x="140" y="660" width="720" height="34" fill="#111" />
        </motion.g>
        <motion.line x1="880" y1="660" x2="1440" y2="660" stroke="#111" strokeWidth="26" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.9 }} />
        <motion.g animate={{ rotate: 360 }} style={{ transformOrigin: '660px 250px' }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}>
          <path d="M660 120 A130 130 0 0 1 790 250 L660 250 Z" fill="#111" />
          <path d="M660 250 L660 380 A130 130 0 0 1 530 250 Z" fill="#d62718" />
        </motion.g>
        {[0, 1, 2, 3, 4].map((index) => (
          <motion.line key={index} x1={140 + index * 36} y1="120" x2={140 + index * 36 + 130} y2="250" stroke="#111" strokeWidth="6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 1 + index * 0.1 }} />
        ))}
      </svg>
      <motion.h1
        style={{ position: 'absolute', left: '5vw', bottom: '3.2vw', margin: 0, fontSize: '11vw', lineHeight: 0.8, fontWeight: 800, letterSpacing: '-0.02em', textTransform: 'uppercase' }}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        Bau<span style={{ color: '#d62718' }}>haus</span>
      </motion.h1>
      <p style={{ position: 'absolute', right: '5vw', bottom: '3.4vw', margin: 0, writingMode: 'vertical-rl', fontSize: '1.2vw', letterSpacing: '0.5em', textTransform: 'uppercase' }}>
        Forma sigue función · 1919
      </p>
    </StyleStage>
  );
}
