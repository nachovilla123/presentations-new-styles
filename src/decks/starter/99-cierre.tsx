import type { SlideMeta } from '../../deck';
import { ThemedSlide } from '../../kit';

export const meta: SlideMeta = { title: 'Gracias', seccion: 'Cierre', transition: 'curtain' };

export default function Cierre() {
  return (
    <ThemedSlide theme="y2k" kicker="Fin" title="Gracias ✦">
      <p className="sub mt-m" style={{ fontFamily: 'var(--font-body)' }}>Cambiá el tema de cada slide con una sola palabra.</p>
    </ThemedSlide>
  );
}
