import { motion } from 'motion/react';
import { Frame, Step, useStep, type SlideMeta } from '../../deck';

export const meta: SlideMeta = {
  title: 'Build · barras',
  seccion: 'Builds · 05',
  variante: 'corte',
  steps: 6,
};

const BARS = [
  { label: 'Ene', value: 22 },
  { label: 'Feb', value: 34 },
  { label: 'Mar', value: 31 },
  { label: 'Abr', value: 58 },
  { label: 'May', value: 86 },
] as const;

export default function BuildBarras() {
  const step = useStep();
  return (
    <Frame meta={meta} isCentered>
      <p className="portada-kicker reveal">
        <span className="pk-num">05</span>
        <span>Mes a mes</span>
      </p>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', gap: '2.2vw', height: '40vh', marginTop: '4vh', borderBottom: '2px solid var(--color-fg)' }}>
        {BARS.map((bar, index) => {
          const isShown = step >= index + 1;
          const isLatest = index === BARS.length - 1;
          return (
            <div key={bar.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', height: '100%' }}>
              <motion.span
                className="c-dato"
                animate={{ opacity: isShown ? 1 : 0, y: isShown ? 0 : 12 }}
                transition={{ delay: isShown ? 0.45 : 0 }}
                style={{ margin: 0, padding: 0, fontSize: 'clamp(16px, 2vw, 40px)' }}
              >
                {bar.value}
              </motion.span>
              <motion.div
                style={{ width: '100%', height: `${bar.value}%`, transformOrigin: 'bottom', background: isLatest ? 'var(--color-acento)' : 'rgba(246,241,231,0.85)', borderRadius: '6px 6px 0 0' }}
                animate={{ scaleY: isShown ? 1 : 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 16 }}
              />
              <span className="head-meta" style={{ position: 'absolute', bottom: '-3.2vh' }} />
            </div>
          );
        })}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'visible' }} fill="none" stroke="var(--color-acento)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <motion.path
            d="M10 66 L30 54 L50 57 L70 30 L90 3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: step >= 6 ? 1 : 0 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
          />
        </svg>
      </div>
      <div style={{ display: 'flex', gap: '2.2vw', marginTop: '1.2vh' }}>
        {BARS.map((bar) => (
          <span key={bar.label} className="head-meta" style={{ flex: 1, textAlign: 'center' }}>{bar.label}</span>
        ))}
      </div>
      <Step at={6} effect="stamp" style={{ position: 'absolute', right: 0, top: '8%' }}>
        <div className="hand" style={{ fontSize: 'clamp(30px, 4vw, 80px)' }}>×4 en cinco meses</div>
      </Step>
    </Frame>
  );
}
