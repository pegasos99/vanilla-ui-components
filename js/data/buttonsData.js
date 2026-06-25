export const buttonsData = [
        {
            id: "push-3d",
            name: "Botón Push 3D",
            tags: ["3D", "Neumorfismo"],
            preview: `
                <button class="btn-push3d" id="btn-demo-push3d">
                    <div class="outer">
                        <div class="inner">
                            <span>Push</span>
                        </div>
                    </div>
                </button>
            `,
            // Códigos limpios listos para exportar/copiar
            htmlCode: `<button class="btn-push3d">\n  <div class="outer">\n    <div class="inner">\n      <span>Push</span>\n    </div>\n  </div>\n</button>`,
            cssCode: `.btn-push3d {\n  border: none;\n  cursor: pointer;\n  background: transparent;\n  position: relative;\n  border-radius: 99px;\n  padding: 0;\n}\n.btn-push3d .outer {\n  border-radius: 99px;\n  transition: 0.3s cubic-bezier(0.25, 1, 0.5, 1);\n  box-shadow: 0 6px 10px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.3);\n}\n.btn-push3d .inner {\n  padding: 14px 40px;\n  background: linear-gradient(135deg, #f5f5f5, #cccccc);\n  border-radius: 99px;\n  transition: 0.25s ease;\n  box-shadow: inset 0 -2px 4px rgba(0,0,0,0.2), inset 0 4px 6px rgba(255,255,255,0.9);\n}\n.btn-push3d .inner span {\n  font-size: 24px;\n  font-weight: 600;\n  background: linear-gradient(135deg, #333, #666);\n  -webkit-background-clip: text;\n  color: transparent;\n  display: block;\n}\n.btn-push3d:active .outer {\n  box-shadow: none;\n  transform: translateY(2px);\n}\n.btn-push3d:active .inner {\n  box-shadow: inset 3px 3px 6px rgba(0,0,0,0.35);\n}`,
            jsCode: `// Código opcional por si deseas asignarle lógica al botón en tu nuevo proyecto:\nconst boton = document.querySelector('.btn-push3d');\nboton.addEventListener('click', () => {\n  console.log('¡Botón pulsado!');\n});`
        },
        {
            id: "btn-twitter-rotate",
            name: "Botón Twitter Rotatorio",
            tags: ["Animado", "Plano"],
            preview: `
                <button class="circle-btn">
                  <p class="rotating-text">
                    <span style="--i:0;">T</span>
                    <span style="--i:1;">W</span>
                    <span style="--i:2;">I</span>
                    <span style="--i:3;">T</span>
                    <span style="--i:4;">T</span>
                    <span style="--i:5;">E</span>
                    <span style="--i:6;">R</span>
                    <span style="--i: 7;"> </span>
                    <span style="--i: 8;">T</span>
                    <span style="--i: 9;">W</span>
                    <span style="--i: 10;">I</span>
                    <span style="--i: 11;">T</span>
                    <span style="--i: 12;">T</span>
                    <span style="--i: 13;">E</span>
                    <span style="--i: 14;">R</span>
                  </p>
                  <div class="icon-wrapper">
                    <i class="fa-brands fa-twitter icon main-icon"></i>
                    <i class="fa-brands fa-twitter icon copy-icon"></i>
                  </div>
                </button>
            `,
            htmlCode: `<button class="circle-btn">\n  <p class="rotating-text">\n    <span style="--i:0;">T</span>\n    <span style="--i:1;">W</span>\n    <span style="--i:2;">I</span>\n    <span style="--i:3;">T</span>\n    <span style="--i:4;">T</span>\n    <span style="--i:5;">E</span>\n    <span style="--i:6;">R</span>\n    <span style="--i: 7;"> </span>\n    <span style="--i: 8;">T</span>\n    <span style="--i: 9;">W</span>\n    <span style="--i: 10;">I</span>\n    <span style="--i: 11;">T</span>\n    <span style="--i: 12;">T</span>\n    <span style="--i: 13;">E</span>\n    <span style="--i: 14;">R</span>\n  </p>\n  <div class="icon-wrapper">\n    <i class="fa-brands fa-twitter icon main-icon"></i>\n    <i class="fa-brands fa-twitter icon copy-icon"></i>\n  </div>\n</button>`,
            cssCode: `.circle-btn {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: #00ccff;\n  border: none;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.3s, transform 0.2s, box-shadow 0.3s;\n  cursor: pointer;\n  box-shadow: 0 0 5px #00ccff, 0 0 10px #00ccff33;\n}\n.circle-btn:hover {\n  background: #000;\n  transform: scale(1.05);\n}\n.circle-btn:active {\n  transform: scale(0.95);\n}\n.rotating-text {\n  position: absolute;\n  inset: 8px;\n  animation: spin 8s linear infinite;\n  font-family: sans-serif;\n}\n.rotating-text span {\n  position: absolute;\n  inset: 0;\n  transform: rotate(calc(22deg * var(--i)));\n}\n.icon-wrapper {\n  width: 40px;\n  height: 40px;\n  background: #212121;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  color: #00ccff;\n  font-size: 18px;\n}\n.icon {\n  transition: transform 0.3s ease;\n  position: absolute;\n}\n.copy-icon {\n  transform: translate(-250%, 150%);\n}\n.circle-btn:hover .main-icon {\n  transform: translate(150%, -150%);\n  color: #fff;\n  opacity: 0;\n}\n.circle-btn:hover .copy-icon {\n  transform: translate(0, 0);\n  transition-delay: 0.1s;\n  color:#fff;\n}\n@keyframes spin {\n  to {\n    rotate: 360deg;\n  }\n}`,
            jsCode: ``
        },
        {
            id: "btn-liquid",
            name: "Botón Liquid Glow",
            tags: ["3D", "Neumorfismo", "Efectos"],
            preview: `
                <button class="liquid-btn">
                  <div class="liquid-fill"></div>
                  <div class="btn-content">
                    <i class="fa-solid fa-moon"></i>
                    <span>Sleep</span>
                    <i class="fa-solid fa-ellipsis"></i>
                  </div>
                </button>
            `,
            htmlCode: `<button class="liquid-btn">\n  <div class="liquid-fill"></div>\n  <div class="btn-content">\n    <i class="fa-solid fa-moon"></i>\n    <span>Sleep</span>\n    <i class="fa-solid fa-ellipsis"></i>\n  </div>\n</button>`,

            cssCode: `.liquid-btn {\n  position: relative;\n  width: 220px;\n  height: 65px;\n  border-radius: 50px;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  background: #e5e5e5;\n  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;\n  cursor: pointer;\n  overflow: hidden;\n  font-family: inherit;\n  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);\n  transform-style: preserve-3d;\n}\n.liquid-btn::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 5%;\n  width: 90%;\n  height: 40%;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%);\n  border-radius: 50px 50px 100px 100px;\n  z-index: 3;\n  pointer-events: none;\n}\n.liquid-btn:hover {\n  transform: perspective(500px) rotateX(12deg) translateY(-5px);\n  box-shadow: 0 15px 25px rgba(0,0,0,0.15), inset 0 -3px 5px rgba(0,0,0,0.1), inset 0 3px 5px rgba(255,255,255,0.8);\n}\n.liquid-btn:active {\n  transform: perspective(500px) rotateX(-5deg) translateY(2px);\n  box-shadow: inset 6px 6px 10px #bebebe, inset -6px -6px 10px #ffffff;\n}\n.liquid-fill {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 0%;\n  background: linear-gradient(90deg, #74ebd5 0%, #9face6 100%);\n  transition: width 0.5s cubic-bezier(0.25, 1, 0.5, 1);\n  border-radius: 50px;\n  z-index: 1;\n}\n.liquid-btn:hover .liquid-fill {\n  width: 100%;\n  box-shadow: inset 0px 5px 10px rgba(255,255,255,0.5), inset 0px -5px 10px rgba(0,0,0,0.1);\n}\n.btn-content {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 25px;\n  width: 100%;\n  height: 100%;\n  color: #666;\n  font-weight: 600;\n  font-size: 16px;\n  text-shadow: 1px 1px 1px rgba(255,255,255,0.8);\n  transition: all 0.4s ease;\n}\n.liquid-btn:hover .btn-content {\n  color: #ffffff;\n  text-shadow: 0 2px 5px rgba(0,0,0,0.3);\n}`,
            jsCode: ``
        }
    ];