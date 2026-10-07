import { Frame, type SlideMeta } from '../../deck';

export const meta: SlideMeta = {
  title: 'Código que se explica solo',
  seccion: 'Bloque 1',
  transition: 'flip',
};

export default function Codigo() {
  return (
    <Frame meta={meta} isCentered>
      <p className="prompt reveal">Escribí el prompt</p>
      <h2 className="display reveal mt-s" style={{ fontSize: 'var(--fs-title)' }}>
        Del prompt al componente
      </h2>
      <div className="code-panel reveal mt-l" style={{ maxWidth: '62vw' }}>
        <div className="code-bar">
          <i className="dot d1" />
          <i className="dot d2" />
          <i className="dot d3" />
          <span className="path">Hero.tsx</span>
        </div>
        <pre className="code">
          <span className="cm">{'// generado a partir de: "una portada minimal con mucho aire"'}</span>
          {'\n'}
          <span className="kw">export function</span> <span className="fn">Hero</span>() {'{'}
          {'\n  '}
          <span className="kw">return</span> {'('}
          {'\n    <'}
          <span className="pr">h1</span> <span className="pr">className</span>={'='}
          <span className="st">"display"</span>
          {'>Hola<'}/<span className="pr">h1</span>
          {'>'}
          {'\n  )'}
          {'\n}'}
          <span className="term-cur">▋</span>
        </pre>
      </div>
    </Frame>
  );
}
