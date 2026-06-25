<h1 align="center">📦 Vanilla UI Components Vault</h1>

<p align="center">
  <strong>Una galería interactiva y moderna de componentes UI lista para copiar y pegar.</strong><br>
  Construida 100% sin frameworks, diseñada para agilizar el desarrollo frontend con una interfaz 3D y búsqueda inteligente.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Fuse.js-B1B1B1?style=for-the-badge" alt="Fuse.js">
</p>

---

## 📑 Tabla de Contenidos
- [Acerca del Proyecto](#acerca-del-proyecto)
- [Características Principales](#características-principales)
- [Arquitectura y Tecnologías](#arquitectura-y-tecnologías)
- [Cómo instalar y ejecutar localmente](#cómo-instalar-y-ejecutar-localmente)
- [Guía de Uso (Agregar Componentes)](#cómo-agregar-un-nuevo-componente-guía-de-uso)

---

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
   ┗ 📂 data/              # Base de datos local (ej. navbarsData.js con el código exportable
```
---

## 🚀 Cómo instalar y ejecutar localmente

El proyecto utiliza **Módulos ES6 (`import` / `export`)**, por lo que **no funcionará si abres el archivo `index.html` con doble clic** debido a las restricciones CORS de los navegadores.

Debes ejecutarlo mediante un servidor local.

### Opción 1: Visual Studio Code (Recomendada)

1. Abre la carpeta del proyecto en **Visual Studio Code**.
2. Instala la extensión **Live Server** (Ritwick Dey).
3. Abre:

```text
component-library/index.html
```

4. Haz clic derecho sobre el archivo y selecciona **Open with Live Server**.

La aplicación se abrirá automáticamente en tu navegador.

---

### Opción 2: Node.js

Si prefieres utilizar la terminal:

Instala un servidor HTTP:

```bash
npm install -g http-server
```

Ejecuta el proyecto:

```bash
http-server
```

Luego abre la dirección que mostrará la terminal (por ejemplo `http://127.0.0.1:8080`).

---

## 🛠️ Cómo agregar un nuevo componente (Guía de Uso)

Una de las ventajas del proyecto es que **no es necesario modificar la interfaz principal** cada vez que quieras agregar un componente nuevo.

Toda la información se almacena dentro de la carpeta:

```text
js/data/
```

Cada categoría posee su propio archivo de datos (`buttonsData.js`, `navbarsData.js`, `loginData.js`, etc.).

Solo debes agregar un nuevo objeto al arreglo correspondiente.

### Ejemplo

```javascript
{
    id: "nav-magic",

    name: "Magic Indicator Navbar",

    tags: [
        "navbar",
        "animado",
        "dark"
    ],

    // Vista previa dentro de la galería
    preview: `
        <nav class="magic-navbar">
            ...
        </nav>
    `,

    // Código HTML exportable
    htmlCode: `
        <nav class="magic-navbar">
            ...
        </nav>
    `,

    // Código CSS exportable
    cssCode: `
        .magic-navbar{
            display:flex;
            justify-content:center;
        }
    `,

    // JavaScript del componente (opcional)
    jsCode: `
        console.log("Navbar iniciado");
    `
}
```

### ¿Qué ocurre al guardar el archivo?

El sistema realiza automáticamente todo el proceso:

- ✅ El componente aparece en la galería.
- ✅ Se genera su vista previa.
- ✅ El buscador de **Fuse.js** lo indexa automáticamente.
- ✅ Los botones para copiar HTML, CSS y JavaScript comienzan a funcionar sin configuración adicional.

Gracias a esta arquitectura modular, agregar nuevos componentes consiste únicamente en añadir un nuevo objeto al archivo de datos correspondiente.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**.

Puedes utilizarlo libremente en proyectos personales o comerciales, modificar su código y adaptarlo a tus necesidades respetando los términos de dicha licencia.

---

<p align="center">
  Hecho con ❤️ utilizando HTML, CSS y Vanilla JavaScript.
</p>
````
