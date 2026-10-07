import { Frame, type SlideMeta } from '../../deck';

export const meta: SlideMeta = {
  title: 'Ya comenzamos',
  seccion: 'Material',
  hasGrid: true,
  transition: 'zoom',
};

const CELLS = 21;
const FINDER_SIZE = 7;
const FINDER_ORIGINS: ReadonlyArray<readonly [number, number]> = [
  [0, 0],
  [CELLS - FINDER_SIZE, 0],
  [0, CELLS - FINDER_SIZE],
];

function isCellFilled(x: number, y: number): boolean {
  const origin = FINDER_ORIGINS.find(
    ([originX, originY]) => x >= originX && x < originX + FINDER_SIZE && y >= originY && y < originY + FINDER_SIZE,
  );
  if (origin) {
    const localX = x - origin[0];
    const localY = y - origin[1];
    const isOuterRing = localX === 0 || localX === 6 || localY === 0 || localY === 6;
    const isCore = localX >= 2 && localX <= 4 && localY >= 2 && localY <= 4;
    return isOuterRing || isCore;
  }
  return (x * 7 + y * 13 + x * y) % 3 === 0;
}

/** Placeholder shaped like a QR code. Replace it with a real QR image. */
function QrPlaceholder() {
  const filledCells = [];
  for (let y = 0; y < CELLS; y++) {
    for (let x = 0; x < CELLS; x++) {
      if (isCellFilled(x, y)) filledCells.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />);
    }
  }
  return (
    <svg
      viewBox={`-1 -1 ${CELLS + 2} ${CELLS + 2}`}
      style={{ width: '24vw', background: '#f3efe6', padding: '0.4vw' }}
      fill="#14120e"
      shapeRendering="crispEdges"
    >
      {filledCells}
    </svg>
  );
}

export default function ConQr() {
  return (
    <Frame meta={meta} isCentered>
      <div className="con-qr">
        <div className="con-qr-texto">
          <h2 className="display reveal" style={{ fontSize: 'var(--fs-section)' }}>
            Ya
            <br />
            comenzamos
          </h2>
          <div className="con-qr-nota reveal">
            <p>Escaneá el QR para acceder al material</p>
            <div className="con-qr-flecha">
              <svg viewBox="0 0 200 100">
                <path className="draw" pathLength="1" d="M4 8C20 80 100 100 188 52" />
                <path
                  className="draw"
                  pathLength="1"
                  style={{ ['--d' as string]: '1.4s' }}
                  d="M170 38L190 52L168 66"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="reveal">
          <QrPlaceholder />
        </div>
      </div>
    </Frame>
  );
}
