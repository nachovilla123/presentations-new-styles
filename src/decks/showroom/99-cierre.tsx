import { Burbujas, CroquisOnda, Frame, type SlideMeta } from '../../deck';

export const meta: SlideMeta = {
  title: 'Gracias',
  seccion: 'Cierre',
  variante: 'corte',
  transition: 'curtain',
};

export default function Cierre() {
  return (
    <Frame
      meta={meta}
      isCentered
      backdrop={
        <>
          <Burbujas />
          <CroquisOnda style={{ bottom: '8%', right: '6%' }} />
        </>
      }
    >
      <h2 className="display reveal" style={{ fontSize: 'var(--fs-cover)' }}>
        Gracias<span className="accent">.</span>
      </h2>
      <p className="hand reveal mt-m" style={{ fontSize: 'clamp(28px, 3.3vw, 64px)' }}>
        ¿Preguntas? tu@email.com
      </p>
    </Frame>
  );
}
