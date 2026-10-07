# Referencia de componentes

Todo se importa por el índice de su carpeta: `from '../../deck'` (motor) o `from '../../kit'` (kit).
Ver cada pieza funcionando: **showroom** (`/`) y **starter** (`/?deck=starter`).

## Índice rápido

| Necesito… | Pieza | Viene de |
|---|---|---|
| Una slide con estilo completo | `ThemedSlide` | kit |
| Tarjeta / etiqueta / número / cita con el estilo del tema | `ThemedCard` `ThemedChip` `ThemedStat` `ThemedQuote` | kit |
| Que algo aparezca al tocar "siguiente" | `Step` + `meta.steps` | deck |
| Título que "sube" palabra por palabra | `MaskWords` | deck |
| Una palabra que va rotando | `RollingWords` | kit |
| Texto que se descifra | `ScrambleText` / `useScramble` | kit / deck |
| Números que ruedan | `Odometer` | deck |
| Cinta de palabras infinita | `Marquee` | kit |
| Carrusel 3D | `Ring3D` | kit |
| Revelar contenido con una "linterna" | `Spotlight` | kit |
| Comparar antes/después | `BeforeAfter` | kit |
| Fondo de partículas / red | `NetworkCanvas` | deck |
| Palabra hecha de partículas | `ParticleText` | deck |
| Burbujas / garabatos de fondo | `Burbujas`, `CroquisCiclo`, `CroquisOnda` | deck |
| Lienzo libre a pantalla completa | `StyleStage` | deck |
| Layout "papel y tinta" con encabezado | `Frame` | deck |

---

## Slides y temas (`kit`)

### `ThemedSlide`
Slide completa con un tema: fondo animado, tipografía, colores y contenido centrado.

| Prop | Tipo | Descripción |
|---|---|---|
| `theme` | `ThemeId` | Uno de los 20 ids (ver [`TEMAS`](TEMAS.md)) |
| `kicker` | `string?` | Línea pequeña de acento sobre el título |
| `title` | `ReactNode?` | Título con el estilo de títulos del tema (acepta `<MaskWords/>`) |
| `children` | `ReactNode?` | Contenido |
| `align` | `'center' \| 'start'` | Centrado vertical (defecto) o pegado arriba |

```tsx
<ThemedSlide theme="glass" kicker="Resultados" title="Crecimos">
  <ThemedStat value="94%" label="Satisfacción" />
</ThemedSlide>
```
Dentro de `ThemedSlide`, las clases `card`, `chip`, `eyebrow`, `sub`, `body`, `quote`, `chips`, `cards`… y `Step` ya usan los colores del tema.

### `ThemedTitle`
Título suelto (lo usa `ThemedSlide`). `size` opcional (CSS), por defecto `var(--fs-title)`.

### `ThemedCard` / `ThemedChip`
Contenedores con la "piel" del tema. Aceptan `style`. Estructura interna sugerida de una tarjeta:
```tsx
<ThemedCard>
  <span className="c-tag">01</span>
  <span className="c-title">Título</span>
  <span className="c-body">Texto de apoyo</span>
</ThemedCard>
```
Para tarjetas en grilla: `<div className="cards" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>…</div>`.

### `ThemedStat`
`value` (`ReactNode`, por ejemplo `<Odometer/>`) + `label`. Número grande en la fuente de títulos y el color de acento.

### `ThemedQuote`
Cita con barra de acento. `<ThemedQuote>Una frase.</ThemedQuote>`

### `themes`, `THEME_IDS`, `useTheme()`
`themes[id]` devuelve el `ThemeDef`; `THEME_IDS` la lista de ids; `useTheme()` (solo dentro de `ThemedSlide`)
da el tema actual para construir tus propias piezas temáticas.

---

## Builds (`deck`)

### `Step`
| Prop | Tipo | Descripción |
|---|---|---|
| `at` | `number` | Paso en el que aparece (1..`meta.steps`) |
| `effect` | `StepEffect` | `rise` (defecto) `pop` `left` `right` `drop` `blur` `flip` `wipe` `stamp` |
| `delay` | `number?` | Segundos extra antes de animar (para escalonar varios en el mismo paso) |
| `isDimmedWhenPast` | `boolean?` | Se atenúa cuando llega un paso posterior (foco en lo nuevo) |
| `className`, `style` | | Para posicionar (`position: absolute`, etc.) |

Reserva su lugar desde el principio. **Qué efecto elegir:** `rise` es el neutro; `pop` para elementos pequeños/íconos;
`left`/`right` para contrastar dos lados; `drop` para sorpresa; `blur` para cifras; `wipe` para barras/frases; `stamp` para un veredicto final.

### `useStep()`
Devuelve el paso actual (0 al entrar). Para lógica propia: barras que crecen, cámara que se mueve, etc.

---

## Texto animado

