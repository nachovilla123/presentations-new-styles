import { Frame, Step, type SlideMeta, type StepEffect } from '../deck';

export const meta: SlideMeta = {
  title: 'Build · collage y sello',
  seccion: 'Builds · 03',
  hasGrid: true,
  steps: 5,
};

const CARDS: ReadonlyArray<{ title: string; note: string; effect: StepEffect; tilt: number; left: string; top: string }> = [
  { title: 'Brief', note: 'El problema en una frase', effect: 'left', tilt: -4, left: '2%', top: '4%' },
  { title: 'Moodboard', note: 'Referencias que inspiran', effect: 'drop', tilt: 3, left: '30%', top: '0%' },
  { title: 'Wireframe', note: 'Estructura sin distracción', effect: 'right', tilt: -2, left: '58%', top: '6%' },
  { title: 'Prototipo', note: 'Clickeable y real', effect: 'pop', tilt: 4, left: '16%', top: '46%' },
];

export default function BuildCollage() {
  return (
    <Frame meta={meta} isCentered>
      <div style={{ position: 'relative', height: '58vh' }}>
        {CARDS.map((card, index) => (
          <Step key={card.title} at={index + 1} effect={card.effect} style={{ position: 'absolute', left: card.left, top: card.top, width: '26%', rotate: `${card.tilt}deg` }}>
            <div className="card" style={{ background: '#fbf9f4', boxShadow: '0 22px 40px -26px #14120e' }}>
              <span className="c-tag">{String(index + 1).padStart(2, '0')}</span>
              <span className="c-title">{card.title}</span>
              <span className="c-body">{card.note}</span>
            </div>
          </Step>
        ))}
        <Step at={5} effect="stamp" style={{ position: 'absolute', right: '8%', bottom: '4%' }}>
          <div
            className="display"
            style={{ padding: '0.1em 0.4em', border: '6px solid var(--color-acento)', borderRadius: 14, fontSize: 'clamp(40px, 6vw, 110px)', color: 'var(--color-acento)', letterSpacing: '0.02em' }}
          >
            APROBADO
          </div>
        </Step>
      </div>
    </Frame>
  );
}
