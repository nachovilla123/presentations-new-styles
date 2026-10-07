# Playbook: cómo planear una presentación

Esta guía es el **método**. Se usa antes de tocar código: decidís qué querés decir, cómo se siente y qué pieza del kit
sirve a cada momento. Después llenás la [`PLANTILLA-PLAN`](PLANTILLA-PLAN.md) y recién ahí armás las slides.

> Regla madre: **el efecto sirve al mensaje, no al revés.** Si quitás la animación y la slide pierde sentido, falta contenido;
> si quitás la animación y no se nota la diferencia, sobraba.

## Paso 1. Definí lo mínimo (10 minutos)

Respondé por escrito:

1. **Audiencia**: ¿quién escucha y qué sabe ya?
2. **Mensaje en una frase**: lo único que deberían recordar mañana.
3. **Duración**: cuenta con ~1 slide por minuto (un build de 4 pasos cuenta como ~2).
4. **Tono**: ¿serio, cercano, festivo, técnico, provocador? Esto elige el tema.
5. **Sala**: ¿proyector con luz o pantalla grande oscura? Define claro/oscuro y la legibilidad que necesitás.

## Paso 2. Estructura en tres actos

| Acto | Qué hace | Slides típicas |
|---|---|---|
| **Apertura** (10–15%) | Engancha y promete | Portada, pregunta o dato fuerte, agenda |
| **Desarrollo** (70–75%) | Argumenta en bloques de 3–5 slides | Corte de sección → idea → evidencia → ejemplo |
| **Cierre** (10–15%) | Resume y pide acción | Mensaje en una frase, siguiente paso, gracias |

Cada bloque del desarrollo empieza con un **corte de sección** (slide oscura, título corto, sin detalle): da aire y marca el ritmo.

## Paso 3. Elegí temas (máximo 3)

- **1 tema principal** para el cuerpo. Guíate por [`TEMAS`](TEMAS.md) → columna *Cuándo usarlo*.
- **1 tema de contraste** para cortes de sección y portada (suele ser el opuesto: si el cuerpo es claro, el corte es oscuro).
- **1 tema opcional** para el cierre o un momento "wow".

Combinaciones que funcionan (cuerpo → cortes): `flat → synthwave` · `swiss → kinetic` · `glass → particles` ·
`line-art → low-poly` · `bauhaus → kinetic` · `clay → y2k`.

## Paso 4. Elegí la pieza por intención

| Quiero que la audiencia… | Usá | Nota |
|---|---|---|
| Lea **de a una cosa** (listas, argumentos) | `Step` con `rise`/`left`/`right`; `isDimmedWhenPast` | Máx. 5 pasos por slide |
| Sienta **impacto** en una frase | `MaskWords`, tema `kinetic` | Frase de 3–7 palabras |
| Vea **un número** | `ThemedStat` + `Odometer` en un paso | Un solo dato por slide, o 3 en pasos |
| Entienda **crecimiento / tendencia** | gráfico del showroom `15-grafico`, o barras `27-build-barras` | Ver el patrón y copiarlo |
| **Compare** dos estados | `BeforeAfter` (visual) o `29-build-filas` (por filas) | Mismo contenido a ambos lados |
| Siga un **proceso** | `22-pipeline`, `19-linea-de-tiempo` o `Ring3D` | Etapas con verbos |
| Perciba **conexión / red / IA** | `NetworkCanvas`, tema `particles` | Fondo, no protagonista |
| **Descubra** algo | `Spotlight` | Una frase corta; funciona mejor en vivo |
| Registre una **cita** o definición | `ThemedQuote` | Sin otra cosa en pantalla |
| Vea una **arquitectura** | `24-build-arquitectura` (cajas + flechas por paso) | Un nivel de detalle por paso |
| Se sorprenda con un **cierre** | `stamp` de `Step`, confeti `31-build-checklist` | Una vez en toda la charla |
| Vea **código** | `.code-panel` (showroom `05-codigo`) | Máx. 10 líneas |

## Paso 5. Cuida el ritmo

- **Una idea por slide.** Si necesitás "y además…", son dos slides.
- **Un efecto protagonista por slide.** Fondo animado + marquee + builds + texto cinético a la vez compiten.
- **Variá la energía:** después de 2–3 slides densas, una de aire (corte, cita, dato único).
- **Builds para listas de 3+**, nunca para una sola cosa.
- **Texto mínimo:** si lo vas a leer en voz alta, no lo pongas; ponés el titular y hablás vos.
- **Efectos de bienvenida y de despedida:** la primera y la última slide pueden ser las más vistosas; el medio, más sobrio.

## Paso 6. Antes de presentar (checklist)

- [ ] Probé el deck **en pantalla completa** (`F`) y en el proyector/pantalla real.
- [ ] Hay internet o las **tipografías** de Google Fonts están en caché (si no, se ven con la fuente de reemplazo).
- [ ] Recorrí todo con el teclado: cada build funciona **hacia adelante y hacia atrás**.
- [ ] Ninguna slide tiene más de ~25 palabras visibles.
- [ ] El contraste se lee desde el fondo de la sala.
- [ ] Sé qué paso/slide dispara cada animación (no me sorprende a mí).
- [ ] Hice `pnpm build` sin errores. Para entregar: `pnpm build && pnpm preview` o desplegar `dist/`.

## Errores comunes

| Error | Por qué molesta | Alternativa |
|---|---|---|
| Un tema distinto en cada slide | Parece un catálogo; cansa | 1 principal + 1–2 de contraste |
| Neón/glitch sobre texto largo | Ilegible | Neón solo en títulos; cuerpo en tarjetas |
| Marquee y partículas detrás de contenido denso | Distrae | Usá fondos calmos (`flat`, `swiss`, `line-art`) para explicar |
| Builds de 8 pasos | Se hace eterno | Partí en dos slides o agrupá |
| Animación sin función | Resta credibilidad | Preguntá: ¿qué entiende el público gracias a este movimiento? |
| Cambiar el estilo a mitad de una idea | Rompe la continuidad | Cambiá de tema solo en cortes de sección |

## Cómo llevar el plan al código

1. Llená la [`PLANTILLA-PLAN`](PLANTILLA-PLAN.md): una fila por slide.
2. `cp -r src/decks/starter src/decks/mi-charla` y borrá lo que no uses.
3. Una slide por fila del plan: nombre `NN-slug.tsx`, `meta`, `ThemedSlide theme="…"` y las piezas indicadas.
4. Probá cada slide sola (`/?deck=mi-charla#/slug`) y luego de corrido.
5. Ajustá textos y tiempos con tus notas (`meta.notes`).
