import { Frame, type SlideMeta } from '../deck';

export const meta: SlideMeta = {
  title: 'Los números',
  seccion: 'Bloque 2',
  transition: 'zoom',
};

export default function Datos() {
  return (
    <Frame meta={meta} isCentered>
      <div className="dato-grande reveal">
        10×
        <small>más rápido para llegar al primer boceto</small>
      </div>
      <div className="stats reveal mt-l">
        <div className="stat">
          <div className="s-num acc">3</div>
          <div className="s-lbl">Direcciones por ronda</div>
        </div>
        <div className="stat">
          <div className="s-num">12</div>
          <div className="s-lbl">Iteraciones por tarde</div>
        </div>
        <div className="stat">
          <div className="s-num">0</div>
          <div className="s-lbl">Hojas en blanco</div>
        </div>
      </div>
    </Frame>
  );
}
