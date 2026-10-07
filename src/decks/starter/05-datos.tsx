import { Odometer, Step, useStep, type SlideMeta } from '../../deck';
import { ThemedSlide, ThemedStat } from '../../kit';

export const meta: SlideMeta = { title: 'Datos con builds', seccion: 'Starter', steps: 3, transition: 'curtain' };

const STATS = [
  { value: '128', label: 'Prototipos' },
  { value: '94%', label: 'Aprobados' },
  { value: '3.2×', label: 'Más rápido' },
] as const;

export default function Datos() {
  const step = useStep();
  return (
    <ThemedSlide theme="synthwave" kicker="Resultados" title="Los números, de a uno">
      <div className="mt-l" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2vw' }}>
        {STATS.map((stat, index) => (
          <Step key={stat.label} at={index + 1} effect="blur">
            {/* Mounted only once revealed, so the odometer rolls at that moment. */}
            <ThemedStat value={step >= index + 1 ? <Odometer value={stat.value} delay={0.3} /> : <span style={{ visibility: 'hidden' }}>{stat.value}</span>} label={stat.label} />
          </Step>
        ))}
      </div>
    </ThemedSlide>
  );
}
