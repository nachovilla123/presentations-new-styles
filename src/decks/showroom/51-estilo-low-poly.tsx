import { StyleStage, type SlideMeta } from '../../deck';
import { LowPolyMesh } from '../../kit';

export const meta: SlideMeta = { title: 'Estilo · Low poly', seccion: 'Estilos · 19', transition: 'flip' };

export default function EstiloLowPoly() {
  return (
    <StyleStage number="19" name="Low poly" background="#0b1a45" color="#fff" fontFamily="'Poppins', sans-serif">
      <LowPolyMesh />
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', textAlign: 'center' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '11vw', lineHeight: 0.9, fontWeight: 800, letterSpacing: '-0.04em', textShadow: '0 1vw 3vw rgb(0 0 40 / 0.5)' }}>LOW POLY</h1>
          <p style={{ margin: '1.4vw 0 0', fontSize: '1.7vw', letterSpacing: '0.4em', textTransform: 'uppercase', opacity: 0.85 }}>Pocas caras · mucha forma</p>
        </div>
      </div>
    </StyleStage>
  );
}
