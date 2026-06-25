import buttons from './views/buttons.js';
import login from './views/login.js';
import animaciones from './views/animations.js';
import sliders from './views/sliders.js';
import toggles from './views/toggles.js';
import sidebars from './views/sidebars.js';
import clock from './views/clock.js'; 
import navbars from './views/navbars.js';

export function navigate(route) {

    const app = document.getElementById('app');
    const carousel = document.querySelector('.carousel-container');

    // Actualiza el contexto para la IA
    window.currentContext = route; 

    carousel.style.display = 'none';
    app.style.display = 'block';

    // Normalizamos la ruta a minúsculas para evitar errores
    const normalizedRoute = route.toLowerCase();

    switch(normalizedRoute) {

        case 'botones':
            app.innerHTML = buttons.render();
            buttons.init();
            const backBtnBotones = document.getElementById('back-btn');
            if(backBtnBotones) {
                backBtnBotones.addEventListener('click', volverInicio);
            }
            break;

        case 'login':
            app.innerHTML = login.render();
            login.init();
            const backBtnLogin = document.getElementById('back-btn');
            if(backBtnLogin) {
                backBtnLogin.addEventListener('click', volverInicio);
            }
            break;

        case 'animaciones':
            app.innerHTML = animaciones.render();
            animaciones.init();
            const backBtnAnim = document.getElementById('back-btn');
            if(backBtnAnim) {
                backBtnAnim.addEventListener('click', volverInicio);
            }
            break;

        case 'sliders':
            app.innerHTML = sliders.render();
            sliders.init();
            const backBtnSliders = document.getElementById('back-btn');
            if(backBtnSliders) {
                backBtnSliders.addEventListener('click', volverInicio);
            }
            break;
        
        case 'toggles':
            app.innerHTML = toggles.render();
            toggles.init();
            const backBtnToggles = document.getElementById('back-btn');
            if(backBtnToggles) {
                backBtnToggles.addEventListener('click', volverInicio);
            }
            break;

        case 'sidebars':
            app.innerHTML = sidebars.render();
            sidebars.init();
            const backBtnSidebars = document.getElementById('back-btn');
            if(backBtnSidebars) {
                backBtnSidebars.addEventListener('click', volverInicio);
            }
            break;

        case 'relojes':
            app.innerHTML = clock.render();
            
            const backBtnClock = document.getElementById('back-btn');
            if(backBtnClock) {
                backBtnClock.addEventListener('click', volverInicio);
            }
            
            try {
                if (clock.init) clock.init();
            } catch (error) {
                console.warn("Error cargando init de relojes:", error);
            }
            break;

        // <--- AQUÍ ESTÁ EL NUEVO BLOQUE DE NAVBARS --->
        case 'navbars':
            app.innerHTML = navbars.render();
            
            // 1. Activa el botón de volver primero
            const backBtnNavbars = document.getElementById('back-btn');
            if(backBtnNavbars) {
                backBtnNavbars.addEventListener('click', volverInicio);
            }
            
            // 2. Ejecuta la lógica
            try {
                if (navbars.init) navbars.init();
            } catch (error) {
                console.warn("Error cargando init de navbars:", error);
            }
            break;

        default:
            app.innerHTML = `
                <div class="page">
                    <button id="back-btn" class="back-btn" style="position:relative; top:0; left:0;">
                        ← Volver
                    </button>

                    <h1>${route.toUpperCase()}</h1>

                    <p>En construcción...</p>
                </div>
            `;

            const defaultBackBtn = document.getElementById('back-btn');
            if(defaultBackBtn) {
                defaultBackBtn.addEventListener('click', volverInicio);
            }
    }
}

export function volverInicio() {
    const carousel = document.querySelector('.carousel-container');
    const app = document.getElementById('app');

    // Le avisa a la IA que volviste al inicio
    window.currentContext = 'home'; 

    app.style.display = 'none';
    carousel.style.display = 'flex';
    app.innerHTML = '';
}