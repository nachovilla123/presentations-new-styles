# Plantilla de plan de presentación

Copiá este archivo (por ejemplo a `docs/plans/mi-charla.md`), llenalo **antes** de escribir código y usalo como mapa.

## 1. Ficha

| | |
|---|---|
| Título | |
| Audiencia | |
| Mensaje en una frase | |
| Duración / nº de slides | |
| Tono | |
| Sala / pantalla | |
| Tema principal | `theme="…"` |
| Tema de contraste | `theme="…"` |
| Tema opcional (cierre/wow) | `theme="…"` |
| Nombre del deck | `src/decks/…` |

## 2. Mapa de slides

| # | Archivo | Objetivo (qué entiende el público) | Titular | Tema | Piezas del kit | Efecto / pasos | Tiempo | Notas del orador |
|---|---|---|---|---|---|---|---|---|
| 01 | `01-portada.tsx` | | | | | | 0:30 | |
| 02 | | | | | | | | |
| … | | | | | | | | |
| 99 | `99-cierre.tsx` | | | | | | 0:30 | |

Convenciones: numerá de a 1 (`01`, `02`…); dejá `99` para el cierre; `steps = n` si hay builds.

## 3. Revisión antes de codificar

- [ ] Cada slide tiene **un objetivo** claro (un verbo + una idea).
- [ ] No hay más de 3 temas en total.
- [ ] Los efectos son **no más de uno protagonista** por slide.
- [ ] La suma de tiempos coincide con la duración.
- [ ] Hay cortes de sección entre bloques.
- [ ] La primera y la última slide impactan; el medio es sobrio.

---

## Ejemplo completo: "Diseñar con IA generativa" (12 slides · 15 min)

**Ficha:** audiencia estudiantes de diseño · mensaje: *la IA acelera el criterio, no lo reemplaza* · tono cercano y moderno ·
tema principal `flat` · contraste `synthwave` · cierre `y2k`.

| # | Archivo | Objetivo | Titular | Tema | Piezas | Efecto / pasos | Tiempo |
|---|---|---|---|---|---|---|---|
| 01 | `01-portada` | Enganchar | "Diseñar con IA" | `synthwave` | `MaskWords`, `ThemedChip` | Entrada de palabras | 0:45 |
| 02 | `02-pregunta` | Abrir la duda | "¿Y si el boceto tardara 20 minutos?" | `flat` | `ThemedQuote` | — | 0:45 |
| 03 | `03-agenda` | Prometer 3 ideas | "Tres ideas" | `flat` | `ThemedCard` ×3 | `steps: 3` (`rise`, `drop`, `rise`) | 1:00 |
| 04 | `04-corte-1` | Marcar bloque 1 | "El problema" | `synthwave` | — | Fondo animado del tema | 0:20 |
| 05 | `05-antes` | Mostrar el dolor | "Dos semanas por un boceto" | `flat` | `ThemedStat` | `Odometer` en un paso | 1:00 |
| 06 | `06-proceso` | Explicar el ciclo | "Idea → prompt → prototipo" | `flat` | showroom `22-pipeline` (adaptado) | `steps: 5` | 1:30 |
| 07 | `07-corte-2` | Marcar bloque 2 | "Probémoslo" | `synthwave` | — | — | 0:20 |
| 08 | `08-demo` | Ver el resultado | "Del boceto al final" | `flat` | `BeforeAfter` | Barrido automático | 2:00 |
| 09 | `09-datos` | Evidencia | "Más iteraciones" | `flat` | 3× `ThemedStat` + `Odometer` | `steps: 3` (`blur`) | 1:15 |
| 10 | `10-limites` | Honestidad | "Lo que la IA no hace" | `flat` | `ThemedCard` ×4, `isDimmedWhenPast` | `steps: 4` (`left`/`right`) | 1:30 |
| 11 | `11-idea-final` | Fijar el mensaje | "Criterio, más rápido" | `swiss`* | `MaskWords` | — | 0:45 |
| 12 | `99-cierre` | Despedir | "Gracias ✦" | `y2k` | `ThemedSlide` | Brillo cromado | 0:30 |

\* Si el contraste con `flat` es demasiado, mantené `flat`: es una **decisión consciente**, no un descuido.

Resultado: 3 temas (`flat`, `synthwave`, `y2k`), 4 slides con builds, 3 efectos protagonistas (`Odometer`, `BeforeAfter`, pipeline) y
ninguna slide con más de una animación fuerte.
