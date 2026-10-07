import type { ReactNode } from 'react';
import { Brandmark } from './Brandmark';
import type { SlideMeta } from './types';

interface FrameProps {
  meta: SlideMeta;
  children: ReactNode;
  /** Vertically centre the body (covers, dividers). */
  isCentered?: boolean;
  /** Extra layers (doodles, bubbles) rendered behind the content. */
  backdrop?: ReactNode;
}

/** Standard slide chrome: brand + section label on top, body below. */
export function Frame({ meta, children, isCentered = false, backdrop }: FrameProps) {
  return (
    <>
      {backdrop}
      <header className="s-head">
        <div className="brand">
          <Brandmark />
          <span>
            CHARLA<span className="accent">.DEMO</span>
          </span>
        </div>
        <span className="head-meta">{meta.seccion}</span>
      </header>
      <div className={`s-body${isCentered ? ' center' : ''}`}>{children}</div>
    </>
  );
}