### `MaskWords` (deck)
Cada palabra sube desde su propia máscara. Props: `text`, `delay?`, `stagger?` (0.09 s), `accentFrom?` (índice desde el que se pinta de acento), `style?`.
```tsx
<MaskWords text="Diseñar con ideas que se mueven" delay={0.4} accentFrom={3} />
```

### `RollingWords` (kit)
Una ranura que alterna palabras. Props: `words`, `intervalMs?` (1800), `color?`.
```tsx
Diseñar <RollingWords words={['rápido', 'mejor', 'en equipo']} />
```

### `ScrambleText` (kit) / `useScramble` (deck)
Texto que se descifra de izquierda a derecha. `ScrambleText`: `text`, `delayMs?`, `perCharMs?`, `className?`, `style?`.
`useScramble(text, delayMs, perCharMs)` devuelve el string actual si querés controlar el render (por ejemplo, cambiar el color al terminar).
Para repetirlo, remontá el componente con un `key` que cambie.

### `Odometer` (deck)
Contador mecánico. `value` (string como `"12,840"` o `"98%"`: los dígitos ruedan, el resto queda fijo), `delay?`.
Montalo cuando deba rodar: `{step >= 1 && <Odometer value="128" />}`.

---

## Movimiento y escena (`kit`)

### `Marquee`
Fila de palabras que corre sin cortes. Props: `words`, `durationSeconds?` (28), `isReversed?`, `separator?` (`✱`), `style?`.
Apilá varias con velocidades y sentidos distintos. Los colores salen de `--color-fg`/`--color-acento`, así que respeta el tema.
Contenedor sugerido para que llegue a los bordes: `style={{ margin: '0 calc(var(--pad) * -1)' }}`.

### `Ring3D`
Carrusel de tarjetas sobre un anillo en perspectiva. Props: `items` (nodos, 5–8 ideal), `durationSeconds?` (36), `radius?` (`'17vw'`).
Cada ítem se dibuja dentro de `.ring-card` (borde y tamaño ya definidos).

### `Spotlight`
El contenido queda tenue y solo se ilumina bajo el mouse (o solo, si no se mueve). Prop: `children` (estático; se renderiza dos veces).
Para el texto grande usá la clase `spot-text`.

### `BeforeAfter`
Marco 16:10 con un divisor que barre solo. Props: `before`, `after` (nodos que llenan el marco con `position: absolute; inset: 0`),
`beforeLabel?`, `afterLabel?`, `sweepSeconds?` (7). El ancho lo define el contenedor padre.

---

## Fondos y escenografía (`deck`)

| Pieza | Para qué | Props |
|---|---|---|
| `NetworkCanvas` | Red de partículas que sigue al mouse (se mueve sola si está quieto) | — (llena su contenedor) |
| `ParticleText` | Una palabra formada por partículas que se dispersa y se rearma | `text`, `density?` (6; menor = más partículas) |
| `Burbujas` | Burbujas suaves que suben (slides oscuras con `Frame`) | — |
| `CroquisCiclo`, `CroquisOnda` | Garabatos a mano flotando | `style?` (posición) |
| `GridBackground` | Papel cuadriculado animado | `isDark?` |
| `LowPolyMesh` (kit) | Malla de triángulos con brillo por cara | — |

Todos son `position: absolute` y se ubican en un contenedor posicionado (por ejemplo `StyleStage` o el `backdrop` de `Frame`).

## Lienzos y layouts (`deck`)

### `StyleStage`
Lienzo a pantalla completa para diseñar libremente. Props: `number`, `name` (etiqueta), `background`, `color`, `fontFamily?`, `children`.
Todo el showroom 33–52 está hecho con esto.

### `Frame`
Layout "papel y tinta": encabezado con marca + `meta.seccion` y cuerpo. Props: `meta`, `isCentered?`, `backdrop?`.
Clases útiles dentro: `display`, `eyebrow`, `sub`, `body`, `reveal` (entra con desenfoque; escalona por orden), `cards`/`card`, `chips`/`chip`, `quote`, `stats`/`stat`, `two-col`, `code-panel`/`code`, `portada-kicker`.

---

## Clases CSS base (`styles/theme.css`)

| Clase | Efecto |
|---|---|
| `reveal` | El elemento entra con desenfoque+subida cuando la slide es visible (los 6 primeros hijos se escalonan) |
| `display` | Titular pesado y apretado (fuente de títulos) |
| `eyebrow`, `sub`, `body`, `lead` | Jerarquía de texto |
| `card` (`.acc`), `chip` (`.on`, `.acento`) | Tarjeta y etiqueta |
| `quote`, `dato-grande`, `stat` | Cita, número grande, estadística |
| `hand` | Nota manuscrita (Caveat) en color de acento |
| `draw` | Trazo SVG que se dibuja solo (requiere `pathLength="1"`) |
| `mt-s` `mt-m` `mt-l` | Márgenes superiores escalables |

Tamaños fluidos: `var(--fs-cover|section|title|stmt|sub|body|prompt|chip|foot)` y padding `var(--pad)`.
