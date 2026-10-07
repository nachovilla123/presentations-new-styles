import { animate, motion, useMotionValue, useTransform } from 'motion/react';
import { useEffect } from 'react';
import { Frame, type SlideMeta } from '../../deck';

export const meta: SlideMeta = {
  title: 'Gráfico que se dibuja',
  seccion: 'Efectos · 06',
  hasGrid: true,
  transition: 'slide',
};

const VALUES = [12, 18, 15, 28, 34, 31, 48, 62, 58, 79, 94] as const;
const WIDTH = 900;
const HEIGHT = 340;

const chartPoints = VALUES.map((value, index) => ({
  x: (index / (VALUES.length - 1)) * WIDTH,
  y: HEIGHT - (value / 100) * (HEIGHT - 30) - 10,
}));

/** Smooth path through the points using horizontal-tangent cubic segments. */
const linePath = chartPoints.reduce((path, point, index, points) => {
  if (index === 0) return `M${point.x},${point.y}`;
  const previous = points[index - 1];
  const midX = (previous.x + point.x) / 2;
  return `${path} C${midX},${previous.y} ${midX},${point.y} ${point.x},${point.y}`;
}, '');
const areaPath = `${linePath} L${WIDTH},${HEIGHT} L0,${HEIGHT} Z`;

export default function Grafico() {
  const growth = useMotionValue(0);
  const growthLabel = useTransform(growth, (value) => `+${Math.round(value)}%`);

  useEffect(() => {
    const controls = animate(growth, 312, { duration: 2.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [growth]);

  return (
    <Frame meta={meta} isCentered>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <p className="eyebrow reveal">Crecimiento trimestral</p>
          <h2 className="display reveal mt-s" style={{ fontSize: 'var(--fs-title)' }}>
            La curva <span className="accent">cuenta la historia</span>
          </h2>
        </div>
        <motion.div className="dato-grande" style={{ fontSize: 'clamp(48px, 7vw, 130px)' }}>
          {growthLabel}
        </motion.div>
      </div>
      <svg viewBox={`-10 -10 ${WIDTH + 20} ${HEIGHT + 30}`} style={{ width: '100%', maxHeight: '42vh', marginTop: '3vh', overflow: 'visible' }}>
        {[0.25, 0.5, 0.75].map((ratio) => (
          <line key={ratio} x1="0" x2={WIDTH} y1={HEIGHT * ratio} y2={HEIGHT * ratio} stroke="var(--color-linea)" strokeDasharray="4 8" />
        ))}
        <motion.path
          d={areaPath}
          fill="var(--color-acento)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ delay: 1.6, duration: 1.2 }}
        />
        <motion.path
          d={linePath}
          fill="none"
          stroke="var(--color-acento)"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, delay: 0.5, ease: [0.45, 0, 0.2, 1] }}
        />
        {chartPoints.map((point, index) => (
          <motion.circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="7"
            fill="var(--color-fondo)"
            stroke="var(--color-fg)"
            strokeWidth="3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            style={{ transformOrigin: `${point.x}px ${point.y}px` }}
            transition={{ type: 'spring', stiffness: 300, damping: 14, delay: 0.5 + (index / (chartPoints.length - 1)) * 2.2 }}
          />
        ))}
        <motion.circle
          cx={chartPoints[chartPoints.length - 1].x}
          cy={chartPoints[chartPoints.length - 1].y}
          fill="none"
          stroke="var(--color-acento)"
          strokeWidth="3"
          initial={{ r: 8, opacity: 0.9 }}
          animate={{ r: 38, opacity: 0 }}
          transition={{ duration: 1.8, delay: 3, repeat: Infinity, ease: 'easeOut' }}
        />
      </svg>
    </Frame>
  );
}
