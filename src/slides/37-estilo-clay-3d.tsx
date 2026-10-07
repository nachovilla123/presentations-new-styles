import { StyleStage, type CssVars, type SlideMeta } from '../deck';

export const meta: SlideMeta = { title: 'Estilo · Clay 3D', seccion: 'Estilos · 05', transition: 'zoom' };

interface ClayShape {
  color: string;
  style: CssVars;
}

const SHAPES: readonly ClayShape[] = [
  { color: '#f4a6c0', style: { left: '10vw', top: '14vw', width: '16vw', height: '16vw', borderRadius: '50%', '--bob': '4.2s' } },
  { color: '#7fd6c2', style: { right: '12vw', top: '9vw', width: '14vw', height: '14vw', borderRadius: '3vw', '--bob': '5s', '--delay': '-1.2s', '--tilt': '12deg' } },
  { color: '#ffd166', style: { right: '22vw', bottom: '6vw', width: '20vw', height: '9vw', borderRadius: '5vw', '--bob': '4.6s', '--delay': '-2s', '--tilt': '-8deg' } },
  { color: '#a78bfa', style: { left: '30vw', bottom: '4vw', width: '9vw', height: '9vw', borderRadius: '50%', '--bob': '3.6s', '--delay': '-0.6s' } },
  { color: '#ff8e72', style: { left: '4vw', bottom: '5vw', width: '12vw', height: '12vw', borderRadius: '4vw 8vw 5vw 6vw', '--bob': '5.4s', '--delay': '-3s', '--tilt': '-10deg' } },
];

export default function EstiloClay3d() {
  return (
    <StyleStage number="05" name="Clay 3D" background="radial-gradient(circle at 30% 20%, #fde7d8, #f6c7b0 70%)" color="#7a3b2e">
      {SHAPES.map((shape, index) => {
        const style: CssVars = { ...shape.style, '--clay': shape.color };
        return <div key={index} className="clay" style={style} />;
      })}
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', pointerEvents: 'none' }}>
        <h1 className="clay-text" style={{ margin: 0, fontSize: '13vw', letterSpacing: '0.01em' }}>
          Clay 3D
        </h1>
      </div>
    </StyleStage>
  );
}
