import { Frame, Odometer, Step, useStep, type SlideMeta } from '../../deck';

export const meta: SlideMeta = {
  title: 'Build · métricas',
  seccion: 'Builds · 08',
  variante: 'corte',
  steps: 4,
};

const KPIS = [
  { value: '128', label: 'Prototipos' },
  { value: '94%', label: 'Aprobados' },
  { value: '3.2×', label: 'Más rápido' },
] as const;

export default function BuildMetricas() {
  const step = useStep();
  return (
    <Frame meta={meta} isCentered>
      <p className="portada-kicker reveal">
        <span className="pk-num">08</span>
        <span>Resultados</span>
      </p>
      <div className="mt-l" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2vw' }}>
        {KPIS.map((kpi, index) => (
          <Step key={kpi.label} at={index + 1} effect="blur">
            <div className="dato-grande" style={{ minHeight: '1em', fontSize: 'clamp(54px, 8vw, 150px)' }}>
              {/* Mounted only once revealed, so the odometer rolls at that moment. */}
              {step >= index + 1 && <Odometer value={kpi.value} />}
              <small>{kpi.label}</small>
            </div>
          </Step>
        ))}
      </div>
      <Step at={4} effect="wipe" className="mt-l">
        <p className="quote">Más iteraciones, mejores decisiones.</p>
      </Step>
    </Frame>
  );
}
