import { Frame, type SlideMeta } from '../../deck';
import { Ring3D } from '../../kit';

export const meta: SlideMeta = {
  title: 'Anillo 3D',
  seccion: 'Efectos · 07',
  hasGrid: true,
  transition: 'flip',
};

const CARDS = [
  { tag: '01', title: 'Investigar', body: 'Entender el problema' },
  { tag: '02', title: 'Definir', body: 'Elegir qué resolver' },
  { tag: '03', title: 'Idear', body: 'Explorar sin miedo' },
  { tag: '04', title: 'Prototipar', body: 'Hacerlo tangible' },
  { tag: '05', title: 'Probar', body: 'Aprender rápido' },
  { tag: '06', title: 'Entregar', body: 'Llevarlo a producción' },
] as const;

export default function Anillo3d() {
  return (
    <Frame meta={meta} isCentered>
      <p className="eyebrow reveal">Carrusel en perspectiva</p>
      <h2 className="display reveal mt-s" style={{ fontSize: 'var(--fs-title)' }}>
        Un proceso que <span className="accent">gira</span>
      </h2>
      <div className="reveal mt-m">
        <Ring3D
          items={CARDS.map((card) => (
            <>
              <span className="c-tag">{card.tag}</span>
              <div>
                <span className="c-title" style={{ display: 'block' }}>{card.title}</span>
                <span className="c-body">{card.body}</span>
              </div>
            </>
          ))}
        />
      </div>
    </Frame>
  );
}
