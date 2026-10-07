import { motion } from 'motion/react';
import { StyleStage, type CssVars, type SlideMeta } from '../../deck';

export const meta: SlideMeta = { title: 'Estilo · Paper collage', seccion: 'Estilos · 10', transition: 'flip' };

const TORN_A = 'polygon(0 4%, 6% 0, 14% 5%, 24% 1%, 36% 6%, 48% 0, 60% 5%, 72% 1%, 86% 6%, 100% 2%, 98% 40%, 100% 70%, 97% 100%, 84% 95%, 70% 100%, 56% 96%, 42% 100%, 28% 95%, 14% 100%, 0 96%, 2% 60%)';
const TORN_B = 'polygon(2% 0, 100% 3%, 97% 28%, 100% 55%, 96% 80%, 100% 100%, 0 97%, 3% 70%, 0 42%, 3% 18%)';

interface Piece {
  style: CssVars;
  clipPath?: string;
  delay: number;
}

const PIECES: readonly Piece[] = [
  { style: { left: '7vw', top: '8vw', width: '38vw', height: '26vw', background: '#f6efe0', '--r': '-3deg' }, clipPath: TORN_A, delay: 0 },
  { style: { right: '9vw', top: '6vw', width: '28vw', height: '20vw', background: '#ef7b9b', '--r': '4deg' }, clipPath: TORN_B, delay: 0.25 },
  { style: { left: '38vw', bottom: '7vw', width: '30vw', height: '17vw', background: '#4aa7a0', '--r': '-2deg' }, clipPath: TORN_A, delay: 0.5 },
  { style: { left: '5vw', bottom: '6vw', width: '17vw', height: '17vw', background: '#f2c94c', borderRadius: '50%', '--r': '6deg' }, delay: 0.75 },
  { style: { right: '6vw', bottom: '8vw', width: '20vw', height: '24vw', background: '#e8e0cc', '--r': '3deg' }, clipPath: TORN_B, delay: 1 },
];

export default function EstiloPaperCollage() {
  return (
    <StyleStage number="10" name="Paper collage" background="#cdb892" color="#2a2118" fontFamily="'Permanent Marker', cursive">
      {PIECES.map((piece, index) => (
        <motion.div
          key={index}
          style={{ position: 'absolute', ...piece.style, rotate: 0 }}
          initial={{ y: -500, opacity: 0, rotate: -30 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 110, damping: 13, delay: piece.delay }}
        >
          <div
            className="paper"
            style={{ inset: 0, background: 'inherit', borderRadius: 'inherit', clipPath: piece.clipPath, ['--r' as string]: piece.style['--r'], animation: `paper-wobble ${5 + index}s ease-in-out ${index * -0.8}s infinite`, transform: `rotate(${piece.style['--r']})` } as CssVars}
          />
        </motion.div>
      ))}
      <motion.h1
        style={{ position: 'absolute', left: '11vw', top: '14vw', margin: 0, fontSize: '7.6vw', lineHeight: 0.95, color: '#2a2118', transform: 'rotate(-3deg)' }}
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        Paper<br />collage
      </motion.h1>
      <p style={{ position: 'absolute', right: '12vw', bottom: '14vw', margin: 0, width: '16vw', fontFamily: "'Special Elite', serif", fontSize: '1.45vw', lineHeight: 1.45, transform: 'rotate(3deg)' }}>
        Recortar, pegar, superponer. Bordes rotos, sombras suaves, cinta adhesiva.
      </p>
      <div className="tape" style={{ left: '22vw', top: '6.4vw', transform: 'rotate(-6deg)' }} />
      <div className="tape" style={{ right: '17vw', top: '5vw', transform: 'rotate(8deg)' }} />
    </StyleStage>
  );
}
