import { useEffect, useRef } from 'react';

interface ParticleTextProps {
  text: string;
  /** Distance between sampled pixels: lower means more particles. */
  density?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
}

const REPEL_RADIUS = 120;
const SCATTER_EVERY_MS = 7000;

/** Particles that assemble into `text`, scatter on a timer and flee from the pointer. */
export function ParticleText({ text, density = 6 }: ParticleTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let lastScatterAt = performance.now();
    const pointer = { x: -9999, y: -9999 };
    let particles: Particle[] = [];

    const build = () => {
      const ratio = window.devicePixelRatio || 1;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      // Rasterise the word offscreen and keep one particle target per opaque sampled pixel.
      const sample = document.createElement('canvas');
      sample.width = width;
      sample.height = height;
      const sampleContext = sample.getContext('2d');
      if (!sampleContext) return;
      sampleContext.fillStyle = '#fff';
      sampleContext.textAlign = 'center';
      sampleContext.textBaseline = 'middle';
      sampleContext.font = `900 ${width * 0.13}px 'Archivo Black', sans-serif`;
      sampleContext.fillText(text, width / 2, height / 2);
      const pixels = sampleContext.getImageData(0, 0, width, height).data;

      const next: Particle[] = [];
      for (let y = 0; y < height; y += density) {
        for (let x = 0; x < width; x += density) {
          if (pixels[(y * width + x) * 4 + 3] > 128) {
            next.push({ x: Math.random() * width, y: Math.random() * height, vx: 0, vy: 0, targetX: x, targetY: y });
          }
        }
      }
      particles = next;
    };

    const scatter = () => {
      for (const particle of particles) {
        const angle = Math.random() * Math.PI * 2;
        const force = 8 + Math.random() * 22;
        particle.vx += Math.cos(angle) * force;
        particle.vy += Math.sin(angle) * force;
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
    };

    const tick = (time: number) => {
      if (time - lastScatterAt > SCATTER_EVERY_MS) {
        lastScatterAt = time;
        scatter();
      }
      context.clearRect(0, 0, width, height);
      for (const particle of particles) {
        particle.vx += (particle.targetX - particle.x) * 0.045;
        particle.vy += (particle.targetY - particle.y) * 0.045;
        const dx = particle.x - pointer.x;
        const dy = particle.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (distance < REPEL_RADIUS && distance > 0.1) {
          const push = ((REPEL_RADIUS - distance) / REPEL_RADIUS) * 3.2;
          particle.vx += (dx / distance) * push;
          particle.vy += (dy / distance) * push;
        }
        particle.vx *= 0.84;
        particle.vy *= 0.84;
        particle.x += particle.vx;
        particle.y += particle.vy;
        const mix = particle.targetX / width;
        context.fillStyle = `hsl(${12 + mix * 190}, 95%, 62%)`;
        context.fillRect(particle.x, particle.y, density * 0.5, density * 0.5);
      }
      frame = requestAnimationFrame(tick);
    };

    build();
    window.addEventListener('resize', build);
    window.addEventListener('pointermove', onPointerMove);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', build);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, [text, density]);

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} aria-hidden />;
}
