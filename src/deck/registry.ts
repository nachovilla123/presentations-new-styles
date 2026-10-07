import type { RegisteredSlide, SlideModule } from './types';

const modules = import.meta.glob<SlideModule>('../decks/*/[0-9]*.tsx', { eager: true });

const DEFAULT_DECK_ID = 'showroom';

/** Slides of every deck, grouped by the folder name under `src/decks/`. */
const slidesByDeck = new Map<string, RegisteredSlide[]>();

for (const [path, module] of Object.entries(modules).sort(([pathA], [pathB]) => pathA.localeCompare(pathB))) {
  const [, deckId, fileName] = /decks\/([^/]+)\/(.+)\.tsx$/.exec(path) ?? [];
  const slide: RegisteredSlide = { ...module, id: fileName.replace(/^\d+(?:\.\d+)?-/, '') };
  slidesByDeck.set(deckId, [...(slidesByDeck.get(deckId) ?? []), slide]);
}

/** Every deck folder found, in a stable order. */
export const deckIds: readonly string[] = [...slidesByDeck.keys()].sort();

const requestedDeckId = new URLSearchParams(window.location.search).get('deck');

/** Active deck: `?deck=<folder>` in the URL, defaulting to the showroom. */
export const activeDeckId: string =
  requestedDeckId && slidesByDeck.has(requestedDeckId) ? requestedDeckId : DEFAULT_DECK_ID;

/** Slides ordered by their numeric filename prefix. */
export const slides: RegisteredSlide[] = slidesByDeck.get(activeDeckId) ?? [];

// Slides export `meta` next to their component, which React Fast Refresh cannot patch in place.
// Reloading the page on any slide change is the reliable fallback during development.
if (import.meta.hot) {
  import.meta.hot.accept(() => window.location.reload());
}
