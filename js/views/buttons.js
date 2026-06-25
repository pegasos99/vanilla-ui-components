import { components } from "../data/components.js";

export default {
    render: () => {
        // Extraemos todas las etiquetas únicas
        const allTags = new Set(["Todas las categorías"]);
        components.botones.forEach(b => b.tags.forEach(tag => allTags.add(tag)));
        
        const dropdownItemsHTML = Array.from(allTags).map(tag => 
            `<div class="dropdown-item ${tag === 'Todas las categorías' ? 'active' : ''}" data-value="${tag}">${tag}</div>`
        ).join('');

        // Añadimos 'data-id' a las tarjetas para que Fuse.js sepa exactamente cuál mostrar
        const tarjetasBotonesHTML = components.botones.map(boton => `
            <div class="component-card-layout filter-item" data-id="${boton.id}" data-tags="${boton.tags.join(',').toLowerCase()}">
                <div class="component-card-header">
                    <h3>${boton.name}</h3>
                </div>
                <div class="component-preview-card">
                    ${boton.preview}
                </div>
                <div class="export-actions-panel">
                    <button class="action-copy-btn" data-type="html" data-code="${escapeAttribute(boton.htmlCode)}">
                        <span class="icon">&lt;/&gt;</span> Copiar HTML
                    </button>
                    <button class="action-copy-btn" data-type="css" data-code="${escapeAttribute(boton.cssCode)}">
                        <span class="icon">#</span> Copiar CSS
                    </button>
                </div>
            </div>
        `).join('');

        return `
            <div class="components-container">
                <button id="back-btn" class="back-btn">← Volver</button>
                <h2>Galería de Botones</h2>
                <p class="subtitle">Explora y exporta los códigos de tu biblioteca personal.</p>
                
                <div class="modern-filters-bar">
                    <div class="search-box">
                        <i class="fa-solid fa-magnifying-glass search-icon"></i>
                        <input type="text" id="component-search" placeholder="Buscar por nombre, tipo o estilo (ej. 'liqid')...">
                    </div>

                    <div class="custom-dropdown" id="category-dropdown">
                        <div class="dropdown-header">
                            <span id="selected-category-text">Todas las categorías</span>
                            <i class="fa-solid fa-chevron-down arrow-icon"></i>
                        </div>
                        <div class="dropdown-list">
                            ${dropdownItemsHTML}
                        </div>
                    </div>
                </div>
                
                <div class="components-list" id="components-list-container">
                    ${tarjetasBotonesHTML}
                </div>
            </div>
        `;
    },
    
    init: () => {
        const searchInput = document.getElementById('component-search');
        const dropdown = document.getElementById('category-dropdown');
        const dropdownHeader = dropdown.querySelector('.dropdown-header');
        const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
        const selectedText = document.getElementById('selected-category-text');
        const items = document.querySelectorAll('.filter-item');

        let currentCategory = 'Todas las categorías';
        let currentSearch = '';

        // --- MAGIA DE FUSE.JS ---
        // Configuramos el "cerebro" de la búsqueda
        const fuse = new window.Fuse(components.botones, {
            keys: ['name', 'tags'], // Va a buscar coincidencias en el nombre y en las etiquetas
            threshold: 0.4, // Nivel de tolerancia a errores (0.0 es exacto, 1.0 perdona todo)
            ignoreLocation: true // Permite encontrar la palabra sin importar en qué parte del texto esté
        });

        const filterCards = () => {
            let searchedIds = null; // Si es null, mostramos todo. Si es un array, filtramos por IDs.

            // Si hay algo escrito, le preguntamos a Fuse.js qué componentes coinciden
            if (currentSearch.trim() !== '') {
                const results = fuse.search(currentSearch);
                // Extraemos solo los IDs de los resultados encontrados
                searchedIds = results.map(result => result.item.id);
            }

            items.forEach(item => {
                const itemId = item.getAttribute('data-id');
                const itemTags = item.getAttribute('data-tags');
                
                // 1. ¿Pasó el filtro de Fuse.js?
                const matchesSearch = searchedIds === null || searchedIds.includes(itemId);
                // 2. ¿Pasó el filtro del dropdown de categorías?
                const matchesCategory = currentCategory === 'Todas las categorías' || itemTags.includes(currentCategory.toLowerCase());

                if (matchesSearch && matchesCategory) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        };

        // Eventos del buscador
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value; // Ya no usamos toLowerCase(), Fuse.js lo hace solo
            filterCards();
        });

        // Eventos del Dropdown
        dropdownHeader.addEventListener('click', () => dropdown.classList.toggle('open'));

        dropdownItems.forEach(item => {
            item.addEventListener('click', () => {
                dropdownItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                currentCategory = item.getAttribute('data-value');
                selectedText.textContent = currentCategory;
                dropdown.classList.remove('open');
                filterCards();
            });
        });

        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) dropdown.classList.remove('open');
        });

        // Lógica de copiado
        const copyButtons = document.querySelectorAll(".action-copy-btn");
        copyButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const codeText = btn.getAttribute("data-code");
                const type = btn.getAttribute("data-type").toUpperCase();
                navigator.clipboard.writeText(codeText).then(() => {
                    const originalHTML = btn.innerHTML;
                    btn.innerHTML = `¡${type} Copiado! ✓`;
                    btn.classList.add("copied-success");
                    setTimeout(() => {
                        btn.innerHTML = originalHTML;
                        btn.classList.remove("copied-success");
                    }, 2000);
                });
            });
        });
    }
};

function escapeAttribute(str) {
    return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}   