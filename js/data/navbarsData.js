export const navbarsData = [
    {
        id: "nav-magic-indicator",
        name: "Magic Indicator Navbar",
        tags: ["animado", "interactivo", "moderno", "iconos"],
        preview: `
            <iframe style="width: 100%; height: 350px; border: none; border-radius: 12px; background: #1a1a1c;" srcdoc='
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
                    <style>
                        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
                        
                        * { margin: 0; padding: 0; box-sizing: border-box; }
                        body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #1a1a1c; font-family: "Poppins", sans-serif; }
                        .navigation { position: relative; width: 400px; height: 70px; background: #2f2f2f; display: flex; justify-content: center; align-items: center; border-radius: 10px; }
                        .navigation ul { display: flex; width: 350px; }
                        .navigation ul li { position: relative; list-style: none; width: 70px; height: 70px; z-index: 1; }
                        .navigation ul li a { position: relative; display: flex; justify-content: center; align-items: center; flex-direction: column; width: 100%; text-align: center; font-weight: 500; text-decoration: none; }
                        .navigation ul li a .icon { position: relative; display: block; line-height: 75px; font-size: 1.5em; text-align: center; transition: 0.5s; color: rgba(255, 255, 255, 0.5); }
                        .navigation ul li.active a .icon { transform: translateY(-32px); color: #29fd53; }
                        .navigation ul li a .text { position: absolute; color: #29fd53; font-weight: 400; font-size: 0.75em; letter-spacing: 0.05em; transition: 0.5s; opacity: 0; transform: translateY(20px); text-transform: uppercase; }
                        .navigation ul li.active a .text { opacity: 1; transform: translateY(10px); }
                        .indicator { position: absolute; top: -50%; width: 70px; height: 70px; background: #29fd53; border-radius: 50%; border: 6px solid #1a1a1c; transition: 0.5s; }
                        .indicator::before { content: ""; position: absolute; top: 50%; left: -22px; width: 20px; height: 20px; background: transparent; border-top-right-radius: 20px; box-shadow: 1px -10px 0 0 #1a1a1c; }
                        .indicator::after { content: ""; position: absolute; top: 50%; right: -22px; width: 20px; height: 20px; background: transparent; border-top-left-radius: 20px; box-shadow: -1px -10px 0 0 #1a1a1c; }
                    </style>
                </head>
                <body>
                    <div class="navigation">
                        <ul>
                            <li class="list active"><a href="#"><span class="icon"><i class="fa-solid fa-house"></i></span><span class="text">Home</span></a></li>
                            <li class="list"><a href="#"><span class="icon"><i class="fa-solid fa-user"></i></span><span class="text">Profile</span></a></li>
                            <li class="list"><a href="#"><span class="icon"><i class="fa-solid fa-comment-dots"></i></span><span class="text">Messages</span></a></li>
                            <li class="list"><a href="#"><span class="icon"><i class="fa-solid fa-camera"></i></span><span class="text">Photos</span></a></li>
                            <li class="list"><a href="#"><span class="icon"><i class="fa-solid fa-gear"></i></span><span class="text">Settings</span></a></li>
                            <div class="indicator"></div>
                        </ul>
                    </div>

                    <script>
                        const list = document.querySelectorAll(".list");
                        const indicator = document.querySelector(".indicator");

                        function activeLink(e) {
                            e.preventDefault(); // <-- CORRECCIÓN AQUÍ
                            list.forEach((item) => item.classList.remove("active"));
                            this.classList.add("active");
                            const index = Array.from(list).indexOf(this);
                            indicator.style.transform = "translateX(" + (index * 70) + "px)";
                        }

                        list.forEach((item) => item.addEventListener("click", activeLink));
                    </script>
                </body>
                </html>
            '></iframe>
        `,
        htmlCode: `
<div class="navigation">
    <ul>
        <li class="list active">
            <a href="#">
                <span class="icon"><i class="fa-solid fa-house"></i></span>
                <span class="text">Home</span>
            </a>
        </li>
        <li class="list">
            <a href="#">
                <span class="icon"><i class="fa-solid fa-user"></i></span>
                <span class="text">Profile</span>
            </a>
        </li>
        <li class="list">
            <a href="#">
                <span class="icon"><i class="fa-solid fa-comment-dots"></i></span>
                <span class="text">Messages</span>
            </a>
        </li>
        <li class="list">
            <a href="#">
                <span class="icon"><i class="fa-solid fa-camera"></i></span>
                <span class="text">Photos</span>
            </a>
        </li>
        <li class="list">
            <a href="#">
                <span class="icon"><i class="fa-solid fa-gear"></i></span>
                <span class="text">Settings</span>
            </a>
        </li>
        <div class="indicator"></div>
    </ul>
</div>
        `,
        cssCode: `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #1a1a1c;
    font-family: 'Poppins', sans-serif;
}

.navigation {
    position: relative;
    width: 400px;
    height: 70px;
    background: #2f2f2f;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

.navigation ul {
    display: flex;
    width: 350px;
}

.navigation ul li {
    position: relative;
    list-style: none;
    width: 70px;
    height: 70px;
    z-index: 1;
}

.navigation ul li a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-weight: 500;
    text-decoration: none;
}

.navigation ul li a .icon {
    position: relative;
    display: block;
    line-height: 75px;
    font-size: 1.5em;
    text-align: center;
    transition: 0.5s;
    color: rgba(255, 255, 255, 0.5);
}

.navigation ul li.active a .icon {
    transform: translateY(-32px);
    color: #29fd53;
}

.navigation ul li a .text {
    position: absolute;
    color: #29fd53;
    font-weight: 400;
    font-size: 0.75em;
    letter-spacing: 0.05em;
    transition: 0.5s;
    opacity: 0;
    transform: translateY(20px);
    text-transform: uppercase;
}

.navigation ul li.active a .text {
    opacity: 1;
    transform: translateY(10px);
}

.indicator {
    position: absolute;
    top: -50%;
    width: 70px;
    height: 70px;
    background: #29fd53;
    border-radius: 50%;
    border: 6px solid #1a1a1c; 
    transition: 0.5s;
}

.indicator::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-right-radius: 20px;
    box-shadow: 1px -10px 0 0 #1a1a1c;
}

.indicator::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-left-radius: 20px;
    box-shadow: -1px -10px 0 0 #1a1a1c;
}
        `,
        jsCode: `
const list = document.querySelectorAll('.list');
const indicator = document.querySelector('.indicator');

function activeLink(e) {
    e.preventDefault(); // Evita que el enlace recargue o mueva la página
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
    
    // Obtener el índice del elemento clickeado y mover el indicador
    const index = Array.from(list).indexOf(this);
    indicator.style.transform = \`translateX(\${index * 70}px)\`;
}

list.forEach((item) => item.addEventListener('click', activeLink));
        `
    }
];