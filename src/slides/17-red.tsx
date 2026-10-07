import { Frame, MaskWords, NetworkCanvas, type SlideMeta } from '../deck';

export const meta: SlideMeta = {
  title: 'Red de partículas',
  seccion: 'Efectos · 08',
  variante: 'corte',
  transition: 'fade',
};

export default function Red() {
  return (
    <Frame meta={meta} isCentered backdrop={<NetworkCanvas />}>
      <p className="portada-kicker reveal">
        <span className="pk-num">08</span>
        <span>Moví el mouse</span>
      </p>
      <h2 className="display mt-m" style={{ fontSize: 'var(--fs-section)', pointerEvents: 'none' }}>
        <MaskWords text="Todo está" delay={0.4} />
        <br />
        <MaskWords text="conectado." delay={0.7} accentFrom={0} />
      </h2>
    </Frame>
  );
}
