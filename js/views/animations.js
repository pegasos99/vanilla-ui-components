import { components } from "../data/components.js";

export default {
    render: () => {
        const allTags = new Set(["Todas las categorías"]);
        components.animaciones.forEach(a => a.tags.forEach(tag => allTags.add(tag)));
        
        const dropdownItemsHTML = Array.from(allTags).map(tag => 
            `<div class="dropdown-item ${tag === 'Todas las categorías' ? 'active' : ''}" data-value="${tag}">${tag}</div>`
        ).join('');

        const tarjetasAnimacionesHTML = components.animaciones.map(anim => `
            <div class="component-card-layout filter-item" data-id="${anim.id}" data-tags="${anim.tags.join(',').toLowerCase()}">
                <div class="component-card-header">
                    <h3>${anim.name}</h3>
                </div>
                <div class="component-preview-card" style="padding: 0; border-radius: 0; border:none;">
                    ${anim.preview}
                </div>
                <div class="export-actions-panel">
                    <button class="action-copy-btn" data-type="html" data-code="${escapeAttribute(anim.htmlCode)}">
                        <span class="icon">&lt;/&gt;</span> Copiar HTML
                    </button>
                    <button class="action-copy-btn" data-type="css" data-code="${escapeAttribute(anim.cssCode)}">
                        <span class="icon">#</span> Copiar CSS
                    </button>
                </div>
            </div>
        `).join('');

        return `
            <div class="components-container">
                <button id="back-btn" class="back-btn">← Volver</button>
                <h2>Galería de Animaciones</h2>
                <p class="subtitle">Efectos visuales y transiciones mágicas en puro CSS.</p>
                
                <div class="modern-filters-bar">
                    <div class="search-box">
                        <i class="fa-solid fa-magnifying-glass search-icon"></i>
                        <input type="text" id="component-search" placeholder="Buscar animaciones (ej. 'fluido', 'loader')...">
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
                    ${tarjetasAnimacionesHTML}
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

        const fuse = new window.Fuse(components.animaciones, {
            keys: ['name', 'tags'],
            threshold: 0.4,
            ignoreLocation: true
        });

        const filterCards = () => {
            let searchedIds = null;
            if (currentSearch.trim() !== '') {
                const results = fuse.search(currentSearch);
                searchedIds = results.map(result => result.item.id);
            }

            items.forEach(item => {
                const itemId = item.getAttribute('data-id');
                const itemTags = item.getAttribute('data-tags');
                
                const matchesSearch = searchedIds === null || searchedIds.includes(itemId);
                const matchesCategory = currentCategory === 'Todas las categorías' || itemTags.includes(currentCategory.toLowerCase());

                if (matchesSearch && matchesCategory) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        };

        if(searchInput) searchInput.addEventListener('input', (e) => { currentSearch = e.target.value; filterCards(); });
        if(dropdownHeader) dropdownHeader.addEventListener('click', () => dropdown.classList.toggle('open'));
        if(dropdownItems) dropdownItems.forEach(item => {
            item.addEventListener('click', () => {
                dropdownItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                currentCategory = item.getAttribute('data-value');
                selectedText.textContent = currentCategory;
                dropdown.classList.remove('open');
                filterCards();
            });
        });

        document.addEventListener('click', (e) => { if (dropdown && !dropdown.contains(e.target)) dropdown.classList.remove('open'); });

        const copyButtons = document.querySelectorAll(".action-copy-btn");
        copyButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const codeText = btn.getAttribute("data-code");
                const type = btn.getAttribute("data-type").toUpperCase();
                navigator.clipboard.writeText(codeText).then(() => {
                    const originalHTML = btn.innerHTML;
                    btn.innerHTML = `¡${type} Copiado! ✓`;
                    btn.classList.add("copied-success");
                    setTimeout(() => { btn.innerHTML = originalHTML; btn.classList.remove("copied-success"); }, 2000);
                });
            });
        });
    }
};

function escapeAttribute(str) { return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }