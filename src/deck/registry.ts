import type { RegisteredSlide, SlideModule } from './types';

const modules = import.meta.glob<SlideModule>('../slides/[0-9]*.tsx', { eager: true });

/** Slides ordered by their numeric filename prefix. */
export const slides: RegisteredSlide[] = Object.entries(modules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([path, module]) => ({
    ...module,
    id: path.replace(/^.*\/\d+(?:\.\d+)?-/, '').replace(/\.tsx$/, ''),
  }));

// Slides export `meta` next to their component, which React Fast Refresh cannot patch in place.
// Reloading the page on any slide change is the reliable fallback during development.
if (import.meta.hot) {
  import.meta.hot.accept(() => window.location.reload());
}
