import type { SlideMeta } from '../../deck';
import { BeforeAfter, ThemedSlide } from '../../kit';

export const meta: SlideMeta = { title: 'Antes y después', seccion: 'Starter', transition: 'fade' };

function Panel({ isPolished }: { isPolished: boolean }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', background: isPolished ? '#14120e' : '#fbf9f4', color: isPolished ? '#f6f1e7' : '#9a948a', fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: '4vw', letterSpacing: '-0.03em' }}>
      {isPolished ? 'Con diseño' : 'Sin diseño'}
    </div>
  );
}

export default function AntesDespues() {
  return (
    <ThemedSlide theme="line-art" kicker="Comparación" title="Del boceto al final">
      <div className="mt-m" style={{ width: 'min(52vw, 90vh)' }}>
        <BeforeAfter before={<Panel isPolished={false} />} after={<Panel isPolished />} beforeLabel="Antes" afterLabel="Después" />
      </div>
    </ThemedSlide>
  );
}
