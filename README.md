# 📦 Vanilla UI Components Vault

> **Una galería interactiva y moderna de componentes UI lista para copiar y pegar.** Construida 100% sin frameworks, diseñada para agilizar el desarrollo frontend con una interfaz 3D y búsqueda inteligente.

## 📖 Acerca del Proyecto

**Vanilla UI Components** es un repositorio visual y personal de código. Funciona como una biblioteca estilo *Single Page Application (SPA)* donde puedes previsualizar componentes web (Botones, Navbars, Logins, etc.) en tiempo real e interactuar con ellos. 

Si te gusta cómo se ve y funciona un componente, puedes exportar su **HTML, CSS y JavaScript con un solo clic** para usarlo directamente en tus propios proyectos.

### ✨ Características Principales
* **Menú 3D Interactivo:** Un carrusel principal fluido con efecto de inclinación (*tilt*) manejado enteramente con matemáticas en JavaScript y transformaciones CSS.
* **Búsqueda Difusa (Fuzzy Search):** Integración con `Fuse.js` para encontrar componentes rápidamente, incluso si hay errores tipográficos en la búsqueda.
* **Sistema de Filtros:** Menús desplegables para filtrar componentes por sus etiquetas (ej. *Minimalista*, *Dark Mode*, *Animado*).
* **Exportación en un clic:** Botones dedicados que copian el código fuente exacto (HTML, CSS o JS) al portapapeles.
* **Cero Dependencias Pesadas:** Lógica construida íntegramente con Módulos ES6 nativos.

---

## 🏗️ Arquitectura y Tecnologías

El proyecto está diseñado de forma modular para que sea escalable y fácil de mantener sin necesidad de usar React o Vue.

### Tecnologías Utilizadas:
* **Estructura y Estilos:** HTML5 semántico y CSS3 (Grid, Flexbox, Variables CSS, animaciones `@keyframes`).
* **Lógica Core:** Vanilla JavaScript (ECMAScript 6+).
* **Motor de Búsqueda:** [Fuse.js](https://fusejs.io/) (importado vía CDN).
* **Iconografía:** FontAwesome 6.

### Estructura de Carpetas:
```text
📦 vanilla-ui-components
 ┣ 📂 assets/              # Imágenes y sprites para las previsualizaciones
 ┣ 📂 component-library/
 ┃ ┗ 📜 index.html         # Punto de entrada (Menú del Carrusel 3D)
 ┣ 📂 css/                 # Estilos globales y específicos por componente
 ┗ 📂 js/
   ┣ 📜 app.js             # Lógica del carrusel, eventos de teclado y mouse
   ┣ 📜 router.js          # Sistema de enrutamiento (Inyecta las vistas dinámicamente)
   ┣ 📂 views/             # Interfaz de cada categoría (ej. navbars.js, buttons.js)
   ┗ 📂 data/              # Base de datos local (ej. navbarsData.js con el código exportable)
