import type { CSSProperties, ReactNode } from 'react';
import { ThemeContext, useTheme } from './context';
import { themes } from './definitions';
import type { ThemeId } from './types';

interface ThemedSlideProps {
  theme: ThemeId;
  /** Small accent line above the title. */
  kicker?: string;
  title?: ReactNode;
  children?: ReactNode;
  /** `center` vertically centres the content; `start` pins it to the top. */
  align?: 'center' | 'start';
}

/** Heading in the theme's heading font, style and effect class. */
export function ThemedTitle({ children, size = 'var(--fs-title)' }: { children: ReactNode; size?: string }) {
  const theme = useTheme();
  return (
    <h2
      className={theme.headingClassName}
      data-text={typeof children === 'string' ? children : undefined}
      style={{ margin: 0, fontFamily: theme.headingFont ?? theme.fontFamily, fontSize: size, color: theme.headingClassName ? undefined : theme.color, ...theme.headingStyle }}
    >
      {children}
    </h2>
  );
}

/**
 * A full slide in one of the 20 visual themes: animated backdrop + typography + colour tokens.
 * Inside it, the legacy classes (`card`, `chip`, `eyebrow`, `quote`…) and the `Step` component
 * pick up the theme colours because the canvas overrides the colour custom properties.
 */
export function ThemedSlide({ theme: themeId, kicker, title, children, align = 'center' }: ThemedSlideProps) {
  const theme = themes[themeId];
  const { Backdrop } = theme;
  const canvasStyle = {
    position: 'absolute',
    inset: 0,
    overflow: 'hidden',
    background: theme.background,
    color: theme.color,
    fontFamily: theme.fontFamily,
    '--color-fondo': theme.isDark ? '#14120e' : '#f3efe6',
    '--color-fg': theme.color,
    '--color-muted': theme.mutedColor,
    '--color-acento': theme.accent,
    '--color-linea': theme.isDark ? 'rgb(255 255 255 / 0.25)' : 'rgb(0 0 0 / 0.2)',
    '--font-display': theme.headingFont ?? theme.fontFamily,
    '--font-body': theme.fontFamily,
  } as CSSProperties;

  return (
    <ThemeContext.Provider value={theme}>
      <div style={canvasStyle}>
        <Backdrop />
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: align === 'center' ? 'center' : 'flex-start', height: '100%', boxSizing: 'border-box', padding: 'var(--pad)', paddingBottom: theme.safeBottom ?? 'var(--pad)' }}>
          {kicker && <p className="eyebrow" style={{ margin: '0 0 0.8vw', fontFamily: theme.fontFamily }}>{kicker}</p>}
          {title && <ThemedTitle>{title}</ThemedTitle>}
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
