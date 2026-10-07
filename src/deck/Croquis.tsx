import type { CSSProperties } from 'react';

interface CroquisProps {
  style?: CSSProperties;
}

/** Hand-drawn agent loop: think → act → observe. */
export function CroquisCiclo({ style }: CroquisProps) {
  return (
    <svg className="croquis" viewBox="0 0 220 180" style={{ width: '16vw', ...style }} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
      <path d="M70 40a50 50 0 1 0 80 0" strokeDasharray="1000" style={{ ['--retraso' as string]: '0s' }} />
      <path d="M150 40l-6-12m6 12l-14 2" strokeDasharray="1000" style={{ ['--retraso' as string]: '0.3s' }} />
      <path d="M70 40l-4 12m4-12l14 4" strokeDasharray="1000" style={{ ['--retraso' as string]: '0.4s' }} />
      <text x="96" y="95" fontFamily="Caveat" fontSize="20" fill="currentColor" stroke="none">agent</text>
      <text x="104" y="115" fontFamily="Caveat" fontSize="20" fill="currentColor" stroke="none">loop</text>
      <text x="160" y="28" fontFamily="Caveat" fontSize="22" fill="currentColor" stroke="none">pensar</text>
      <text x="0" y="62" fontFamily="Caveat" fontSize="22" fill="currentColor" stroke="none">observar</text>
      <text x="150" y="160" fontFamily="Caveat" fontSize="22" fill="currentColor" stroke="none">actuar</text>
    </svg>
  );
}

/** Hand-drawn wave chart with a caption. */
export function CroquisOnda({ style }: CroquisProps) {
  return (
    <svg className="croquis" viewBox="0 0 260 120" style={{ width: '20vw', ['--flota-dur' as string]: '7s', ...style }} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
      <path d="M6 10v96h248" strokeDasharray="1000" />
      <path d="M10 90c30-8 40-50 70-46s30 30 60 20 40-40 70-26" strokeDasharray="1000" style={{ ['--retraso' as string]: '0.5s' }} />
      <text x="12" y="116" fontFamily="Caveat" fontSize="16" fill="currentColor" stroke="none">en marzo → aparece</text>
    </svg>
  );
}
