import { navigate } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const titleElement = document.getElementById('category-title');
    let currentIndex = Math.floor(cards.length / 2);

    const MAX_TILT_ANGLE = 15;
    
    // Solo usaremos un candado muy corto para la rueda del ratón
    let isWheelThrottled = false; 
    const WHEEL_COOLDOWN = 150; 

    function updateCarousel() {
        const totalCards = cards.length;

        cards.forEach((card, index) => {
            let offset = index - currentIndex;
            
            if (offset > totalCards / 2) {
                offset -= totalCards;
            } else if (offset < -totalCards / 2) {
                offset += totalCards;
            }
            
            // Hacemos que la transición sea rápida y fluida
            card.style.transition = 'transform 0.3s ease-out, opacity 0.3s';
            
            const translateX = offset * 140;
            const scale = offset === 0 ? 1 : Math.max(0.6, 1 - Math.abs(offset) * 0.15);
            
            const isVisible = Math.abs(offset) <= 2; 
            const opacity = offset === 0 ? 1 : (isVisible ? Math.max(0.3, 1 - Math.abs(offset) * 0.2) : 0);
            
            const zIndex = 100 - Math.abs(offset);
            
            card.style.transform = `translateX(${translateX}px) scale(${scale})`;
            card.style.opacity = opacity;
            card.style.zIndex = zIndex;

            if (offset === 0) {
                card.classList.add('active');
                titleElement.textContent = card.getAttribute('data-name');
                activateTilt(card);
            } else {
                card.classList.remove('active');
                deactivateTilt(card);
            }
        });
    }

    // --- NAVEGACIÓN LIBRE SIN INPUT LAG ---
    function navegar(direccion) {
        const totalCards = cards.length;
        if (direccion === 'derecha') {
            currentIndex = (currentIndex + 1) % totalCards;
        } else if (direccion === 'izquierda') {
            currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        }
        updateCarousel();
    }
    function entrarCategoria() {

    const activeCard = document.querySelector('.card.active');

    //  document.body.classList.add('entering');
    activeCard.classList.add('entering');

    setTimeout(() => {

    const category =
        activeCard.getAttribute('data-name').toLowerCase();
    navigate(category);
    activeCard.classList.remove('entering');
    document.body.classList.remove('entering');
}, 800);
}

    // --- EFECTO TILT 3D ---
    function handleTiltMove(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const normX = (mouseX - centerX) / centerX;
        const normY = (mouseY - centerY) / centerY;

        const tiltY = (normX * MAX_TILT_ANGLE).toFixed(2);
        const tiltX = (normY * -MAX_TILT_ANGLE).toFixed(2);

        card.style.setProperty('--tilt-x', `${tiltX}deg`);
        card.style.setProperty('--tilt-y', `${tiltY}deg`);
    }

    function resetTilt(e) {
        e.currentTarget.style.setProperty('--tilt-x', `0deg`);
        e.currentTarget.style.setProperty('--tilt-y', `0deg`);
    }

    function activateTilt(card) {
        card.addEventListener('mousemove', handleTiltMove);
        card.addEventListener('mouseleave', resetTilt);
    }

    function deactivateTilt(card) {
        card.removeEventListener('mousemove', handleTiltMove);
        card.removeEventListener('mouseleave', resetTilt);
        card.style.setProperty('--tilt-x', `0deg`);
        card.style.setProperty('--tilt-y', `0deg`);
    }

    // Inicialización
    updateCarousel();

    // 1. Clic en Tarjetas (Respuesta inmediata)
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (currentIndex === index) {
                entrarCategoria();
            } else {
                currentIndex = index;
                updateCarousel();
            }
        });
    });

    // 2. Teclado (Respuesta inmediata al spamear teclas)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            navegar('derecha');
        } else if (e.key === 'ArrowLeft') {
            navegar('izquierda');
        } else if (e.key.toLowerCase() === 'z') {
    entrarCategoria();
}
    });

    // 3. Rueda del ratón (Mantiene un candado mínimo de 150ms)
    document.addEventListener('wheel', (e) => {
        if (isWheelThrottled) return;
        
        isWheelThrottled = true;
        if (e.deltaY > 0) {
            navegar('derecha');
        } else if (e.deltaY < 0) {
            navegar('izquierda');
        }
    });
});



