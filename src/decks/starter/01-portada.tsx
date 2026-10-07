import { MaskWords, type SlideMeta } from '../../deck';
import { ThemedChip, ThemedSlide } from '../../kit';

export const meta: SlideMeta = { title: 'Portada', seccion: 'Starter', transition: 'fade' };

export default function Portada() {
  return (
    <ThemedSlide theme="kinetic" kicker="Deck de ejemplo · 2026" title={<MaskWords text="Armá tu charla con piezas" delay={0.3} accentFrom={3} />}>
      <p className="sub reveal mt-m" style={{ maxWidth: '40ch', fontFamily: 'var(--font-body)' }}>
        Cada slide elige un tema, un layout y, si hace falta, un efecto. Nada se dibuja desde cero.
      </p>
      <div className="chips reveal mt-m">
        <ThemedChip>20 temas</ThemedChip>
        <ThemedChip>Builds por paso</ThemedChip>
        <ThemedChip>Efectos reutilizables</ThemedChip>
      </div>
    </ThemedSlide>
  );
}
