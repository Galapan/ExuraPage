# CSS Architecture - Exura Studio

## Overview

El CSS del proyecto está organizado en **9 archivos modulares** que se importan en un archivo principal. Esta estructura facilita el mantenimiento, la escalabilidad y la colaboración en equipo.

---

## Estructura de Archivos

```
css/
├── styles.css              # Archivo principal (importa todos los módulos)
├── 01-variables.css        # Variables y reset
├── 02-utilities.css        # Utilidades y botones
├── 03-navbar.css           # Navbar y menú móvil
├── 04-hero.css             # Hero section
├── 05-modal-forms.css      # Modales y formularios
├── 06-sections.css         # Secciones generales
├── 07-technologies.css     # Sección de tecnologías
├── 08-team-contact.css     # Equipo y contacto
└── 09-footer-responsive.css # Footer y responsive
```

---

## Descripción por Archivo

### `01-variables.css`
**Propósito:** Definir todas las variables CSS y reset básico.

**Contenido:**
- Variables de color (background, surface, primary, text, border)
- Variables de tipografía
- Variables de transición (fast, normal, slow, bounce)
- Variables de layout (section-padding, container-max, card-radius)
- Reset de márgenes, padding y box-sizing
- Estilos base de body y tipografía

---

### `02-utilities.css`
**Propósito:** Clases utilitarias y componentes de botones.

**Contenido:**
- `.text-gradient` - Texto con gradiente
- `.w-full` - Ancho completo
- `.btn` - Clase base para botones
- `.btn-primary` - Botón primario con gradiente
- `.btn-outline` - Botón con borde
- `.btn-glow` - Botón con efecto glow

---

### `03-navbar.css`
**Propósito:** Estilos de la barra de navegación y menú móvil.

**Contenido:**
- `.navbar` - Barra de navegación fija
- `.navbar.scrolled` - Estado cuando se hace scroll
- `.nav-container` - Contenedor del navbar
- `.logo-text` - Logo de Exura
- `.nav-links` - Enlaces de navegación
- `.nav-item` - Items individuales del menú
- `.mobile-menu-btn` - Botón hamburguesa para móvil
- `.mobile-menu` - Menú móvil full-screen overlay
- `.mobile-nav-item` - Items del menú móvil
- `.mobile-close-btn` - Botón para cerrar menú móvil

---

### `04-hero.css`
**Propósito:** Hero section y animaciones de fondo.

**Contenido:**
- `.hero` - Sección principal
- `.hero-content` - Contenedor del contenido
- `.hero-title` - Título principal
- `.hero-subtitle` - Subtítulo
- `.hero-actions` - Botones de acción
- `.glow-orb` - Orbes de fondo animados
- `@keyframes float` - Animación de flotación

---

### `05-modal-forms.css`
**Propósito:** Modales y elementos de formularios.

**Contenido:**
- `.modal-overlay` - Overlay para modales
- `.modal-content` - Contenido del modal
- `.close-modal-btn` - Botón para cerrar modal
- `.modal-title` - Título del modal
- `.form-group` - Grupo de formulario
- `.form-group input/textarea` - Inputs y textareas
- `.form-status` - Mensajes de estado (éxito/error)
- `.modal-footer` - Pie del modal
- `.forgot-password` - Enlace de contraseña olvidada

---

### `06-sections.css`
**Propósito:** Secciones generales, servicios y portafolio.

**Contenido:**
- `.view-animate` - Animaciones al hacer scroll
- `.section` - Clase base para secciones
- `.bg-dark/.bg-darker` - Fondos oscuros
- `.container` - Contenedor central
- `.section-header` - Cabecera de sección
- `.section-title` - Títulos de sección
- `.services-grid` - Grid de servicios
- `.service-card` - Cards de servicios
- `.portfolio-grid` - Grid de portafolio
- `.portfolio-card` - Cards de portafolio

---

### `07-technologies.css`
**Propósito:** Sección de tecnologías (tabs y grid).

**Contenido:**
- `#tecnologias` - Sección de tecnologías
- `.tech-section-header` - Cabecera
- `.tech-tabs` - Tabs de navegación
- `.tech-tab` - Tab individual
- `.tech-panel` - Paneles de contenido
- `.tech-grid` - Grid de tecnologías
- `.tech-card` - Cards de tecnologías
- `@keyframes techPanelIn` - Animación de entrada de paneles

---

### `08-team-contact.css`
**Propósito:** Sección de equipo y contacto.

**Contenido:**
- `#equipo` - Sección de equipo
- `.team-grid` - Grid de miembros
- `.team-card` - Card de miembro individual
- `.team-img` - Contenedor de imagen
- `.team-info` - Información del miembro
- `.contact-wrapper` - Wrapper del contacto
- `.contact-form` - Formulario de contacto
- `.form-row` - Fila de formulario (grid)

---

### `09-footer-responsive.css`
**Propósito:** Footer y media queries responsive.

**Contenido:**
- `footer` - Pie de página
- `@media (max-width: 1024px)` - Tablets grandes
- `@media (max-width: 900px)` - Tablets
- `@media (max-width: 768px)` - Móviles grandes
- `@media (max-width: 480px)` - Móviles pequeños

---

## Cómo Usar

### En HTML (index.html)

```html
<head>
    <link rel="stylesheet" href="css/styles.css">
</head>
```

El archivo `styles.css` importa automáticamente todos los módulos.

### En HTML (team-member.html)

```html
<head>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="team-styles.css">
</head>
```

---

## Agregar Nuevos Estilos

### 1. Identificar el Módulo Correcto

| Si es... | Agregar en... |
|----------|---------------|
| Variable/Reset | `01-variables.css` |
| Botón/Utilidad | `02-utilities.css` |
| Navbar/Menú | `03-navbar.css` |
| Hero/Portada | `04-hero.css` |
| Modal/Formulario | `05-modal-forms.css` |
| Servicios/Portafolio | `06-sections.css` |
| Tecnologías | `07-technologies.css` |
| Equipo/Contacto | `08-team-contact.css` |
| Footer/Responsive | `09-footer-responsive.css` |

### 2. Editar el Archivo

1. Abre el archivo correspondiente
2. Agrega tus nuevos estilos al final del archivo
3. Guarda los cambios

### 3. Verificar

1. Recarga la página en el navegador
2. Verifica que los cambios se apliquen correctamente
3. Prueba en diferentes tamaños de pantalla

---

## Convenciones de Nombres

- **Clases:** `.nombre-clase` (kebab-case)
- **Variables:** `--color-nombre` (kebab-case)
- **Archivos:** `01-nombre-archivo.css` (prefijo numérico)
- **Animaciones:** `@keyframes nombreAnimacion` (PascalCase)

---

## Mejores Prácticas

1. **No editar `styles.css`** - Solo importa los módulos
2. **Usar variables** - No hardcodear colores o valores
3. **Mobile-first** - Empezar con estilos base, luego media queries
4. **Comentar** - Agregar comentarios para secciones complejas
5. **Ordenar** - Mantener propiedades en orden alfabético o lógico

---

## Team Member Page

Los estilos específicos de la página de perfil de equipo están en `team-styles.css`:

- `.page-header` - Cabecera de página
- `.profile-container` - Grid principal
- `.profile-sidebar` - Sidebar con información
- `.detail-section` - Secciones de detalles
- `.chip` - Tags de tecnologías
- `.back-btn` - Botón de regreso

---

**Última actualización:** Marzo 2026  
**Responsable:** Equipo de Desarrollo Exura Studio
