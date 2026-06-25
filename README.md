# 📦 Vanilla UI Components Vault

<p align="center">
  <strong>Tu galería interactiva personal de componentes web, lista para copiar y pegar.</strong><br>
  Construida 100% con <strong>Vanilla JavaScript</strong>, HTML y CSS. Sin frameworks pesados.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Fuse.js-B1B1B1?style=for-the-badge" alt="Fuse.js">
</p>

---

## ✨ Características

* 🎨 Galería interactiva de componentes UI.
* 📦 Organización por categorías.
* 🔍 Búsqueda inteligente con Fuse.js.
* 👀 Vista previa en tiempo real.
* 📋 Copia el HTML, CSS y JavaScript con un solo clic.
* ⚡ Construido únicamente con HTML, CSS y JavaScript.
* 🧩 Arquitectura modular basada en ES Modules.
* 🚀 Fácil de ampliar agregando nuevos componentes.

---

# 📖 ¿Qué es este proyecto?

**Vanilla UI Components Vault** es una biblioteca interactiva de componentes frontend diseñada para almacenar, visualizar y reutilizar componentes de interfaz de usuario.

En lugar de tener decenas de archivos repartidos en carpetas, la aplicación reúne todos tus componentes en una sola interfaz donde puedes:

* Visualizarlos.
* Probarlos.
* Buscar por nombre o etiquetas.
* Copiar su código completo (HTML, CSS y JavaScript).

Todo ello sin utilizar frameworks como React, Vue o Angular.

---

# 🏗 Arquitectura

El proyecto utiliza **ES Modules**, separando cada responsabilidad en distintos archivos.

```text
📦 vanilla-ui-components
│
├── component-library/
│   └── index.html        # Punto de entrada
│
├── css/                  # Estilos globales y componentes
│
└── js/
    ├── app.js            # Control principal
    ├── router.js         # Navegación SPA
    │
    ├── views/            # Renderizado de categorías
    │   ├── buttons.js
    │   ├── navbars.js
    │   └── ...
    │
    └── data/             # Base de datos de componentes
        ├── buttonsData.js
        ├── navbarsData.js
        └── ...
```

---

# ⚙ Flujo de funcionamiento

```text
Usuario abre la aplicación
            │
            ▼
app.js crea el carrusel 3D
            │
            ▼
El usuario selecciona una categoría
            │
            ▼
router.js cambia la vista
            │
            ▼
views/*.js renderiza la interfaz
            │
            ▼
data/*.js entrega los componentes
            │
            ▼
El usuario puede:

• Buscar
• Visualizar
• Copiar el código
```

---

# 🔍 Sistema de búsqueda

La aplicación utiliza **Fuse.js** para realizar búsquedas difusas (*fuzzy search*).

Esto permite encontrar componentes incluso cuando:

* El usuario escribe parcialmente el nombre.
* Existen errores ortográficos.
* Solo recuerda alguna etiqueta (*tag*).

Ejemplo:

```
Boton Azul
↓

boton
↓

btn

↓

azul
```

Todos los resultados pueden localizar el mismo componente.

---

# 🚀 Instalación

Debido a que el proyecto utiliza **ES Modules (import/export)**, no es posible abrir el `index.html` con doble clic.

Es necesario ejecutar un servidor local.

## Opción 1 — Visual Studio Code (Recomendada)

1. Abrir el proyecto en VS Code.
2. Instalar la extensión **Live Server**.
3. Abrir:

```
component-library/index.html
```

4. Seleccionar **Open with Live Server**.

---

## Opción 2 — Node.js

Instalar el servidor:

```bash
npm install -g http-server
```

Ejecutar:

```bash
http-server
```

Abrir la dirección que indique la terminal.

---

# ➕ Agregar nuevos componentes

Para añadir un componente solo debes editar el archivo correspondiente dentro de:

```text
js/data/
```

Ejemplo:

```javascript
{
    id: "nav-magico",

    name: "Magic Indicator Navbar",

    tags: [
        "animado",
        "navbar",
        "moderno"
    ],

    preview: `
        <nav class="magico">
            Mi Menú
        </nav>
    `,

    htmlCode: `
        <nav class="magico">
            Mi Menú
        </nav>
    `,

    cssCode: `
        .magico{
            display:flex;
            background:#2f2f2f;
        }
    `,

    jsCode: `
        console.log("Navbar iniciado");
    `
}
```

Al guardar el archivo:

* ✅ El componente aparecerá automáticamente.
* ✅ Será indexado por el buscador.
* ✅ Tendrá vista previa.
* ✅ Funcionarán los botones de copiar.

No es necesario modificar el HTML principal.

---

# 📂 Tecnologías

* HTML5
* CSS3
* Vanilla JavaScript
* ES Modules
* Fuse.js

---

# 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**.

Puedes:

* usarlo,
* modificarlo,
* adaptarlo,
* reutilizar sus componentes en proyectos personales o comerciales.

Las contribuciones y Pull Requests siempre serán bienvenidos.
