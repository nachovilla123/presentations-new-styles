import { Frame, type SlideMeta } from '../deck';

export const meta: SlideMeta = {
  title: 'Antes y después',
  seccion: 'Bloque 2',
  hasGrid: true,
};

export default function Versus() {
  return (
    <Frame meta={meta} isCentered>
      <h2 className="display reveal" style={{ fontSize: 'var(--fs-title)' }}>
        Antes <span className="accent">vs.</span> ahora
      </h2>
      <div className="two-col reveal mt-l">
        <div>
          <p className="col-head bad">Proceso clásico</p>
          <div className="card">
            <ul className="c-list">
              <li>Brief en un documento largo</li>
              <li>Dos semanas hasta el primer boceto</li>
              <li>Cambios = volver a empezar</li>
            </ul>
          </div>
        </div>
        <div>
          <p className="col-head good">Con IA generativa</p>
          <div className="card acc">
            <ul className="c-list">
              <li>Brief como conversación</li>
              <li>Primer boceto en minutos</li>
              <li>Cambios = otra vuelta del ciclo</li>
            </ul>
          </div>
        </div>
      </div>
    </Frame>
  );
}
