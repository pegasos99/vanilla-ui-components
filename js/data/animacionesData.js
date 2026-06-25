export const animacionesData = [
      {
            id: "anim-3d-love",
            name: "CSS Flowing Love Heart",
            tags: ["CSS Puro", "Animado", "Texto", "Romántico"],
            preview: `
                <iframe style="width: 100%; height: 350px; border: none; border-radius: 12px; background: #000;" srcdoc='
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <style>
                            body { background: #000; height: 100vh; margin: 0; overflow: hidden; display: flex; justify-content: center; align-items: center; font-family: system-ui, sans-serif; }
                            #ui-heart { position: relative; transform: scale(0.6); /* Escalado para la vista previa */ }
                            .love { position: absolute; margin: -225px 0 0 -225px; }
                            .love_word {
                                color: #ea80b0;
                                font-size: 1.4rem;
                                transform: translateY(-100%) rotateZ(-30deg);
                                text-shadow: 0 0 10px #fff;
                                letter-spacing: 2px;
                                white-space: nowrap;
                            }
                            .love_horizontal {
                                animation: horizontal 10000ms infinite alternate ease-in-out;
                                animation-delay: calc(var(--i) * -300ms);
                            }
                            .love_vertical {
                                animation: vertical 20000ms infinite linear;
                                animation-delay: calc(var(--i) * -300ms);
                            }
                            @keyframes horizontal {
                                from { transform: translateX(0px); }
                                to   { transform: translateX(450px); }
                            }
                            @keyframes vertical {
                                0%   { transform: translateY(180px); }
                                10%  { transform: translateY(45px); }
                                15%  { transform: translateY(4.5px); }
                                18%  { transform: translateY(0px); }
                                20%  { transform: translateY(4.5px); }
                                22%  { transform: translateY(34.61538px); }
                                24%  { transform: translateY(64.28571px); }
                                25%  { transform: translateY(112.5px); }
                                26%  { transform: translateY(64.28571px); }
                                28%  { transform: translateY(34.61538px); }
                                30%  { transform: translateY(4.5px); }
                                32%  { transform: translateY(0px); }
                                35%  { transform: translateY(4.5px); }
                                40%  { transform: translateY(45px); }
                                50%  { transform: translateY(180px); }
                                71%  { transform: translateY(428.57143px); }
                                72.5%{ transform: translateY(441.17647px); }
                                75%  { transform: translateY(450px); }
                                77.5%{ transform: translateY(441.17647px); }
                                79%  { transform: translateY(428.57143px); }
                                100% { transform: translateY(180px); }
                            }
                        </style>
                    </head>
                    <body>
                        <div id="ui-heart"></div>
                        <script>
                            const N = 100;
                            const ui = document.getElementById("ui-heart");
                            for (let i = 1; i <= N; i++) {
                                const love = document.createElement("div");
                                love.className = "love";
                                love.style.setProperty("--i", i);
                                const h = document.createElement("div");
                                h.className = "love_horizontal";
                                const v = document.createElement("div");
                                v.className = "love_vertical";
                                const word = document.createElement("div");
                                word.className = "love_word";
                                word.textContent = "i love you";
                                v.appendChild(word);
                                h.appendChild(v);
                                love.appendChild(h);
                                ui.appendChild(love);
                            }
                        </script>
                    </body>
                    </html>
                '></iframe>
            `,
            htmlCode: `<div class="heart-container">\n  <div id="ui-heart"></div>\n</div>`,
            cssCode: `.heart-container {\n  width: 100%;\n  min-height: 400px;\n  background: #000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  border-radius: 12px;\n  font-family: system-ui, sans-serif;\n}\n#ui-heart {\n  position: relative;\n  transform: scale(0.7); /* Ajusta este valor para hacer el corazón más grande o pequeño */\n}\n.love {\n  position: absolute;\n  margin: -225px 0 0 -225px;\n}\n.love_word {\n  color: #ea80b0;\n  font-size: 1.4rem;\n  transform: translateY(-100%) rotateZ(-30deg);\n  text-shadow: 0 0 10px #fff;\n  letter-spacing: 2px;\n  white-space: nowrap;\n}\n.love_horizontal {\n  animation: horizontal 10000ms infinite alternate ease-in-out;\n  animation-delay: calc(var(--i) * -300ms);\n}\n.love_vertical {\n  animation: vertical 20000ms infinite linear;\n  animation-delay: calc(var(--i) * -300ms);\n}\n@keyframes horizontal {\n  from { transform: translateX(0px); }\n  to   { transform: translateX(450px); }\n}\n@keyframes vertical {\n  0%   { transform: translateY(180px); }\n  10%  { transform: translateY(45px); }\n  15%  { transform: translateY(4.5px); }\n  18%  { transform: translateY(0px); }\n  20%  { transform: translateY(4.5px); }\n  22%  { transform: translateY(34.61538px); }\n  24%  { transform: translateY(64.28571px); }\n  25%  { transform: translateY(112.5px); }\n  26%  { transform: translateY(64.28571px); }\n  28%  { transform: translateY(34.61538px); }\n  30%  { transform: translateY(4.5px); }\n  32%  { transform: translateY(0px); }\n  35%  { transform: translateY(4.5px); }\n  40%  { transform: translateY(45px); }\n  50%  { transform: translateY(180px); }\n  71%  { transform: translateY(428.57143px); }\n  72.5%{ transform: translateY(441.17647px); }\n  75%  { transform: translateY(450px); }\n  77.5%{ transform: translateY(441.17647px); }\n  79%  { transform: translateY(428.57143px); }\n  100% { transform: translateY(180px); }\n}`,
            jsCode: `const N = 100; // Cantidad de palabras fluyendo\nconst ui = document.getElementById('ui-heart');\n\nif (ui) {\n  ui.innerHTML = '';\n  for (let i = 1; i <= N; i++) {\n    const love = document.createElement('div');\n    love.className = 'love';\n    love.style.setProperty('--i', i);\n\n    const h = document.createElement('div');\n    h.className = 'love_horizontal';\n\n    const v = document.createElement('div');\n    v.className = 'love_vertical';\n\n    const word = document.createElement('div');\n    word.className = 'love_word';\n    word.textContent = 'I love you';\n\n    v.appendChild(word);\n    h.appendChild(v);\n    love.appendChild(h);\n    ui.appendChild(love);\n  }\n}`
        },
        {
            id: "anim-product-card",
            name: "Animated Product Card",
            tags: ["Hover", "Producto", "Expansión", "UI"],
            preview: `
                <div class="apc-container">
                    <div class="apc-card">
                        <div class="apc-circle"></div>
                        
                        <img src="../../assets/images/SpriteLogo.png" class="apc-logo" alt="Sprite Logo">
                        
                        <img src="../../assets/images/botellaSprite.png" class="apc-img" alt="Sprite Bottle">
                        
                        <div class="apc-content">
                            <h2>Sprite</h2>
                            <p>Sprite es una bebida refrescante y crujiente con sabor a limón y lima que calma tu sed. Siente el poder del sabor cítrico.</p>
                            <a href="#">Comprar Ahora</a>
                        </div>
                    </div>
                </div>
            `,
            htmlCode: `<div class="apc-container">\n  <div class="apc-card">\n    <div class="apc-circle"></div>\n    <img src="images/SpiteLogo.jpg" class="apc-logo" alt="Logo">\n    <img src="images/botellaSprite.png" class="apc-img" alt="Product">\n    <div class="apc-content">\n      <h2>Sprite</h2>\n      <p>Sprite es una bebida refrescante y crujiente con sabor a limón y lima que calma tu sed. Siente el poder del sabor cítrico.</p>\n      <a href="#">Comprar Ahora</a>\n    </div>\n  </div>\n</div>`,
            cssCode: `.apc-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 500px;\n  background: #e2e2e2;\n  border-radius: 12px;\n  overflow: hidden;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n.apc-card {\n  position: relative;\n  width: 600px;\n  height: 350px;\n  display: flex;\n  align-items: center;\n  border-radius: 20px;\n  transition: 0.5s;\n}\n.apc-circle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background: #00a650;\n  transition: 0.5s;\n  box-shadow: 0 0 30px rgba(0, 166, 80, 0.5);\n}\n.apc-card:hover .apc-circle {\n  width: 100%;\n  height: 100%;\n  border-radius: 20px;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);\n}\n.apc-logo {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 150px;\n  transition: 0.5s;\n  z-index: 10;\n  mix-blend-mode: multiply; /* TRUCO: Elimina el fondo blanco del JPG */\n}\n.apc-card:hover .apc-logo {\n  top: 40px;\n  left: 40px;\n  transform: translate(0, 0) scale(0.5);\n  transform-origin: top left;\n}\n.apc-img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0) rotate(-20deg);\n  height: 300px;\n  transition: 0.5s;\n  z-index: 9;\n}\n.apc-card:hover .apc-img {\n  left: 75%;\n  transform: translate(-50%, -50%) scale(1) rotate(15deg);\n  transition-delay: 0.2s;\n}\n.apc-content {\n  position: absolute;\n  left: 40px;\n  top: 100px;\n  width: 50%;\n  color: #fff;\n  opacity: 0;\n  visibility: hidden;\n  transition: 0.5s;\n  z-index: 10;\n}\n.apc-card:hover .apc-content {\n  opacity: 1;\n  visibility: visible;\n  transition-delay: 0.4s;\n}\n.apc-content h2 {\n  margin: 0;\n  font-size: 2.5em;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.apc-content p {\n  margin: 15px 0;\n  line-height: 1.5;\n}\n.apc-content a {\n  display: inline-block;\n  padding: 10px 20px;\n  background: #fff;\n  color: #00a650;\n  text-decoration: none;\n  font-weight: bold;\n  border-radius: 40px;\n  margin-top: 10px;\n  transition: 0.3s;\n}\n.apc-content a:hover {\n  background: #111;\n  color: #fff;\n}`,
            jsCode: ``
        },
        {
            id: "anim-neumorphism-wave",
            name: "Neumorphism Wave Animation",
            tags: ["Neumorfismo", "Wave", "Botón", "Interactivo", "CSS"],
            
            // Usamos iframe para evitar que las ondas inunden el body de tu portafolio
            preview: `
                <iframe style="width: 100%; height: 350px; border: none; border-radius: 12px; overflow: hidden;" srcdoc='
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <style>
                            :root {
                              --base: #55b9f3;
                              --lighten: #62d5ff;
                              --darken: #489dcf;
                              --white: #c8deeb;
                              --shadow: 6px 6px 12px var(--darken), -6px -6px 12px var(--lighten);
                              --inset: inset 6px 6px 12px var(--darken), inset -6px -6px 12px var(--lighten);
                            }
                            body {
                              position: relative;
                              width: 100vw;
                              height: 100vh;
                              margin: 0;
                              display: flex;
                              align-items: center;
                              justify-content: center;
                              background-color: var(--base);
                              overflow: hidden;
                            }
                            button {
                              z-index: 10;
                              position: absolute;
                              width: 60px;
                              height: 60px;
                              background-color: var(--base);
                              color: var(--white);
                              border: none;
                              border-radius: 50%;
                              box-shadow: var(--shadow);
                              cursor: pointer;
                            }
                            svg {
                              position: absolute;
                              top: 50%;
                              left: 50%;
                              transform: translate(-50%, -50%);
                              width: 24px;
                              height: 24px;
                            }
                            button.clicked {
                              animation: shadowFadeOut 200ms ease-out forwards, shadowFadeIn 200ms 300ms ease-in forwards;
                            }
                            button.clicked svg {
                              animation: fillFadeOut 200ms ease-out forwards, fillFadeIn 200ms 300ms ease-in forwards;
                            }
                            .wave {
                              z-index: 1;
                              position: absolute;
                              width: 20px;
                              height: 20px;
                              border-radius: 50%;
                              box-shadow: 20px 20px 60px var(--darken), -20px -20px 60px var(--lighten);
                              opacity: 0;
                              animation: fadeIn 400ms ease-out forwards, outside_grow 5s ease-out, fadeOut 3s 2s forwards;
                            }
                            .wave::after {
                              content: "";
                              position: absolute;
                              top: 50%;
                              left: 50%;
                              transform: translate(-50%, -50%);
                              width: 0px;
                              height: 0px;
                              border-radius: 50%;
                              box-shadow: inset 20px 20px 60px var(--darken), inset -20px -20px 60px var(--lighten);
                              animation: inside_grow 5s ease-out;
                            }
                            @keyframes outside_grow { from { width: 20px; height: 20px; } to { width: 900px; height: 900px; } }
                            @keyframes inside_grow { from { width: 0px; height: 0px; } to { width: 880px; height: 880px; } }
                            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                            @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
                            @keyframes shadowFadeIn { 0% { box-shadow: var(--inset); } 50% { box-shadow: none; } 100% { box-shadow: var(--shadow); } }
                            @keyframes shadowFadeOut { 0% { box-shadow: var(--shadow); } 50% { box-shadow: none; } 100% { box-shadow: var(--inset); } }
                            @keyframes fillFadeOut { from { fill: none; } to { fill: currentColor; } }
                            @keyframes fillFadeIn { from { fill: currentcolor; } to { fill: none; } }
                        </style>
                    </head>
                    <body>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </button>
                        <script>
                            const $button = document.querySelector("button");
                            let debounce = false;
                            $button.addEventListener("click", () => {
                              if (debounce) return;
                              debounce = true;
                              buttonAnimate();
                              createWave();
                            });
                            const buttonAnimate = () => {
                              $button.classList.add("clicked");
                              setTimeout(() => {
                                $button.classList.remove("clicked");
                                debounce = false;
                              }, 700);
                            };
                            const createWave = () => {
                              const wave = document.createElement("div");
                              wave.classList.add("wave");
                              document.body.appendChild(wave);
                              setTimeout(() => wave.remove(), 7000);
                            };
                        </script>
                    </body>
                    </html>
                '></iframe>
            `,
            htmlCode: `<button class="neu-btn">\n  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">\n    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>\n  </svg>\n</button>`,
            cssCode: `:root {\n  --base: #55b9f3;\n  --lighten: #62d5ff;\n  --darken: #489dcf;\n  --white: #c8deeb;\n  --shadow: 6px 6px 12px var(--darken), -6px -6px 12px var(--lighten);\n  --inset: inset 6px 6px 12px var(--darken), inset -6px -6px 12px var(--lighten);\n}\n\nbody {\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--base);\n  overflow: hidden;\n}\n\nbutton {\n  z-index: 10;\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  background-color: var(--base);\n  color: var(--white);\n  border: none;\n  border-radius: 50%;\n  box-shadow: var(--shadow);\n  cursor: pointer;\n}\n\nsvg {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\nbutton.clicked {\n  animation: shadowFadeOut 200ms ease-out forwards,\n    shadowFadeIn 200ms 300ms ease-in forwards;\n}\n\nbutton.clicked svg {\n  animation: fillFadeOut 200ms ease-out forwards,\n    fillFadeIn 200ms 300ms ease-in forwards;\n}\n\n.wave {\n  z-index: 1;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  box-shadow: 20px 20px 60px var(--darken), -20px -20px 60px var(--lighten);\n  opacity: 0;\n  animation: fadeIn 400ms ease-out forwards, outside_grow 5s ease-out,\n    fadeOut 3s 2s forwards;\n}\n\n.wave::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 0px;\n  height: 0px;\n  border-radius: 50%;\n  box-shadow: inset 20px 20px 60px var(--darken), inset -20px -20px 60px var(--lighten);\n  animation: inside_grow 5s ease-out;\n}\n\n@keyframes outside_grow {\n  from { width: 20px; height: 20px; }\n  to { width: 900px; height: 900px; }\n}\n\n@keyframes inside_grow {\n  from { width: 0px; height: 0px; }\n  to { width: 880px; height: 880px; }\n}\n\n@keyframes fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n@keyframes fadeOut {\n  from { opacity: 1; }\n  to { opacity: 0; }\n}\n\n@keyframes shadowFadeIn {\n  0% { box-shadow: var(--inset); }\n  50% { box-shadow: none; }\n  100% { box-shadow: var(--shadow); }\n}\n\n@keyframes shadowFadeOut {\n  0% { box-shadow: var(--shadow); }\n  50% { box-shadow: none; }\n  100% { box-shadow: var(--inset); }\n}\n\n@keyframes fillFadeOut {\n  from { fill: none; }\n  to { fill: currentColor; }\n}\n\n@keyframes fillFadeIn {\n  from { fill: currentcolor; }\n  to { fill: none; }\n}`,
            jsCode: `const $button = document.querySelector("button");\n\nlet debounce = false;\n$button.addEventListener("click", () => {\n  if (debounce) return;\n  debounce = true;\n  buttonAnimate();\n  createWave();\n});\n\nconst buttonAnimate = () => {\n  $button.classList.add("clicked");\n  setTimeout(() => {\n    $button.classList.remove("clicked");\n    debounce = false;\n  }, 700);\n};\n\nconst createWave = () => {\n  const wave = document.createElement("div");\n  wave.classList.add("wave");\n  document.body.appendChild(wave);\n  setTimeout(() => wave.remove(), 7000);\n};`
        },
        {
            id: "anim-download-button",
            name: "React-Style Download Button",
            tags: ["Botón", "Animación", "Microinteracción", "CSS", "UI"],
            preview: `
                <iframe style="width: 100%; height: 350px; border: none; border-radius: 12px; background: #222;" srcdoc='
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <style>
                            body { display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #222; font-family: system-ui, -apple-system, sans-serif; }
                            
                            .dl-button {
                                position: relative;
                                display: flex;
                                align-items: center;
                                width: 220px;
                                height: 60px;
                                background: #2a2b30;
                                border: 2px solid #2a2b30;
                                border-radius: 30px;
                                cursor: pointer;
                                padding: 4px;
                                box-sizing: border-box;
                                transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                                overflow: hidden;
                                color: white;
                            }
                            
                            .dl-icon-wrapper {
                                position: relative;
                                width: 48px;
                                height: 48px;
                                background: #0ea5e9;
                                border-radius: 50%;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                flex-shrink: 0;
                                transition: all 0.5s ease;
                            }
                            
                            .dl-arrow {
                                width: 24px;
                                height: 24px;
                                color: white;
                                transition: all 0.3s ease;
                            }
                            
                            .dl-stop {
                                position: absolute;
                                width: 14px;
                                height: 14px;
                                background: white;
                                border-radius: 2px;
                                transform: scale(0);
                                transition: all 0.3s ease;
                            }
                            
                            /* SVG Circular Progress Bar */
                            .dl-spinner {
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 48px;
                                height: 48px;
                                transform: rotate(-90deg);
                                opacity: 0;
                                transition: opacity 0.3s ease;
                            }
                            
                            .dl-path {
                                /* 138 es aproximadamente la circunferencia de radio 22 */
                                stroke-dasharray: 138;
                                stroke-dashoffset: 138;
                                stroke-linecap: round;
                            }
                            
                            .dl-text {
                                font-size: 18px;
                                font-weight: 500;
                                margin-left: 24px;
                                transition: all 0.4s ease;
                                white-space: nowrap;
                            }
                            
                            /* --- ESTADO: DESCARGANDO --- */
                            .dl-button.downloading {
                                width: 60px;
                            }
                            .dl-button.downloading .dl-text {
                                opacity: 0;
                                visibility: hidden;
                            }
                            .dl-button.downloading .dl-arrow {
                                transform: scale(0);
                            }
                            .dl-button.downloading .dl-stop {
                                transform: scale(1);
                            }
                            .dl-button.downloading .dl-spinner {
                                opacity: 1;
                            }
                            .dl-button.downloading .dl-path {
                                animation: fillProgress 3s linear forwards;
                            }
                            
                            /* --- ESTADO: COMPLETADO --- */
                            .dl-button.done {
                                width: 200px;
                                background: transparent;
                                border-color: #34d399; /* Verde Neón */
                                justify-content: center;
                            }
                            .dl-button.done .dl-icon-wrapper {
                                width: 0;
                                opacity: 0;
                                margin: 0;
                            }
                            .dl-button.done .dl-text {
                                margin-left: 0;
                            }
                            
                            @keyframes fillProgress {
                                0% { stroke-dashoffset: 138; }
                                100% { stroke-dashoffset: 0; }
                            }
                        </style>
                    </head>
                    <body>
                        <button class="dl-button" id="dl-btn">
                            <div class="dl-icon-wrapper">
                                <svg class="dl-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 5v14M19 12l-7 7-7-7"/>
                                </svg>
                                <div class="dl-stop"></div>
                                <svg class="dl-spinner" viewBox="0 0 48 48">
                                    <circle class="dl-path" cx="24" cy="24" r="22" fill="none" stroke="white" stroke-width="2"></circle>
                                </svg>
                            </div>
                            <span class="dl-text">download</span>
                        </button>
                        
                        <script>
                            const btn = document.getElementById("dl-btn");
                            const text = btn.querySelector(".dl-text");
                            
                            btn.addEventListener("click", () => {
                                // Evita clics dobles mientras se anima
                                if (btn.classList.contains("downloading") || btn.classList.contains("done")) return;
                                
                                // Inicia la animación de descarga
                                btn.classList.add("downloading");
                                
                                // Simula el tiempo de descarga (3 segundos)
                                setTimeout(() => {
                                    btn.classList.remove("downloading");
                                    btn.classList.add("done");
                                    text.innerText = "open";
                                    
                                    // Opcional: Reinicia el botón a los 4 segundos para volver a probarlo
                                    setTimeout(() => {
                                        btn.classList.remove("done");
                                        text.innerText = "download";
                                    }, 4000);
                                }, 3000); 
                            });
                        </script>
                    </body>
                    </html>
                '></iframe>
            `,
            htmlCode: `<button class="dl-button" id="dl-btn">\n  <div class="dl-icon-wrapper">\n    \n    <svg class="dl-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <path d="M12 5v14M19 12l-7 7-7-7"/>\n    </svg>\n    \n    <div class="dl-stop"></div>\n    \n    <svg class="dl-spinner" viewBox="0 0 48 48">\n      <circle class="dl-path" cx="24" cy="24" r="22" fill="none" stroke="white" stroke-width="2"></circle>\n    </svg>\n  </div>\n  <span class="dl-text">download</span>\n</button>`,
            cssCode: `.dl-button {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 220px;\n  height: 60px;\n  background: #2a2b30;\n  border: 2px solid #2a2b30;\n  border-radius: 30px;\n  cursor: pointer;\n  padding: 4px;\n  box-sizing: border-box;\n  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  overflow: hidden;\n  color: white;\n}\n\n.dl-icon-wrapper {\n  position: relative;\n  width: 48px;\n  height: 48px;\n  background: #0ea5e9;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  transition: all 0.5s ease;\n}\n\n.dl-arrow {\n  width: 24px;\n  height: 24px;\n  color: white;\n  transition: all 0.3s ease;\n}\n\n.dl-stop {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  background: white;\n  border-radius: 2px;\n  transform: scale(0);\n  transition: all 0.3s ease;\n}\n\n.dl-spinner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 48px;\n  height: 48px;\n  transform: rotate(-90deg);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n\n.dl-path {\n  stroke-dasharray: 138;\n  stroke-dashoffset: 138;\n  stroke-linecap: round;\n}\n\n.dl-text {\n  font-size: 18px;\n  font-weight: 500;\n  margin-left: 24px;\n  transition: all 0.4s ease;\n  white-space: nowrap;\n}\n\n/* --- ESTADO: DESCARGANDO --- */\n.dl-button.downloading {\n  width: 60px;\n}\n.dl-button.downloading .dl-text {\n  opacity: 0;\n  visibility: hidden;\n}\n.dl-button.downloading .dl-arrow {\n  transform: scale(0);\n}\n.dl-button.downloading .dl-stop {\n  transform: scale(1);\n}\n.dl-button.downloading .dl-spinner {\n  opacity: 1;\n}\n.dl-button.downloading .dl-path {\n  animation: fillProgress 3s linear forwards;\n}\n\n/* --- ESTADO: COMPLETADO --- */\n.dl-button.done {\n  width: 200px;\n  background: transparent;\n  border-color: #34d399; /* Verde Neón */\n  justify-content: center;\n}\n.dl-button.done .dl-icon-wrapper {\n  width: 0;\n  opacity: 0;\n  margin: 0;\n}\n.dl-button.done .dl-text {\n  margin-left: 0;\n}\n\n@keyframes fillProgress {\n  0% { stroke-dashoffset: 138; }\n  100% { stroke-dashoffset: 0; }\n}`,
            jsCode: `const btn = document.getElementById("dl-btn");\nconst text = btn.querySelector(".dl-text");\n\nbtn.addEventListener("click", () => {\n  if (btn.classList.contains("downloading") || btn.classList.contains("done")) return;\n  \n  btn.classList.add("downloading");\n  \n  setTimeout(() => {\n    btn.classList.remove("downloading");\n    btn.classList.add("done");\n    text.innerText = "open";\n  }, 3000); // 3 segundos simulando la descarga\n});`
        },
        {
            id: "anim-fly-to-cart",
            name: "Fly to Cart Effect",
            tags: ["Animación", "E-commerce", "Carrito", "Interactivo"],
            preview: `
                <iframe style="width: 100%; height: 500px; border: none; border-radius: 12px; background: #f8f9fa;" srcdoc='
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
                        <style>
                            body { font-family: system-ui, -apple-system, sans-serif; margin: 0; background-color: #f8f9fa; height: 100vh; }
                            .navbar { display: flex; justify-content: flex-end; padding: 20px 40px; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
                            .cart-container { position: relative; font-size: 24px; cursor: pointer; color: #333; }
                            .cart-badge { position: absolute; top: -8px; right: -10px; background: #ff2d75; color: white; font-size: 12px; font-weight: bold; width: 20px; height: 20px; border-radius: 50%; display: flex; justify-content: center; align-items: center; transition: transform 0.3s; }
                            .cart-container.pop .cart-badge { transform: scale(1.4); }
                            .cart-container.pop i { animation: shake 0.4s ease-in-out; }
                            .product-card { background: white; width: 300px; padding: 20px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); margin: 40px auto; }
                            .img-container { background: #f1f2f6; border-radius: 15px; padding: 20px; text-align: center; margin-bottom: 20px; }
                            .product-img { max-width: 100%; height: 200px; object-fit: contain; transition: transform 0.3s; }
                            .product-card:hover .product-img { transform: scale(1.05) rotate(-2deg); }
                            .title { font-size: 20px; font-weight: bold; margin: 0 0 10px; color: #1e272e; }
                            .desc { font-size: 13px; color: #808e9b; margin: 0 0 20px; line-height: 1.5; }
                            .footer { display: flex; justify-content: space-between; align-items: center; }
                            .add-btn { background: #1e272e; color: white; border: none; padding: 12px 20px; border-radius: 10px; font-weight: bold; cursor: pointer; display: flex; gap: 8px; align-items: center; transition: 0.2s; }
                            .add-btn:active { transform: scale(0.95); }
                            .price { font-weight: bold; font-size: 20px; color: #1e272e; }
                            @keyframes shake { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(-10deg); } 75% { transform: rotate(10deg); } }
                        </style>
                    </head>
                    <body>
                        <nav class="navbar">
                            <div class="cart-container" id="cart">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <span class="cart-badge" id="cart-badge">0</span>
                            </div>
                        </nav>
                        <div class="product-card">
                            <div class="img-container">
                            <img src="../../assets/images/img1.png" alt="Producto" class="product-img" id="product-img">
                            <h2 class="title">Controller Blue</h2>
                            <p class="desc">Desata el poder del dragón. Este control azul combina un diseño mítico con un rendimiento excepcional para llevar tus aventuras al siguiente nivel..</p>
                            <div class="footer">
                                <button class="add-btn" id="add-btn">Add to cart <i class="fa-solid fa-plus"></i></button>
                                <span class="price">$2.99</span>
                            </div>
                        </div>
                        <script>
                            const btn = document.getElementById("add-btn");
                            const img = document.getElementById("product-img");
                            const cart = document.getElementById("cart");
                            const badge = document.getElementById("cart-badge");
                            let cartCount = 0;
                            btn.addEventListener("click", () => {
                                const clone = img.cloneNode();
                                const imgRect = img.getBoundingClientRect();
                                const cartRect = cart.getBoundingClientRect();
                                clone.style.position = "fixed";
                                clone.style.top = imgRect.top + "px";
                                clone.style.left = imgRect.left + "px";
                                clone.style.width = imgRect.width + "px";
                                clone.style.height = imgRect.height + "px";
                                clone.style.zIndex = "9999";
                                clone.style.pointerEvents = "none";
                                clone.style.transition = "all 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
                                document.body.appendChild(clone);
                                requestAnimationFrame(() => {
                                    clone.style.top = (cartRect.top + cartRect.height / 2 - 20) + "px";
                                    clone.style.left = (cartRect.left + cartRect.width / 2 - 20) + "px";
                                    clone.style.width = "40px"; clone.style.height = "40px";
                                    clone.style.opacity = "0"; clone.style.transform = "scale(0.2) rotate(360deg)";
                                });
                                setTimeout(() => {
                                    clone.remove(); cartCount++; badge.innerText = cartCount;
                                    cart.classList.add("pop");
                                    setTimeout(() => cart.classList.remove("pop"), 400);
                                }, 800);
                            });
                        </script>
                    </body>
                    </html>
                '></iframe>
            `,
            htmlCode: `<nav class="navbar">\n  <div class="cart-container" id="cart">\n    <i class="fa-solid fa-cart-shopping"></i>\n    <span class="cart-badge" id="cart-badge">0</span>\n  </div>\n</nav>\n\n<div class="product-card">\n  <div class="img-container">\n    \n    <img src="assets/images/img1.png" alt="Producto" class="product-img" id="product-img">\n  </div>\n  <h2 class="title">Classic Cola</h2>\n  <p class="desc">Crisp, refreshing, and ice cold...</p>\n  <div class="footer">\n    <button class="add-btn" id="add-btn">\n      Add to cart <i class="fa-solid fa-plus"></i>\n    </button>\n    <span class="price">$2.99</span>\n  </div>\n</div>`,
            cssCode: `/* (Mismo CSS de antes) */`,
            jsCode: `/* (Mismo JS de antes) */`
        },
        {
        id: "anim-rotating-earth",
        name: "Pure CSS Rotating Earth",
        tags: ["Animación", "Espacio", "CSS Puro", "Planeta", "3D"],
        preview: `
            <iframe style="width: 100%; height: 500px; border: none; border-radius: 12px; overflow: hidden;" srcdoc='
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <style>
                        * { padding: 0; margin: 0; box-sizing: border-box; }
                        body {
                            width: 100%; height: 100vh;
                            display: grid; place-items: center;
                            background: #081621; overflow: hidden;
                        }
                        .earth {
                            position: relative;
                            /* Ajustado para ser responsivo en la vista previa */
                            width: min(80vw, 400px); 
                            aspect-ratio: 1;
                            border-radius: 50%;
                            background-image: url("https://i.postimg.cc/9QCCCVsQ/earth.png");
                            background-repeat: repeat-x;
                            background-size: cover;
                            animation: earth 40s linear infinite, pulse 2s linear infinite alternate;
                            box-shadow: 
                                0 -1px 1px 1px rgba(255,255,255,1), 
                                -1px 1px 1px 1px #64BEC8, 
                                0 0 8rem -20px #64BEC8, 
                                inset 0 0 76px -10px #64BEC8, 
                                inset 0 0 5.6rem -10px #64BEC8;
                        }
                        .earth::before, .earth::after {
                            content: ""; position: absolute; left: 10px; height: 10px;
                            border-radius: 50%; filter: blur(16px);
                            transform-origin: center; animation: glow-rotate 10s linear infinite alternate; pointer-events: none;
                        }
                        .earth::before {
                            width: 14%; 
                            box-shadow: inset 0 0 70px -50px white, inset 0 0 70px 90px #E5BC77, 0 0 130px 50px #E5BC77;
                        }
                        .earth::after {
                            width: 12%; 
                            box-shadow: inset 0 0 70px 90px #A47478, 0 0 140px 70px #A47478;
                        }
                        @keyframes earth {
                            0% { background-position: 0 0; }
                            100% { background-position: -199% 0; }
                        }
                        @keyframes pulse {
                            0% { box-shadow: 0 -1px 1px 1px rgba(255,255,255,1), -1px 1px 1px 1px #64BEC8, 0 0 8rem -20px #64BEC8, inset 0 0 76px -10px #64BEC8, inset 0 0 5.6rem -10px #64BEC8; }
                            100% { box-shadow: 0 -1px 1px 1px rgba(255,255,255,1), -1px 1px 1px 1px #64BEC8, 0 0 10rem -20px #64BEC8, inset 0 0 76px -10px #64BEC8, inset 0 0 3.6rem -10px #64BEC8; }
                        }
                        @keyframes glow-rotate {
                            from { transform: rotate(0deg); }
                            to   { transform: rotate(180deg); }
                        }
                    </style>
                </head>
                <body>
                    <div class="earth" aria-hidden="true"></div>
                </body>
                </html>
            '></iframe>
        `,
        htmlCode: `<div class="earth" aria-hidden="true"></div>`,
        cssCode: `* { padding: 0; margin: 0; box-sizing: border-box; }\n\nbody {\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  place-items: center;\n  background: #081621;\n  overflow: hidden;\n}\n\n.earth {\n  position: relative;\n  /* Usamos min() para que no se desborde en pantallas pequeñas */\n  width: min(90vw, 600px);\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background-image: url('https://i.postimg.cc/9QCCCVsQ/earth.png');\n  background-repeat: repeat-x;\n  background-size: cover;\n  animation: earth 40s linear infinite, pulse 2s linear infinite alternate;\n  box-shadow:\n    0 -1px 1px 1px rgba(255,255,255,1),\n    -1px 1px 1px 1px #64BEC8,\n    0 0 8rem -20px #64BEC8,\n    inset 0 0 76px -10px #64BEC8,\n    inset 0 0 5.6rem -10px #64BEC8;\n}\n\n.earth::before,\n.earth::after {\n  content: '';\n  position: absolute;\n  left: 10px; \n  height: 10px;\n  border-radius: 50%;\n  filter: blur(16px);\n  transform-origin: center;\n  animation: glow-rotate 10s linear infinite alternate;\n  pointer-events: none;\n}\n\n.earth::before {\n  width: 14%;\n  box-shadow:\n    inset 0 0 70px -50px white,\n    inset 0 0 70px 90px #E5BC77,\n    0 0 130px 50px #E5BC77;\n}\n\n.earth::after {\n  width: 12%;\n  box-shadow:\n    inset 0 0 70px 90px #A47478,\n    0 0 140px 70px #A47478;\n}\n\n@keyframes earth {\n  0% { background-position: 0 0; }\n  100% { background-position: -199% 0; }\n}\n\n@keyframes pulse {\n  0% {\n    box-shadow:\n      0 -1px 1px 1px rgba(255,255,255,1),\n      -1px 1px 1px 1px #64BEC8,\n      0 0 8rem -20px #64BEC8,\n      inset 0 0 76px -10px #64BEC8,\n      inset 0 0 5.6rem -10px #64BEC8;\n  }\n  100% {\n    box-shadow:\n      0 -1px 1px 1px rgba(255,255,255,1),\n      -1px 1px 1px 1px #64BEC8,\n      0 0 10rem -20px #64BEC8,\n      inset 0 0 76px -10px #64BEC8,\n      inset 0 0 3.6rem -10px #64BEC8;\n  }\n}\n\n@keyframes glow-rotate {\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(180deg); }\n}`,
        jsCode: `// Esta animación funciona 100% con CSS.\n// No requiere JavaScript.`
    }
    ]