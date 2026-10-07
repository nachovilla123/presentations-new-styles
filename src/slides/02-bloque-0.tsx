import { Burbujas, CroquisCiclo, Frame, type SlideMeta } from '../deck';

export const meta: SlideMeta = {
  title: 'Les damos la bienvenida',
  seccion: 'Bloque 0',
  variante: 'corte',
  transition: 'curtain',
};

export default function Bloque0() {
  return (
    <Frame
      meta={meta}
      isCentered
      backdrop={
        <>
          <Burbujas />
          <CroquisCiclo style={{ top: '16%', right: '10%' }} />
        </>
      }
    >
      <p className="portada-kicker reveal">
        <span className="pk-num" style={{ padding: '0.3em 0.9em' }} />
        <span>Bloque 0</span>
      </p>
      <h2 className="display reveal mt-m" style={{ fontSize: 'var(--fs-section)' }}>
        Les damos la bienvenida
      </h2>
    </Frame>
  );
}
