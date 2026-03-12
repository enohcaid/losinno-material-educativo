# 🌿 Proyecto Losinno — Material Educativo

Aplicación web para generar PDFs de material educativo personalizado para pacientes de la **Dra. María Silvia Losinno**, médica especialista en Nutrición, Diabetes y Bienestar Integral.

---

## Sobre la profesional

La Dra. Losinno combina más de 20 años de trayectoria clínica con un abordaje integrador que incorpora Psicoinmunoneuroendocrinología, Medicina Ayurveda, Mindfulness y Bioneuroemoción. Su práctica es humanizada y educativa, orientada a empoderar a pacientes y alumnos en la búsqueda de equilibrio y calidad de vida.

---

## Sobre la aplicación

La app permite seleccionar temas de salud y bienestar, ordenarlos, personalizarlos con el nombre del paciente, y generar un PDF listo para entregar en consulta.

**Stack técnico:**
- HTML + CSS + JS puro (un solo archivo autocontenido)
- jsPDF para generación de PDFs
- Sin frameworks ni dependencias externas instaladas

**Archivo principal:** `MaterialEducativo_Losinno.html`

---

## Estructura del repositorio

```
/
├── README.md                          ← este archivo
├── CHANGELOG.md                       ← historial de versiones
├── MaterialEducativo_Losinno.html     ← aplicación principal
├── assets/
│   ├── logo.svg                       ← símbolo de marca
│   ├── marca.svg                      ← logo completo
│   ├── fuentes.zip                    ← Playfair Display + Lato
│   ├── paleta.md                      ← colores corporativos
│   ├── tipografia.md                  ← guía tipográfica
│   └── guia-logo.md                   ← usos correctos del logo
└── config/
    └── claude-access.md               ← tokens de acceso (privado)
```

---

## Identidad visual

- **Tipografía principal:** Playfair Display Bold (títulos) + Lato (cuerpo)
- **Colores:** ver `assets/paleta.md`
- **Logo:** ver `assets/guia-logo.md`
- **Fondo base:** `#F8F6F2` (crema)
- **Color principal de marca:** `#1E6E6E` (teal)

---

## Instrucciones para Claude

- Siempre trabajar sobre la **última versión** del HTML del repo
- Mantener el archivo como **un solo .html autocontenido** (sin archivos externos)
- Las imágenes y fuentes deben estar **embebidas en base64** dentro del HTML
- Al terminar cada sesión, hacer push de la versión actualizada
- Registrar cada cambio en `CHANGELOG.md` con fecha y descripción
- Respetar siempre la paleta de colores y tipografías del manual de marca
