const header = document.getElementsByTagName("header")[0];
header.classList.add("bungee-shade-regular");

const h1 = document.getElementsByTagName("h1")[0];

const hero = document.createElement("div");
hero.classList.add("hero");
header.append(hero);

const worldContainer = document.createElement("div");
worldContainer.classList.add("world-container");

const svgCode = `<svg viewBox="-35 -50 915 500">
<path id="curve" d="M3.02245 482.5C-48.9776 -133 883 -185 842.522 482.5" />
<text width="500" >
  <textPath xlink:href="#curve" startOffset="80">
  Welcome to Our Earth Day Celebration!
  </textPath>
</text>
</svg>`;

worldContainer.innerHTML = svgCode;

/* HERO Illustration */
const worldIllustration = document.createElement("div");
worldIllustration.classList.add("world");

/* World */
const worldSvg = document.createElement("img");
worldSvg.setAttribute("src", "mundo.svg");
worldSvg.setAttribute("alt", "Smiling Planet Earth Illustration");
worldSvg.classList.add("mundo");
worldIllustration.append(worldSvg);

/* World face */
const faceContainer = document.createElement("div");
faceContainer.classList.add("face-container");
const faceSvg = document.createElement("div");
faceSvg.classList.add("cara");
faceContainer.append(faceSvg);
worldIllustration.append(faceContainer);

worldContainer.append(worldIllustration);
hero.appendChild(worldContainer);
h1.classList.add("sr-only");

document.addEventListener("DOMContentLoaded", function () {
  const section = document.getElementsByTagName("section")[0];
  window.onscroll = function () {
    if (window.scrollY > 50) {
      section.classList.add("animate-section");
      worldIllustration.classList.add("small");
      faceSvg.classList.add("animate-face");
    } else {
      section.classList.remove("animate-section");
      worldIllustration.classList.remove("small");
      faceSvg.classList.remove("animate-face");
    }
  };
});

const pos = { x: 0, y: 0 };

const root = document.querySelector(":root");

const saveCursorPosition = function (x, y) {
  pos.x = (x / window.innerWidth).toFixed(2);
  pos.y = (y / window.innerHeight).toFixed(2);
  faceSvg.style.transform = `translate(calc(-50% + 100px * ${pos.x}), calc(-50% + 100px * ${pos.y}))`;
};

document.addEventListener("mousemove", (e) => {
  saveCursorPosition(e.clientX, e.clientY);
  if (e.clientX < 400) {
    faceSvg.classList.add("look-left");
    faceSvg.classList.remove("look-right");
  } else {
    faceSvg.classList.add("look-right");
    faceSvg.classList.remove("look-left");
  }
});
