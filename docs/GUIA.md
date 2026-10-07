# Guía de uso

Todo lo que necesitás saber para crear una presentación con este proyecto. Si buscás *qué* poner en cada slide,
leé primero el [`PLAYBOOK`](PLAYBOOK.md).

## 1. Conceptos en 2 minutos

- **Deck**: una carpeta en `src/decks/<nombre>/` con archivos `NN-slug.tsx`. Cada archivo es **una slide**.
- **Slide**: un componente React + un `export const meta` con sus datos (título, transición, pasos…).
- **Tema**: el estilo visual completo (fondo animado, tipografías, colores, forma de las tarjetas). Hay 20.
  Una slide elige uno con `<ThemedSlide theme="synthwave">`.
- **Kit**: componentes sueltos para el contenido (tarjetas, números, citas) y para el movimiento (marquee, spotlight…).
- **Build / paso**: una slide con `steps: 3` revela algo nuevo en cada "siguiente" antes de pasar a la próxima.
- **Motor** (`src/deck/`): router, transiciones, teclado, barra de progreso. No hace falta tocarlo.

## 2. Crear tu deck

```bash
cp -r src/decks/starter src/decks/mi-charla
pnpm dev
# abrí http://localhost:5173/?deck=mi-charla
```

1. Editá/borrá/duplicá archivos en `src/decks/mi-charla/`.
2. El **orden** lo da el número del nombre (`01-`, `02-`…); la **ruta** es lo que va después (`02-agenda.tsx` → `#/agenda`).
3. Convención: la slide final se llama `99-cierre.tsx`, así podés insertar slides sin renombrar.
4. Para que tu deck abra por defecto, cambiá `DEFAULT_DECK_ID` en `src/deck/registry.ts`.

Guardar el archivo recarga la página sola (no hay hot-reload parcial por cómo se exporta `meta`).

## 3. Anatomía de una slide

```tsx
import { Step, type SlideMeta } from '../../deck';
import { ThemedCard, ThemedSlide } from '../../kit';

export const meta: SlideMeta = {
  title: 'Agenda',          // nombre en el resumen (tecla O) y en la pestaña
  seccion: 'Bloque 1',      // etiqueta de sección
  steps: 3,                 // opcional: cantidad de pasos (builds)
  transition: 'slide',      // opcional: fade | slide | zoom | flip | curtain | none
  notes: 'Qué decir acá',   // opcional: notas del orador (todavía no se muestran)
};

export default function Agenda() {
  return (
    <ThemedSlide theme="flat" kicker="Hoy vemos" title="Tres ideas">
      <Step at={1} effect="rise"><ThemedCard>Primera idea</ThemedCard></Step>
      <Step at={2} effect="drop"><ThemedCard>Segunda idea</ThemedCard></Step>
      <Step at={3} effect="pop"><ThemedCard>Tercera idea</ThemedCard></Step>
    </ThemedSlide>
  );
}
```

Imports: el motor se importa de `'../../deck'` y el kit de `'../../kit'` (siempre por el índice, nunca por archivo).

### Campos de `meta`

| Campo | Tipo | Qué hace |
|---|---|---|
| `title` | string | Obligatorio. Nombre corto de la slide |
| `seccion` | string | Obligatorio. Etiqueta (se imprime en el encabezado de `Frame`) |
| `steps` | number | Pasos de build. Aparecen puntitos abajo a la derecha |
| `transition` | `fade \| slide \| zoom \| flip \| curtain \| none` | Cómo entra/sale. Por defecto `slide` |
| `variante` | `'corte'` | Solo con `Frame`: versión oscura con grilla propia |
| `hasGrid` | boolean | Solo con `Frame`: papel cuadriculado animado detrás |
| `notes` | string | Notas del orador |

## 4. Dos maneras de armar una slide

**A. Con tema (recomendada)**: `ThemedSlide` te da fondo, tipografía y colores del tema elegido. Cambiar el estilo de toda
la slide es cambiar una palabra (`theme="glitch"`). Dentro usá `ThemedCard`, `ThemedStat`, `ThemedQuote`, `ThemedChip`
o las clases (`card`, `chip`, `quote`, `eyebrow`, `sub`…) que ya toman los colores del tema.

**B. Con `Frame`** (look "papel y tinta" original): encabezado con marca + etiqueta de sección y cuerpo libre.
Es el estilo del primer showroom. Más control, menos temas. Ver `src/decks/showroom/01-portada.tsx`.

**C. Lienzo libre** (`StyleStage`): ocupás toda la pantalla y diseñás desde cero, como las slides 33–52 del showroom.
Útil para una portada espectacular o para inventar un estilo nuevo.

