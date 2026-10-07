import { Frame, Step, type StepEffect, type SlideMeta } from '../deck';

export const meta: SlideMeta = {
  title: 'Build · lista que se arma',
  seccion: 'Builds · 01',
  hasGrid: true,
  steps: 5,
};

const ROWS: ReadonlyArray<{ title: string; note: string; effect: StepEffect }> = [
  { title: 'Entender el problema', note: 'Antes de abrir cualquier herramienta.', effect: 'left' },
  { title: 'Definir qué resolver', note: 'Una frase, no un documento.', effect: 'right' },
  { title: 'Explorar direcciones', note: 'Tres caminos distintos, rápido.', effect: 'pop' },
  { title: 'Prototipar con IA', note: 'De la idea a algo que se toca.', effect: 'drop' },
  { title: 'Validar con personas', note: 'La opinión que importa es la ajena.', effect: 'blur' },
];

export default function BuildLista() {
  return (
    <Frame meta={meta} isCentered>
      <p className="eyebrow reveal">Presioná siguiente</p>
      <h2 className="display reveal mt-s" style={{ fontSize: 'var(--fs-title)' }}>
        Cinco pasos, <span className="accent">de a uno</span>
      </h2>
      <div className="mt-m" style={{ display: 'flex', flexDirection: 'column', gap: '1.1vh' }}>
        {ROWS.map((row, index) => (
          <Step key={row.title} at={index + 1} effect={row.effect} isDimmedWhenPast>
            <div className="card" style={{ flexDirection: 'row', alignItems: 'center', gap: '1.6vw', padding: '1vw 1.5vw' }}>
              <span className="c-dato" style={{ margin: 0, padding: 0, minWidth: '3vw' }}>{String(index + 1).padStart(2, '0')}</span>
              <span className="c-title" style={{ flex: '0 0 26vw' }}>{row.title}</span>
              <span className="c-body">{row.note}</span>
            </div>
          </Step>
        ))}
      </div>
    </Frame>
  );
}
