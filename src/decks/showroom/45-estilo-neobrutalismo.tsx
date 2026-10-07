import { motion } from 'motion/react';
import { StyleStage, type SlideMeta } from '../../deck';

export const meta: SlideMeta = { title: 'Estilo · Neobrutalism', seccion: 'Estilos · 13', transition: 'slide' };

export default function EstiloNeobrutalismo() {
  return (
    <StyleStage
      number="13"
      name="Neobrutalism"
      background="#fff4d6 linear-gradient(#0000000f 1px, transparent 1px) 0 0 / 100% 3vw"
      color="#000"
      fontFamily="'Space Grotesk', sans-serif"
    >
      <motion.div
        className="neo-card"
        style={{ left: '6vw', top: '6vw', width: '56vw', padding: '2.4vw 3vw', background: '#ff90e8' }}
        initial={{ x: -80, y: 40, opacity: 0, rotate: -3 }}
        animate={{ x: 0, y: 0, opacity: 1, rotate: -1.5 }}
        transition={{ type: 'spring', stiffness: 200, damping: 14 }}
      >
        <h1 style={{ margin: 0, fontSize: '8vw', lineHeight: 0.92, letterSpacing: '-0.04em', textTransform: 'uppercase' }}>
          Neo<br />brutalism
        </h1>
      </motion.div>
      <motion.div
        className="neo-card"
        style={{ right: '7vw', top: '8vw', width: '24vw', padding: '1.6vw', background: '#7cf5d4', fontSize: '1.5vw', lineHeight: 1.25 }}
        initial={{ y: -120, opacity: 0, rotate: 8 }}
        animate={{ y: 0, opacity: 1, rotate: 3 }}
        transition={{ type: 'spring', stiffness: 220, damping: 12, delay: 0.25 }}
      >
        Bordes gruesos, sombras duras, colores chillones y cero sutileza.
      </motion.div>
      <motion.button
        className="neo-card"
        style={{ left: '10vw', top: '29vw', padding: '1.1vw 2.6vw', background: '#ffe14d', fontSize: '2.2vw', cursor: 'pointer' }}
        animate={{ x: [0, 0.5, 0.5, 0], y: [0, 0.5, 0.5, 0], boxShadow: ['0.7vw 0.7vw 0 #000', '0.2vw 0.2vw 0 #000', '0.2vw 0.2vw 0 #000', '0.7vw 0.7vw 0 #000'] }}
        transition={{ duration: 1.6, repeat: Infinity, times: [0, 0.35, 0.6, 1] }}
      >
        ¡Probalo ahora! →
      </motion.button>
      <motion.div
        className="neo-card"
        style={{ right: '12vw', bottom: '12vw', width: '14vw', height: '14vw', borderRadius: '50%', background: '#4d7cff', display: 'grid', placeItems: 'center', color: '#fff', fontSize: '2.4vw', textAlign: 'center', lineHeight: 1 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      >
        100%<br />RAW
      </motion.div>
      <div className="neo-strip" style={{ bottom: '4.5vw' }}>
        <div>
          {'NEOBRUTALISM ✱ SIN FILTROS ✱ SOMBRAS DURAS ✱ '.repeat(10)}
        </div>
      </div>
    </StyleStage>
  );
}
