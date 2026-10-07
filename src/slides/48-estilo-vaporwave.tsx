import { StyleStage, type SlideMeta } from '../deck';

export const meta: SlideMeta = { title: 'Estilo · Vaporwave', seccion: 'Estilos · 16', transition: 'fade' };

function Column() {
  return (
    <svg viewBox="0 0 80 220" style={{ width: '9vw' }}>
      <rect x="6" y="6" width="68" height="14" fill="#f3e8ff" stroke="#b967ff" strokeWidth="2" />
      <rect x="14" y="20" width="52" height="8" fill="#e5d4ff" />
      {[18, 30, 42, 54].map((x) => (
        <rect key={x} x={x} y="28" width="9" height="150" fill="#f3e8ff" stroke="#b967ff" strokeWidth="1.5" />
      ))}
      <rect x="14" y="178" width="52" height="8" fill="#e5d4ff" />
      <rect x="6" y="186" width="68" height="14" fill="#f3e8ff" stroke="#b967ff" strokeWidth="2" />
    </svg>
  );
}

export default function EstiloVaporwave() {
  return (
    <StyleStage number="16" name="Vaporwave" background="linear-gradient(180deg, #2b0f54 0%, #b967ff 30%, #ff71ce 58%, #fffb96 62%, #2a1160 62%)" color="#fff" fontFamily="'VT323', monospace">
      <div style={{ position: 'absolute', left: '50%', bottom: '36%', width: '26vw', height: '26vw', marginLeft: '-13vw', borderRadius: '50%', background: 'linear-gradient(180deg, #fffb96, #ff71ce 70%, #b967ff)', filter: 'drop-shadow(0 0 3vw rgb(255 113 206 / 0.7))', animation: 'sun-pulse 5s ease-in-out infinite' }} />
      <div className="vapor-floor" />
      <div style={{ position: 'absolute', left: '8vw', bottom: '24vw', animation: 'vapor-bob 6s ease-in-out infinite' }}>
        <Column />
      </div>
      <div className="win95" style={{ right: '6vw', top: '19vw', width: '26vw', animation: 'vapor-bob 7s ease-in-out -2s infinite' }}>
        <div className="win95-bar">
          <span>aesthetic.exe</span>
          <span>▫ ✕</span>
        </div>
        <div style={{ padding: '1.2vw', fontSize: '2vw', lineHeight: 1.1 }}>
          Instalando nostalgia…
          <div style={{ marginTop: '0.8vw', height: '1.6vw', border: '2px inset #fff', background: '#fff' }}>
            <div style={{ width: '68%', height: '100%', background: 'repeating-linear-gradient(90deg, #000080 0 1.2vw, #fff 1.2vw 1.4vw)' }} />
          </div>
        </div>
      </div>
      <h1 style={{ position: 'absolute', left: 0, right: 0, top: '6vw', margin: 0, textAlign: 'center', fontSize: '9vw', letterSpacing: '0.12em', color: '#fff', textShadow: '0.4vw 0.4vw 0 #ff71ce, -0.4vw -0.4vw 0 #01cdfe' }}>
        ＶＡＰＯＲＷＡＶＥ
      </h1>
    </StyleStage>
  );
}
