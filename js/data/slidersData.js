export const slidersData = [
        {
            id: "slider-gaming-dualshock",
            name: "Interactive Gaming Product Slider",
            tags: ["Slider", "Carrusel", "Gaming", "Interactivo", "Productos"],
            preview: `
                <iframe style="width: 100%; height: 600px; border: none; border-radius: 12px; overflow: hidden;" srcdoc="
                    <!DOCTYPE html>
                    <html lang='en'>
                    <head>
                        <meta charset='UTF-8'>
                        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
                            * { font-family: 'Montserrat', sans-serif; margin: 0; padding: 0; box-sizing: border-box; }
                            :root { --all-transition: 1s ease; --opacity-transition: .3s ease; }
                            body { background: #3674be; min-height: 100vh; overflow: hidden; transition: var(--all-transition); position: relative; }
                            body::before { content: ''; position: absolute; left: 3.5%; top: 50%; transform: translateY(-50%); width: 700px; height: 700px; background: rgba(255, 255, 255, .8); border-radius: 50%; filter: blur(200px); }
                            .carousel { position: relative; width: 100%; height: 100vh; }
                            
                            /* AJUSTE CLAVE 1: Rueda movida a -1050px para alejar el control del texto */
                            .img-box { left: -1050px; position: absolute; top: 50%; transform: translateY(-50%); width: 1300px; height: 1300px; }
                            
                            .img-box .img-list { height: inherit; transform: rotate(-120deg); }
                            .img-list .img-slider { height: inherit; transition: var(--all-transition); }
                            .img-slider .img-item { position: absolute; left: 0; top: 50%; transform: translateY(-50%) rotate(calc(-360deg / 6 * var(--i))) scale(.8); transform-origin: 650px; transition: var(--all-transition); }
                            .img-slider .img-item.active { transform: translateY(-50%) rotate(calc(-360deg / 6 * var(--i))) scale(0.9) translateX(-65%); z-index: 1; }
                            .img-item .item { display: flex; justify-content: center; align-items: center; transition: var(--all-transition); }
                            .img-item .item img { transform: rotate(calc(360deg / 6 * var(--i))) rotate(120deg); filter: blur(8px); transition: var(--all-transition); width: 250px; }
                            .img-item.active .item img { filter: blur(0); }
                            
                            /* AJUSTE CLAVE 2: Caja de info un poco más angosta para respirar mejor */
                            .info-box { position: absolute; right: 0; top: 50%; transform: translateY(-50%); width: 450px; height: 500px; }
                            .info-box .info-item { position: absolute; width: 100%; height: 100%; border-radius: 40px 0 0 40px; padding: 0 40px; color: #fff; display: flex; flex-direction: column; justify-content: center; transform: translateX(100%); opacity: 0; box-shadow: none; transition: transform var(--all-transition), opacity var(--opacity-transition), box-shadow var(--all-transition); }
                            .info-box .info-item.active { transform: translateX(0); opacity: 1; box-shadow: 0 0 30px rgba(0, 0, 0, .2); }
                            
                            .info-item h2 { font-size: 30px; }
                            .info-item h2:nth-child(2) { margin: 20px 0; }
                            .colors span { display: inline-block; width: 30px; height: 30px; border-radius: 50%; margin-right: 10px; }
                            .colors span.active { outline: 3px solid #fff; }
                            .colors span:nth-child(1) { background: #3674be; }
                            .colors span:nth-child(2) { background: #d26181; }
                            .colors span:nth-child(3) { background: #ceb13d; }
                            .colors span:nth-child(4) { background: #c6414c; }
                            .colors span:nth-child(5) { background: #171f2b; }
                            .colors span:nth-child(6) { background: #50aa61; }
                            .info-item p { font-size: 15px; margin: 20px 0 25px; line-height: 1.5; }
                            .info-item .btn { display: inline-flex; justify-content: center; align-items: center; width: 180px; height: 47px; background: #fff; border-radius: 40px; box-shadow: 0 0 10px rgba(0, 0, 0, .1); font-size: 16px; color: #333; text-decoration: none; font-weight: 600; }
                            
                            /* AJUSTE CLAVE 3: Flechas alineadas debajo del control */
                            .navigation { position: absolute; left: 10%; bottom: 7%; width: 150px; display: flex; justify-content: space-between; z-index: 100; }
                            .navigation span { display: inline-flex; justify-content: center; align-items: center; width: 50px; height: 50px; background: rgba(255, 255, 255, .2); border-radius: 50%; cursor: pointer; font-size: 30px; color: #fff; transition: background 0.3s; }
                            .navigation span:hover { background: rgba(255, 255, 255, .4); }
                        </style>
                    </head>
                    <body>
                        <div class='carousel'>
                            <div class='img-box'>
                                <div class='img-list'>
                                    <div class='img-slider'>
                                        <div class='img-item active' style='--i:1;'><div class='item'><img src='../../assets/images/img1.png'></div></div>
                                        <div class='img-item' style='--i:2;'><div class='item'><img src='../../assets/images/img2.png'></div></div>
                                        <div class='img-item' style='--i:3;'><div class='item'><img src='../../assets/images/img3.png'></div></div>
                                        <div class='img-item' style='--i:4;'><div class='item'><img src='../../assets/images/img4.png'></div></div>
                                        <div class='img-item' style='--i:5;'><div class='item'><img src='../../assets/images/img5.png'></div></div>
                                        <div class='img-item' style='--i:6;'><div class='item'><img src='../../assets/images/img6.png'></div></div>
                                    </div>
                                </div>
                            </div>
                            <div class='info-box'>
                                <div class='info-item active'><h2>Bluish Dragon DualShock 4 Wireless Controller</h2><h2>$59.99</h2><div class='colors'><span class='active'></span><span></span><span></span><span></span><span></span><span></span></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi ex minus voluptatum consequuntur molestiae cum sunt labore nostrum?</p><a href='#' class='btn'>Buy Now</a></div>
                                <div class='info-item'><h2>Rosa Dragon DualShock 4 Wireless Controller</h2><h2>$59.99</h2><div class='colors'><span></span><span class='active'></span><span></span><span></span><span></span><span></span></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi ex minus voluptatum consequuntur molestiae cum sunt labore nostrum?</p><a href='#' class='btn'>Buy Now</a></div>
                                <div class='info-item'><h2>Turmeric Dragon DualShock 4 Wireless Controller</h2><h2>$59.99</h2><div class='colors'><span></span><span></span><span class='active'></span><span></span><span></span><span></span></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi ex minus voluptatum consequuntur molestiae cum sunt labore nostrum?</p><a href='#' class='btn'>Buy Now</a></div>
                                <div class='info-item'><h2>Reddish Dragon DualShock 4 Wireless Controller</h2><h2>$59.99</h2><div class='colors'><span></span><span></span><span></span><span class='active'></span><span></span><span></span></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi ex minus voluptatum consequuntur molestiae cum sunt labore nostrum?</p><a href='#' class='btn'>Buy Now</a></div>
                                <div class='info-item'><h2>Mirage Dragon DualShock 4 Wireless Controller</h2><h2>$59.99</h2><div class='colors'><span></span><span></span><span></span><span></span><span class='active'></span><span></span></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi ex minus voluptatum consequuntur molestiae cum sunt labore nostrum?</p><a href='#' class='btn'>Buy Now</a></div>
                                <div class='info-item'><h2>Algae Dragon DualShock 4 Wireless Controller</h2><h2>$59.99</h2><div class='colors'><span></span><span></span><span></span><span></span><span></span><span class='active'></span></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi ex minus voluptatum consequuntur molestiae cum sunt labore nostrum?</p><a href='#' class='btn'>Buy Now</a></div>
                            </div>
                            <div class='navigation'><span class='prev-btn'><i class='bx bx-chevron-left'></i></span><span class='next-btn'><i class='bx bx-chevron-right'></i></span></div>
                        </div>
                        <script>
                            const imgSlider = document.querySelector('.img-slider');
                            const items = document.querySelectorAll('.item');
                            const imgItems = document.querySelectorAll('.img-item');
                            const infoItems = document.querySelectorAll('.info-item');
                            const nextBtn = document.querySelector('.next-btn');
                            const prevBtn = document.querySelector('.prev-btn');
                            let colors = ['#3674be', '#d26181', '#ceb13d', '#c6414c', '#171f2b', '#50aa61'];
                            let indexSlider = 0;
                            let index = 0;
                            const slider = () => {
                                imgSlider.style.transform = \`rotate(\${indexSlider * 60}deg)\`;
                                items.forEach(item => { item.style.transform = \`rotate(\${indexSlider * -60}deg)\`; });
                                document.querySelector('.img-item.active').classList.remove('active');
                                imgItems[index].classList.add('active');
                                document.querySelector('.info-item.active').classList.remove('active');
                                infoItems[index].classList.add('active');
                                document.body.style.background = colors[index];
                            }
                            nextBtn.addEventListener('click', () => { indexSlider++; index++; if (index > imgItems.length - 1) { index = 0; } slider(); });
                            prevBtn.addEventListener('click', () => { indexSlider--; index--; if (index < 0) { index = imgItems.length - 1; } slider(); });
                        </script>
                    </body>
                    </html>
                "></iframe>
            `,
            htmlCode: `<div class="carousel">\n    <div class="img-box">\n        <div class="img-list">\n            <div class="img-slider">\n                <div class="img-item active" style="--i:1;"><div class="item"><img src="images/img1.png"></div></div>\n                <div class="img-item" style="--i:2;"><div class="item"><img src="images/img2.png"></div></div>\n                <div class="img-item" style="--i:3;"><div class="item"><img src="images/img3.png"></div></div>\n                <div class="img-item" style="--i:4;"><div class="item"><img src="images/img4.png"></div></div>\n                <div class="img-item" style="--i:5;"><div class="item"><img src="images/img5.png"></div></div>\n                <div class="img-item" style="--i:6;"><div class="item"><img src="images/img6.png"></div></div>\n            </div>\n        </div>\n    </div>\n\n    <div class="info-box">\n        <div class="info-item active">\n            <h2>Bluish Dragon DualShock 4 Wireless Controller</h2>\n            <h2>$59.99</h2>\n            <div class="colors">\n                <span class="active"></span><span></span><span></span><span></span><span></span><span></span>\n            </div>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi ex minus voluptatum consequuntur molestiae cum sunt labore nostrum?</p>\n            <a href="#" class="btn">Buy Now</a>\n        </div>\n        <div class="info-item">\n            <h2>Rosa Dragon DualShock 4 Wireless Controller</h2>\n            <h2>$59.99</h2>\n            <div class="colors">\n                <span></span><span class="active"></span><span></span><span></span><span></span><span></span>\n            </div>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi ex minus voluptatum consequuntur molestiae cum sunt labore nostrum?</p>\n            <a href="#" class="btn">Buy Now</a>\n        </div>\n        <div class="info-item">\n            <h2>Turmeric Dragon DualShock 4 Wireless Controller</h2>\n            <h2>$59.99</h2>\n            <div class="colors">\n                <span></span><span></span><span class="active"></span><span></span><span></span><span></span>\n            </div>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi ex minus voluptatum consequuntur molestiae cum sunt labore nostrum?</p>\n            <a href="#" class="btn">Buy Now</a>\n        </div>\n        <div class="info-item">\n            <h2>Reddish Dragon DualShock 4 Wireless Controller</h2>\n            <h2>$59.99</h2>\n            <div class="colors">\n                <span></span><span></span><span></span><span class="active"></span><span></span><span></span>\n            </div>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi ex minus voluptatum consequuntur molestiae cum sunt labore nostrum?</p>\n            <a href="#" class="btn">Buy Now</a>\n        </div>\n        <div class="info-item">\n            <h2>Mirage Dragon DualShock 4 Wireless Controller</h2>\n            <h2>$59.99</h2>\n            <div class="colors">\n                <span></span><span></span><span></span><span></span><span class="active"></span><span></span>\n            </div>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi ex minus voluptatum consequuntur molestiae cum sunt labore nostrum?</p>\n            <a href="#" class="btn">Buy Now</a>\n        </div>\n        <div class="info-item">\n            <h2>Algae Dragon DualShock 4 Wireless Controller</h2>\n            <h2>$59.99</h2>\n            <div class="colors">\n                <span></span><span></span><span></span><span></span><span></span><span class="active"></span>\n            </div>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi ex minus voluptatum consequuntur molestiae cum sunt labore nostrum?</p>\n            <a href="#" class="btn">Buy Now</a>\n        </div>\n    </div>\n\n    <div class="navigation">\n        <span class="prev-btn"><i class="bx bx-chevron-left"></i></span>\n        <span class="next-btn"><i class="bx bx-chevron-right"></i></span>\n    </div>\n</div>`,
            cssCode: `@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');\n\n* {\n    font-family: 'Montserrat', sans-serif;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --all-transition: 1s ease;\n    --opacity-transition: .3s ease;\n}\n\nbody {\n    background: #3674be;\n    min-height: 100vh;\n    overflow: hidden;\n    transition: var(--all-transition);\n}\n\nbody::before {\n    content: '';\n    position: absolute;\n    left: 3.5%;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 700px;\n    height: 700px;\n    background: rgba(255, 255, 255, .8);\n    border-radius: 50%;\n    filter: blur(200px);\n}\n\n.img-box {\n    left: -1050px; /* <--- AJUSTADO PARA EVITAR SUPERPOSICIÓN */\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 1300px;\n    height: 1300px;\n}\n\n.img-box .img-list {\n    height: inherit;\n    transform: rotate(-120deg);\n}\n\n.img-list .img-slider {\n    height: inherit;\n    transition: var(--all-transition);\n}\n\n.img-slider .img-item {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%) rotate(calc(-360deg / 6 * var(--i))) scale(.8);\n    transform-origin: 650px;\n    transition: var(--all-transition);\n}\n\n.img-slider .img-item.active {\n    transform: translateY(-50%) rotate(calc(-360deg / 6 * var(--i))) scale(0.9) translateX(-65%);\n    z-index: 1;\n}\n\n.img-item .item {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: var(--all-transition);\n}\n\n.img-item .item img {\n    transform: rotate(calc(360deg / 6 * var(--i))) rotate(120deg);\n    filter: blur(8px);\n    transition: var(--all-transition);\n}\n\n.img-item.active .item img {\n    filter: blur(0);\n}\n\n.info-box {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 450px;\n    height: 500px;\n}\n\n.info-box .info-item {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-radius: 40px 0 0 40px;\n    padding: 0 40px;\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    transform: translateX(100%);\n    opacity: 0;\n    box-shadow: none;\n    transition: transform var(--all-transition), opacity var(--opacity-transition), box-shadow var(--all-transition);\n}\n\n.info-box .info-item.active {\n    transform: translateX(0);\n    opacity: 1;\n    box-shadow: 0 0 30px rgba(0, 0, 0, .2);\n}\n\n.info-item h2 {\n    font-size: 30px;\n}\n\n.info-item h2:nth-child(2) {\n    margin: 20px 0;\n}\n\n.colors span {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin-right: 10px;\n}\n\n.colors span.active {\n    outline: 3px solid #fff;\n}\n\n.colors span:nth-child(1) { background: #3674be; }\n.colors span:nth-child(2) { background: #d26181; }\n.colors span:nth-child(3) { background: #ceb13d; }\n.colors span:nth-child(4) { background: #c6414c; }\n.colors span:nth-child(5) { background: #171f2b; }\n.colors span:nth-child(6) { background: #50aa61; }\n\n.info-item p {\n    font-size: 15px;\n    margin: 20px 0 25px;\n    line-height: 1.5;\n}\n\n.info-item .btn {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    width: 180px;\n    height: 47px;\n    background: #fff;\n    border-radius: 40px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, .1);\n    font-size: 16px;\n    color: #333;\n    text-decoration: none;\n    font-weight: 600;\n}\n\n.navigation {\n    position: absolute;\n    left: 10%;\n    bottom: 7%;\n    width: 150px;\n    display: flex;\n    justify-content: space-between;\n    z-index: 100;\n}\n\n.navigation span {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    width: 50px;\n    height: 50px;\n    background: rgba(255, 255, 255, .2);\n    border-radius: 50%;\n    cursor: pointer;\n    font-size: 30px;\n    color: #fff;\n    transition: background 0.3s;\n}\n\n.navigation span:hover {\n    background: rgba(255, 255, 255, .4);\n}`,
            jsCode: `const imgSlider = document.querySelector('.img-slider');\nconst items = document.querySelectorAll('.item');\nconst imgItems = document.querySelectorAll('.img-item');\nconst infoItems = document.querySelectorAll('.info-item');\nconst nextBtn = document.querySelector('.next-btn');\nconst prevBtn = document.querySelector('.prev-btn');\nlet colors = ['#3674be', '#d26181', '#ceb13d', '#c6414c', '#171f2b', '#50aa61'];\nlet indexSlider = 0;\nlet index = 0;\nconst slider = () => {\n    imgSlider.style.transform = \`rotate(\${indexSlider * 60}deg)\`;\n    items.forEach(item => {\n        item.style.transform = \`rotate(\${indexSlider * -60}deg)\`;\n    });\n    document.querySelector('.img-item.active').classList.remove('active');\n    imgItems[index].classList.add('active');\n    document.querySelector('.info-item.active').classList.remove('active');\n    infoItems[index].classList.add('active');\n    document.body.style.background = colors[index];\n}\nnextBtn.addEventListener('click', () => {\n    indexSlider++;\n    index++;\n    if (index > imgItems.length - 1) {\n        index = 0;\n    }\n    slider();\n});\nprevBtn.addEventListener('click', () => {\n    indexSlider--;\n    index--;\n    if (index < 0) {\n        index = imgItems.length - 1;\n    }\n    slider();\n});`
        }
]
