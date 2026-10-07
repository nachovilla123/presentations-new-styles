import { StyleStage, type SlideMeta } from '../../deck';

export const meta: SlideMeta = { title: 'Estilo · Synthwave', seccion: 'Estilos · 08', transition: 'curtain' };

const STARS = Array.from({ length: 36 }, (_, index) => ({
  left: (index * 37) % 100,
  top: (index * 23) % 52,
  size: 1 + (index % 3),
  delay: (index % 7) * 0.4,
}));

export default function EstiloSynthwave() {
  return (
    <StyleStage number="08" name="Synthwave" background="linear-gradient(180deg, #0d0221 0%, #3b0a6e 38%, #c2185b 64%, #ff6b35 66%, #12002b 66%)" color="#fff">
      {STARS.map((star, index) => (
        <i key={index} style={{ position: 'absolute', left: `${star.left}%`, top: `${star.top}%`, width: star.size, height: star.size, borderRadius: '50%', background: '#fff', animation: `twinkle 3s ease-in-out ${star.delay}s infinite` }} />
      ))}
      <div className="synth-sun" />
      <svg viewBox="0 0 1600 300" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, right: 0, bottom: '34%', width: '100%', height: '18%' }}>
        <polygon points="0,300 0,190 150,70 260,170 400,40 560,200 700,120 820,220 980,60 1130,190 1280,90 1430,200 1600,110 1600,300" fill="#12002b" stroke="#ff2bd6" strokeWidth="3" />
      </svg>
      <div className="synth-floor" />
      <div style={{ position: 'absolute', left: 0, right: 0, top: '7%', textAlign: 'center' }}>
        <h1 className="neon" style={{ margin: 0, fontSize: '9vw', letterSpacing: '0.12em' }}>SYNTHWAVE</h1>
        <p style={{ margin: '0.6vw 0 0', fontFamily: "'Orbitron', sans-serif", fontSize: '1.6vw', letterSpacing: '0.6em', color: '#39f0ff', textShadow: '0 0 1vw #39f0ff' }}>RETRO · FUTURE · 1985</p>
      </div>
    </StyleStage>
  );
}
