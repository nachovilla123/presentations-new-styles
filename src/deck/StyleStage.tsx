import type { CSSProperties, ReactNode } from 'react';

/** Style props that also accept CSS custom properties (`--name`). */
export type CssVars = CSSProperties & Record<`--${string}`, string | number>;

interface StyleStageProps {
  /** Two-digit position inside the style gallery, e.g. "07". */
  number: string;
  name: string;
  /** Any CSS `background` value: the gallery slides own their whole canvas. */
  background: string;
  color: string;
  fontFamily?: string;
  children: ReactNode;
}

/** Full-bleed canvas for the style-gallery slides, plus a small label that names the style. */
export function StyleStage({ number, name, background, color, fontFamily, children }: StyleStageProps) {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background, color, fontFamily }}>
      {children}
      <span className="style-tag">
        {number} · {name}
      </span>
    </div>
  );
}
