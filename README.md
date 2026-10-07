# Presentaciones animadas en React

Un proyecto para armar presentaciones como una app web: cada diapositiva es un componente, el estilo vive en
**temas intercambiables** y las animaciones son **piezas reutilizables**. Hecho con Vite, React 19, Tailwind v4 y `motion`.

## Empezar

```bash
pnpm install
pnpm dev          # http://localhost:5173
```

| Quiero ver… | URL |
|---|---|
| **Showroom**: 52 slides de demostración (estilos, efectos, builds) | `http://localhost:5173/` |
| **Starter**: 7 slides armadas solo con el kit | `http://localhost:5173/?deck=starter#/portada` |
| Tu propio deck `src/decks/mi-charla/` | `http://localhost:5173/?deck=mi-charla` |

Teclas: `→ ↓ Espacio` siguiente · `← ↑` anterior · `O` resumen · `F` pantalla completa · `D` cambiar de deck · `Esc` cerrar resumen.

## Qué hay

```
src/
  deck/     Motor: router por hash, transiciones, builds por paso, helpers de animación
  kit/      Piezas reutilizables: 20 temas (ThemedSlide…) y efectos (Marquee, Spotlight…)
  decks/
    showroom/  52 demos (referencia visual, no se edita para una charla)
    starter/   Punto de partida: copiá esta carpeta para tu charla
  styles/   theme.css (tokens), fx.css (efectos), gallery.css (estilos del showroom)
docs/       Guías (empezá por GUIA.md)
```

## Documentación

| Documento | Para qué |
|---|---|
| [`docs/GUIA.md`](docs/GUIA.md) | Cómo funciona todo y cómo crear tu deck paso a paso |
| [`docs/PLAYBOOK.md`](docs/PLAYBOOK.md) | **Cómo planear una presentación** con estas piezas |
| [`docs/PLANTILLA-PLAN.md`](docs/PLANTILLA-PLAN.md) | Plantilla para llenar antes de escribir código (con ejemplo) |
| [`docs/COMPONENTES.md`](docs/COMPONENTES.md) | Referencia de cada componente: props y ejemplos |
| [`docs/TEMAS.md`](docs/TEMAS.md) | Los 20 temas: cuándo usar cada uno |
| [`docs/REFERENCIA-DISENO.md`](docs/REFERENCIA-DISENO.md) | Tokens y catálogo del showroom (referencia histórica) |

## Comandos

```bash
pnpm dev       # servidor de desarrollo
pnpm build     # typecheck + build de producción
pnpm preview   # servir el build
```
