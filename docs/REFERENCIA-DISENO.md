# Design reference (original look and showroom catalog)

> Historical reference written while building the showroom. For day-to-day use start with `docs/GUIA.md`.

Look and feel modelled on https://utn-charla-genai.vercel.app (a React + Vite + Tailwind v4 + `motion` deck).
Everything visual lives in **`src/styles/theme.css`**; copy that file plus `src/deck/` to start a new deck.

## Tokens

| Token | Light | Dark (`.slide--corte`) |
|---|---|---|
| `--color-fondo` (paper) | `#f3efe6` | `#14120e` |
| `--color-fg` (ink) | `#14120e` | `#f6f1e7` |
| `--color-muted` | `#54504a` | `#f6f1e794` |
| `--color-acento` | `#e8482b` | `#e8482b` |
| `--color-codebg` | `#0c1326` | `#0c1326` |

Fonts: **Sora** (display, 700, tight tracking `-0.035em`, line-height `.92`), **IBM Plex Sans** (body),
**IBM Plex Mono** (code), **Caveat** (handwritten notes, always accent-coloured).

Type scale is fluid and bound by both `vw` and `vh`: `--fs-cover … --fs-foot`, padding `--pad`, grid cell `--gridsz` (9vw).

## Rules of the look

- One accent colour only, used sparingly: kickers, key words, arrows, the progress bar.
- Light slides sit on an animated square-ruled paper grid (`hasGrid: true`); section breaks use the dark `corte` variant.
- Headings are heavy and tight; secondary text is `--color-muted`; labels are small caps with wide tracking.
- Hand-written Caveat notes + a self-drawing arrow (`.draw` with `pathLength="1"`) point at the thing that matters.
- Faint floating doodles (`.croquis`) and rising bubbles (`.burbujas`) are ambience on dark slides, never content.
- Elements enter with `.reveal` (blur + rise); children stagger by `nth-child`. Only the first 6 children stagger.

## Building blocks (class → use)

`portada-kicker` + `.pk-num` (numbered kicker) · `display` (headings) · `sub` / `body` / `lead` / `.k` ·
`chips` / `chip` (`.on`, `.acento`) · `cards` / `card` (`.acc`, `.c-tag/.c-title/.c-body/.c-list/.c-dato`) ·
`quote` · `stats` / `stat` · `dato-grande` · `two-col` + `col-head` (`.bad`/`.good`) ·
`code-panel` / `code-bar` / `code` (`.kw .pr .st .cm .fn`) · `tok` (`.tok-a`, `.tok-b`) · `prompt` (blinking caret) ·
`con-qr` (text + handwritten note + arrow + image) · `concepto-flotante` (floating pill).

## Adding a slide

Create `src/decks/showroom/NN-slug.tsx`. It must export `meta` (`SlideMeta`) and a default component that renders
`<Frame meta={meta}>…</Frame>`. The filename slug is the route (`#/slug`); the numeric prefix is the order.
`transition` is one of `fade | slide | zoom | flip | curtain | none`.

## Keys

`→ ↓ Space PageDown` next · `← ↑ PageUp` back · `Home / End` · `F` fullscreen · `O` overview · `Esc` close overview.

## Notes

- The brandmark and the QR are placeholders; replace them. Do not reuse the original deck's logo or content.
- `reduced-motion` disables the ambient animations.

## Effects catalog (slides 10–22)

Reusable pieces live in `src/deck/fx/`; slide-specific CSS in `src/styles/fx.css`. Library: `motion`.

| Slide | Technique | Where it lives |
|---|---|---|
| 10 texto-cinetico | Kinetic type: per-word clipping-mask reveal + rolling word | `fx/MaskWords`, `AnimatePresence` in slide |
| 11 descifrado | Text decode / scramble, replays every 9 s | `fx/useScramble` |
| 12 odometro | Mechanical odometer, one spring-driven strip per digit | `fx/Odometer` |
| 13 marquee | Infinite ticker rows, outline/solid words, opposite directions | `.marquee-*` in `fx.css` |
| 14 magic-move | Shared layout animation, grid ⇄ list (Apple "Magic Move") | `layout` props in slide |
| 15 grafico | Self-drawing line chart (`pathLength`), pop-in points, counting label | `animate` + `useTransform` |
| 16 anillo-3d | CSS 3D ring carousel with perspective | `.ring-*` in `fx.css` |
| 17 red | Canvas particle network that follows the pointer (wanders when idle) | `fx/NetworkCanvas` |
| 18 linterna | Spotlight: bright text masked by a radial gradient at the cursor | `.spot*` in `fx.css` |
| 19 linea-de-tiempo | Line draws, milestones spring in, travelling pulse | `.tl-*` in `fx.css` |
| 20 morfosis | SVG path morph between shapes (all paths share one structure) | `motion.path` `d` |
| 21 comparador | Auto-sweeping before/after with `clip-path` | `.compare*` in `fx.css` |
| 22 pipeline | Sequential state: stages light up, connectors fill | `animate` props |

