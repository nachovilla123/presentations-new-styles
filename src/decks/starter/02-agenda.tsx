import { Step, type SlideMeta } from '../../deck';
import { ThemedCard, ThemedSlide } from '../../kit';

export const meta: SlideMeta = { title: 'Agenda con builds', seccion: 'Starter', steps: 3, transition: 'slide' };

const TOPICS = [
  { tag: '01', title: 'Elegir un tema', body: 'El tono de la charla define el estilo visual.' },
  { tag: '02', title: 'Componer la slide', body: 'Título, tarjetas, números, citas: todo toma el tema.' },
  { tag: '03', title: 'Sumar movimiento', body: 'Builds por paso y efectos solo donde ayudan.' },
] as const;

export default function Agenda() {
  return (
    <ThemedSlide theme="flat" kicker="Presioná siguiente" title="Tres ideas">
      <div className="mt-l" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.6vw' }}>
        {TOPICS.map((topic, index) => (
          <Step key={topic.tag} at={index + 1} effect={index === 1 ? 'drop' : 'rise'}>
            <ThemedCard>
              <span className="c-tag">{topic.tag}</span>
              <span className="c-title">{topic.title}</span>
              <span className="c-body">{topic.body}</span>
            </ThemedCard>
          </Step>
        ))}
      </div>
    </ThemedSlide>
  );
}
