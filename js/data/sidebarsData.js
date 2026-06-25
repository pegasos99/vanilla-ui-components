export const sidebarsData = [
        {
            id: "sidebar-glassmorphism",
            name: "Glassmorphism Accordion Sidebar",
            tags: ["Sidebar", "Glassmorphism", "Menú", "CSS Puro", "Acordeón"],
            preview: `
                <iframe style="width: 100%; height: 600px; border: none; border-radius: 12px; overflow: hidden;" srcdoc='
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
                        <style>
                            body { 
                                margin: 0; 
                                background-color: #021024; /* Color base oscuro por si la imagen tarda en cargar */
                                
                                /* ✨ ¡El nuevo fondo de la luna y el mar! ✨ */
                                background-image: url("https://images.unsplash.com/photo-1532767153582-b1a0e5145009?q=80&w=2564&auto=format&fit=crop"); 
                                
                                background-size: cover;
                                background-position: center;
                                height: 100vh; 
                                font-family: system-ui, sans-serif;
                            }
                            
                            button, label { 
                                background: transparent; border: 0; padding: 0; cursor: pointer; text-align: left; 
                            }
                            
                            .sidebar { 
                                position: fixed; top: 24px; left: 24px; bottom: 24px; 
                                display: flex; flex-direction: column; gap: 8px; 
                                width: 260px; border-radius: 34px; padding: 0 16px; 
                                background: rgb(0 0 0 / 15%); 
                                border: 3px solid rgb(255 255 255 / 12%); 
                                backdrop-filter: blur(25px); 
                                -webkit-backdrop-filter: blur(25px);
                            }
                            
                            header { 
                                display: flex; align-items: center; gap: 14px; 
                                height: 72px; padding: 10px 16px 0; 
                                border-bottom: 1px solid rgb(255 255 255 / 8%); 
                                color: white;
                            }
                            
                            header h1 { font-size: 20px; font-weight: 500; margin: 0; flex-grow: 1; text-shadow: 0 2px 4px rgba(0,0,0,0.5); }
                            header i.menu-btn { font-size: 24px; cursor: pointer; }
                            
                            /* Radio Hack: Ocultamos los inputs */
                            .sidebar input[type="radio"] { scale: 0; position: absolute; }
                            
                            /* Alturas de los sub-menús */
                            .sidebar input#settings:checked ~ div { height: 150px; }
                            .sidebar input#create:checked ~ div { height: 200px; }
                            .sidebar input#profile:checked ~ div { height: 100px; }
                            
                            .sidebar :is(button, label) { 
                                position: relative; display: flex; gap: 16px; align-items: center; 
                                height: 50px; width: 100%; border-radius: 6px; 
                                font-family: inherit; font-size: 16px; padding: 0 16px; 
                                color: rgb(255 255 255 / 95%); 
                                box-sizing: border-box;
                            }
                            
                            .sidebar label p:nth-child(2) { flex: 1 1 auto; margin: 0; text-shadow: 0 1px 3px rgba(0,0,0,0.8); }
                            
                            input:checked ~ label { background: rgb(255 255 255 / 15%); box-shadow: inset 0 0 10px rgba(255,255,255,0.05); }
                            
                            label i { transition: 0.3s; font-size: 20px; filter: drop-shadow(0 2px 2px rgba(0,0,0,0.5)); }
                            
                            input:checked ~ label > i:nth-child(3) { rotate: -180deg; }
                            
                            .sub-menu button { padding-left: 52px; text-shadow: 0 1px 2px rgba(0,0,0,0.8); }
                            
                            input:not(:checked) ~ label:hover, button:hover { background: rgb(255 255 255 / 8%); }
                            
                            .sidebar ul { display: grid; list-style: none; padding: 0; margin: 0; }
                            
                            .sub-menu { position: relative; overflow: hidden; height: 0; transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
                            
                            .sub-menu ul { position: absolute; top: 0; left: 0; display: grid; width: 100%; }
                            
                            .sub-menu button::before { 
                                content: ""; position: absolute; top: 50%; left: 24px; translate: 0 -50%; 
                                width: 5px; height: 5px; border-radius: 50%; 
                                background-color: rgb(255 255 255 / 60%); 
                                box-shadow: 0 0 5px rgba(255,255,255,0.8);
                            }
                        </style>
                    </head>
                    <body>
                        <aside class="sidebar">
                            <header>
                                <i class="bx bxl-sketch" style="font-size: 28px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));"></i>
                                <h1>Home</h1>
                                <i class="bx bx-menu-alt-right menu-btn" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));"></i>
                            </header>
                            <ul>
                                <li>
                                    <input type="radio" id="settings" name="sidebar">
                                    <label for="settings">
                                        <i class="bx bx-cart"></i>
                                        <p>Products</p>
                                        <i class="bx bx-chevron-down"></i>
                                    </label>
                                    <div class="sub-menu">
                                        <ul>
                                            <li><button type="button">Agents</button></li>
                                            <li><button type="button">Integrations</button></li>
                                            <li><button type="button">API Keys</button></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <input type="radio" id="create" name="sidebar">
                                    <label for="create">
                                        <i class="bx bx-folder-plus"></i>
                                        <p>Create</p>
                                        <i class="bx bx-chevron-down"></i>
                                    </label>
                                    <div class="sub-menu">
                                        <ul>
                                            <li><button type="button">New Project</button></li>
                                            <li><button type="button">Templates</button></li>
                                            <li><button type="button">Drafts</button></li>
                                            <li><button type="button">Trash</button></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <input type="radio" id="profile" name="sidebar">
                                    <label for="profile">
                                        <i class="bx bx-user"></i>
                                        <p>Profile</p>
                                        <i class="bx bx-chevron-down"></i>
                                    </label>
                                    <div class="sub-menu">
                                        <ul>
                                            <li><button type="button">Account</button></li>
                                            <li><button type="button">Billing</button></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </aside>
                    </body>
                    </html>
                '></iframe>
            `,
            htmlCode: `\n\n\n<aside class="sidebar">\n  <header>\n    <i class="bx bxl-sketch"></i>\n    <h1>Home</h1>\n    <i class="bx bx-menu-alt-right menu-btn"></i>\n  </header>\n  <ul>\n    \n    <li>\n      <input type="radio" id="settings" name="sidebar">\n      <label for="settings">\n        <i class="bx bx-cart"></i>\n        <p>Products</p>\n        <i class="bx bx-chevron-down"></i>\n      </label>\n      <div class="sub-menu">\n        <ul>\n          <li><button type="button">Agents</button></li>\n          <li><button type="button">Integrations</button></li>\n          <li><button type="button">API Keys</button></li>\n        </ul>\n      </div>\n    </li>\n    \n    \n    <li>\n      <input type="radio" id="create" name="sidebar">\n      <label for="create">\n        <i class="bx bx-folder-plus"></i>\n        <p>Create</p>\n        <i class="bx bx-chevron-down"></i>\n      </label>\n      <div class="sub-menu">\n        <ul>\n          <li><button type="button">New Project</button></li>\n          <li><button type="button">Templates</button></li>\n          <li><button type="button">Drafts</button></li>\n          <li><button type="button">Trash</button></li>\n        </ul>\n      </div>\n    </li>\n\n    \n    <li>\n      <input type="radio" id="profile" name="sidebar">\n      <label for="profile">\n        <i class="bx bx-user"></i>\n        <p>Profile</p>\n        <i class="bx bx-chevron-down"></i>\n      </label>\n      <div class="sub-menu">\n        <ul>\n          <li><button type="button">Account</button></li>\n          <li><button type="button">Billing</button></li>\n        </ul>\n      </div>\n    </li>\n  </ul>\n</aside>`,
            cssCode: `body {\n  margin: 0;\n  background-color: #021024;\n  background-image: url("https://images.unsplash.com/photo-1532767153582-b1a0e5145009?q=80&w=2564&auto=format&fit=crop"); /* Fondo Luna y Mar */\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  font-family: system-ui, sans-serif;\n}\n\nbutton, label {\n  background: transparent;\n  border: 0;\n  padding: 0;\n  cursor: pointer;\n  text-align: left;\n}\n\n.sidebar {\n  position: fixed;\n  top: 24px;\n  left: 24px;\n  bottom: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 260px;\n  border-radius: 34px;\n  padding: 0 16px;\n  background: rgb(0 0 0 / 15%);\n  border: 3px solid rgb(255 255 255 / 12%);\n  backdrop-filter: blur(25px);\n  -webkit-backdrop-filter: blur(25px);\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  height: 72px;\n  padding: 10px 16px 0;\n  border-bottom: 1px solid rgb(255 255 255 / 8%);\n  color: white;\n}\n\nheader h1 {\n  font-size: 20px;\n  font-weight: 500;\n  margin: 0;\n  flex-grow: 1;\n  text-shadow: 0 2px 4px rgba(0,0,0,0.5);\n}\n\n/* Ocultar inputs (Radio Hack) */\n.sidebar input[type="radio"] {\n  scale: 0;\n  position: absolute;\n}\n\n/* Alturas estáticas para la animación de apertura */\n.sidebar input#settings:checked ~ div { height: 150px; }\n.sidebar input#create:checked ~ div { height: 200px; }\n.sidebar input#profile:checked ~ div { height: 100px; }\n\n.sidebar :is(button, label) {\n  position: relative;\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  height: 50px;\n  width: 100%;\n  border-radius: 6px;\n  font-family: inherit;\n  font-size: 16px;\n  padding: 0 16px;\n  color: rgb(255 255 255 / 95%);\n  box-sizing: border-box;\n}\n\n.sidebar label p:nth-child(2) {\n  flex: 1 1 auto;\n  margin: 0;\n  text-shadow: 0 1px 3px rgba(0,0,0,0.8);\n}\n\ninput:checked ~ label {\n  background: rgb(255 255 255 / 15%);\n  box-shadow: inset 0 0 10px rgba(255,255,255,0.05);\n}\n\nlabel i {\n  transition: 0.3s;\n  font-size: 20px;\n  filter: drop-shadow(0 2px 2px rgba(0,0,0,0.5));\n}\n\ninput:checked ~ label > i:nth-child(3) {\n  rotate: -180deg;\n}\n\n.sub-menu button {\n  padding-left: 52px;\n  text-shadow: 0 1px 2px rgba(0,0,0,0.8);\n}\n\ninput:not(:checked) ~ label:hover, button:hover {\n  background: rgb(255 255 255 / 8%);\n}\n\n.sidebar ul {\n  display: grid;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.sub-menu {\n  position: relative;\n  overflow: hidden;\n  height: 0;\n  transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.sub-menu ul {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: grid;\n  width: 100%;\n}\n\n.sub-menu button::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 24px;\n  translate: 0 -50%;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background-color: rgb(255 255 255 / 60%);\n  box-shadow: 0 0 5px rgba(255,255,255,0.8);\n}`,
            jsCode: `// ¡Magia Pura! ✨\n// Este sidebar funciona exclusivamente con CSS usando el "Radio Button Hack".\n// No se requiere nada de JavaScript para abrir o cerrar las pestañas.`
        },
        {
        id: "nav-glass-dynamic",
        name: "Dynamic Glass Navbar (Apple Style)",
        tags: ["Navbar", "Glassmorphism", "Menú", "Animado", "Moderno", "Dark"],
        preview: `
            <iframe style="width: 100%; height: 500px; border: none; border-radius: 12px; overflow: hidden;" srcdoc='
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                    <style>
                        body { 
                            margin: 0; 
                            /* Fondo oscuro de montañas */
                            background: url("https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2560&auto=format&fit=crop") no-repeat center center; 
                            background-size: cover; 
                            background-color: #0f1115;
                            color: #f9f9f9; 
                            font-family: system-ui, sans-serif; 
                            height: 100vh; 
                        }
                        
                        /* Barra de Navegación Principal */
                        nav {
                            position: fixed; 
                            top: 16px; right: 16px; left: 16px; 
                            display: flex; align-items: center; 
                            padding: 0 32px; height: 72px; 
                            border-radius: 36px;
                            
                            /* Glassmorphism avanzado con OKLCH */
                            background: rgb(255 255 255 / 6%);
                            background: color-mix(in oklch, rgb(255 255 255/8%) 72%, transparent);
                            backdrop-filter: blur(16px) saturate(1.2);
                            -webkit-backdrop-filter: blur(16px) saturate(1.2);
                            
                            box-shadow: inset 0 1px 0 color-mix(in oklch, rgb(255 255 255/12%) 65%, transparent),
                                        inset 0 0 0 1px color-mix(in oklch, rgb(255 255 255/6%) 55%, transparent);
                            z-index: 100;
                        }
                        
                        .logo { margin-right: 28px; font-weight: bold; font-size: 20px; letter-spacing: -0.5px; }
                        
                        ul { margin: 0; padding: 0; list-style: none; }
                        
                        .menu {
                            padding-left: 24px;
                            border-left: 1px solid color-mix(in oklch, rgb(255 255 255/40%) 65%, transparent);
                            display: flex; justify-content: flex-start;
                        }
                        
                        .menu > ul { display: flex; align-items: center; gap: 24px; }
                        
                        ul > li { cursor: pointer; opacity: 0.6; transition: 0.3s; font-size: 15px; font-weight: 500; }
                        ul > li:hover { opacity: 1; }
                        
                        .end { margin-left: auto; display: flex; align-items: center; gap: 24px; }
                        .end > ul { display: flex; }
                        .material-symbols-outlined { cursor: pointer; opacity: 0.8; transition: 0.3s; }
                        .material-symbols-outlined:hover { opacity: 1; }

                        /* Submenú Flotante */
                        .submenu {
                            position: fixed; top: 98px; left: 0; 
                            opacity: 0; visibility: hidden;
                            padding: 24px; border-radius: 36px;
                            
                            background: rgb(255 255 255 / 6%);
                            background: color-mix(in oklch, rgb(255 255 255/12%) 72%, transparent);
                            backdrop-filter: blur(16px) saturate(1.2);
                            -webkit-backdrop-filter: blur(16px) saturate(1.2);
                            
                            box-shadow: inset 0 1px 0 color-mix(in oklch, rgb(255 255 255/15%) 65%, transparent),
                                        inset 0 0 0 0.06rem color-mix(in oklch, rgb(255 255 255/6%) 55%, transparent);
                            transition: 0.3s;
                            z-index: 99;
                        }
                        
                        .submenu.open { opacity: 1; visibility: visible; }
                        .submenu > div { display: none; }
                        .submenu > div.visible { display: grid; }
                        .submenu ul { display: grid; gap: 20px; }
                    </style>
                </head>
                <body>
                    <div class="nav-container">
                        <nav>
                            <div class="logo">Home</div>
                            <div class="menu">
                                <ul>
                                    <li>Apps</li>
                                    <li>About</li>
                                    <li>Docs</li>
                                </ul>
                            </div>
                            <div class="end">
                                <ul>
                                    <li>Support</li>
                                </ul>
                                <span class="material-symbols-outlined">menu</span>
                            </div>
                        </nav>
                        
                        <div class="submenu">
                            <div class="submenu-apps">
                                <ul>
                                    <li>Databoss</li>
                                    <li>Automator</li>
                                    <li>Cloudtron</li>
                                </ul>
                            </div>
                            <div class="submenu-about">
                                <ul>
                                    <li>Company</li>
                                    <li>Team</li>
                                    <li>Careers</li>
                                </ul>
                            </div>
                            <div class="submenu-docs">
                                <ul>
                                    <li>Getting Started</li>
                                    <li>API Reference</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <script>
                        const nav = document.querySelector("nav");
                        const menu = document.querySelector(".menu");
                        const submenu = document.querySelector(".submenu");
                        const submenus = document.querySelectorAll(".submenu > div");
                        const navContainer = document.querySelector(".nav-container");

                        const onMenuHover = element => {
                            submenus.forEach(s => s.classList.remove("visible"));
                            
                            const targetClass = \`.submenu-\${element.innerText.toLowerCase()}\`;
                            const selectedSubmenu = document.querySelector(targetClass);

                            if (!selectedSubmenu) return;

                            selectedSubmenu.classList.add("visible");
                            
                            const liRect = element.getBoundingClientRect();
                            submenu.style.translate = \`\${liRect.x - 24}px 0\`;
                            submenu.classList.add("open");
                        };

                        menu.addEventListener("mouseover", e => {
                            const item = e.target.closest("li");
                            if (item) onMenuHover(item);
                        });

                        navContainer.addEventListener("mouseleave", () => {
                            submenu.classList.remove("open");
                        });
                    </script>
                </body>
                </html>
            '></iframe>
        `,
        htmlCode: `<div class="nav-container">\n  <nav>\n    <div class="logo">Home</div>\n    <div class="menu">\n      <ul>\n        <li>Apps</li>\n        <li>About</li>\n        <li>Docs</li>\n      </ul>\n    </div>\n    <div class="end">\n      <ul>\n        <li>Support</li>\n      </ul>\n      <span class="material-symbols-outlined">menu</span>\n    </div>\n  </nav>\n  \n  <div class="submenu">\n    <div class="submenu-apps">\n      <ul>\n        <li>Databoss</li>\n        <li>Automator</li>\n        <li>Cloudtron</li>\n      </ul>\n    </div>\n    <div class="submenu-about">\n      <ul>\n        <li>Company</li>\n        <li>Team</li>\n        <li>Careers</li>\n      </ul>\n    </div>\n    <div class="submenu-docs">\n      <ul>\n        <li>Getting Started</li>\n        <li>API Reference</li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n\n`,
        cssCode: `body {\n  margin: 0;\n  background: url("https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2560&auto=format&fit=crop") no-repeat center center;\n  background-size: cover;\n  background-color: #0f1115;\n  color: #f9f9f9;\n  font-family: system-ui, sans-serif;\n  height: 100vh;\n}\n\nnav {\n  position: fixed;\n  top: 16px;\n  right: 16px;\n  left: 16px;\n  display: flex;\n  align-items: center;\n  padding: 0 32px;\n  height: 72px;\n  border-radius: 36px;\n  \n  background: rgb(255 255 255 / 6%);\n  background: color-mix(in oklch, rgb(255 255 255/8%) 72%, transparent);\n  backdrop-filter: blur(16px) saturate(1.2);\n  -webkit-backdrop-filter: blur(16px) saturate(1.2);\n  \n  box-shadow: inset 0 1px 0 color-mix(in oklch, rgb(255 255 255/12%) 65%, transparent),\n              inset 0 0 0 1px color-mix(in oklch, rgb(255 255 255/6%) 55%, transparent);\n  z-index: 100;\n}\n\n.logo {\n  margin-right: 28px;\n  font-weight: bold;\n  font-size: 20px;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.menu {\n  padding-left: 24px;\n  border-left: 1px solid color-mix(in oklch, rgb(255 255 255/40%) 65%, transparent);\n  display: flex;\n  justify-content: flex-start;\n}\n\n.menu > ul {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n\nul > li {\n  cursor: pointer;\n  opacity: 0.6;\n  transition: 0.3s;\n  font-size: 15px;\n  font-weight: 500;\n}\n\nul > li:hover {\n  opacity: 1;\n}\n\n.end {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n\n.end > ul {\n  display: flex;\n}\n\n/* ESTILOS DEL SUBMENÚ */\n.submenu {\n  position: fixed;\n  top: 98px;\n  left: 0;\n  opacity: 0;\n  visibility: hidden;\n  padding: 24px;\n  border-radius: 36px;\n  \n  background: rgb(255 255 255 / 6%);\n  background: color-mix(in oklch, rgb(255 255 255/12%) 72%, transparent);\n  backdrop-filter: blur(16px) saturate(1.2);\n  -webkit-backdrop-filter: blur(16px) saturate(1.2);\n  \n  box-shadow: inset 0 1px 0 color-mix(in oklch, rgb(255 255 255/15%) 65%, transparent),\n              inset 0 0 0 0.06rem color-mix(in oklch, rgb(255 255 255/6%) 55%, transparent);\n  transition: 0.3s;\n  z-index: 99;\n}\n\n.submenu.open {\n  opacity: 1;\n  visibility: visible;\n}\n\n.submenu > div {\n  display: none;\n}\n\n.submenu > div.visible {\n  display: grid;\n}\n\n.submenu ul {\n  display: grid;\n  gap: 20px;\n}`,
        jsCode: `const nav = document.querySelector("nav");\nconst menu = document.querySelector(".menu");\nconst submenu = document.querySelector(".submenu");\nconst submenus = document.querySelectorAll(".submenu > div");\nconst navContainer = document.querySelector(".nav-container");\n\nconst onMenuHover = element => {\n  submenus.forEach(s => s.classList.remove("visible"));\n  \n  const targetClass = \`.submenu-\${element.innerText.toLowerCase()}\`;\n  const selectedSubmenu = document.querySelector(targetClass);\n\n  if (!selectedSubmenu) return;\n\n  selectedSubmenu.classList.add("visible");\n  \n  const liRect = element.getBoundingClientRect();\n  submenu.style.translate = \`\${liRect.x - 24}px 0\`;\n  submenu.classList.add("open");\n};\n\nmenu.addEventListener("mouseover", e => {\n  const item = e.target.closest("li");\n  if (item) onMenuHover(item);\n});\n\nnavContainer.addEventListener("mouseleave", () => {\n  submenu.classList.remove("open");\n});`
    }
    ]