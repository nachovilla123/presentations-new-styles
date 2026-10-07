import { useEffect, useState } from 'react';
import type { SlideMeta } from '../../deck';
import { THEME_IDS, ThemedCard, ThemedChip, ThemedQuote, ThemedSlide, ThemedStat, themes } from '../../kit';

export const meta: SlideMeta = { title: 'Los 20 temas', seccion: 'Starter', transition: 'fade' };

/** Cycles through every theme so you can judge which one fits the talk. */
export default function TodosLosTemas() {
  // `?theme=glitch` pins one theme instead of cycling, handy to preview a single style.
  const pinnedId = new URLSearchParams(window.location.search).get('theme');
  const pinnedIndex = THEME_IDS.findIndex((id) => id === pinnedId);
  const [themeIndex, setThemeIndex] = useState(Math.max(pinnedIndex, 0));

  useEffect(() => {
    if (pinnedIndex >= 0) return;
    const timer = setInterval(() => setThemeIndex((current) => (current + 1) % THEME_IDS.length), 2600);
    return () => clearInterval(timer);
  }, [pinnedIndex]);

  const themeId = THEME_IDS[themeIndex];
  const theme = themes[themeId];

  return (
    <ThemedSlide key={themeId} theme={themeId} kicker={`${String(themeIndex + 1).padStart(2, '0')} / ${THEME_IDS.length} · ${theme.mood}`} title={theme.name}>
      <div className="mt-m" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '2vw', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2vw' }}>
          <ThemedCard>
            <span className="c-tag">Tarjeta</span>
            <span className="c-body">Así se ve un bloque de contenido con el tema aplicado.</span>
          </ThemedCard>
          <ThemedQuote>Una frase para recordar.</ThemedQuote>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4vw' }}>
          <ThemedStat value="94%" label="Un número grande" />
          <div className="chips">
            <ThemedChip>theme=&quot;{themeId}&quot;</ThemedChip>
          </div>
        </div>
      </div>
    </ThemedSlide>
  );
}
