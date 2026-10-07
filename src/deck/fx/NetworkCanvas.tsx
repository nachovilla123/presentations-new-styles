import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const LINK_DISTANCE = 140;
const POINTER_RADIUS = 220;
const MAX_SPEED = 0.9;

/** Particle network that bends toward the pointer (and wanders on its own when idle). */
export function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let idleTimer = 0;
    const pointer = { x: 0, y: 0, isActive: false };
    const particles: Particle[] = [];

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const target = Math.round((width * height) / 15000);
      while (particles.length < target) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
      particles.length = Math.min(particles.length, target);
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.isActive = true;
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => (pointer.isActive = false), 2500);
    };

    const tick = (time: number) => {
      context.clearRect(0, 0, width, height);
      if (!pointer.isActive) {
        pointer.x = width * (0.5 + 0.34 * Math.sin(time / 2400));
        pointer.y = height * (0.5 + 0.3 * Math.sin(time / 1700 + 1));
      }

      for (const particle of particles) {
        const dx = pointer.x - particle.x;
        const dy = pointer.y - particle.y;
        const distance = Math.hypot(dx, dy);
        if (distance < POINTER_RADIUS && distance > 1) {
          particle.vx += (dx / distance) * 0.018;
          particle.vy += (dy / distance) * 0.018;
        }
        const speed = Math.hypot(particle.vx, particle.vy);
        if (speed > MAX_SPEED) {
          particle.vx = (particle.vx / speed) * MAX_SPEED;
          particle.vy = (particle.vy / speed) * MAX_SPEED;
        }
        particle.x = (particle.x + particle.vx + width) % width;
        particle.y = (particle.y + particle.vy + height) % height;
      }

      context.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (distance < LINK_DISTANCE) {
            context.strokeStyle = `rgba(246, 241, 231, ${(1 - distance / LINK_DISTANCE) * 0.35})`;
            context.beginPath();
            context.moveTo(particles[i].x, particles[i].y);
            context.lineTo(particles[j].x, particles[j].y);
            context.stroke();
          }
        }
        const pointerDistance = Math.hypot(particles[i].x - pointer.x, particles[i].y - pointer.y);
        if (pointerDistance < POINTER_RADIUS) {
          context.strokeStyle = `rgba(232, 72, 43, ${(1 - pointerDistance / POINTER_RADIUS) * 0.8})`;
          context.beginPath();
          context.moveTo(particles[i].x, particles[i].y);
          context.lineTo(pointer.x, pointer.y);
          context.stroke();
        }
      }

      context.fillStyle = 'rgba(246, 241, 231, 0.85)';
      for (const particle of particles) {
        context.beginPath();
        context.arc(particle.x, particle.y, 1.8, 0, Math.PI * 2);
        context.fill();
      }
      context.fillStyle = '#e8482b';
      context.beginPath();
      context.arc(pointer.x, pointer.y, 5, 0, Math.PI * 2);
      context.fill();

      frame = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(idleTimer);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} aria-hidden />;
}
