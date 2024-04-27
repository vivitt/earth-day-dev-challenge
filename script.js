const addClass = (domEl, ...classes) => {
  domEl.classList.add(...classes);
};

const removeClass = (domEl, ...classes) => {
  domEl.classList.remove(...classes);
};

function supports_textPath() {
  const svg = document.createElement("svg");
  document.body.appendChild(svg);
  console.log(!!document.body.getElementsByTagName("svg"));
  return !!document.body.getElementsByTagName("svg");
}
const header = document.getElementsByTagName("header")[0];

const h1 = document.getElementsByTagName("h1")[0];

if (window.screen.width > 700 && supports_textPath()) {
  addClass(h1, "sr-only");
}
const hero = document.createElement("div");
addClass(hero, "hero");
header.append(hero);

const worldContainer = document.createElement("div");
addClass(worldContainer, "world-container");

const svgCode = `<svg viewBox="0 -70 700 300" id="svg-text" aria-hidden=true>
<path id="curve" d="M1 167C172.5 -56.5002 500.5 -51 675.5 167" />
<text width="500" >
  <textPath xlink:href="#curve" startOffset="120" dominant-baseline="text-after-edge">
  Welcome to Our
  </textPath>
  <textPath xlink:href="#curve"  dominant-baseline="hanging" startOffset="20">
  Earth Day Celebration!
  </textPath>
</text>
</svg>`;

worldContainer.innerHTML = svgCode;

/* HERO Illustration */
const worldIllustration = document.createElement("div");
addClass(worldIllustration, "world");

/* World */
const worldSvg = document.createElement("img");
worldSvg.setAttribute("src", "mundo.svg");
worldSvg.setAttribute("alt", "Smiling Planet Earth Illustration");
addClass(worldSvg, "mundo");
worldIllustration.append(worldSvg);

/* World face */
const faceContainer = document.createElement("div");
addClass(faceContainer, "face-container");
const faceSvg = document.createElement("div");
addClass(faceSvg, "cara");
faceContainer.append(faceSvg);
worldIllustration.append(faceContainer);

/* Clouds */
const cloudLeft = document.createElement("div");
const cloudRight = document.createElement("div");
addClass(cloudLeft, "cloud", "cloud-left");
addClass(cloudRight, "cloud", "cloud-right");

worldContainer.append(worldIllustration);
hero.appendChild(cloudLeft);
hero.appendChild(worldContainer);
hero.appendChild(cloudRight);

document.addEventListener("DOMContentLoaded", function (e) {
  const svg = document.getElementById("svg-text");
  let screenWidth = window.innerWidth;

  window.onresize = function (e) {
    screenWidth = window.innerWidth;
    console.log(screenWidth);
    if (screenWidth > 700 && supports_textPath()) {
      addClass(h1, "sr-only");
      svg.style.display = "block";
    } else {
      removeClass(h1, "sr-only");
      svg.style.display = "none";
    }
  };
});

const saveScrollValue = function () {
  const scrollVal = window.scrollY;
  cloudLeft.style.transform = `translateX(calc(5px * ${scrollVal}/2)`;
  cloudRight.style.transform = `translateX(calc(-5px * ${scrollVal}/3)`;
};

// document.addEventListener("DOMContentLoaded", function (e) {
//   const section = document.getElementsByTagName("section")[0];

window.onscroll = function (e) {
  saveScrollValue(e);

  // if (window.scrollY > 400) {
  //   addClass(section, "animate-section");
  // } else {
  //   removeClass(section, "animate-section");
  // }
};

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
    addClass(faceSvg, "look-left");
    removeClass(faceSvg, "look-right");
  } else {
    addClass(faceSvg, "look-right");
    removeClass(faceSvg, "look-left");
  }
});
