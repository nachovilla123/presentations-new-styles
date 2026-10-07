import { StyleStage, type SlideMeta } from '../../deck';

export const meta: SlideMeta = { title: 'Estilo · Pixel art', seccion: 'Estilos · 17', transition: 'none' };

type Palette = Readonly<Record<string, string>>;

const HEART = ['.##..##.', '########', '########', '########', '.######.', '..####..', '...##...', '........'];
const GHOST = ['..####..', '.######.', '########', '#WB##WB#', '########', '########', '########', '##.##.##'];
const COIN = ['..####..', '.#YYYY#.', '#YY##YY#', '#YY##YY#', '#YY##YY#', '#YY##YY#', '.#YYYY#.', '..####..'];

interface SpriteProps {
  rows: readonly string[];
  palette: Palette;
  size: string;
}

function Sprite({ rows, palette, size }: SpriteProps) {
  return (
    <svg className="pixel" viewBox="0 0 8 8" style={{ width: size, display: 'block' }}>
      {rows.flatMap((row, y) =>
        row.split('').map((cell, x) => (cell === '.' ? null : <rect key={`${x}-${y}`} x={x} y={y} width="1.02" height="1.02" fill={palette[cell] ?? palette['#']} />)),
      )}
    </svg>
  );
}

export default function EstiloPixelArt() {
  return (
    <StyleStage number="17" name="Pixel art" background="#1a1c2c" color="#f4f4f4" fontFamily="'Press Start 2P', monospace">
      <div style={{ position: 'absolute', left: '4vw', top: '3vw', right: '4vw', display: 'flex', justifyContent: 'space-between', fontSize: '1.4vw' }}>
        <span>SCORE 000420</span>
        <span style={{ display: 'flex', gap: '0.8vw' }}>
          {[0, 1, 2].map((life) => (
            <Sprite key={life} rows={HEART} palette={{ '#': '#ff004d' }} size="2.6vw" />
          ))}
        </span>
      </div>
      <h1 style={{ position: 'absolute', left: 0, right: 0, top: '15vw', margin: 0, textAlign: 'center', fontSize: '6.4vw', lineHeight: 1.2, color: '#ffec27', textShadow: '0.5vw 0.5vw 0 #ff004d, 1vw 1vw 0 #1d2b53' }}>
        PIXEL<br />ART
      </h1>
      <p style={{ position: 'absolute', left: 0, right: 0, top: '33vw', margin: 0, textAlign: 'center', fontSize: '1.6vw', animation: 'blink 1s steps(1) infinite' }}>
        ▶ PRESS START
      </p>
      {[14, 34, 62, 80].map((left, index) => (
        <div key={left} style={{ position: 'absolute', left: `${left}%`, top: `${index % 2 ? 40 : 46}%`, animation: `pixel-hop 0.6s steps(1) ${index * 0.15}s infinite` }}>
          <Sprite rows={COIN} palette={{ '#': '#7c5c00', Y: '#ffec27' }} size="3.6vw" />
        </div>
      ))}
      <div style={{ position: 'absolute', bottom: '8.6vw', animation: 'pixel-walk 9s linear infinite' }}>
        <div style={{ animation: 'pixel-hop 0.5s steps(1) infinite' }}>
          <Sprite rows={GHOST} palette={{ '#': '#f4f4f4', W: '#fff', B: '#29adff' }} size="6vw" />
        </div>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '8.6vw', backgroundColor: '#3a8a3a', backgroundImage: 'linear-gradient(90deg, #2d6e2d 4vw, transparent 4vw), linear-gradient(#5fc75f 1.4vw, #8b5a2b 1.4vw)', backgroundSize: '8vw 100%, 100% 100%', animation: 'pixel-ground 1.2s steps(8) infinite' }} />
    </StyleStage>
  );
}
