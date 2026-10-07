import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface Ring3DProps {
  /** Each item becomes one card on the ring; 5 to 8 reads best. */
  items: readonly ReactNode[];
  /** Seconds for one full turn. */
  durationSeconds?: number;
  /** Distance from the centre to each card; keep it near the card width times 1.1. */
  radius?: string;
}

/** Carousel of cards arranged on a rotating 3D ring. */
export function Ring3D({ items, durationSeconds = 36, radius = '17vw' }: Ring3DProps) {
  const stepDegrees = 360 / items.length;
  return (
    <div className="ring-stage">
      <motion.div
        className="ring"
        initial={{ rotateY: 0, rotateX: -6 }}
        animate={{ rotateY: -360 }}
        transition={{ duration: durationSeconds, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((item, index) => (
          <div key={index} className="ring-card" style={{ transform: `rotateY(${index * stepDegrees}deg) translateZ(${radius})` }}>
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
