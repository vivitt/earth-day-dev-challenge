const addClass = (domEl, ...classes) => {
  domEl.classList.add(...classes);
};

const removeClass = (domEl, ...classes) => {
  domEl.classList.remove(...classes);
};

function supports_scroll() {
  return !!CSS.supports("animation-timeline: scroll()");
}

/* -------- Header ------- */

const header = document.getElementsByTagName("header")[0];

const h1 = document.getElementsByTagName("h1")[0];

const hero = document.createElement("div");
addClass(hero, "hero");
header.append(hero);

const worldContainer = document.createElement("div");
addClass(worldContainer, "world-container");

const svgCode = `<svg viewBox="0 -70 700 300" id="svg-text" aria-hidden=true >
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

if (window.innerWidth > 550) {
  hero.innerHTML = svgCode;
  addClass(h1, "sr-only");
}

/* HERO Illustration */
const worldIllustration = document.createElement("div");

/* World */
const worldSvg = document.createElement("img");
worldSvg.setAttribute("src", "mundo.svg");
worldSvg.setAttribute("alt", "Smiling Planet Earth Illustration");
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

/* **** */
addClass(worldIllustration, "world");
if (window.innerWidth > 700 && supports_scroll()) {
  addClass(worldIllustration, "world--scroll");
}

document.addEventListener("DOMContentLoaded", function (e) {
  const svg = document.getElementById("svg-text");
  let screenWidth = window.innerWidth;

  window.onresize = function (e) {
    screenWidth = window.innerWidth;

    if (screenWidth > 700 && supports_scroll()) {
      addClass(worldIllustration, "world--scroll");
    } else {
      removeClass(worldIllustration, "world--scroll");
    }
  };
});

const saveScrollValue = function () {
  const scrollVal = window.scrollY;
  cloudLeft.style.transform = `translateX(calc(5px * ${scrollVal}/2)`;
  cloudRight.style.transform = `translateX(calc(-5px * ${scrollVal}/3)`;
};

window.onscroll = function (e) {
  saveScrollValue(e);
};

const pos = { x: 0, y: 0 };

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

/* -------- take action ------- */
const takeActionSection = document.getElementsByClassName("action-call")[0];
const takeActionHeading = takeActionSection.children[0];

const takeActionBanner = document.createElement("div");
addClass(takeActionBanner, "action-call__banner");
addClass(takeActionHeading, "sr-only");
takeActionBanner.setAttribute("aria-hidden", true);
takeActionBanner.innerHTML =
  "<span>Take Action Now</span> <span>Take Action Now</span> <span>Take Action Now</span> <span>Take Action Now</span>  ";
takeActionSection.prepend(takeActionBanner);

/* -------- Events ------- */

const eventsSection = document.getElementsByClassName("events")[0];
const eventsHeading = eventsSection.children[0];
const eventsBanner = document.createElement("div");
addClass(eventsBanner, "events__banner");
addClass(eventsHeading, "sr-only");
eventsBanner.setAttribute("aria-hidden", true);
eventsBanner.innerHTML =
  "<span>Join an Event</span> <span>Join an Event</span> <span>Join an Event</span> <span>Join an Event</span>  ";
eventsSection.prepend(eventsBanner);

/* -------- Footer ------- */
const footer = document.getElementsByTagName("footer")[0];

const credit = document.createElement("div");

credit.innerHTML = `<p class='credit'>Created with ❤️ by <a href='https://github.com/vivitt' target='blank'>@vivitt</a>.</p>`;
footer.appendChild(credit);