Gotchas: animations start on mount, so add ~0.3 s delay to coexist with the slide transition; remount with a `key`
to replay; canvas/pointer effects must clean up listeners in `useEffect`; morph paths must keep the same command structure.

## Build steps (slides 23–32)

A slide declares `meta.steps = N`. Each press of next/space/→ reveals one more step before moving on; previous
(←) hides the latest step first, and going back into a slide lands on its last step. Dots at the bottom-right show progress.

- `useStep()` returns the current step (0 = nothing revealed yet).
- `<Step at={n} effect=… delay? isDimmedWhenPast?>` reserves its space (no layout jumps) and animates in at step `n`.
  Effects: `rise | pop | left | right | drop | blur | flip | wipe | stamp`.
- For anything custom (bars, camera, odometer) read `useStep()` and drive `animate` props from it.
  Mount a component only once revealed (`{step >= n && <Odometer … />}`) when it should play on appearance.

| Slide | What builds |
|---|---|
| 23 build-lista | Five rows, each with its own effect; older rows dim |
| 24 build-arquitectura | Boxes pop in, arrows draw between them, chips drop into a container |
| 25 build-collage | Cards fly in from different sides, then an "APROBADO" stamp slams down |
| 26 build-foco | One tile at a time is spotlighted while the others fade; caption swaps |
| 27 build-barras | Bars grow with a spring, then a trend line draws |
| 28 build-chat | Bubbles alternate sides; the assistant shows typing dots first |
| 29 build-filas | Each row assembles from three directions, ending with a handwritten verdict |
| 30 build-metricas | Odometers roll once each KPI appears |
| 31 build-checklist | Checkmarks draw themselves; the last step fires confetti |
| 32 build-camara | A "camera" pans and zooms between four regions of one canvas |

Gotcha: never put `vector-effect="non-scaling-stroke"` or a manual `stroke-dasharray` on a path whose `pathLength` is animated.

## Style gallery (slides 33–52)

Twenty visual styles, one slide each. They own their whole canvas through `<StyleStage number name background color fontFamily>`
(`src/deck/StyleStage.tsx`), which also prints the style name in a small tag. Styles that need CSS live in `src/styles/gallery.css`.
Extra Google Fonts are loaded in `index.html`.

| # | File | Style | Signature technique |
|---|---|---|---|
| 01 | 33-estilo-swiss | Swiss style | 12-col grid lines draw in, red circle, huge Inter 900, asymmetric layout |
| 02 | 34-estilo-cinetico | Kinetic type | Words swap letter by letter with spring slam, rotate and scale |
| 03 | 35-estilo-pop-art | Pop art | Ben-Day dots, starburst, Bangers with hard shadow, comic bubble |
| 04 | 36-estilo-flat-2d | Flat 2D | No gradients or outlines; spinning sun, drifting clouds, swaying trees |
| 05 | 37-estilo-clay-3d | Clay 3D | Inset highlights/shadows on blobs, extruded text, squash-and-stretch bob |
| 06 | 38-estilo-glassmorphism | Glassmorphism | `backdrop-filter` frosted cards over wandering colour blobs |
| 07 | 39-estilo-y2k-chrome | Y2K chrome | Metallic gradient text with a shine sweep, chrome rings, sparkles |
| 08 | 40-estilo-synthwave | Synthwave | Striped sun, neon flicker, perspective grid floor that scrolls |
| 09 | 41-estilo-risograph | Risograph | Two inks with `multiply`, halftone dots, misregistration jitter, grain |
| 10 | 42-estilo-paper-collage | Paper collage | Torn `clip-path` edges, tape, pieces dropping in with a wobble |
| 11 | 43-estilo-glitch | Glitch | RGB-split layers sliced by animated `clip-path`, scanlines, tear bars |
| 12 | 44-estilo-particulas | Particles | Canvas particles form a word, scatter on a timer, flee the pointer |
| 13 | 45-estilo-neobrutalismo | Neobrutalism | 4px borders, hard offset shadows, button press loop, black marquee |
| 14 | 46-estilo-bauhaus | Bauhaus | Primary-colour geometry assembling on a grid, rotating sector |
| 15 | 47-estilo-memphis | Memphis | Dotted pink field, squiggles and triangles floating, offset-shadow title |
| 16 | 48-estilo-vaporwave | Vaporwave | Pastel sun, checker grid, Win95 window, fullwidth type, marble column |
| 17 | 49-estilo-pixel-art | Pixel art | Sprites from string bitmaps, `steps()` hop and scroll, blinking prompt |
| 18 | 50-estilo-isometrico | Isometric | Towers drawn as three polygons, painter's-order sort, breathing heights |
| 19 | 51-estilo-low-poly | Low poly | Jittered triangle mesh with a colour ramp and per-face shimmer |
| 20 | 52-estilo-line-art | Line art | One stroke width; every path draws itself and the scene redraws every 11 s |

Kinetic type (02) and Particles (12) are deliberately different takes from slides 10 and 17.
