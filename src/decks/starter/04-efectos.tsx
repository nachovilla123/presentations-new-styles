import type { SlideMeta } from '../../deck';
import { Marquee, RollingWords, ScrambleText, ThemedSlide } from '../../kit';

export const meta: SlideMeta = { title: 'Efectos como piezas', seccion: 'Starter', transition: 'zoom' };

export default function Efectos() {
  return (
    <ThemedSlide theme="neobrutalism" kicker="Efectos" title={<>Diseñar <RollingWords words={['rápido', 'mejor', 'en equipo']} color="#ff5fd2" /></>}>
      <p className="body mt-m" style={{ fontFamily: 'var(--font-body)', fontWeight: 700 }}>
        <ScrambleText text="> componentes sueltos, listos para pegar en cualquier slide" delayMs={600} />
      </p>
      <div className="mt-l" style={{ margin: '3vw calc(var(--pad) * -1) 0' }}>
        <Marquee words={['marquee', 'scramble', 'rolling', 'spotlight']} durationSeconds={30} style={{ opacity: 0.9 }} />
      </div>
    </ThemedSlide>
  );
}
