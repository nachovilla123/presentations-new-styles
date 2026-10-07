import { Frame, Step, type SlideMeta } from '../deck';

export const meta: SlideMeta = {
  title: 'Build · comparativa por filas',
  seccion: 'Builds · 07',
  hasGrid: true,
  steps: 5,
};

const ROWS = [
  { topic: 'Primer boceto', before: '2 semanas', now: '20 minutos' },
  { topic: 'Cambios de rumbo', before: 'Empezar de cero', now: 'Otra vuelta del ciclo' },
  { topic: 'Variantes exploradas', before: '1 o 2', now: '10 o más' },
  { topic: 'Costo de equivocarse', before: 'Alto', now: 'Casi nulo' },
] as const;

export default function BuildFilas() {
  return (
    <Frame meta={meta} isCentered>
      <h2 className="display reveal" style={{ fontSize: 'var(--fs-title)' }}>
        Antes <span className="accent">vs.</span> ahora
      </h2>
      <div className="mt-m" style={{ display: 'flex', flexDirection: 'column', gap: '1.2vh' }}>
        {ROWS.map((row, index) => (
          <div key={row.topic} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.4vw', alignItems: 'stretch' }}>
            <Step at={index + 1} effect="rise">
              <div className="card" style={{ height: '100%', justifyContent: 'center' }}>
                <span className="c-title">{row.topic}</span>
              </div>
            </Step>
            <Step at={index + 1} effect="left" delay={0.15}>
              <div className="card" style={{ height: '100%', justifyContent: 'center', opacity: 0.8 }}>
                <span className="c-body">{row.before}</span>
              </div>
            </Step>
            <Step at={index + 1} effect="right" delay={0.3}>
              <div className="card acc" style={{ height: '100%', justifyContent: 'center' }}>
                <span className="c-title" style={{ color: 'var(--color-acento)' }}>{row.now}</span>
              </div>
            </Step>
          </div>
        ))}
      </div>
      <Step at={5} effect="wipe" className="mt-m">
        <p className="hand" style={{ margin: 0, fontSize: 'clamp(28px, 3.4vw, 68px)' }}>Gana la conversación. →</p>
      </Step>
    </Frame>
  );
}
