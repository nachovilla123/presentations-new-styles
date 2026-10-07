import { StyleStage, type CssVars, type SlideMeta } from '../deck';

export const meta: SlideMeta = { title: 'Estilo · Low poly', seccion: 'Estilos · 19', transition: 'flip' };

const COLUMNS = 14;
const ROWS = 8;
const WIDTH = 1600;
const HEIGHT = 900;

/** Small deterministic pseudo-random generator so the mesh is stable between renders. */
function createRandom(seed: number): () => number {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

interface Point {
  x: number;
  y: number;
}

const random = createRandom(7);
const points: Point[][] = Array.from({ length: ROWS + 1 }, (_, row) =>
  Array.from({ length: COLUMNS + 1 }, (_, col) => {
    const isEdge = row === 0 || col === 0 || row === ROWS || col === COLUMNS;
    const jitter = isEdge ? 0 : 52;
    return {
      x: (col / COLUMNS) * WIDTH + (random() - 0.5) * jitter * 2 * (col === 0 || col === COLUMNS ? 0 : 1),
      y: (row / ROWS) * HEIGHT + (random() - 0.5) * jitter * 2 * (row === 0 || row === ROWS ? 0 : 1),
    };
  }),
);

/** Colour ramp from deep blue through cyan to mint, shaded per triangle. */
function colorAt(x: number, y: number, shade: number): string {
  const t = Math.min(1, Math.max(0, (x / WIDTH) * 0.6 + (y / HEIGHT) * 0.4));
  const hue = 225 - t * 80;
  return `hsl(${hue}, ${70 + shade * 20}%, ${28 + t * 28 + shade * 14}%)`;
}

interface Triangle {
  points: string;
  fill: string;
  style: CssVars;
}

const triangles: Triangle[] = [];
for (let row = 0; row < ROWS; row++) {
  for (let col = 0; col < COLUMNS; col++) {
    const a = points[row][col];
    const b = points[row][col + 1];
    const c = points[row + 1][col];
    const d = points[row + 1][col + 1];
    for (const vertices of [[a, b, c], [b, d, c]] as const) {
      const centerX = (vertices[0].x + vertices[1].x + vertices[2].x) / 3;
      const centerY = (vertices[0].y + vertices[1].y + vertices[2].y) / 3;
      triangles.push({
        points: vertices.map((vertex) => `${vertex.x},${vertex.y}`).join(' '),
        fill: colorAt(centerX, centerY, random()),
        style: { '--dur': `${3 + random() * 5}s`, '--delay': `${-random() * 6}s` },
      });
    }
  }
}

export default function EstiloLowPoly() {
  return (
    <StyleStage number="19" name="Low poly" background="#0b1a45" color="#fff" fontFamily="'Poppins', sans-serif">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        {triangles.map((triangle, index) => (
          <polygon key={index} className="lp-tri" points={triangle.points} fill={triangle.fill} stroke={triangle.fill} strokeWidth="1" style={triangle.style} />
        ))}
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', textAlign: 'center' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '11vw', lineHeight: 0.9, fontWeight: 800, letterSpacing: '-0.04em', textShadow: '0 1vw 3vw rgb(0 0 40 / 0.5)' }}>LOW POLY</h1>
          <p style={{ margin: '1.4vw 0 0', fontSize: '1.7vw', letterSpacing: '0.4em', textTransform: 'uppercase', opacity: 0.85 }}>Pocas caras · mucha forma</p>
        </div>
      </div>
    </StyleStage>
  );
}
