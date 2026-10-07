import { Frame, type SlideMeta } from '../../deck';

export const meta: SlideMeta = {
  title: 'Una idea para llevarse',
  seccion: 'Bloque 3',
  hasGrid: true,
  transition: 'fade',
};

export default function Cita() {
  return (
    <Frame meta={meta} isCentered>
      <p className="quote reveal">La IA no reemplaza el criterio: lo vuelve más rápido de ejercer.</p>
      <p className="sub reveal mt-m">Decidir qué vale la pena sigue siendo trabajo de diseño.</p>
    </Frame>
  );
}
