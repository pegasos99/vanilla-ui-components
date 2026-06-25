export const clocksData = [
    {
        id: "clock-neumorphic-analog",
        name: "Neumorphic Analog Clock",
        tags: ["Reloj", "Analógico", "Neumorfismo", "Light", "Minimalista"],
        preview: `
            <iframe style="width: 100%; height: 500px; border: none; border-radius: 12px; overflow: hidden;" srcdoc='
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <style>
                        body {
                            display: flex; justify-content: center; align-items: center;
                            min-height: 100vh; background: #e0e5ec; margin: 0;
                            font-family: system-ui, sans-serif;
                        }
                        .clock {
                            width: 250px; height: 250px; border-radius: 50%;
                            display: flex; justify-content: center; align-items: center;
                            background: #e0e5ec;
                            box-shadow: 15px 15px 30px rgba(163,177,198,0.6), -15px -15px 30px rgba(255,255,255, 0.8);
                            position: relative;
                        }
                        .clock::before {
                            content: ""; position: absolute; width: 15px; height: 15px;
                            background: #848484; border-radius: 50%; z-index: 10000;
                            box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
                        }
                        .hand {
                            position: absolute; display: flex; justify-content: center;
                            align-items: flex-end; border-radius: 50%;
                        }
                        .hand i {
                            position: absolute; background: var(--clr);
                            border-radius: 50%; bottom: 50%;
                        }
                        .hour { width: 140px; height: 140px; z-index: 1; }
                        .hour i { width: 6px; height: 70px; }
                        .min { width: 190px; height: 190px; z-index: 2; }
                        .min i { width: 4px; height: 95px; }
                        .sec { width: 230px; height: 230px; z-index: 3; }
                        .sec i { width: 2px; height: 125px; }
                        
                        /* Marcas del reloj */
                        .indicators { position: absolute; width: 100%; height: 100%; border-radius: 50%; pointer-events: none; }
                        .indicators::after {
                            content: ""; position: absolute; top: 15px; left: 50%; transform: translateX(-50%);
                            width: 4px; height: 12px; background: #a3b1c6; border-radius: 2px;
                        }
                    </style>
                </head>
                <body>
                    <div class="clock">
                        <div class="indicators"></div>
                        <div class="hand hour" id="hr" style="--clr: #4d4d4d;"><i></i></div>
                        <div class="hand min" id="mn" style="--clr: #848484;"><i></i></div>
                        <div class="hand sec" id="sc" style="--clr: #ff3d5e;"><i></i></div>
                    </div>
                    <script>
                        const hr = document.getElementById("hr");
                        const mn = document.getElementById("mn");
                        const sc = document.getElementById("sc");
                        setInterval(() => {
                            let day = new Date();
                            let hh = day.getHours() * 30;
                            let mm = day.getMinutes() * 6;
                            let ss = day.getSeconds() * 6;
                            hr.style.transform = "rotate(" + (hh + (mm/12)) + "deg)";
                            mn.style.transform = "rotate(" + mm + "deg)";
                            sc.style.transform = "rotate(" + ss + "deg)";
                        }, 1000);
                    </script>
                </body>
                </html>
            '></iframe>
        `,
        htmlCode: `<div class="clock">\n  <div class="indicators"></div>\n  <div class="hand hour" id="hr" style="--clr: #4d4d4d;"><i></i></div>\n  <div class="hand min" id="mn" style="--clr: #848484;"><i></i></div>\n  <div class="hand sec" id="sc" style="--clr: #ff3d5e;"><i></i></div>\n</div>`,
        cssCode: `body {\n  background: #e0e5ec;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.clock {\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #e0e5ec;\n  box-shadow: 15px 15px 30px rgba(163,177,198,0.6), -15px -15px 30px rgba(255,255,255, 0.8);\n  position: relative;\n}\n\n.clock::before {\n  content: "";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  background: #848484;\n  border-radius: 50%;\n  z-index: 10;\n  box-shadow: 2px 2px 5px rgba(0,0,0,0.2);\n}\n\n.hand {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  border-radius: 50%;\n}\n\n.hand i {\n  position: absolute;\n  background: var(--clr);\n  border-radius: 50%;\n  bottom: 50%;\n}\n\n.hour { width: 140px; height: 140px; z-index: 1; }\n.hour i { width: 6px; height: 70px; }\n.min { width: 190px; height: 190px; z-index: 2; }\n.min i { width: 4px; height: 95px; }\n.sec { width: 230px; height: 230px; z-index: 3; }\n.sec i { width: 2px; height: 125px; }\n\n.indicators { position: absolute; width: 100%; height: 100%; border-radius: 50%; pointer-events: none; }\n.indicators::after {\n  content: "";\n  position: absolute;\n  top: 15px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 4px;\n  height: 12px;\n  background: #a3b1c6;\n  border-radius: 2px;\n}`,
        jsCode: `const hr = document.getElementById("hr");\nconst mn = document.getElementById("mn");\nconst sc = document.getElementById("sc");\n\nsetInterval(() => {\n  let day = new Date();\n  let hh = day.getHours() * 30;\n  let mm = day.getMinutes() * 6;\n  let ss = day.getSeconds() * 6;\n  \n  hr.style.transform = \`rotate(\${hh + (mm/12)}deg)\`;\n  mn.style.transform = \`rotate(\${mm}deg)\`;\n  sc.style.transform = \`rotate(\${ss}deg)\`;\n}, 1000);`
    },
    {
        id: "clock-cyberpunk-neon",
        name: "Cyberpunk Neon Digital",
        tags: ["Reloj", "Digital", "Neon", "Cyberpunk", "Dark"],
        preview: `
            <iframe style="width: 100%; height: 500px; border: none; border-radius: 12px; overflow: hidden;" srcdoc='
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <style>
                        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap");
                        body {
                            background: #050505; display: flex; justify-content: center; align-items: center;
                            min-height: 100vh; margin: 0; color: #fff;
                        }
                        .digital-clock {
                            font-family: "Orbitron", sans-serif;
                            font-size: 5rem;
                            font-weight: 700;
                            display: flex;
                            align-items: center;
                            gap: 10px;
                            padding: 30px 50px;
                            border-radius: 20px;
                            background: rgba(0, 255, 255, 0.05);
                            box-shadow: inset 0 0 20px rgba(0, 255, 255, 0.1), 0 0 30px rgba(0, 255, 255, 0.2);
                            border: 2px solid rgba(0, 255, 255, 0.3);
                        }
                        .digit {
                            color: #0ff;
                            text-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff;
                            width: 100px;
                            text-align: center;
                        }
                        .colon {
                            color: #0ff;
                            text-shadow: 0 0 10px #0ff, 0 0 20px #0ff;
                            animation: blink 1s linear infinite;
                        }
                        .ampm {
                            font-size: 2rem;
                            color: #f0f;
                            text-shadow: 0 0 10px #f0f, 0 0 20px #f0f;
                            margin-left: 10px;
                        }
                        @keyframes blink {
                            0%, 49% { opacity: 1; }
                            50%, 100% { opacity: 0; }
                        }
                        @media (max-width: 768px) {
                            .digital-clock { font-size: 3rem; padding: 20px; }
                            .digit { width: 60px; }
                            .ampm { font-size: 1.2rem; }
                        }
                    </style>
                </head>
                <body>
                    <div class="digital-clock">
                        <div class="digit" id="d-hr">00</div>
                        <div class="colon">:</div>
                        <div class="digit" id="d-min">00</div>
                        <div class="colon">:</div>
                        <div class="digit" id="d-sec">00</div>
                        <div class="ampm" id="d-ampm">AM</div>
                    </div>
                    <script>
                        function updateNeon() {
                            let d = new Date();
                            let h = d.getHours();
                            let m = d.getMinutes();
                            let s = d.getSeconds();
                            let ampm = h >= 12 ? "PM" : "AM";
                            h = h % 12; h = h ? h : 12; // Formato 12 hrs
                            document.getElementById("d-hr").innerText = h < 10 ? "0" + h : h;
                            document.getElementById("d-min").innerText = m < 10 ? "0" + m : m;
                            document.getElementById("d-sec").innerText = s < 10 ? "0" + s : s;
                            document.getElementById("d-ampm").innerText = ampm;
                        }
                        setInterval(updateNeon, 1000);
                        updateNeon();
                    </script>
                </body>
                </html>
            '></iframe>
        `,
        htmlCode: `<div class="digital-clock">\n  <div class="digit" id="d-hr">00</div>\n  <div class="colon">:</div>\n  <div class="digit" id="d-min">00</div>\n  <div class="colon">:</div>\n  <div class="digit" id="d-sec">00</div>\n  <div class="ampm" id="d-ampm">AM</div>\n</div>\n\n\n`,
        cssCode: `.digital-clock {\n  font-family: 'Orbitron', sans-serif;\n  font-size: 5rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 30px 50px;\n  border-radius: 20px;\n  background: rgba(0, 255, 255, 0.05);\n  box-shadow: inset 0 0 20px rgba(0, 255, 255, 0.1), 0 0 30px rgba(0, 255, 255, 0.2);\n  border: 2px solid rgba(0, 255, 255, 0.3);\n}\n\n.digit {\n  color: #0ff;\n  text-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff;\n  width: 100px;\n  text-align: center;\n}\n\n.colon {\n  color: #0ff;\n  text-shadow: 0 0 10px #0ff, 0 0 20px #0ff;\n  animation: blink 1s linear infinite;\n}\n\n.ampm {\n  font-size: 2rem;\n  color: #f0f;\n  text-shadow: 0 0 10px #f0f, 0 0 20px #f0f;\n  margin-left: 10px;\n}\n\n@keyframes blink {\n  0%, 49% { opacity: 1; }\n  50%, 100% { opacity: 0; }\n}\n\n@media (max-width: 768px) {\n  .digital-clock { font-size: 3rem; padding: 20px; }\n  .digit { width: 60px; }\n  .ampm { font-size: 1.2rem; }\n}`,
        jsCode: `function updateNeonClock() {\n  let d = new Date();\n  let h = d.getHours();\n  let m = d.getMinutes();\n  let s = d.getSeconds();\n  let ampm = h >= 12 ? "PM" : "AM";\n  \n  h = h % 12;\n  h = h ? h : 12; // Convierte 0 a 12\n  \n  document.getElementById("d-hr").innerText = h < 10 ? "0" + h : h;\n  document.getElementById("d-min").innerText = m < 10 ? "0" + m : m;\n  document.getElementById("d-sec").innerText = s < 10 ? "0" + s : s;\n  document.getElementById("d-ampm").innerText = ampm;\n}\n\nsetInterval(updateNeonClock, 1000);\nupdateNeonClock();`
    },
    {
        id: "clock-svg-rings",
        name: "Activity Rings Clock",
        tags: ["Reloj", "Anillos", "SVG", "Progreso", "Dark"],
        preview: `
            <iframe style="width: 100%; height: 500px; border: none; border-radius: 12px; overflow: hidden;" srcdoc='
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <style>
                        body { background: #22252a; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
                        .rings-container { position: relative; width: 300px; height: 300px; display: flex; justify-content: center; align-items: center; }
                        svg { width: 300px; height: 300px; transform: rotate(-90deg); }
                        circle { fill: none; stroke-width: 15; stroke-linecap: round; }
                        .bg { stroke: #323840; }
                        .progress { transition: stroke-dashoffset 1s linear; }
                        
                        /* Círculo Horas */
                        #h-bg, #h-stroke { r: 120; cx: 150; cy: 150; }
                        #h-stroke { stroke: #ff2972; stroke-dasharray: 754; stroke-dashoffset: 754; filter: drop-shadow(0 0 8px rgba(255,41,114,0.6)); }
                        
                        /* Círculo Minutos */
                        #m-bg, #m-stroke { r: 95; cx: 150; cy: 150; }
                        #m-stroke { stroke: #fee800; stroke-dasharray: 597; stroke-dashoffset: 597; filter: drop-shadow(0 0 8px rgba(254,232,0,0.6)); }
                        
                        /* Círculo Segundos */
                        #s-bg, #s-stroke { r: 70; cx: 150; cy: 150; }
                        #s-stroke { stroke: #04fc43; stroke-dasharray: 440; stroke-dashoffset: 440; filter: drop-shadow(0 0 8px rgba(4,252,67,0.6)); }

                        .time-text {
                            position: absolute; display: flex; flex-direction: column; align-items: center;
                            font-family: system-ui, sans-serif; color: #fff;
                        }
                        .time-num { font-size: 28px; font-weight: 700; letter-spacing: 2px; }
                        .time-ampm { font-size: 14px; color: #a0a0a0; font-weight: 500; }
                    </style>
                </head>
                <body>
                    <div class="rings-container">
                        <svg>
                            <circle class="bg" id="h-bg"></circle>
                            <circle class="progress" id="h-stroke"></circle>
                            <circle class="bg" id="m-bg"></circle>
                            <circle class="progress" id="m-stroke"></circle>
                            <circle class="bg" id="s-bg"></circle>
                            <circle class="progress" id="s-stroke"></circle>
                        </svg>
                        <div class="time-text">
                            <div class="time-num" id="r-time">00:00</div>
                            <div class="time-ampm" id="r-ampm">AM</div>
                        </div>
                    </div>
                    <script>
                        const hStroke = document.getElementById("h-stroke");
                        const mStroke = document.getElementById("m-stroke");
                        const sStroke = document.getElementById("s-stroke");
                        const timeTxt = document.getElementById("r-time");
                        const ampmTxt = document.getElementById("r-ampm");

                        function updateRings() {
                            let d = new Date();
                            let h = d.getHours();
                            let m = d.getMinutes();
                            let s = d.getSeconds();
                            let ampm = h >= 12 ? "PM" : "AM";
                            
                            // Texto central
                            let h12 = h % 12; h12 = h12 ? h12 : 12;
                            timeTxt.innerText = (h12 < 10 ? "0"+h12 : h12) + ":" + (m < 10 ? "0"+m : m);
                            ampmTxt.innerText = ampm;

                            // Matemáticas del offset SVG: Offset = Length - (Length * (value / max))
                            // Horas (Longitud = 754)
                            let hOffset = 754 - (754 * ((h % 12) + m / 60) / 12);
                            hStroke.style.strokeDashoffset = hOffset;
                            
                            // Minutos (Longitud = 597)
                            let mOffset = 597 - (597 * m / 60);
                            mStroke.style.strokeDashoffset = mOffset;

                            // Segundos (Longitud = 440)
                            let sOffset = 440 - (440 * s / 60);
                            sStroke.style.strokeDashoffset = sOffset;
                        }
                        setInterval(updateRings, 1000);
                        updateRings();
                    </script>
                </body>
                </html>
            '></iframe>
        `,
        htmlCode: `<div class="rings-container">\n  <svg>\n    <circle class="bg" id="h-bg"></circle>\n    <circle class="progress" id="h-stroke"></circle>\n    <circle class="bg" id="m-bg"></circle>\n    <circle class="progress" id="m-stroke"></circle>\n    <circle class="bg" id="s-bg"></circle>\n    <circle class="progress" id="s-stroke"></circle>\n  </svg>\n  <div class="time-text">\n    <div class="time-num" id="r-time">00:00</div>\n    <div class="time-ampm" id="r-ampm">AM</div>\n  </div>\n</div>`,
        cssCode: `.rings-container {\n  position: relative;\n  width: 300px;\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #22252a; /* Color sugerido de fondo */\n  border-radius: 50%;\n}\n\nsvg {\n  width: 300px;\n  height: 300px;\n  transform: rotate(-90deg);\n}\n\ncircle {\n  fill: none;\n  stroke-width: 15;\n  stroke-linecap: round;\n}\n\n.bg { stroke: #323840; }\n.progress { transition: stroke-dashoffset 1s linear; }\n\n/* Configuraciones exactas de radio y circunferencia */\n#h-bg, #h-stroke { r: 120; cx: 150; cy: 150; }\n#h-stroke {\n  stroke: #ff2972;\n  stroke-dasharray: 754;\n  stroke-dashoffset: 754;\n  filter: drop-shadow(0 0 8px rgba(255,41,114,0.6));\n}\n\n#m-bg, #m-stroke { r: 95; cx: 150; cy: 150; }\n#m-stroke {\n  stroke: #fee800;\n  stroke-dasharray: 597;\n  stroke-dashoffset: 597;\n  filter: drop-shadow(0 0 8px rgba(254,232,0,0.6));\n}\n\n#s-bg, #s-stroke { r: 70; cx: 150; cy: 150; }\n#s-stroke {\n  stroke: #04fc43;\n  stroke-dasharray: 440;\n  stroke-dashoffset: 440;\n  filter: drop-shadow(0 0 8px rgba(4,252,67,0.6));\n}\n\n.time-text {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: system-ui, sans-serif;\n  color: #fff;\n}\n\n.time-num {\n  font-size: 28px;\n  font-weight: 700;\n  letter-spacing: 2px;\n}\n\n.time-ampm {\n  font-size: 14px;\n  color: #a0a0a0;\n  font-weight: 500;\n}`,
        jsCode: `const hStroke = document.getElementById("h-stroke");\nconst mStroke = document.getElementById("m-stroke");\nconst sStroke = document.getElementById("s-stroke");\nconst timeTxt = document.getElementById("r-time");\nconst ampmTxt = document.getElementById("r-ampm");\n\nfunction updateRings() {\n  let d = new Date();\n  let h = d.getHours();\n  let m = d.getMinutes();\n  let s = d.getSeconds();\n  let ampm = h >= 12 ? "PM" : "AM";\n  \n  let h12 = h % 12; \n  h12 = h12 ? h12 : 12;\n  timeTxt.innerText = (h12 < 10 ? "0"+h12 : h12) + ":" + (m < 10 ? "0"+m : m);\n  ampmTxt.innerText = ampm;\n\n  // Circunferencia del SVG -> Horas: 754, Minutos: 597, Segundos: 440\n  let hOffset = 754 - (754 * ((h % 12) + m / 60) / 12);\n  hStroke.style.strokeDashoffset = hOffset;\n  \n  let mOffset = 597 - (597 * m / 60);\n  mStroke.style.strokeDashoffset = mOffset;\n\n  let sOffset = 440 - (440 * s / 60);\n  sStroke.style.strokeDashoffset = sOffset;\n}\n\nsetInterval(updateRings, 1000);\nupdateRings();`
    }
];