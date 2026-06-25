export const loginsData = [
        {
            id: "login-sliding",
            name: "Sliding Panel Login",
            tags: ["Animado", "Doble", "Moderno"],
            preview: `
                <div class="sliding-login-card">
                    <input type="checkbox" id="sliding-toggle" class="sliding-toggle">
                    <div class="sliding-bg"></div>
                    <div class="sliding-hero signup">
                        <h2>¡Bienvenido de vuelta!</h2>
                        <p>Inicia sesión para revisar tus últimas actualizaciones.</p>
                        <label for="sliding-toggle">INICIAR SESIÓN</label>
                    </div>
                    <div class="sliding-form signup">
                        <h2>Crear Cuenta</h2>
                        <input type="text" placeholder="Nombre completo">
                        <input type="email" placeholder="Correo electrónico">
                        <input type="password" placeholder="Contraseña">
                        <button class="sliding-btn">Registrarse</button>
                    </div>
                    <div class="sliding-hero signin">
                        <h2>¡Hola!</h2>
                        <p>Comienza tu viaje en nuestra plataforma hoy mismo.</p>
                        <label for="sliding-toggle">REGISTRARSE</label>
                    </div>
                    <div class="sliding-form signin">
                        <h2>Iniciar Sesión</h2>
                        <input type="email" placeholder="Correo electrónico">
                        <input type="password" placeholder="Contraseña">
                        <button class="sliding-btn">Ingresar</button>
                    </div>
                </div>
            `,
            htmlCode: `<div class="sliding-login-card">\n  <input type="checkbox" id="sliding-toggle" class="sliding-toggle">\n  <div class="sliding-bg"></div>\n\n  <div class="sliding-hero signup">\n    <h2>¡Bienvenido de vuelta!</h2>\n    <p>Inicia sesión para revisar tus últimas actualizaciones.</p>\n    <label for="sliding-toggle">INICIAR SESIÓN</label>\n  </div>\n\n  <div class="sliding-form signup">\n    <h2>Crear Cuenta</h2>\n    <input type="text" placeholder="Nombre completo">\n    <input type="email" placeholder="Correo electrónico">\n    <input type="password" placeholder="Contraseña">\n    <button class="sliding-btn">Registrarse</button>\n  </div>\n\n  <div class="sliding-hero signin">\n    <h2>¡Hola!</h2>\n    <p>Comienza tu viaje en nuestra plataforma hoy mismo.</p>\n    <label for="sliding-toggle">REGISTRARSE</label>\n  </div>\n\n  <div class="sliding-form signin">\n    <h2>Iniciar Sesión</h2>\n    <input type="email" placeholder="Correo electrónico">\n    <input type="password" placeholder="Contraseña">\n    <button class="sliding-btn">Ingresar</button>\n  </div>\n</div>`,
            cssCode: `.sliding-login-card {\n  position: relative;\n  width: 660px;\n  height: 440px;\n  overflow: hidden;\n  border-radius: 20px;\n  background: #ffffff;\n  box-shadow: 0 20px 80px rgba(124, 92, 191, 0.16), 0 4px 20px rgba(0, 0, 0, 0.05);\n  font-family: system-ui, sans-serif;\n}\n.sliding-toggle {\n  display: none;\n}\n.sliding-bg {\n  position: absolute;\n  inset: 0 auto 0 0;\n  z-index: 2;\n  width: 50%;\n  background: linear-gradient(135deg, #8960e2, #3ba2fb);\n  transition: 0.6s cubic-bezier(0.65, 0, 0.35, 1);\n}\n.sliding-toggle:checked ~ .sliding-bg {\n  translate: 100% 0;\n}\n.sliding-hero,\n.sliding-form {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  opacity: 0;\n  visibility: hidden;\n  transition: 0.6s cubic-bezier(0.65, 0, 0.35, 1);\n}\n.sliding-hero.signup,\n.sliding-form.signup {\n  opacity: 1;\n  visibility: visible;\n  translate: 0;\n}\n.sliding-hero.signin,\n.sliding-form.signup {\n  left: 50%;\n}\n.sliding-hero.signin {\n  translate: 25% 0;\n}\n.sliding-form.signin {\n  translate: 50% 0;\n}\n.sliding-toggle:checked ~ .sliding-hero.signup {\n  opacity: 0;\n  visibility: hidden;\n  translate: -25% 0;\n}\n.sliding-toggle:checked ~ .sliding-hero.signin,\n.sliding-toggle:checked ~ .sliding-form.signin {\n  opacity: 1;\n  visibility: visible;\n  translate: 0;\n}\n.sliding-toggle:checked ~ .sliding-form.signup {\n  opacity: 0;\n  visibility: hidden;\n  translate: -50% 0;\n}\n.sliding-hero {\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 0 28px;\n  color: #f9f9f9;\n  text-align: center;\n}\n.sliding-hero h2 {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 600;\n}\n.sliding-hero p {\n  margin: 0 0 6px;\n  font-size: 14px;\n  line-height: 1.55;\n  opacity: 0.8;\n}\n.sliding-hero label {\n  padding: 11px 40px;\n  border: 1.5px solid rgba(249, 249, 249, 0.65);\n  border-radius: 32px;\n  background: transparent;\n  font-size: 13px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: 0.25s ease;\n}\n.sliding-hero label:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.sliding-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0 40px;\n  gap: 15px;\n}\n.sliding-form h2 {\n  color: #3c4566;\n  margin-bottom: 10px;\n  font-size: 24px;\n}\n.sliding-form input {\n  width: 100%;\n  padding: 12px 15px;\n  background: #f1f2ff;\n  border: none;\n  border-radius: 8px;\n  outline: none;\n  color: #3c4566;\n  font-size: 14px;\n  transition: 0.3s;\n}\n.sliding-form input:focus {\n  box-shadow: 0 0 0 2px #8960e2;\n}\n.sliding-btn {\n  width: 100%;\n  padding: 12px;\n  background: linear-gradient(135deg, #8960e2, #3ba2fb);\n  color: white;\n  border: none;\n  border-radius: 32px;\n  cursor: pointer;\n  font-weight: bold;\n  margin-top: 10px;\n  box-shadow: 0 4px 15px rgba(137, 96, 226, 0.3);\n  transition: 0.3s;\n}\n.sliding-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(137, 96, 226, 0.4);\n}`,
            jsCode: ``
        },
        {
            id: "login-glass-scenic",
            name: "Scenic Glassmorphism Login",
            tags: ["Glassmorphism", "Imagen", "Transparente", "Animado"],
            preview: `
                <style>
                    .glass-v2-container { width: 100%; min-height: 550px; display: flex; justify-content: center; align-items: center; background: url("https://i.pinimg.com/originals/d7/b9/0c/d7b90cc80898e8823455a127945719af.jpg") no-repeat; background-size: cover; background-position: center; border-radius: 12px; padding: 20px; position: relative; overflow: hidden; }
                    .glass-v2-container::after { content: ''; position: absolute; inset: 0; background: #050505; opacity: 0; transition: opacity 0.5s ease-in-out; pointer-events: none; z-index: 10; }
                    .glass-v2-container.lights-out::after { opacity: 1; }
                    .glass-v2-wrapper { width: 420px; background-color: transparent; border: 2px solid rgba(255, 255, 255, 0.2); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); color: #fff; border-radius: 16px; padding: 40px 30px; font-family: system-ui, sans-serif; }
                    .glass-v2-wrapper h1 { font-size: 30px; text-align: center; margin-bottom: 20px; }
                    .glass-v2-input-box { position: relative; width: 100%; height: 50px; margin: 30px 0; }
                    .glass-v2-input-box input { width: 100%; height: 100%; background: transparent; border: none; outline: none; border: 2px solid rgba(255, 255, 255, 0.2); border-radius: 40px; font-size: 16px; color: #fff; padding: 0 45px 0 20px; box-sizing: border-box; }
                    .glass-v2-input-box input::placeholder { color: rgba(255, 255, 255, 0.8); }
                    .glass-v2-input-box i { position: absolute; right: 20px; top: 50%; transform: translateY(-50%); font-size: 20px; }
                    .glass-v2-remember-forgot { display: flex; justify-content: space-between; font-size: 14px; margin: -15px 0 15px; }
                    .glass-v2-remember-forgot label input { accent-color: #fff; margin-right: 5px; }
                    .glass-v2-remember-forgot a { color: #fff; text-decoration: none; }
                    .glass-v2-remember-forgot a:hover { text-decoration: underline; }
                    .glass-v2-btn { width: 100%; height: 45px; background: #fff; border: none; outline: none; border-radius: 40px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); cursor: pointer; font-size: 16px; color: #333; font-weight: 600; transition: 0.3s; }
                    .glass-v2-btn:hover { background: #e6e6e6; }
                    .glass-v2-register-link { text-align: center; font-size: 14px; margin: 20px 0 10px; }
                    .glass-v2-register-link p a { color: #fff; text-decoration: none; font-weight: 600; }
                    .glass-v2-register-link p a:hover { text-decoration: underline; }
                </style>
                <div class="glass-v2-container">
                    <div class="glass-v2-wrapper">
                        <form class="scenic-form login-form" onsubmit="event.preventDefault();">
                            <h1>Login</h1>
                            <div class="glass-v2-input-box">
                                <input type="text" placeholder="Username" required>
                                <i class="fa-solid fa-user"></i>
                            </div>
                            <div class="glass-v2-input-box">
                                <input type="password" placeholder="Password" required>
                                <i class="fa-solid fa-lock"></i>
                            </div>
                            <div class="glass-v2-remember-forgot">
                                <label><input type="checkbox"> Remember me</label>
                                <a href="#">Forgot password?</a>
                            </div>
                            <button type="submit" class="glass-v2-btn">Login</button>
                            <div class="glass-v2-register-link">
                                <p>Don't have an account? <a href="#" onclick="
                                    const container = this.closest('.glass-v2-container');
                                    container.classList.add('lights-out');
                                    setTimeout(() => {
                                        container.querySelector('.login-form').style.display = 'none';
                                        container.querySelector('.register-form').style.display = 'block';
                                        setTimeout(() => container.classList.remove('lights-out'), 100);
                                    }, 600);
                                ">Register</a></p>
                            </div>
                        </form>
                        <form class="scenic-form register-form" style="display: none;" onsubmit="event.preventDefault();">
                            <h1>Register</h1>
                            <div class="glass-v2-input-box">
                                <input type="text" placeholder="Full Name" required>
                                <i class="fa-solid fa-id-card"></i>
                            </div>
                            <div class="glass-v2-input-box">
                                <input type="email" placeholder="Email Address" required>
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div class="glass-v2-input-box">
                                <input type="password" placeholder="Password" required>
                                <i class="fa-solid fa-lock"></i>
                            </div>
                            <button type="submit" class="glass-v2-btn">Create Account</button>
                            <div class="glass-v2-register-link">
                                <p>Already have an account? <a href="#" onclick="
                                    const container = this.closest('.glass-v2-container');
                                    container.classList.add('lights-out');
                                    setTimeout(() => {
                                        container.querySelector('.register-form').style.display = 'none';
                                        container.querySelector('.login-form').style.display = 'block';
                                        setTimeout(() => container.classList.remove('lights-out'), 100);
                                    }, 600);
                                ">Login</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            `,
            htmlCode: `<div class="glass-v2-container">\n  <div class="glass-v2-wrapper">\n    <form class="scenic-form login-form" id="scenic-login" onsubmit="event.preventDefault();">\n      <h1>Login</h1>\n      <div class="glass-v2-input-box">\n        <input type="text" placeholder="Username" required>\n        <i class="fa-solid fa-user"></i>\n      </div>\n      <div class="glass-v2-input-box">\n        <input type="password" placeholder="Password" required>\n        <i class="fa-solid fa-lock"></i>\n      </div>\n      <div class="glass-v2-remember-forgot">\n        <label><input type="checkbox"> Remember me</label>\n        <a href="#">Forgot password?</a>\n      </div>\n      <button type="submit" class="glass-v2-btn">Login</button>\n      <div class="glass-v2-register-link">\n        <p>Don't have an account? <a href="#" id="go-to-register">Register</a></p>\n      </div>\n    </form>\n    <form class="scenic-form register-form" id="scenic-register" style="display: none;" onsubmit="event.preventDefault();">\n      <h1>Register</h1>\n      <div class="glass-v2-input-box">\n        <input type="text" placeholder="Full Name" required>\n        <i class="fa-solid fa-id-card"></i>\n      </div>\n      <div class="glass-v2-input-box">\n        <input type="email" placeholder="Email Address" required>\n        <i class="fa-solid fa-envelope"></i>\n      </div>\n      <div class="glass-v2-input-box">\n        <input type="password" placeholder="Password" required>\n        <i class="fa-solid fa-lock"></i>\n      </div>\n      <button type="submit" class="glass-v2-btn">Create Account</button>\n      <div class="glass-v2-register-link">\n        <p>Already have an account? <a href="#" id="go-to-login">Login</a></p>\n      </div>\n    </form>\n  </div>\n</div>`,
            cssCode: `.glass-v2-container {\n  width: 100%; min-height: 550px; display: flex; justify-content: center; align-items: center;\n  background: url("https://i.pinimg.com/originals/d7/b9/0c/d7b90cc80898e8823455a127945719af.jpg") no-repeat;\n  background-size: cover; background-position: center; border-radius: 12px; padding: 20px;\n  position: relative; overflow: hidden;\n}\n.glass-v2-container::after {\n  content: ''; position: absolute; inset: 0; background: #050505;\n  opacity: 0; transition: opacity 0.5s ease-in-out; pointer-events: none; z-index: 10;\n}\n.glass-v2-container.lights-out::after {\n  opacity: 1;\n}\n.glass-v2-wrapper {\n  width: 420px; background-color: transparent; border: 2px solid rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); color: #fff; border-radius: 16px; padding: 40px 30px;\n}\n.glass-v2-wrapper h1 {\n  font-size: 30px; text-align: center; margin-bottom: 20px;\n}\n.glass-v2-input-box {\n  position: relative; width: 100%; height: 50px; margin: 30px 0;\n}\n.glass-v2-input-box input {\n  width: 100%; height: 100%; background: transparent; border: none; outline: none;\n  border: 2px solid rgba(255, 255, 255, 0.2); border-radius: 40px; font-size: 16px;\n  color: #fff; padding: 0 45px 0 20px;\n}\n.glass-v2-input-box input::placeholder {\n  color: rgba(255, 255, 255, 0.8);\n}\n.glass-v2-input-box i {\n  position: absolute; right: 20px; top: 50%; transform: translateY(-50%); font-size: 20px;\n}\n.glass-v2-remember-forgot {\n  display: flex; justify-content: space-between; font-size: 14px; margin: -15px 0 15px;\n}\n.glass-v2-remember-forgot label input {\n  accent-color: #fff; margin-right: 5px;\n}\n.glass-v2-remember-forgot a {\n  color: #fff; text-decoration: none;\n}\n.glass-v2-remember-forgot a:hover {\n  text-decoration: underline;\n}\n.glass-v2-btn {\n  width: 100%; height: 45px; background: #fff; border: none; outline: none;\n  border-radius: 40px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); cursor: pointer;\n  font-size: 16px; color: #333; font-weight: 600; transition: 0.3s;\n}\n.glass-v2-btn:hover {\n  background: #e6e6e6;\n}\n.glass-v2-register-link {\n  text-align: center; font-size: 14px; margin: 20px 0 10px;\n}\n.glass-v2-register-link p a {\n  color: #fff; text-decoration: none; font-weight: 600;\n}\n.glass-v2-register-link p a:hover {\n  text-decoration: underline;\n}`,
            jsCode: `const container = document.querySelector('.glass-v2-container');\nconst formLogin = document.getElementById('scenic-login');\nconst formRegister = document.getElementById('scenic-register');\n\nfunction toggleLightsAndSwitch(showForm, hideForm) {\n  container.classList.add('lights-out');\n  setTimeout(() => {\n    hideForm.style.display = 'none';\n    showForm.style.display = 'block';\n    setTimeout(() => {\n      container.classList.remove('lights-out');\n    }, 100);\n  }, 600);\n}\n\ndocument.getElementById('go-to-register').addEventListener('click', () => {\n  toggleLightsAndSwitch(formRegister, formLogin);\n});\n\ndocument.getElementById('go-to-login').addEventListener('click', () => {\n  toggleLightsAndSwitch(formLogin, formRegister);\n});`
        },
        {
            id: "login-spooky",
            name: "Spooky Animated Login",
            tags: ["Animado", "Divertido", "Interactivo", "Kawaii", "Doble"],
            preview: `
                <style>
                    .spooky-wrapper { width: 100%; min-height: 480px; display: flex; justify-content: center; align-items: center; background: #1a1a2e; padding: 20px; font-family: system-ui, sans-serif; border-radius: 12px; }
                    .spooky-card { background: #ffffff; width: 100%; max-width: 550px; border-radius: 16px; padding: 40px; display: flex; gap: 30px; align-items: center; box-shadow: 0 15px 35px rgba(0,0,0,0.2); transition: all 0.4s ease; }
                    .spooky-ghosts { flex: 1; position: relative; display: flex; align-items: flex-end; justify-content: center; gap: 15px; height: 150px; z-index: 10; transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55); }
                    .spooky-card.switching .spooky-ghosts { transform: translateX(140px) scale(1.4); }
                    .spooky-card.switching .spooky-form-container { opacity: 0; }
                    .spooky-form-container { flex: 1.2; transition: opacity 0.3s ease; }
                    .spooky-bubble { position: absolute; top: -40px; background: #fff; border: 2px solid #eef2f3; box-shadow: 0 4px 10px rgba(0,0,0,0.1); padding: 8px 15px; border-radius: 20px; font-weight: bold; color: #2c3e50; font-size: 14px; opacity: 0; transform: translateY(10px); transition: all 0.3s ease; z-index: 11; }
                    .spooky-bubble::after { content: ''; position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%); border-width: 8px 8px 0; border-style: solid; border-color: #fff transparent transparent transparent; }
                    .ghost { background: linear-gradient(135deg, #ffffff 0%, #eef2f3 100%); border: 3px solid #2c3e50; border-radius: 60px 60px 15px 15px; position: relative; box-shadow: 0 10px 20px rgba(0,0,0,0.1), inset -5px -10px 15px rgba(0,0,0,0.05); animation: float 3s ease-in-out infinite; }
                    .big-ghost { width: 90px; height: 110px; }
                    .small-ghost { width: 60px; height: 80px; animation-delay: 0.5s; }
                    .eyes { position: absolute; top: 35%; left: 0; width: 100%; display: flex; justify-content: center; gap: 14px; }
                    .small-ghost .eyes { gap: 10px; }
                    .eye { width: 12px; height: 12px; background: #2c3e50; border-radius: 50%; transition: all 0.2s; position: relative; }
                    .eye::after { content: ''; position: absolute; top: 2px; right: 2px; width: 4px; height: 4px; background: #fff; border-radius: 50%; }
                    .small-ghost .eye { width: 9px; height: 9px; }
                    .small-ghost .eye::after { width: 3px; height: 3px; top: 1px; right: 1px; }
                    .cheeks { position: absolute; top: 48%; left: 0; width: 100%; display: flex; justify-content: center; gap: 24px; opacity: 0.6; transition: all 0.2s; }
                    .small-ghost .cheeks { top: 50%; gap: 16px; }
                    .cheek { width: 12px; height: 6px; background: #ff8a8a; border-radius: 50%; }
                    .small-ghost .cheek { width: 8px; height: 4px; }
                    .mouth { position: absolute; top: 55%; left: 50%; transform: translateX(-50%); width: 8px; height: 10px; background: #2c3e50; border-radius: 10px 10px 20px 20px; transition: all 0.2s; }
                    .spooky-card.error .spooky-bubble { opacity: 1; transform: translateY(0); color: #e74c3c; border-color: #e74c3c; }
                    .spooky-card.error .eye { height: 6px; transform: translateY(4px); border-radius: 10px 10px 0 0; background: #2c3e50; }
                    .spooky-card.error .eye::after { display: none; }
                    .spooky-card.error .mouth { background: transparent; height: 8px; width: 12px; border: 3px solid #2c3e50; border-bottom: none; border-radius: 10px 10px 0 0; top: 58%; }
                    .spooky-card.error .cheeks { opacity: 0.2; transform: translateY(3px); }
                    .spooky-card.success .spooky-bubble { opacity: 1; transform: translateY(0); color: #2ecc71; border-color: #2ecc71; }
                    .spooky-card.success .eye { background: transparent; border: 3px solid #2c3e50; border-bottom: none; border-radius: 10px 10px 0 0; height: 10px; transform: translateY(-2px); }
                    .spooky-card.success .eye::after { display: none; }
                    .spooky-card.success .mouth { background: #ff8a8a; height: 14px; width: 16px; border-radius: 0 0 20px 20px; }
                    .spooky-card.success .cheeks { opacity: 0.9; transform: translateY(-2px); }
                    .spooky-form { display: flex; flex-direction: column; gap: 15px; }
                    .spooky-form h2 { margin: 0; color: #333; font-size: 24px; }
                    .spooky-input label { display: block; font-size: 13px; color: #666; margin-bottom: 5px; font-weight: bold; }
                    .spooky-input input { width: 100%; padding: 10px 15px; border: 2px solid #ddd; border-radius: 8px; font-size: 14px; outline: none; transition: 0.3s; color: #333; box-sizing: border-box; }
                    .spooky-input input:focus { border-color: #7b2cbf; }
                    .spooky-btn { background: #7b2cbf; color: white; border: none; padding: 12px; border-radius: 8px; font-size: 15px; font-weight: bold; cursor: pointer; transition: 0.3s; margin-top: 5px; }
                    .spooky-btn:hover { background: #5a189a; }
                    .spooky-card.error .spooky-btn { background: #e74c3c; animation: shake 0.4s; }
                    .spooky-card.success .spooky-btn { background: #2ecc71; }
                    .switch-link { font-size: 13px; text-align: center; margin-top: 10px; color: #666; }
                    .switch-link a { color: #7b2cbf; text-decoration: none; font-weight: bold; }
                    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
                    @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }
                </style>
                <div class="spooky-wrapper" id="spooky-login-box">
                  <div class="spooky-card">
                    <div class="spooky-ghosts">
                      <div class="spooky-bubble">Boo!</div>
                      <div class="ghost big-ghost">
                        <div class="eyes"><div class="eye"></div><div class="eye"></div></div>
                        <div class="cheeks"><div class="cheek"></div><div class="cheek"></div></div>
                        <div class="mouth"></div>
                      </div>
                      <div class="ghost small-ghost">
                        <div class="eyes"><div class="eye"></div><div class="eye"></div></div>
                        <div class="cheeks"><div class="cheek"></div><div class="cheek"></div></div>
                        <div class="mouth"></div>
                      </div>
                    </div>
                    <div class="spooky-form-container">
                      <form class="spooky-form login-form" onsubmit="event.preventDefault();">
                        <h2 style="color: #333; margin: 0;">Sign In</h2>
                        <div class="spooky-input">
                          <label>Email Address</label>
                          <input type="text" placeholder="user1">
                        </div>
                        <div class="spooky-input">
                          <label>Password (prueba '12345')</label>
                          <input type="password" placeholder="Ingresa tu contraseña">
                        </div>
                        <button type="button" class="spooky-btn" onclick="
                          const card = this.closest('.spooky-card');
                          const pass = this.previousElementSibling.querySelector('input').value;
                          const bubble = card.querySelector('.spooky-bubble');
                          card.classList.remove('error', 'success');
                          setTimeout(() => {
                              if(pass === '12345') {
                                  card.classList.add('success');
                                  bubble.innerText = '¡Yay! Correcto';
                                  this.innerText = 'Login Successful!';
                              } else {
                                  card.classList.add('error');
                                  bubble.innerText = pass.length < 5 ? '¡Muy corta!' : '¡Incorrecta!';
                                  this.innerText = 'Login Failed!';
                              }
                              setTimeout(() => {
                                  card.classList.remove('error', 'success');
                                  this.innerText = 'Sign In';
                              }, 2500);
                          }, 50);
                        ">Sign In</button>
                        <p class="switch-link">¿No tienes cuenta? <a href="#" onclick="
                          const card = this.closest('.spooky-card');
                          const bubble = card.querySelector('.spooky-bubble');
                          card.classList.add('switching');
                          bubble.innerText = '¡Magia! ✨';
                          bubble.style.opacity = '1';
                          setTimeout(() => {
                              card.querySelector('.login-form').style.display = 'none';
                              card.querySelector('.register-form').style.display = 'flex';
                              card.classList.remove('switching');
                              setTimeout(() => bubble.style.opacity = '0', 1000);
                          }, 500);
                        ">Regístrate</a></p>
                      </form>
                      <form class="spooky-form register-form" style="display: none;" onsubmit="event.preventDefault();">
                        <h2 style="color: #333; margin: 0;">Register</h2>
                        <div class="spooky-input">
                          <label>Nombre Completo</label>
                          <input type="text" placeholder="Tu nombre">
                        </div>
                        <div class="spooky-input">
                          <label>Email Address</label>
                          <input type="text" placeholder="user@email.com">
                        </div>
                        <div class="spooky-input">
                          <label>Password</label>
                          <input type="password" placeholder="Crea una contraseña">
                        </div>
                        <button type="button" class="spooky-btn" onclick="
                          const card = this.closest('.spooky-card');
                          const bubble = card.querySelector('.spooky-bubble');
                          card.classList.remove('error', 'success');
                          setTimeout(() => {
                              card.classList.add('success');
                              bubble.innerText = '¡Bienvenido!';
                              this.innerText = '¡Cuenta Creada!';
                              setTimeout(() => {
                                  card.classList.remove('success');
                                  this.innerText = 'Crear Cuenta';
                              }, 2500);
                          }, 50);
                        ">Crear Cuenta</button>
                        <p class="switch-link">¿Ya tienes cuenta? <a href="#" onclick="
                          const card = this.closest('.spooky-card');
                          const bubble = card.querySelector('.spooky-bubble');
                          card.classList.add('switching');
                          bubble.innerText = '¡Boo! 👻';
                          bubble.style.opacity = '1';
                          setTimeout(() => {
                              card.querySelector('.register-form').style.display = 'none';
                              card.querySelector('.login-form').style.display = 'flex';
                              card.classList.remove('switching');
                              setTimeout(() => bubble.style.opacity = '0', 1000);
                          }, 500);
                        ">Inicia Sesión</a></p>
                      </form>
                    </div>
                  </div>
                </div>
            `,
            htmlCode: `<div class="spooky-wrapper" id="spooky-login-box">\n  <div class="spooky-card">\n    <div class="spooky-ghosts">\n      <div class="spooky-bubble" id="spooky-bubble">Boo!</div>\n      <div class="ghost big-ghost">\n        <div class="eyes"><div class="eye"></div><div class="eye"></div></div>\n        <div class="cheeks"><div class="cheek"></div><div class="cheek"></div></div>\n        <div class="mouth"></div>\n      </div>\n      <div class="ghost small-ghost">\n        <div class="eyes"><div class="eye"></div><div class="eye"></div></div>\n        <div class="cheeks"><div class="cheek"></div><div class="cheek"></div></div>\n        <div class="mouth"></div>\n      </div>\n    </div>\n    <div class="spooky-form-container">\n      \n      <form class="spooky-form login-form" id="form-login" onsubmit="event.preventDefault();">\n        <h2>Sign In</h2>\n        <div class="spooky-input"><label>Email</label><input type="text"></div>\n        <div class="spooky-input"><label>Password</label><input type="password" id="spooky-password"></div>\n        <button type="button" class="spooky-btn" id="spooky-submit">Sign In</button>\n        <p class="switch-link">Don't have an account? <a href="#" id="to-register">Register</a></p>\n      </form>\n      \n      <form class="spooky-form register-form" id="form-register" style="display:none;" onsubmit="event.preventDefault();">\n        <h2>Register</h2>\n        <div class="spooky-input"><label>Name</label><input type="text"></div>\n        <div class="spooky-input"><label>Email</label><input type="text"></div>\n        <div class="spooky-input"><label>Password</label><input type="password"></div>\n        <button type="button" class="spooky-btn" id="spooky-register-btn">Create Account</button>\n        <p class="switch-link">Already have an account? <a href="#" id="to-login">Sign In</a></p>\n      </form>\n    </div>\n  </div>\n</div>`,
            cssCode: `.spooky-wrapper {\n  width: 100%; min-height: 480px; display: flex; justify-content: center; align-items: center;\n  background: #1a1a2e; padding: 20px; font-family: system-ui, sans-serif; border-radius: 12px;\n}\n.spooky-card {\n  background: #ffffff; width: 100%; max-width: 550px; border-radius: 16px; padding: 40px;\n  display: flex; gap: 30px; align-items: center; box-shadow: 0 15px 35px rgba(0,0,0,0.2);\n  transition: all 0.4s ease;\n}\n.spooky-ghosts {\n  flex: 1; position: relative; display: flex; align-items: flex-end; justify-content: center;\n  gap: 15px; height: 150px; z-index: 10;\n  transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n}\n/* MAGIA DE TRANSICIÓN */\n.spooky-card.switching .spooky-ghosts {\n  transform: translateX(140px) scale(1.4);\n}\n.spooky-card.switching .spooky-form-container {\n  opacity: 0;\n}\n.spooky-form-container {\n  flex: 1.2; transition: opacity 0.3s ease;\n}\n.spooky-bubble {\n  position: absolute; top: -40px; background: #fff; border: 2px solid #eef2f3;\n  box-shadow: 0 4px 10px rgba(0,0,0,0.1); padding: 8px 15px; border-radius: 20px;\n  font-weight: bold; color: #2c3e50; font-size: 14px; opacity: 0; transform: translateY(10px);\n  transition: all 0.3s ease; z-index: 11;\n}\n.spooky-bubble::after {\n  content: ''; position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%);\n  border-width: 8px 8px 0; border-style: solid; border-color: #fff transparent transparent transparent;\n}\n.ghost {\n  background: linear-gradient(135deg, #ffffff 0%, #eef2f3 100%); border: 3px solid #2c3e50;\n  border-radius: 60px 60px 15px 15px; position: relative;\n  box-shadow: 0 10px 20px rgba(0,0,0,0.1), inset -5px -10px 15px rgba(0,0,0,0.05);\n  animation: float 3s ease-in-out infinite;\n}\n.big-ghost { width: 90px; height: 110px; }\n.small-ghost { width: 60px; height: 80px; animation-delay: 0.5s; }\n.eyes { position: absolute; top: 35%; left: 0; width: 100%; display: flex; justify-content: center; gap: 14px; }\n.small-ghost .eyes { gap: 10px; }\n.eye {\n  width: 12px; height: 12px; background: #2c3e50;\n  border-radius: 50%; transition: all 0.2s; position: relative;\n}\n.eye::after {\n  content: ''; position: absolute; top: 2px; right: 2px;\n  width: 4px; height: 4px; background: #fff; border-radius: 50%;\n}\n.small-ghost .eye { width: 9px; height: 9px; }\n.small-ghost .eye::after { width: 3px; height: 3px; top: 1px; right: 1px; }\n.cheeks {\n  position: absolute; top: 48%; left: 0; width: 100%; display: flex; justify-content: center; gap: 24px;\n  opacity: 0.6; transition: all 0.2s;\n}\n.small-ghost .cheeks { top: 50%; gap: 16px; }\n.cheek { width: 12px; height: 6px; background: #ff8a8a; border-radius: 50%; }\n.small-ghost .cheek { width: 8px; height: 4px; }\n.mouth {\n  position: absolute; top: 55%; left: 50%; transform: translateX(-50%);\n  width: 8px; height: 10px; background: #2c3e50; border-radius: 10px 10px 20px 20px; transition: all 0.2s;\n}\n.spooky-card.error .spooky-bubble { opacity: 1; transform: translateY(0); color: #e74c3c; border-color: #e74c3c; }\n.spooky-card.error .eye { height: 6px; transform: translateY(4px); border-radius: 10px 10px 0 0; background: #2c3e50; }\n.spooky-card.error .eye::after { display: none; }\n.spooky-card.error .mouth { background: transparent; height: 8px; width: 12px; border: 3px solid #2c3e50; border-bottom: none; border-radius: 10px 10px 0 0; top: 58%; }\n.spooky-card.error .cheeks { opacity: 0.2; transform: translateY(3px); }\n.spooky-card.success .spooky-bubble { opacity: 1; transform: translateY(0); color: #2ecc71; border-color: #2ecc71; }\n.spooky-card.success .eye { background: transparent; border: 3px solid #2c3e50; border-bottom: none; border-radius: 10px 10px 0 0; height: 10px; transform: translateY(-2px); }\n.spooky-card.success .eye::after { display: none; }\n.spooky-card.success .mouth { background: #ff8a8a; height: 14px; width: 16px; border-radius: 0 0 20px 20px; }\n.spooky-card.success .cheeks { opacity: 0.9; transform: translateY(-2px); }\n.spooky-form { display: flex; flex-direction: column; gap: 15px; }\n.spooky-form h2 { margin: 0; color: #333; font-size: 24px; }\n.spooky-input label { display: block; font-size: 13px; color: #666; margin-bottom: 5px; font-weight: bold; }\n.spooky-input input {\n  width: 100%; padding: 10px 15px; border: 2px solid #ddd;\n  border-radius: 8px; font-size: 14px; outline: none; transition: 0.3s; color: #333;\n}\n.spooky-input input:focus { border-color: #7b2cbf; }\n.spooky-btn { background: #7b2cbf; color: white; border: none; padding: 12px; border-radius: 8px; font-size: 15px; font-weight: bold; cursor: pointer; transition: 0.3s; margin-top: 5px; }\n.spooky-btn:hover { background: #5a189a; }\n.spooky-card.error .spooky-btn { background: #e74c3c; animation: shake 0.4s; }\n.spooky-card.success .spooky-btn { background: #2ecc71; }\n.switch-link { font-size: 13px; text-align: center; margin-top: 10px; color: #666; }\n.switch-link a { color: #7b2cbf; text-decoration: none; font-weight: bold; }\n@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }\n@keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }`,
            jsCode: `// Código JS para el Spooky Login y Registro\nconst card = document.querySelector('.spooky-card');\nconst bubble = document.querySelector('.spooky-bubble');\nconst btnLogin = document.getElementById('spooky-submit');\nconst btnRegister = document.getElementById('spooky-register-btn');\nconst passInput = document.getElementById('spooky-password');\nconst formLogin = document.getElementById('form-login');\nconst formRegister = document.getElementById('form-register');\n\nfunction switchForm(targetForm) {\n  card.classList.add('switching');\n  bubble.innerText = '¡Magia! ✨';\n  bubble.style.opacity = '1';\n  setTimeout(() => {\n    if(targetForm === 'register') {\n      formLogin.style.display = 'none';\n      formRegister.style.display = 'flex';\n    } else {\n      formRegister.style.display = 'none';\n      formLogin.style.display = 'flex';\n    }\n    card.classList.remove('switching');\n    setTimeout(() => bubble.style.opacity = '0', 1000);\n  }, 500);\n}\n\ndocument.getElementById('to-register').addEventListener('click', () => switchForm('register'));\ndocument.getElementById('to-login').addEventListener('click', () => switchForm('login'));\n\nbtnLogin.addEventListener('click', () => {\n  card.classList.remove('error', 'success');\n  setTimeout(() => {\n    if (passInput.value === '12345') {\n      card.classList.add('success');\n      bubble.innerText = '¡Yay! Correcto';\n      btnLogin.innerText = 'Login Successful!';\n    } else {\n      card.classList.add('error');\n      bubble.innerText = '¡Incorrecta!';\n      btnLogin.innerText = 'Login Failed';\n    }\n    setTimeout(() => {\n      card.classList.remove('error', 'success');\n      btnLogin.innerText = 'Sign In';\n    }, 3000);\n  }, 50);\n});`
        },
        {
            id: "login-animated-dropdown",
            name: "Hover Expandable Login & Register",
            tags: ["Hover", "Animación", "Neon", "Desplegable", "Doble"],
            preview: `
                <iframe style="width: 100%; height: 550px; border: none; border-radius: 12px; overflow: hidden;" srcdoc='
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
                        <style>
                            @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
                            
                            body { display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background-color: #20242b; font-family: "Poppins", sans-serif; }
                            
                            .box {
                                position: relative;
                                width: 350px;
                                height: 90px;
                                background: #282c34;
                                border-radius: 15px;
                                transition: height 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                                overflow: hidden;
                                box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
                            }
                            
                            /* Al pasar el ratón, la caja se expande (más alta para registro) */
                            .box:hover {
                                height: 480px;
                            }
                            
                            /* Checkbox oculto para la magia del Slide */
                            .toggle-checkbox { display: none; }
                            
                            /* Contenedor que se desliza */
                            .slider {
                                display: flex;
                                width: 200%;
                                height: 100%;
                                transition: transform 0.5s ease-in-out;
                            }
                            
                            /* Si el checkbox está marcado, deslizamos al 50% (el panel de registro) */
                            .toggle-checkbox:checked ~ .slider {
                                transform: translateX(-50%);
                            }
                            
                            .form-panel {
                                width: 50%; /* 50% de 200% = 350px exactos */
                                padding: 0 40px;
                                display: flex;
                                flex-direction: column;
                                box-sizing: border-box;
                            }
                            
                            .form-panel h2 {
                                margin: 0; padding: 25px 0; color: #fff; display: flex;
                                justify-content: center; align-items: center; gap: 15px;
                                font-size: 1.5em; text-transform: uppercase; letter-spacing: 2px;
                                cursor: default;
                            }
                            
                            /* Colores Neón */
                            .neon-pink { color: #ff2d75; filter: drop-shadow(0 0 10px #ff2d75); }
                            .neon-cyan { color: #45f3ff; filter: drop-shadow(0 0 10px #45f3ff); }
                            
                            /* Inputs ocultos inicialmente */
                            .form-panel input {
                                width: 100%; padding: 12px 20px; box-sizing: border-box;
                                background: transparent; border: 1px solid rgba(255, 255, 255, 0.2);
                                border-radius: 8px; color: #fff; font-size: 16px; margin-bottom: 25px;
                                outline: none; opacity: 0; transform: translateY(20px);
                                transition: all 0.5s ease-in-out;
                            }
                            
                            .form-panel input::placeholder { color: rgba(255, 255, 255, 0.5); }
                            
                            /* Focos personalizados por panel */
                            .login-panel input:focus { border-color: #ff2d75; }
                            .register-panel input:focus { border-color: #45f3ff; }
                            
                            /* Botones Submit */
                            .form-panel input[type="submit"] {
                                font-weight: 600; border: none; cursor: pointer;
                                margin-bottom: 20px; font-size: 1.1em;
                            }
                            
                            .btn-login { background: #45f3ff; color: #282c34; box-shadow: 0 0 10px rgba(69, 243, 255, 0.4); }
                            .btn-login:hover { background: #fff; box-shadow: 0 0 10px #fff; }
                            
                            .btn-register { background: #ff2d75; color: #fff; box-shadow: 0 0 10px rgba(255, 45, 117, 0.4); }
                            .btn-register:hover { background: #fff; color: #282c34; box-shadow: 0 0 10px #fff; }
                            
                            /* Enlaces Inferiores */
                            .group {
                                opacity: 0; transform: translateY(20px); transition: all 0.5s ease-in-out;
                                display: flex; justify-content: space-between; padding: 0 5px;
                            }
                            .group.end { justify-content: flex-end; }
                            
                            .group a, .switch-btn {
                                color: #fff; text-decoration: none; font-size: 0.9em;
                                transition: 0.3s; cursor: pointer;
                            }
                            .group a:hover { color: #45f3ff; }
                            
                            .switch-btn.pink { color: #ff2d75; font-weight: bold; }
                            .switch-btn.pink:hover { color: #fff; filter: drop-shadow(0 0 10px #fff); }
                            
                            .switch-btn.cyan { color: #45f3ff; font-weight: bold; }
                            .switch-btn.cyan:hover { color: #fff; filter: drop-shadow(0 0 10px #fff); }
                            
                            /* ANIMACIONES EN CASCADA AL HACER HOVER EN LA CAJA */
                            .box:hover .form-panel input,
                            .box:hover .group {
                                opacity: 1; transform: translateY(0);
                            }
                            
                            /* Delays para Login */
                            .box:hover .login-panel input:nth-child(2) { transition-delay: 0.1s; }
                            .box:hover .login-panel input:nth-child(3) { transition-delay: 0.2s; }
                            .box:hover .login-panel input:nth-child(4) { transition-delay: 0.3s; }
                            .box:hover .login-panel .group { transition-delay: 0.4s; }
                            
                            /* Delays para Register (Tiene un input más) */
                            .box:hover .register-panel input:nth-child(2) { transition-delay: 0.1s; }
                            .box:hover .register-panel input:nth-child(3) { transition-delay: 0.2s; }
                            .box:hover .register-panel input:nth-child(4) { transition-delay: 0.3s; }
                            .box:hover .register-panel input:nth-child(5) { transition-delay: 0.4s; }
                            .box:hover .register-panel .group { transition-delay: 0.5s; }
                        </style>
                    </head>
                    <body>
                        <div class="box">
                            <input type="checkbox" id="toggle-form" class="toggle-checkbox">
                            <div class="slider">
                                
                                <div class="form-panel login-panel">
                                    <h2>
                                        <i class="fa-solid fa-right-to-bracket"></i>
                                        Login
                                        <i class="fa-solid fa-heart neon-pink"></i>
                                    </h2>
                                    <input type="text" placeholder="Username">
                                    <input type="password" placeholder="Password">
                                    <input type="submit" value="Sign in" class="btn-login">
                                    <div class="group">
                                        <a href="#">Forgot Password</a>
                                        <label for="toggle-form" class="switch-btn pink">Sign up</label>
                                    </div>
                                </div>
                                
                                <div class="form-panel register-panel">
                                    <h2>
                                        <i class="fa-solid fa-user-plus"></i>
                                        Register
                                        <i class="fa-solid fa-star neon-cyan"></i>
                                    </h2>
                                    <input type="text" placeholder="Username">
                                    <input type="email" placeholder="Email Address">
                                    <input type="password" placeholder="Password">
                                    <input type="submit" value="Sign up" class="btn-register">
                                    <div class="group end">
                                        <label for="toggle-form" class="switch-btn cyan">Back to Login</label>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </body>
                    </html>
                '></iframe>
            `,
            htmlCode: `<div class="box">\n  <input type="checkbox" id="toggle-form" class="toggle-checkbox">\n  <div class="slider">\n    \n    \n    <div class="form-panel login-panel">\n      <h2>\n        <i class="fa-solid fa-right-to-bracket"></i> Login\n        <i class="fa-solid fa-heart neon-pink"></i>\n      </h2>\n      <input type="text" placeholder="Username">\n      <input type="password" placeholder="Password">\n      <input type="submit" value="Sign in" class="btn-login">\n      <div class="group">\n        <a href="#">Forgot Password</a>\n        <label for="toggle-form" class="switch-btn pink">Sign up</label>\n      </div>\n    </div>\n    \n    \n    <div class="form-panel register-panel">\n      <h2>\n        <i class="fa-solid fa-user-plus"></i> Register\n        <i class="fa-solid fa-star neon-cyan"></i>\n      </h2>\n      <input type="text" placeholder="Username">\n      <input type="email" placeholder="Email Address">\n      <input type="password" placeholder="Password">\n      <input type="submit" value="Sign up" class="btn-register">\n      <div class="group end">\n        <label for="toggle-form" class="switch-btn cyan">Back to Login</label>\n      </div>\n    </div>\n    \n  </div>\n</div>\n\n\n`,
            cssCode: `.box {\n  position: relative;\n  width: 350px;\n  height: 90px;\n  background: #282c34;\n  border-radius: 15px;\n  transition: height 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  overflow: hidden;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);\n  font-family: "Poppins", sans-serif;\n}\n.box:hover {\n  height: 480px;\n}\n.toggle-checkbox {\n  display: none;\n}\n.slider {\n  display: flex;\n  width: 200%;\n  height: 100%;\n  transition: transform 0.5s ease-in-out;\n}\n.toggle-checkbox:checked ~ .slider {\n  transform: translateX(-50%);\n}\n.form-panel {\n  width: 50%;\n  padding: 0 40px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n}\n.form-panel h2 {\n  margin: 0; padding: 25px 0; color: #fff; display: flex;\n  justify-content: center; align-items: center; gap: 15px;\n  font-size: 1.5em; text-transform: uppercase; letter-spacing: 2px;\n  cursor: default;\n}\n.neon-pink { color: #ff2d75; filter: drop-shadow(0 0 10px #ff2d75); }\n.neon-cyan { color: #45f3ff; filter: drop-shadow(0 0 10px #45f3ff); }\n.form-panel input {\n  width: 100%; padding: 12px 20px; box-sizing: border-box;\n  background: transparent; border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 8px; color: #fff; font-size: 16px; margin-bottom: 25px;\n  outline: none; opacity: 0; transform: translateY(20px);\n  transition: all 0.5s ease-in-out;\n}\n.form-panel input::placeholder { color: rgba(255, 255, 255, 0.5); }\n.login-panel input:focus { border-color: #ff2d75; }\n.register-panel input:focus { border-color: #45f3ff; }\n.form-panel input[type="submit"] {\n  font-weight: 600; border: none; cursor: pointer;\n  margin-bottom: 20px; font-size: 1.1em;\n}\n.btn-login { background: #45f3ff; color: #282c34; box-shadow: 0 0 10px rgba(69, 243, 255, 0.4); }\n.btn-login:hover { background: #fff; box-shadow: 0 0 10px #fff; }\n.btn-register { background: #ff2d75; color: #fff; box-shadow: 0 0 10px rgba(255, 45, 117, 0.4); }\n.btn-register:hover { background: #fff; color: #282c34; box-shadow: 0 0 10px #fff; }\n.group {\n  opacity: 0; transform: translateY(20px); transition: all 0.5s ease-in-out;\n  display: flex; justify-content: space-between; padding: 0 5px;\n}\n.group.end { justify-content: flex-end; }\n.group a, .switch-btn {\n  color: #fff; text-decoration: none; font-size: 0.9em;\n  transition: 0.3s; cursor: pointer;\n}\n.group a:hover { color: #45f3ff; }\n.switch-btn.pink { color: #ff2d75; font-weight: bold; }\n.switch-btn.pink:hover { color: #fff; filter: drop-shadow(0 0 10px #fff); }\n.switch-btn.cyan { color: #45f3ff; font-weight: bold; }\n.switch-btn.cyan:hover { color: #fff; filter: drop-shadow(0 0 10px #fff); }\n.box:hover .form-panel input,\n.box:hover .group {\n  opacity: 1; transform: translateY(0);\n}\n.box:hover .login-panel input:nth-child(2) { transition-delay: 0.1s; }\n.box:hover .login-panel input:nth-child(3) { transition-delay: 0.2s; }\n.box:hover .login-panel input:nth-child(4) { transition-delay: 0.3s; }\n.box:hover .login-panel .group { transition-delay: 0.4s; }\n.box:hover .register-panel input:nth-child(2) { transition-delay: 0.1s; }\n.box:hover .register-panel input:nth-child(3) { transition-delay: 0.2s; }\n.box:hover .register-panel input:nth-child(4) { transition-delay: 0.3s; }\n.box:hover .register-panel input:nth-child(5) { transition-delay: 0.4s; }\n.box:hover .register-panel .group { transition-delay: 0.5s; }`,
            jsCode: ``
        }
    ]