import { Frame, type SlideMeta } from '../../deck';
import { Marquee } from '../../kit';

export const meta: SlideMeta = {
  title: 'Marquesina infinita',
  seccion: 'Efectos · 04',
  variante: 'corte',
  transition: 'slide',
};

export default function MarqueeSlide() {
  return (
    <Frame meta={meta} isCentered>
      <div className="reveal" style={{ margin: '0 calc(var(--pad) * -1)' }}>
        <Marquee words={['idea', 'prompt', 'prototipo', 'iterar']} durationSeconds={26} />
        <Marquee words={['mover', 'probar', 'mostrar', 'decidir']} durationSeconds={34} isReversed />
        <Marquee words={['diseño', 'código', 'datos', 'criterio']} durationSeconds={22} />
      </div>
    </Frame>
  );
}