## 5. Builds (revelar de a pasos)

1. `meta.steps = N`.
2. Envolvé lo que aparece en `<Step at={n}>` (se muestra cuando el paso llega a `n`). Reserva su espacio, no hay saltos de layout.
3. Para lógica propia usá `const step = useStep()` (0 = nada revelado todavía).

`←` primero oculta el último paso; si volvés a una slide desde la siguiente, entrás en su último paso.
Efectos de `Step`: `rise · pop · left · right · drop · blur · flip · wipe · stamp`. Detalle en [`COMPONENTES`](COMPONENTES.md).

> Si algo debe **animarse recién cuando aparece** (un odómetro, un gráfico), montalo condicionalmente:
> `{step >= 2 && <Odometer value="128" />}`.

## 6. Navegación y URLs

| Tecla | Acción |
|---|---|
| `→` `↓` `Espacio` `PageDown` | Siguiente paso / slide |
| `←` `↑` `PageUp` | Paso / slide anterior |
| `Home` / `End` | Primera / última slide |
| `O` | Resumen de todas las slides (clic para saltar) |
| `F` | Pantalla completa |
| `D` | Pasar al siguiente deck (showroom → starter → …) |

URLs: `/?deck=<carpeta>#/<slug>`. Cada slide tiene su link directo, así que podés compartir o recargar sin perder el lugar.
En la slide `todos-los-temas` del starter, `&theme=glitch` fija un tema en vez de rotar.

## 7. Cómo está organizado por dentro

| Carpeta | Contenido | ¿Lo toco? |
|---|---|---|
| `src/deck/` | `Deck` (router/teclado), `Frame`, `Step`, `StyleStage`, helpers (`MaskWords`, `Odometer`, `NetworkCanvas`, `ParticleText`, `useScramble`) | Casi nunca |
| `src/kit/themes/` | Los 20 temas (`definitions.tsx`), `ThemedSlide`, partes temáticas | Al agregar un tema |
| `src/kit/effects/` | `Marquee`, `RollingWords`, `ScrambleText`, `Ring3D`, `Spotlight`, `BeforeAfter` | Al agregar un efecto |
| `src/decks/*` | Las presentaciones | Siempre |
| `src/styles/` | `theme.css` (tokens y clases base), `fx.css` (estilos de efectos), `gallery.css` (showroom) | Al agregar un efecto/tema con CSS |

Los estilos que necesitan CSS propio (keyframes, patrones) van en `fx.css` o `gallery.css`; todo lo demás es estilo inline en TSX.

## 8. Agregar un tema nuevo

1. En `src/kit/themes/types.ts` sumá el id a `THEME_IDS`.
2. En `src/kit/themes/definitions.tsx` creá un `ThemeDef` (copiá uno parecido) y agregalo al objeto `themes`.
   Tiene que definir: `background`, `color`, `mutedColor`, `accent`, `fontFamily`, `headingStyle`, `card`, `chip` y un `Backdrop`.
3. Si usa una tipografía nueva, sumala al `<link>` de Google Fonts en `index.html`.
4. Probalo con `/?deck=starter&theme=<id>#/todos-los-temas`.

## 9. Agregar un efecto nuevo

1. Creá `src/kit/effects/MiEfecto.tsx` con props claras y sin dependencias del contenido.
2. Exportalo en `src/kit/effects/index.ts`.
3. Si necesita CSS/keyframes, agregalos a `src/styles/fx.css`.
4. Documentalo en [`COMPONENTES.md`](COMPONENTES.md) y mostralo en una slide del showroom.

Reglas de oro: limpiar listeners/timers en `useEffect`; no usar `vector-effect: non-scaling-stroke` ni `stroke-dasharray`
manual en un path con `pathLength` animado; respetar `prefers-reduced-motion` en animaciones de fondo (ya hay una regla global).

## 10. Problemas frecuentes

| Síntoma | Causa y solución |
|---|---|
| Una slide aparece en blanco justo al recargar | Las animaciones arrancan al montar; esperá un segundo. En navegadores en segundo plano se pausan |
| Consola con `meta is not defined` al editar | Es del hot-reload de Vite; la página se recarga sola. En el build final no existe |
| Tipografía distinta a la esperada | Las fuentes vienen de Google Fonts: sin internet se usa la de reemplazo |
| Una slide nueva no aparece | Revisá que el nombre sea `NN-slug.tsx` (empieza con número) y exporte `meta` y un componente por defecto |
| El título de una slide no se ve cromado/neón | No pases `color` inline al título del tema: lo anula |
