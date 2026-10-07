import { motion } from 'motion/react';
import { Frame, Step, useStep, type SlideMeta } from '../../deck';

export const meta: SlideMeta = {
  title: 'Build · arquitectura',
  seccion: 'Builds · 02',
  variante: 'corte',
  steps: 5,
};

function Arrow({ at }: { at: number }) {
  const step = useStep();
  return (
    <svg viewBox="0 0 100 20" style={{ width: '100%', height: '3vw', overflow: 'visible' }} fill="none" stroke="var(--color-acento)" strokeWidth="3" strokeLinecap="round">
      <motion.path d="M2 10H92M80 2L94 10L80 18" initial={{ pathLength: 0 }} animate={{ pathLength: step >= at ? 1 : 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} />
    </svg>
  );
}

export default function BuildArquitectura() {
  return (
    <Frame meta={meta} isCentered>
      <p className="portada-kicker reveal">
        <span className="pk-num">02</span>
        <span>Arquitectura en capas</span>
      </p>
      <div
        className="mt-l"
        style={{ display: 'grid', gridTemplateColumns: '1fr 0.45fr 1fr 0.45fr 1.2fr 0.45fr 1fr', alignItems: 'center' }}
      >
        <Step at={1} effect="pop"><div className="build-box">Cliente<small>app / web</small></div></Step>
        <Arrow at={2} />
        <Step at={2} effect="pop"><div className="build-box">Gateway<small>auth · rutas</small></div></Step>
        <Arrow at={3} />
        <Step at={3} effect="pop">
        <div className="build-box" style={{ alignItems: 'stretch' }}>
          Servicios
          {['Usuarios', 'Pagos', 'Eventos'].map((name, index) => (
            <Step key={name} at={3} effect="drop" delay={index * 0.12}>
              <div className="chip" style={{ textAlign: 'center', fontSize: 'clamp(11px, 1.1vw, 22px)' }}>{name}</div>
            </Step>
          ))}
        </div>
        </Step>
        <Arrow at={4} />
        <Step at={4} effect="pop"><div className="build-box hot">Base de datos<small>fuente de verdad</small></div></Step>
      </div>
      <Step at={5} effect="wipe" className="mt-l">
        <div className="build-box hot" style={{ flexDirection: 'row', justifyContent: 'center', gap: '1.4vw' }}>
          Cola de eventos <small>todo en tiempo real, sin acoplar los servicios</small>
        </div>
      </Step>
    </Frame>
  );
}
