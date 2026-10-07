import { ParticleText, StyleStage, type SlideMeta } from '../../deck';

export const meta: SlideMeta = { title: 'Estilo · Particles', seccion: 'Estilos · 12', transition: 'fade' };

export default function EstiloParticulas() {
  return (
    <StyleStage number="12" name="Particles" background="radial-gradient(circle at 50% 50%, #14122b, #05040f)" color="#fff">
      <ParticleText text="PARTÍCULAS" />
      <p style={{ position: 'absolute', left: 0, right: 0, bottom: '9vw', margin: 0, textAlign: 'center', fontFamily: 'var(--font-code)', fontSize: '1.05vw', letterSpacing: '0.3em', opacity: 0.6, pointerEvents: 'none' }}>
        MOVÉ EL MOUSE PARA DISPERSARLAS · SE REARMAN SOLAS
      </p>
    </StyleStage>
  );
}
