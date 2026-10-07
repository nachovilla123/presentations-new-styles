import type { ComponentType, CSSProperties } from 'react';

export const THEME_IDS = [
  'swiss', 'kinetic', 'pop-art', 'flat', 'clay', 'glass', 'y2k', 'synthwave', 'risograph', 'collage',
  'glitch', 'particles', 'neobrutalism', 'bauhaus', 'memphis', 'vaporwave', 'pixel', 'isometric', 'low-poly', 'line-art',
] as const;

export type ThemeId = (typeof THEME_IDS)[number];

export interface ThemeDef {
  id: ThemeId;
  name: string;
  /** One line on when the style fits: tone, audience, kind of message. */
  mood: string;
  isDark: boolean;
  background: string;
  /** Main text colour. */
  color: string;
  /** Secondary text colour. */
  mutedColor: string;
  accent: string;
  /** Body font stack. */
  fontFamily: string;
  /** Heading font stack; falls back to `fontFamily`. */
  headingFont?: string;
  headingStyle: CSSProperties;
  /** Extra class for headings (e.g. `chrome-text`, `neon`); needs `data-text` handled by ThemedTitle. */
  headingClassName?: string;
  /** Skin for ThemedCard, layered over the base `.card` look. */
  card: CSSProperties;
  chip: CSSProperties;
  /** Text colours inside cards when the card fill differs from the slide (e.g. a light card on a dark slide). */
  cardText?: { color: string; muted: string; accent: string };
  /** Bottom space (CSS length) the content must keep free for decorative scenery. */
  safeBottom?: string;
  /** Animated decorative layers; absolutely positioned and pointer-transparent. */
  Backdrop: ComponentType;
}
