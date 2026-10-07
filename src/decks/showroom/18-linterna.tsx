import { Frame, type SlideMeta } from '../../deck';
import { Spotlight } from '../../kit';

export const meta: SlideMeta = {
  title: 'Linterna',
  seccion: 'Efectos · 09',
  variante: 'corte',
  transition: 'zoom',
};

export default function Linterna() {
  return (
    <Frame meta={meta} isCentered>
      <Spotlight>
        <p className="spot-text">
          Lo <span className="accent">importante</span>
          <br />
          aparece donde
          <br />
          mirás.
        </p>
      </Spotlight>
    </Frame>
  );
}
