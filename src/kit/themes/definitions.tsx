import type { CSSProperties } from 'react';
import { NetworkCanvas } from '../../deck';
import { Marquee } from '../effects';
import { LowPolyMesh } from './LowPolyMesh';
import type { ThemeDef, ThemeId } from './types';

/** Common wrapper for a backdrop: fills the slide and never intercepts the pointer. */
const FILL: CSSProperties = { position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' };
const abs = (style: CSSProperties): CSSProperties => ({ position: 'absolute', ...style });

const SANS = "'Inter', 'Helvetica Neue', sans-serif";
const POPPINS = "'Poppins', sans-serif";

const swiss: ThemeDef = {
  id: 'swiss', name: 'Swiss style', mood: 'Serio, editorial, claro. Para ideas densas que necesitan orden.',
  isDark: false, background: '#f2f1ec', color: '#111', mutedColor: '#555', accent: '#e30613',
  fontFamily: SANS,
  headingStyle: { fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 0.95 },
  card: { border: '1px solid #111', borderRadius: 0, background: 'transparent' },
  chip: { borderRadius: 0, borderWidth: 1 },
  Backdrop: () => (
    <div style={FILL}>
      {[8.33, 25, 41.66, 58.33, 75, 91.66].map((left) => (
        <i key={left} style={abs({ top: 0, bottom: 0, left: `${left}%`, width: 1, background: 'rgb(0 0 0 / 0.07)' })} />
      ))}
      <div style={abs({ right: '6vw', top: '-5vw', width: '16vw', height: '16vw', borderRadius: '50%', background: '#e30613' })} />
    </div>
  ),
};

const kinetic: ThemeDef = {
  id: 'kinetic', name: 'Kinetic type', mood: 'Energético y rotundo. Para títulos que deben sentirse como golpes.',
  isDark: true, background: '#0a0a0a', color: '#fff', mutedColor: 'rgb(255 255 255 / 0.6)', accent: '#ff3b1f',
  fontFamily: SANS, headingFont: "'Archivo Black', sans-serif",
  headingStyle: { letterSpacing: '-0.03em', lineHeight: 0.98, textTransform: 'uppercase' },
  card: { border: '2px solid #fff', borderRadius: 4, background: 'transparent' },
  chip: { borderRadius: 2 },
  Backdrop: () => (
    <div style={FILL}>
      <div style={abs({ left: 0, right: 0, bottom: '1vw', opacity: 0.07 })}>
        <Marquee words={['move', 'shake', 'bounce', 'slam']} durationSeconds={40} />
      </div>
    </div>
  ),
};

const popArt: ThemeDef = {
  id: 'pop-art', name: 'Pop art', mood: 'Divertido, gráfico, con actitud. Para marketing y mensajes cortos.',
  isDark: false, background: '#ffd400', color: '#111', mutedColor: '#3a3300', accent: '#e4002b',
  fontFamily: "'Bangers', cursive",
  headingStyle: { color: '#e4002b', WebkitTextStroke: '0.14vw #111', textShadow: '0.35vw 0.35vw 0 #111', letterSpacing: '0.03em', lineHeight: 0.95 },
  card: { background: '#fff', border: '3px solid #111', borderRadius: 16, boxShadow: '0.45vw 0.45vw 0 #111' },
  chip: { background: '#fff', borderWidth: 3 },
  Backdrop: () => <div style={FILL}><div className="benday" style={{ position: 'absolute', inset: 0, opacity: 0.55 }} /></div>,
};

const flat: ThemeDef = {
  id: 'flat', name: 'Flat 2D', mood: 'Amable y limpio. Para onboarding, producto y público general.',
  isDark: false, background: '#ffe8d6', color: '#264653', mutedColor: '#5b7580', accent: '#e76f51',
  fontFamily: POPPINS,
  headingStyle: { fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 },
  card: { background: '#fff', border: 'none', borderRadius: 18, boxShadow: '0 0.5vw 0 rgb(38 70 83 / 0.12)' },
  chip: { borderRadius: 999, borderWidth: 2 },
  safeBottom: '10vw',
  Backdrop: () => (
    <div style={FILL}>
      <svg viewBox="0 0 1600 900" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <circle cx="1400" cy="150" r="90" fill="#ffb703" />
        <path d="M0 740 Q300 640 620 720 T1240 700 T1600 730 V900 H0Z" fill="#e9c46a" />
        <path d="M0 800 Q380 720 760 790 T1600 790 V900 H0Z" fill="#2a9d8f" />
        <path d="M0 860 Q450 810 900 855 T1600 850 V900 H0Z" fill="#264653" />
      </svg>
    </div>
  ),
};

const clay: ThemeDef = {
  id: 'clay', name: 'Clay 3D', mood: 'Suave, táctil, simpático. Para productos amigables y apps de bienestar.',
  isDark: false, background: 'radial-gradient(circle at 30% 20%, #fde7d8, #f6c7b0 70%)', color: '#7a3b2e', mutedColor: '#a5655a', accent: '#e8756b',
  fontFamily: "'Fredoka', sans-serif",
  headingStyle: { fontWeight: 700, color: '#e8756b', textShadow: '0 0.1vw 0 #c95c5c, 0 0.2vw 0 #c95c5c, 0 0.3vw 0 #c95c5c, 0 1vw 1.2vw rgb(120 50 30 / 0.3)' },
  card: { border: 'none', borderRadius: 28, background: 'radial-gradient(circle at 30% 20%, rgb(255 255 255 / 0.7), #ffe3d3)', boxShadow: 'inset -0.4vw -0.5vw 1vw rgb(0 0 0 / 0.08), inset 0.3vw 0.4vw 0.8vw rgb(255 255 255 / 0.7), 0 1vw 1.4vw -0.6vw rgb(90 40 20 / 0.28)' },
  chip: { borderRadius: 999, background: '#fff3ea', borderWidth: 0 },
  Backdrop: () => (
    <div style={FILL}>
      <div className="clay" style={{ right: '-4vw', top: '-4vw', width: '16vw', height: '16vw', borderRadius: '50%', ['--clay' as string]: '#f4a6c0' } as CSSProperties} />
      <div className="clay" style={{ left: '-3vw', bottom: '-3vw', width: '12vw', height: '12vw', borderRadius: '40%', ['--clay' as string]: '#7fd6c2', ['--bob' as string]: '5s' } as CSSProperties} />
      <div className="clay" style={{ right: '6vw', bottom: '3vw', width: '7vw', height: '7vw', borderRadius: '50%', ['--clay' as string]: '#ffd166', ['--bob' as string]: '3.6s' } as CSSProperties} />
    </div>
  ),
};

const glass: ThemeDef = {
  id: 'glass', name: 'Glassmorphism', mood: 'Moderno y premium. Para tecnología, SaaS y datos.',
  isDark: true, background: 'linear-gradient(135deg, #1b1442, #0d0b26)', color: '#fff', mutedColor: 'rgb(255 255 255 / 0.7)', accent: '#7cf5d4',
  fontFamily: SANS, headingStyle: { fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 0.98 },
  card: { background: 'linear-gradient(135deg, rgb(255 255 255 / 0.2), rgb(255 255 255 / 0.05))', backdropFilter: 'blur(20px) saturate(170%)', border: '1px solid rgb(255 255 255 / 0.3)', borderRadius: '1.6vw', boxShadow: '0 1.4vw 3vw -1vw rgb(0 0 0 / 0.45), inset 0 1px 0 rgb(255 255 255 / 0.4)' },
  chip: { borderRadius: 999, background: 'rgb(255 255 255 / 0.1)', border: '1px solid rgb(255 255 255 / 0.3)' },
  Backdrop: () => (
    <div style={FILL}>
      <div className="glow-blob" style={{ left: '4vw', top: '2vw', width: '22vw', height: '22vw', background: '#ff4ecd' }} />
      <div className="glow-blob" style={{ right: '4vw', top: '6vw', width: '26vw', height: '26vw', background: '#4d7cff', ['--dx' as string]: '-8vw', ['--wander' as string]: '15s' } as CSSProperties} />
      <div className="glow-blob" style={{ left: '38vw', bottom: '-8vw', width: '24vw', height: '24vw', background: '#22e1c0', ['--dy' as string]: '-8vw', ['--wander' as string]: '12s' } as CSSProperties} />
    </div>
  ),
};

const y2k: ThemeDef = {
  id: 'y2k', name: 'Y2K chrome', mood: 'Futurista retro, brillante. Para lanzamientos, moda y cultura pop.',
  isDark: false, background: 'radial-gradient(circle at 50% 40%, #e9f3ff 0%, #b9d4ff 45%, #9aa8ff 100%)', color: '#1c2a44', mutedColor: '#4a5a80', accent: '#4d6bff',
  fontFamily: "'Orbitron', sans-serif",
  headingStyle: { letterSpacing: '0.02em', lineHeight: 1 }, headingClassName: 'chrome-text',
  card: { background: 'rgb(255 255 255 / 0.55)', border: '2px solid #fff', borderRadius: 22, boxShadow: '0 1vw 2vw -0.6vw rgb(60 90 170 / 0.4), inset 0 0 1.4vw rgb(255 255 255 / 0.8)' },
  chip: { borderRadius: 999, background: 'rgb(255 255 255 / 0.6)', borderColor: '#fff' },
  Backdrop: () => (
    <div style={FILL}>
      <div className="chrome-ring" style={{ left: '-6vw', bottom: '-10vw', width: '24vw', height: '24vw' }} />
      <div className="chrome-ring" style={{ right: '-4vw', top: '-8vw', width: '20vw', height: '20vw', animationDirection: 'reverse' }} />
      {[['10%', '16%', 4], ['86%', '12%', 5], ['90%', '74%', 3]].map(([left, top, size], index) => (
        <svg key={index} viewBox="0 0 40 40" style={abs({ left: left as string, top: top as string, width: `${size}vw`, animation: `twinkle 2.6s ease-in-out ${index * 0.7}s infinite` })}>
          <path d="M20 0 C21 14 26 19 40 20 C26 21 21 26 20 40 C19 26 14 21 0 20 C14 19 19 14 20 0Z" fill="#fff" stroke="#6f86c9" strokeWidth="1" />
        </svg>
      ))}
    </div>
  ),
};

const synthwave: ThemeDef = {
  id: 'synthwave', name: 'Synthwave', mood: 'Neón nocturno y nostálgico. Para música, gaming y tecnología con onda.',
  isDark: true, background: 'linear-gradient(180deg, #0d0221 0%, #3b0a6e 45%, #c2185b 74%, #12002b 74%)', color: '#fff', mutedColor: 'rgb(255 255 255 / 0.7)', accent: '#ff2bd6',
  fontFamily: "'Orbitron', sans-serif",
  headingStyle: { textShadow: '0 0 0.5vw #fff, 0 0 1.2vw #ff2bd6, 0 0 2.6vw #ff2bd6', letterSpacing: '0.08em', lineHeight: 1 },
  card: { background: 'rgb(18 0 43 / 0.72)', border: '1px solid #ff2bd6', borderRadius: 6, boxShadow: '0 0 1.2vw rgb(255 43 214 / 0.45), inset 0 0 1vw rgb(255 43 214 / 0.15)' },
  chip: { borderRadius: 2, borderColor: '#39f0ff', color: '#39f0ff' },
  safeBottom: '12vw',
  Backdrop: () => (
    <div style={FILL}>
      <div className="synth-floor" style={{ height: '26%' }} />
    </div>
  ),
};

const risograph: ThemeDef = {
  id: 'risograph', name: 'Risograph', mood: 'Artesanal e independiente. Para cultura, educación y eventos.',
  isDark: false, background: '#f1ead8', color: '#1a1a1a', mutedColor: '#5c5648', accent: '#ff48b0',
  fontFamily: "'Space Grotesk', sans-serif", headingFont: "'Rubik Mono One', sans-serif",
  headingStyle: { color: '#2b59c3', textShadow: '0.3vw 0.2vw 0 #ff48b0', lineHeight: 1.05 },
  card: { border: '2px solid #2b59c3', borderRadius: 6, background: 'rgb(255 72 176 / 0.07)' },
  chip: { borderColor: '#ff48b0', borderRadius: 4 },
  Backdrop: () => (
    <div style={FILL}>
      <div className="riso-dots" style={{ left: '2vw', bottom: '2vw', width: '26vw', height: '12vw', ['--ink' as string]: '#ff48b0' } as CSSProperties} />
      <div className="riso-dots" style={{ right: '2vw', top: '2vw', width: '22vw', height: '10vw', ['--ink' as string]: '#2b59c3', transform: 'scaleX(-1)' } as CSSProperties} />
      <div className="riso-layer" style={{ right: '-4vw', bottom: '-6vw', width: '18vw', height: '18vw', borderRadius: '50%', background: '#ff48b0', opacity: 0.8 }} />
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', mixBlendMode: 'multiply', opacity: 0.45 }}>
        <filter id="kit-riso-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="4" />
          <feColorMatrix values="0 0 0 0 0.25  0 0 0 0 0.2  0 0 0 0 0.15  0 0 0 0.9 -0.25" />
        </filter>
        <rect width="100%" height="100%" filter="url(#kit-riso-grain)" />
      </svg>
    </div>
  ),
};

const collage: ThemeDef = {
  id: 'collage', name: 'Paper collage', mood: 'Hecho a mano, cálido. Para storytelling, educación y proyectos creativos.',
  isDark: false, background: '#cdb892', color: '#2a2118', mutedColor: '#5a4a38', accent: '#d62718',
  fontFamily: "'Special Elite', serif", headingFont: "'Permanent Marker', cursive",
  headingStyle: { lineHeight: 1, transform: 'rotate(-1.5deg)', transformOrigin: 'left' },
  card: { background: '#f6efe0', border: 'none', borderRadius: 2, boxShadow: '0.2vw 0.6vw 1vw rgb(60 40 20 / 0.3)', rotate: '-0.6deg' },
  chip: { background: '#f6efe0', borderRadius: 2, borderWidth: 1 },
  Backdrop: () => (
    <div style={FILL}>
      <div style={abs({ right: '-3vw', top: '-3vw', width: '20vw', height: '14vw', background: '#ef7b9b', transform: 'rotate(8deg)', clipPath: 'polygon(0 4%, 20% 0, 40% 6%, 60% 1%, 80% 5%, 100% 0, 98% 60%, 100% 100%, 0 96%)' })} />
      <div style={abs({ left: '-3vw', bottom: '-2vw', width: '22vw', height: '10vw', background: '#4aa7a0', transform: 'rotate(-4deg)', clipPath: 'polygon(0 6%, 18% 0, 38% 5%, 60% 0, 82% 6%, 100% 2%, 98% 100%, 0 96%)' })} />
      <div className="tape" style={{ right: '6vw', top: '1vw', transform: 'rotate(6deg)' }} />
    </div>
  ),
};

const glitch: ThemeDef = {
  id: 'glitch', name: 'Glitch', mood: 'Tenso y digital. Para ciberseguridad, errores, arte tecnológico.',
  isDark: true, background: '#050505', color: '#fff', mutedColor: 'rgb(255 255 255 / 0.6)', accent: '#22e8ff',
  fontFamily: "'Space Grotesk', sans-serif", headingFont: "'Archivo Black', sans-serif",
  headingStyle: { textShadow: '0.3vw 0 0 #ff2a55, -0.3vw 0 0 #22e8ff', lineHeight: 0.98, textTransform: 'uppercase' },
  card: { background: 'rgb(255 255 255 / 0.04)', border: '1px solid rgb(34 232 255 / 0.55)', borderRadius: 2, boxShadow: '0.25vw 0 0 #ff2a55, -0.25vw 0 0 rgb(34 232 255 / 0.5)' },
  chip: { borderRadius: 0, borderColor: '#ff2a55' },
  Backdrop: () => (
    <div style={FILL}>
      <i className="tear" style={{ ['--dur' as string]: '3.2s' } as CSSProperties} />
      <i className="tear" style={{ ['--dur' as string]: '4.4s', ['--delay' as string]: '-2s' } as CSSProperties} />
      <div className="scanlines" />
    </div>
  ),
};

const particles: ThemeDef = {
  id: 'particles', name: 'Particles', mood: 'Etéreo y conectado. Para IA, redes, datos e innovación.',
  isDark: true, background: 'radial-gradient(circle at 50% 50%, #14122b, #05040f)', color: '#fff', mutedColor: 'rgb(255 255 255 / 0.65)', accent: '#ff7a45',
  fontFamily: SANS, headingStyle: { fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 },
  card: { background: 'rgb(20 18 43 / 0.7)', border: '1px solid rgb(255 255 255 / 0.18)', borderRadius: 14, backdropFilter: 'blur(8px)' },
  chip: { borderRadius: 999 },
  Backdrop: () => <div style={FILL}><NetworkCanvas /></div>,
};

const neobrutalism: ThemeDef = {
  id: 'neobrutalism', name: 'Neobrutalism', mood: 'Directo, sin filtros, joven. Para startups, herramientas y manifiestos.',
  isDark: false, background: '#fff4d6 linear-gradient(#0000000f 1px, transparent 1px) 0 0 / 100% 3vw', color: '#000', mutedColor: '#3a3a3a', accent: '#ff5fd2',
  fontFamily: "'Space Grotesk', sans-serif",
  headingStyle: { fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 0.95, textTransform: 'uppercase' },
  card: { background: '#7cf5d4', border: '3px solid #000', borderRadius: 12, boxShadow: '0.5vw 0.5vw 0 #000' },
  chip: { background: '#ffe14d', border: '3px solid #000', borderRadius: 8, boxShadow: '0.25vw 0.25vw 0 #000' },
  safeBottom: '6vw',
  Backdrop: () => (
    <div style={FILL}>
      <div className="neo-strip" style={{ bottom: '1.5vw', fontSize: '1.6vw' }}>
        <div>{'NEOBRUTALISM ✱ SIN FILTROS ✱ SOMBRAS DURAS ✱ '.repeat(10)}</div>
      </div>
    </div>
  ),
};

const bauhaus: ThemeDef = {
  id: 'bauhaus', name: 'Bauhaus', mood: 'Racional y geométrico. Para diseño, arquitectura y principios.',
  isDark: false, background: '#efe8d6', color: '#111', mutedColor: '#4a4538', accent: '#d62718',
  fontFamily: "'Jost', sans-serif",
  headingStyle: { fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 0.95 },
  card: { background: '#fff', border: '3px solid #111', borderRadius: 0 },
  chip: { borderRadius: 0, borderWidth: 3 },
  Backdrop: () => (
    <div style={FILL}>
      <div style={abs({ right: 0, top: 0, width: '16vw', height: '16vw', background: '#f2b705' })} />
      <div style={abs({ right: '3vw', top: '3vw', width: '10vw', height: '10vw', borderRadius: '50%', background: '#d62718' })} />
      <div style={abs({ left: 0, bottom: 0, width: 0, height: 0, borderLeft: '8vw solid transparent', borderRight: '8vw solid transparent', borderBottom: '12vw solid #1f4e9e' })} />
      <div style={abs({ left: 0, right: '18vw', bottom: '1.4vw', height: '1.2vw', background: '#111' })} />
    </div>
  ),
};

const memphis: ThemeDef = {
  id: 'memphis', name: 'Memphis', mood: 'Juguetón y colorido, años 80. Para eventos, moda y marcas jóvenes.',
  isDark: false, background: '#ffc7dd radial-gradient(#111 12%, transparent 13%) 0 0 / 2.4vw 2.4vw', color: '#111', mutedColor: '#4a2a3a', accent: '#00b3a4',
  fontFamily: "'Fredoka', sans-serif", headingFont: "'Rubik Mono One', sans-serif",
  headingStyle: { lineHeight: 1.05, letterSpacing: '-0.02em' },
  card: { background: '#fff', border: '4px solid #111', borderRadius: 0, boxShadow: '0.6vw 0.6vw 0 #00b3a4' },
  chip: { background: '#ffd23f', border: '3px solid #111', borderRadius: 0 },
  Backdrop: () => (
    <div style={FILL}>
      <svg viewBox="0 0 100 100" style={abs({ right: '3vw', top: '2vw', width: '9vw', animation: 'mem-float 7s ease-in-out infinite' })}>
        <polygon points="50,6 94,90 6,90" fill="#ffd23f" stroke="#111" strokeWidth="5" strokeLinejoin="round" />
      </svg>
      <svg viewBox="0 0 100 100" style={abs({ left: '2vw', bottom: '3vw', width: '8vw', animation: 'mem-float 6s ease-in-out -2s infinite' })}>
        <circle cx="50" cy="50" r="42" fill="#ff5c8a" stroke="#111" strokeWidth="5" />
        <circle cx="50" cy="50" r="16" fill="#fff" stroke="#111" strokeWidth="5" />
      </svg>
      <svg viewBox="0 0 100 100" style={abs({ right: '6vw', bottom: '3vw', width: '10vw', animation: 'mem-float 8s ease-in-out -1s infinite' })}>
        <path d="M5 50 Q20 10 35 50 T65 50 T95 50" fill="none" stroke="#00b3a4" strokeWidth="9" strokeLinecap="round" />
      </svg>
    </div>
  ),
};

const vaporwave: ThemeDef = {
  id: 'vaporwave', name: 'Vaporwave', mood: 'Onírico y nostálgico. Para música, arte web y cultura de internet.',
  isDark: true, background: 'linear-gradient(180deg, #2b0f54 0%, #b967ff 40%, #ff71ce 72%, #2a1160 72%)', color: '#fff', mutedColor: 'rgb(255 255 255 / 0.8)', accent: '#01cdfe',
  fontFamily: "'VT323', monospace",
  headingStyle: { textShadow: '0.25vw 0.25vw 0 #ff71ce, -0.25vw -0.25vw 0 #01cdfe', letterSpacing: '0.1em', lineHeight: 1 },
  card: { background: '#c0c0c0', color: '#000', border: '2px solid', borderColor: '#fff #404040 #404040 #fff', borderRadius: 0, boxShadow: '0.4vw 0.4vw 0 rgb(0 0 0 / 0.35)' },
  chip: { background: '#c0c0c0', color: '#000', borderRadius: 0, borderColor: '#404040' },
  cardText: { color: '#000', muted: '#262626', accent: '#000080' },
  safeBottom: '10vw',
  Backdrop: () => (
    <div style={FILL}>
      <div style={abs({ left: '50%', bottom: '24%', width: '16vw', height: '16vw', marginLeft: '-8vw', borderRadius: '50%', background: 'linear-gradient(180deg, #fffb96, #ff71ce 70%)', opacity: 0.8 })} />
      <div className="vapor-floor" style={{ height: '28%' }} />
    </div>
  ),
};

const pixel: ThemeDef = {
  id: 'pixel', name: 'Pixel art', mood: 'Retro gamer y lúdico. Para gamificación, devs y nostalgia 8-bit.',
  isDark: true, background: '#1a1c2c', color: '#f4f4f4', mutedColor: '#b8bccd', accent: '#ffec27',
  fontFamily: "'VT323', monospace", headingFont: "'Press Start 2P', monospace",
  headingStyle: { textShadow: '0.25vw 0.25vw 0 #ff004d', lineHeight: 1.25 },
  card: { background: '#29366f', border: '0.3vw solid #f4f4f4', borderRadius: 0, boxShadow: '0 0 0 0.3vw #1a1c2c' },
  chip: { borderRadius: 0, borderWidth: '0.2vw' },
  safeBottom: '9vw',
  Backdrop: () => (
    <div style={FILL}>
      <div style={abs({ left: 0, right: 0, bottom: 0, height: '6vw', backgroundColor: '#3a8a3a', backgroundImage: 'linear-gradient(90deg, #2d6e2d 4vw, transparent 4vw), linear-gradient(#5fc75f 1.2vw, #8b5a2b 1.2vw)', backgroundSize: '8vw 100%, 100% 100%', animation: 'pixel-ground 1.2s steps(8) infinite' })} />
    </div>
  ),
};

const isometric: ThemeDef = {
  id: 'isometric', name: 'Isometric', mood: 'Técnico y ordenado. Para arquitectura de sistemas, procesos y logística.',
  isDark: true, background: 'linear-gradient(160deg, #1f2a44, #0f1626)', color: '#fff', mutedColor: 'rgb(255 255 255 / 0.65)', accent: '#ffd166',
  fontFamily: POPPINS, headingStyle: { fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 },
  card: { background: 'rgb(255 255 255 / 0.07)', border: '1px solid rgb(255 255 255 / 0.18)', borderTop: '3px solid #ffd166', borderRadius: 12 },
  chip: { borderRadius: 8, borderColor: '#ffd166' },
  Backdrop: () => (
    <div style={FILL}>
      <div style={abs({ inset: 0, backgroundImage: 'repeating-linear-gradient(30deg, rgb(255 255 255 / 0.045) 0 1px, transparent 1px 4vw), repeating-linear-gradient(150deg, rgb(255 255 255 / 0.045) 0 1px, transparent 1px 4vw)' })} />
    </div>
  ),
};

const lowPoly: ThemeDef = {
  id: 'low-poly', name: 'Low poly', mood: 'Geométrico y fresco. Para naturaleza, tecnología y presentaciones corporativas.',
  isDark: true, background: '#0b1a45', color: '#fff', mutedColor: 'rgb(255 255 255 / 0.8)', accent: '#7affc9',
  fontFamily: POPPINS, headingStyle: { fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, textShadow: '0 0.6vw 2vw rgb(0 0 40 / 0.5)' },
  card: { background: 'rgb(8 16 60 / 0.55)', backdropFilter: 'blur(6px)', border: '1px solid rgb(255 255 255 / 0.25)', borderRadius: 12 },
  chip: { borderRadius: 6 },
  Backdrop: () => (
    <div style={FILL}>
      <LowPolyMesh />
      <div style={abs({ inset: 0, background: 'rgb(5 10 40 / 0.35)' })} />
    </div>
  ),
};

const lineArt: ThemeDef = {
  id: 'line-art', name: 'Line art', mood: 'Minimalista y elegante. Para ideas simples, bienestar y marcas boutique.',
  isDark: false, background: '#fbfaf6', color: '#111', mutedColor: '#666', accent: '#e8482b',
  fontFamily: POPPINS, headingStyle: { fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1 },
  card: { background: 'transparent', border: '2px solid #111', borderRadius: 14 },
  chip: { borderRadius: 999, borderWidth: 2 },
  Backdrop: () => (
    <div style={FILL}>
      <svg viewBox="0 0 400 300" style={abs({ right: '3vw', top: '2vw', width: '18vw' })} fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round">
        <circle cx="300" cy="90" r="40" />
        {Array.from({ length: 12 }, (_, index) => (
          <line key={index} x1="300" y1="38" x2="300" y2="22" transform={`rotate(${index * 30} 300 90)`} />
        ))}
        <path d="M20 250 C 90 220 150 280 220 250 S 330 230 390 250" />
      </svg>
    </div>
  ),
};

export const themes: Readonly<Record<ThemeId, ThemeDef>> = {
  swiss, kinetic, 'pop-art': popArt, flat, clay, glass, y2k, synthwave, risograph, collage,
  glitch, particles, neobrutalism, bauhaus, memphis, vaporwave, pixel, isometric, 'low-poly': lowPoly, 'line-art': lineArt,
};
