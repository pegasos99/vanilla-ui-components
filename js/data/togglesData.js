export const togglesData = [
       {
            id: "toggle-metallic-push",
            name: "Hyper-Realistic Metallic Push",
            tags: ["Modo Oscuro", "3D", "Botón", "Metálico", "Brillante"],
            
            preview: `
                <iframe style="width: 100%; height: 250px; border: none; border-radius: 12px; overflow: hidden;" srcdoc='
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <style>
                            :root {
                                --bg-light: #e0e5ec;
                                --bg-dark: #1a1e24;
                            }
                            
                            body {
                                display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;
                                background-color: var(--bg-light);
                                transition: background-color 0.5s ease;
                            }
                            
                            [data-theme="dark"] {
                                background-color: var(--bg-dark);
                            }
                            
                            .metallic-push-btn {
                                position: relative;
                                display: inline-block;
                                cursor: pointer;
                                -webkit-tap-highlight-color: transparent;
                            }
                            
                            .metallic-push-btn input {
                                display: none;
                            }
                            
                            /* --- ESTADO NORMAL (Metálico Brillante 3D) --- */
                            .btn-body {
                                width: 120px;
                                height: 60px;
                                border-radius: 50px;
                                /* Gradiente metálico diagonal simulando luz ambiental */
                                background: linear-gradient(145deg, #ffffff, #caced7);
                                position: relative;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
                                
                                /* Sombras exteriores y un bisel (inset) interior muy sutil */
                                box-shadow: 
                                    8px 8px 16px rgba(163, 177, 198, 0.6), 
                                   -8px -8px 16px rgba(255, 255, 255, 0.8),
                                   inset 2px 2px 4px rgba(255, 255, 255, 0.9),
                                   inset -2px -2px 4px rgba(163, 177, 198, 0.4);
                                   
                                border: 1px solid rgba(255, 255, 255, 0.4);
                            }
                            
                            /* EL SECRETO 3D: El reflejo de luz curvo (Glare) en la parte superior */
                            .btn-body::before {
                                content: "";
                                position: absolute;
                                top: 2px;
                                left: 5%;
                                width: 90%;
                                height: 45%;
                                /* Un arco de luz blanca que se desvanece hacia abajo */
                                background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));
                                border-radius: 50px 50px 0 0;
                                pointer-events: none;
                                transition: all 0.5s ease;
                            }
                            
                            .moon-icon {
                                width: 28px;
                                height: 28px;
                                fill: #8a97a8;
                                z-index: 2; /* Para que quede sobre el reflejo de luz */
                                transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                            }
                            
                            /* --- ESTADO PRESIONADO (Hundido Oscuro) --- */
                            .metallic-push-btn input:checked + .btn-body {
                                /* Invertimos el gradiente a tonos oscuros */
                                background: linear-gradient(145deg, #15181d, #1e2229);
                                border-color: #0b0c0f;
                                
                                /* Sombra exterior mínima y Sombras Interiores Fuertes para hundirlo */
                                box-shadow: 
                                    2px 2px 5px rgba(0, 0, 0, 0.2),
                                   -2px -2px 5px rgba(255, 255, 255, 0.02),
                                   inset 8px 8px 16px #0b0c0f,
                                   inset -8px -8px 16px #292f39,
                                   inset 1px 1px 2px #000;
                            }
                            
                            /* Cambiamos el reflejo de luz a modo cristal oscuro */
                            .metallic-push-btn input:checked + .btn-body::before {
                                background: linear-gradient(to bottom, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0));
                            }
                            
                            /* La luna se hunde (achica) y brilla intenso */
                            .metallic-push-btn input:checked + .btn-body .moon-icon {
                                fill: #00f3ff;
                                filter: drop-shadow(0 0 10px rgba(0, 243, 255, 1));
                                transform: scale(0.85); 
                            }
                        </style>
                    </head>
                    <body>
                        <label class="metallic-push-btn">
                            <input type="checkbox" id="theme-switch">
                            <div class="btn-body">
                                <svg class="moon-icon" viewBox="0 0 24 24">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            </div>
                        </label>
                        <script>
                            document.getElementById("theme-switch").addEventListener("change", function(e) {
                                if(e.target.checked) {
                                    document.body.setAttribute("data-theme", "dark");
                                } else {
                                    document.body.removeAttribute("data-theme");
                                }
                            });
                        </script>
                    </body>
                    </html>
                '></iframe>
            `,
            htmlCode: `<label class="metallic-push-btn">\n  <input type="checkbox" id="theme-switch">\n  <div class="btn-body">\n    \n    <svg class="moon-icon" viewBox="0 0 24 24">\n      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>\n    </svg>\n  </div>\n</label>`,
            cssCode: `:root {\n  --bg-light: #e0e5ec;\n  --bg-dark: #1a1e24;\n}\n\nbody {\n  background-color: var(--bg-light);\n  transition: background-color 0.5s ease;\n}\n\n[data-theme="dark"] {\n  background-color: var(--bg-dark);\n}\n\n.metallic-push-btn {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.metallic-push-btn input {\n  display: none;\n}\n\n.btn-body {\n  width: 120px;\n  height: 60px;\n  border-radius: 50px;\n  background: linear-gradient(145deg, #ffffff, #caced7);\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n  box-shadow: \n    8px 8px 16px rgba(163, 177, 198, 0.6), \n   -8px -8px 16px rgba(255, 255, 255, 0.8),\n   inset 2px 2px 4px rgba(255, 255, 255, 0.9),\n   inset -2px -2px 4px rgba(163, 177, 198, 0.4);\n  border: 1px solid rgba(255, 255, 255, 0.4);\n}\n\n/* Reflejo de luz (Glare) */\n.btn-body::before {\n  content: "";\n  position: absolute;\n  top: 2px;\n  left: 5%;\n  width: 90%;\n  height: 45%;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));\n  border-radius: 50px 50px 0 0;\n  pointer-events: none;\n  transition: all 0.5s ease;\n}\n\n.moon-icon {\n  width: 28px;\n  height: 28px;\n  fill: #8a97a8;\n  z-index: 2;\n  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n\n/* ESTADO PRESIONADO */\n.metallic-push-btn input:checked + .btn-body {\n  background: linear-gradient(145deg, #15181d, #1e2229);\n  border-color: #0b0c0f;\n  box-shadow: \n    2px 2px 5px rgba(0, 0, 0, 0.2),\n   -2px -2px 5px rgba(255, 255, 255, 0.02),\n   inset 8px 8px 16px #0b0c0f,\n   inset -8px -8px 16px #292f39,\n   inset 1px 1px 2px #000;\n}\n\n.metallic-push-btn input:checked + .btn-body::before {\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0));\n}\n\n.metallic-push-btn input:checked + .btn-body .moon-icon {\n  fill: #00f3ff;\n  filter: drop-shadow(0 0 10px rgba(0, 243, 255, 1));\n  transform: scale(0.85);\n}`,
            jsCode: `document.getElementById("theme-switch").addEventListener("change", function(e) {\n  if(e.target.checked) {\n    document.documentElement.setAttribute("data-theme", "dark");\n  } else {\n    document.documentElement.removeAttribute("data-theme");\n  }\n});`
        },
        {
            id: "toggle-stretchy",
            name: "Stretchy Toggle",
            tags: ["Toggle", "Neumorfismo", "Animado"],
            preview: `
                <label class="stretchy-toggle">
                    <input type="checkbox" class="toggle-input">
                    <div class="toggle-track">
                        <div class="toggle-thumb"></div>
                    </div>
                </label>
            `,
            htmlCode: `<label class="stretchy-toggle">\n  <input type="checkbox" class="toggle-input">\n  <div class="toggle-track">\n    <div class="toggle-thumb"></div>\n  </div>\n</label>`,
            cssCode: `.stretchy-toggle {\n  display: inline-block;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n.toggle-input {\n  display: none;\n}\n.toggle-track {\n  width: 140px;\n  height: 60px;\n  background: #ffe6e6;\n  border-radius: 60px;\n  box-shadow: inset 8px 8px 16px #e6cfcf, inset -8px -8px 16px #ffffff, 0px 2px 4px rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  position: relative;\n  transition: background 0.4s ease, box-shadow 0.4s ease;\n}\n.toggle-input:checked + .toggle-track {\n  background: #d6f5ed;\n  box-shadow: inset 8px 8px 16px #b8d6ce, inset -8px -8px 16px #ffffff, 0px 2px 4px rgba(255, 255, 255, 0.8);\n}\n.toggle-thumb {\n  width: 50px;\n  height: 50px;\n  background: linear-gradient(135deg, #ff7e8c 0%, #ff4757 100%);\n  border-radius: 50px;\n  box-shadow: inset 4px 4px 6px rgba(255, 255, 255, 0.7), inset -4px -4px 6px rgba(0, 0, 0, 0.2), 0 6px 15px rgba(255, 71, 87, 0.5);\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  transition: all 0.4s cubic-bezier(0.3, 1.2, 0.3, 1);\n}\n.stretchy-toggle:active .toggle-thumb {\n  width: 75px;\n}\n.toggle-input:checked + .toggle-track .toggle-thumb {\n  left: 84px;\n  background: linear-gradient(135deg, #32ffce 0%, #00d2ff 100%);\n  box-shadow: inset 4px 4px 6px rgba(255, 255, 255, 0.8), inset -4px -4px 6px rgba(0, 0, 0, 0.2), 0 6px 15px rgba(0, 210, 255, 0.5);\n}\n.toggle-input:checked + .toggle-track:active .toggle-thumb {\n  width: 75px;\n  left: 60px;\n}`,
            jsCode: ``
        }
]