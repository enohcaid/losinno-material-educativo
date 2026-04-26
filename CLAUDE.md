# CLAUDE.md — Material Educativo · Dra. Silvia Losinno

## Qué es este proyecto

Aplicación web de una sola página que permite a la **Dra. María Silvia Losinno** (nutricionista, diabetes, bienestar integral) generar PDFs de material educativo personalizado para entregar a sus pacientes en consulta.

## Reglas de trabajo

- El archivo principal es **`MaterialEducativo_Losinno.html`** — es autocontenido (un solo archivo, sin imports externos en runtime)
- Las fuentes e imágenes van **embebidas en base64** dentro del HTML; no se crean archivos externos
- Al terminar cada sesión, hacer **push** a `main` y registrar el cambio en `config/CHANGELOG.md`
- Respetar siempre la identidad visual (ver `assets/paleta.md` y `assets/tipografia.md`)

## Stack

- HTML + CSS + JS puro (sin frameworks, sin build step)
- **jsPDF 2.5.1** (cargado desde CDN) para generar los PDFs
- **Cloudflare Worker** (`losinno-proxy`) como backend: guarda y lee `pacientes.json` y `topic-overrides.json` desde la rama `gh-pages` vía GitHub API

## Archivos clave

| Archivo | Rol |
|---|---|
| `MaterialEducativo_Losinno.html` | Aplicación completa |
| `pacientes.json` | Lista de pacientes guardados (persistida en gh-pages vía Worker) |
| `topic-overrides.json` | Overrides de contenido por tema (persistidos en gh-pages vía Worker) |
| `WORKER_UPDATE_topic-overrides.js` | Snippets para agregar rutas al Worker de Cloudflare |
| `config/CHANGELOG.md` | Historial de versiones |
| `assets/paleta.md` | Paleta de colores corporativos |
| `assets/tipografia.md` | Guía tipográfica |
| `assets/guia-logo.md` | Guía de uso del logo |

## Identidad visual

| Token | Valor | Uso |
|---|---|---|
| Crema | `#F8F6F2` | Fondo principal de página y PDFs |
| Teal | `#1E6E6E` | Color de marca, títulos principales |
| Dorado | `#C9A66B` | Acentos y detalles decorativos |
| Celeste | `#A2D0D0` | Fondos secundarios, highlights |
| Rosa | `#B4475F` | Énfasis, llamadas a acción |
| Carbón | `#3D3D3D` | Texto corrido |

**Tipografía:** Playfair Display Bold (títulos) + Lato (cuerpo) — embebidas en base64 en el HTML.

## Funcionalidades actuales (v1.0.0)

- Selector de temas con búsqueda y orden por uso / A–Z
- Ordenador de páginas con drag & drop
- Personalización con nombre del paciente
- Selector de foto por página (imágenes de Unsplash)
- Generación de PDF listo para imprimir
- Guardado de pacientes frecuentes
- Overrides de contenido por tema (editable desde la app, persistido en GitHub)

## Despliegue

- Repositorio: `https://github.com/enohcaid/losinno-material-educativo`
- La app se sirve desde GitHub Pages (rama `gh-pages`)
- El Worker de Cloudflare actúa como proxy para leer/escribir JSON en `gh-pages`
