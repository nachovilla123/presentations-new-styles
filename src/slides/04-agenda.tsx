import { Frame, type SlideMeta } from '../deck';

export const meta: SlideMeta = {
  title: 'Agenda',
  seccion: 'Bloque 1',
  hasGrid: true,
};

const topics = [
  { tag: '01', title: 'El problema', body: 'Por qué el proceso actual <b>se queda corto</b> cuando hay que iterar rápido.' },
  { tag: '02', title: 'El flujo con IA', body: 'De la idea al prototipo en <b>un solo ciclo</b> de conversación.' },
  { tag: '03', title: 'Demo en vivo', body: 'Prompt, resultado, iteración. <b>Sin red.</b>' },
];

export default function Agenda() {
  return (
    <Frame meta={meta} isCentered>
      <p className="eyebrow reveal">Lo que vamos a ver</p>
      <h2 className="display reveal mt-s" style={{ fontSize: 'var(--fs-title)' }}>
        Agenda
      </h2>
      <div className="cards reveal mt-l" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {topics.map((topic, index) => (
          <div key={topic.tag} className={`card${index === 2 ? ' acc' : ''}`}>
            <span className="c-tag">{topic.tag}</span>
            <span className="c-title">{topic.title}</span>
            <span className="c-body" dangerouslySetInnerHTML={{ __html: topic.body }} />
          </div>
        ))}
      </div>
    </Frame>
  );
}
