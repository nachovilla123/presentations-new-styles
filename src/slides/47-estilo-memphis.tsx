import type { ReactNode } from 'react';
import { StyleStage, type CssVars, type SlideMeta } from '../deck';

export const meta: SlideMeta = { title: 'Estilo · Memphis', seccion: 'Estilos · 15', transition: 'zoom' };

interface Doodle {
  style: CssVars;
  node: ReactNode;
}

const STROKE = { stroke: '#111', strokeWidth: 5, strokeLinejoin: 'round' as const, strokeLinecap: 'round' as const };

const DOODLES: readonly Doodle[] = [
  { style: { left: '5vw', top: '6vw', width: '13vw', '--rot': '0deg', animation: 'mem-float 7s ease-in-out infinite' }, node: <svg viewBox="0 0 100 100"><path d="M5 50 Q20 10 35 50 T65 50 T95 50" fill="none" stroke="#00b3a4" strokeWidth="9" strokeLinecap="round" /></svg> },
  { style: { right: '8vw', top: '5vw', width: '12vw', '--rot': '15deg', animation: 'mem-float 6s ease-in-out -2s infinite' }, node: <svg viewBox="0 0 100 100"><polygon points="50,6 94,90 6,90" fill="#ffd23f" {...STROKE} /></svg> },
  { style: { left: '12vw', bottom: '8vw', width: '10vw', '--rot': '-10deg', animation: 'mem-float 8s ease-in-out -1s infinite' }, node: <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="42" fill="#ff5c8a" {...STROKE} /><circle cx="50" cy="50" r="18" fill="#fff" {...STROKE} /></svg> },
  { style: { right: '10vw', bottom: '7vw', width: '15vw', '--rot': '0deg', animation: 'mem-float 6.5s ease-in-out -3s infinite' }, node: <svg viewBox="0 0 120 50"><polyline points="4,40 24,8 44,40 64,8 84,40 104,8 116,30" fill="none" stroke="#111" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { style: { left: '44vw', top: '3vw', width: '9vw', '--rot': '0deg', animation: 'mem-spin 14s linear infinite' }, node: <svg viewBox="0 0 100 100"><rect x="14" y="14" width="72" height="72" fill="#4d7cff" {...STROKE} /></svg> },
  { style: { right: '30vw', bottom: '3vw', width: '8vw', '--rot': '0deg', animation: 'mem-float 5s ease-in-out infinite' }, node: <svg viewBox="0 0 100 100"><path d="M10 90 A40 40 0 0 1 90 90Z" fill="#ffd23f" {...STROKE} /></svg> },
];

export default function EstiloMemphis() {
  return (
    <StyleStage
      number="15"
      name="Memphis"
      background="#ffc7dd radial-gradient(#111 12%, transparent 13%) 0 0 / 2.4vw 2.4vw"
      color="#111"
      fontFamily="'Rubik Mono One', sans-serif"
    >
      {DOODLES.map((doodle, index) => (
        <div key={index} style={{ position: 'absolute', ...doodle.style }}>
          {doodle.node}
        </div>
      ))}
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
        <h1 style={{ margin: 0, padding: '1.2vw 3vw', fontSize: '9.4vw', lineHeight: 1, background: '#fff', border: '0.5vw solid #111', boxShadow: '1vw 1vw 0 #00b3a4', transform: 'rotate(-3deg)', letterSpacing: '-0.02em' }}>
          MEMPHIS
        </h1>
      </div>
    </StyleStage>
  );
}
