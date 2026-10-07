import type { CSSProperties, ReactNode } from 'react';
import { useTheme } from './context';

interface PartProps {
  children: ReactNode;
  style?: CSSProperties;
}

/** Card skinned by the current theme (border, radius, shadow, fill). */
export function ThemedCard({ children, style }: PartProps) {
  const theme = useTheme();
  const textVars = theme.cardText
    ? ({ '--color-fg': theme.cardText.color, '--color-muted': theme.cardText.muted, '--color-acento': theme.cardText.accent, color: theme.cardText.color } as CSSProperties)
    : undefined;
  return (
    <div className="card" style={{ ...theme.card, ...textVars, ...style }}>
      {children}
    </div>
  );
}

/** Small pill label skinned by the current theme. */
export function ThemedChip({ children, style }: PartProps) {
  const theme = useTheme();
  return (
    <span className="chip" style={{ ...theme.chip, ...style }}>
      {children}
    </span>
  );
}

interface ThemedStatProps {
  value: ReactNode;
  label: string;
}

/** Big number with a caption, using the heading font and the accent colour. */
export function ThemedStat({ value, label }: ThemedStatProps) {
  const theme = useTheme();
  return (
    <div>
      <div style={{ fontFamily: theme.headingFont ?? theme.fontFamily, fontSize: 'clamp(40px, 6vw, 120px)', lineHeight: 0.95, color: theme.accent, ...theme.headingStyle, textShadow: undefined, WebkitTextStroke: undefined }}>
        {value}
      </div>
      <div style={{ marginTop: '0.5em', fontSize: 'var(--fs-foot)', letterSpacing: '0.2em', textTransform: 'uppercase', color: theme.mutedColor }}>{label}</div>
    </div>
  );
}

/** Pull quote with an accent bar. */
export function ThemedQuote({ children }: { children: ReactNode }) {
  const theme = useTheme();
  return (
    <p className="quote" style={{ fontFamily: theme.headingFont ?? theme.fontFamily, color: theme.color, borderLeftColor: theme.accent }}>
      {children}
    </p>
  );
}
