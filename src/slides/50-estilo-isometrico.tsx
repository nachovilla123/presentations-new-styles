import { motion } from 'motion/react';
import { StyleStage, type SlideMeta } from '../deck';

export const meta: SlideMeta = { title: 'Estilo · Isometric', seccion: 'Estilos · 18', transition: 'zoom' };

const TILE_WIDTH = 150;
const TILE_HEIGHT = 75;
const GRID = 5;
const HEIGHTS = [
  [40, 90, 60, 130, 50],
  [110, 50, 160, 70, 100],
  [60, 140, 40, 120, 80],
  [150, 70, 100, 50, 170],
  [50, 110, 80, 150, 60],
] as const;
const PALETTES = [
  { top: '#ffd166', left: '#e8a93c', right: '#c98a22' },
  { top: '#7fd6c2', left: '#4aa393', right: '#35806f' },
  { top: '#ff8e72', left: '#d9644a', right: '#b04a34' },
  { top: '#a78bfa', left: '#7c5fd6', right: '#5d44ad' },
] as const;

interface Tower {
  id: string;
  cx: number;
  cy: number;
  height: number;
  depth: number;
  palette: (typeof PALETTES)[number];
}

const towers: Tower[] = [];
for (let row = 0; row < GRID; row++) {
  for (let col = 0; col < GRID; col++) {
    towers.push({
      id: `${row}-${col}`,
      cx: 800 + (row - col) * (TILE_WIDTH / 2),
      cy: 330 + (row + col) * (TILE_HEIGHT / 2),
      height: HEIGHTS[row][col],
      depth: row + col,
      palette: PALETTES[(row * 2 + col) % PALETTES.length],
    });
  }
}
// Painter's algorithm: far towers first, near ones on top.
towers.sort((a, b) => a.depth - b.depth);

export default function EstiloIsometrico() {
  return (
    <StyleStage number="18" name="Isometric" background="linear-gradient(160deg, #1f2a44, #0f1626)" color="#fff" fontFamily="'Poppins', sans-serif">
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        {towers.map((tower, index) => {
          const { cx, cy, height, palette } = tower;
          const w = TILE_WIDTH / 2;
          const h = TILE_HEIGHT;
          const baseY = cy + h;
          return (
            <motion.g
              key={tower.id}
              style={{ transformOrigin: `${cx}px ${baseY}px` }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: [0, 1, 1, 0.78, 1] }}
              transition={{ duration: 6, delay: tower.depth * 0.12 + index * 0.01, repeat: Infinity, repeatDelay: 0, times: [0, 0.18, 0.5, 0.75, 1], ease: 'easeInOut' }}
            >
              <polygon points={`${cx - w},${cy - height + h / 2} ${cx},${cy - height + h} ${cx},${baseY} ${cx - w},${cy + h / 2}`} fill={palette.left} />
              <polygon points={`${cx + w},${cy - height + h / 2} ${cx},${cy - height + h} ${cx},${baseY} ${cx + w},${cy + h / 2}`} fill={palette.right} />
              <polygon points={`${cx},${cy - height} ${cx + w},${cy - height + h / 2} ${cx},${cy - height + h} ${cx - w},${cy - height + h / 2}`} fill={palette.top} />
            </motion.g>
          );
        })}
      </svg>
      <h1 style={{ position: 'absolute', left: '5vw', top: '4vw', margin: 0, fontSize: '6.4vw', lineHeight: 0.95, fontWeight: 800, letterSpacing: '-0.03em' }}>
        Iso<br />metric
      </h1>
    </StyleStage>
  );
}
