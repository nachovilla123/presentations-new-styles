import { Burbujas, CroquisCiclo, CroquisOnda, Frame, type SlideMeta } from '../deck';

export const meta: SlideMeta = {
  title: 'Portada',
  seccion: 'Charla · 2026',
  variante: 'corte',
  transition: 'fade',
  notes: 'Presentate y contá en una frase de qué va la charla.',
};

export default function Portada() {
  return (
    <Frame
      meta={meta}
      isCentered
      backdrop={
        <>
          <Burbujas />
          <CroquisCiclo style={{ top: '14%', right: '8%' }} />
          <CroquisOnda style={{ bottom: '8%', left: '6%' }} />
        </>
      }
    >
      <p className="portada-kicker reveal">
        <span className="pk-num">01</span>
        <span>Charla abierta</span>
      </p>
      <h1 className="display portada-title reveal mt-m">Diseñar con IA generativa</h1>
      <p className="sub portada-sub reveal mt-m">
        Una presentación hecha como app de React: cada diapositiva es un archivo, y el estilo vive en un solo tema.
      </p>
      <div className="chips portada-beats reveal mt-l">
        <span className="chip">Idea</span>
        <span className="chip">Prompt</span>
        <span className="chip acento">Prototipo</span>
      </div>
    </Frame>
  );
}
