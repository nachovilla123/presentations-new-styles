# Los 20 temas

Un tema es un estilo visual completo. Se elige por slide: `<ThemedSlide theme="<id>">`.
Para verlos con contenido real, abrí `/?deck=starter#/todos-los-temas` (rota por todos; `&theme=<id>` fija uno).
Para verlos a pantalla completa como piezas de exhibición, mirá el showroom (columna *Demo*).

| id | Nombre | Fondo | Tipografía | Cuándo usarlo | Demo (showroom) |
|---|---|---|---|---|---|
| `swiss` | Swiss style | claro | Inter | Serio, editorial, claro. Para ideas densas que necesitan orden. | `33-estilo-swiss` |
| `kinetic` | Kinetic type | oscuro | Archivo Black (títulos) + Inter | Energético y rotundo. Para títulos que deben sentirse como golpes. | `34-estilo-cinetico` |
| `pop-art` | Pop art | claro | Bangers | Divertido, gráfico, con actitud. Para marketing y mensajes cortos. | `35-estilo-pop-art` |
| `flat` | Flat 2D | claro | Poppins | Amable y limpio. Para onboarding, producto y público general. | `36-estilo-flat-2d` |
| `clay` | Clay 3D | claro | Fredoka | Suave, táctil, simpático. Para productos amigables y apps de bienestar. | `37-estilo-clay-3d` |
| `glass` | Glassmorphism | oscuro | Inter | Moderno y premium. Para tecnología, SaaS y datos. | `38-estilo-glassmorphism` |
| `y2k` | Y2K chrome | claro | Orbitron | Futurista retro, brillante. Para lanzamientos, moda y cultura pop. | `39-estilo-y2k-chrome` |
| `synthwave` | Synthwave | oscuro | Orbitron | Neón nocturno y nostálgico. Para música, gaming y tecnología con onda. | `40-estilo-synthwave` |
| `risograph` | Risograph | claro | Rubik Mono One (títulos) + Space Grotesk | Artesanal e independiente. Para cultura, educación y eventos. | `41-estilo-risograph` |
| `collage` | Paper collage | claro | Permanent Marker (títulos) + Special Elite | Hecho a mano, cálido. Para storytelling, educación y proyectos creativos. | `42-estilo-paper-collage` |
| `glitch` | Glitch | oscuro | Archivo Black (títulos) + Space Grotesk | Tenso y digital. Para ciberseguridad, errores, arte tecnológico. | `43-estilo-glitch` |
| `particles` | Particles | oscuro | Inter | Etéreo y conectado. Para IA, redes, datos e innovación. | `44-estilo-particulas` |
| `neobrutalism` | Neobrutalism | claro | Space Grotesk | Directo, sin filtros, joven. Para startups, herramientas y manifiestos. | `45-estilo-neobrutalismo` |
| `bauhaus` | Bauhaus | claro | Jost | Racional y geométrico. Para diseño, arquitectura y principios. | `46-estilo-bauhaus` |
| `memphis` | Memphis | claro | Rubik Mono One (títulos) + Fredoka | Juguetón y colorido, años 80. Para eventos, moda y marcas jóvenes. | `47-estilo-memphis` |
| `vaporwave` | Vaporwave | oscuro | VT323 | Onírico y nostálgico. Para música, arte web y cultura de internet. | `48-estilo-vaporwave` |
| `pixel` | Pixel art | oscuro | Press Start 2P (títulos) + VT323 | Retro gamer y lúdico. Para gamificación, devs y nostalgia 8-bit. | `49-estilo-pixel-art` |
| `isometric` | Isometric | oscuro | Poppins | Técnico y ordenado. Para arquitectura de sistemas, procesos y logística. | `50-estilo-isometrico` |
| `low-poly` | Low poly | oscuro | Poppins | Geométrico y fresco. Para naturaleza, tecnología y presentaciones corporativas. | `51-estilo-low-poly` |
| `line-art` | Line art | claro | Poppins | Minimalista y elegante. Para ideas simples, bienestar y marcas boutique. | `52-estilo-line-art` |

## Cómo elegir

- **Un deck, 1 a 3 temas.** Elegí un tema principal para el cuerpo y, como máximo, uno o dos más para portada, cortes de sección o cierre. Mezclar los 20 se ve como un catálogo, no como una charla.
- **Alterná claro y oscuro** en los cortes de sección para dar ritmo (por ejemplo: cuerpo en `flat`, cortes en `synthwave`).
- **Legibilidad primero:** los temas con tipografía muy decorativa (`pixel`, `collage`, `memphis`, `risograph`) funcionan mejor con poco texto por slide.
- **Contraste en proyector:** los temas oscuros con neón (`synthwave`, `glitch`, `vaporwave`) se ven espectaculares en pantalla grande, pero se lavan con luz de sala. Probalos antes.

## Qué incluye un tema

Cada `ThemeDef` (en `src/kit/themes/definitions.tsx`) define:

- `background`, `color`, `mutedColor`, `accent`: la paleta.
- `fontFamily` y `headingFont`: tipografía de texto y de títulos.
- `headingStyle` y `headingClassName`: cómo se ven los títulos (neón, cromado, trazo…).
- `card` y `chip`: la piel de tarjetas y etiquetas (borde, sombra, relleno).
- `Backdrop`: las capas animadas de fondo (grillas, formas, partículas, escenografía).
- `safeBottom` (opcional): espacio inferior que el contenido debe respetar por la escenografía.
- `cardText` (opcional): colores de texto dentro de tarjetas cuando el relleno choca con el de la slide.

Dentro de `ThemedSlide`, las clases heredadas (`card`, `chip`, `eyebrow`, `quote`, `sub`, `body`…) y `Step` toman los colores del tema porque el lienzo redefine las variables CSS `--color-fg`, `--color-muted`, `--color-acento` y `--font-display`.
