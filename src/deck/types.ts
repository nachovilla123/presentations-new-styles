import type { ComponentType } from 'react';

export type TransitionName = 'fade' | 'slide' | 'zoom' | 'flip' | 'curtain' | 'none';

export interface SlideMeta {
  /** Short title shown in the overview and the browser tab. */
  title: string;
  /** Label printed in the header, e.g. "BLOQUE 0". */
  seccion: string;
  /** Speaker notes (not rendered yet; kept next to the slide they belong to). */
  notes?: string;
  transition?: TransitionName;
  /** `corte` renders the dark variant with its own animated grid. */
  variante?: 'corte';
  /** Number of build steps: each press of "next" reveals one before moving to the next slide. */
  steps?: number;
  /** Show the animated paper grid behind a light slide. */
  hasGrid?: boolean;
}

export interface SlideModule {
  default: ComponentType;
  meta: SlideMeta;
}

export interface RegisteredSlide extends SlideModule {
  /** Slug from the filename, used as the hash route (`01-portada.tsx` → `portada`). */
  id: string;
}
