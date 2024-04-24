const header = document.getElementsByTagName("header")[0];
header.classList.add("bungee-shade-regular");

const h1 = document.getElementsByTagName("h1")[0];

const hero = document.createElement("div");
hero.classList.add("hero");
header.append(hero);
const svgContainer = document.createElement("div");

svgContainer.classList.add("world-container");

const svgCode = `<svg viewBox="-35 -50 915 915">
<path id="curve" d="M3.02245 482.5C-48.9776 -133 883 -185 842.522 482.5" />
<text width="500" >
  <textPath xlink:href="#curve" startOffset="80">
  Welcome to Our Earth Day Celebration!
  </textPath>
</text>
</svg>`;

svgContainer.innerHTML = svgCode;
hero.appendChild(svgContainer);
h1.classList.add("sr-only");
console.log(h1);

const worldSvg = document.createElement("img");
worldSvg.setAttribute("src", "mundo.svg");
worldSvg.classList.add("mundo");

hero.append(worldSvg);

document.addEventListener("DOMContentLoaded", function () {
  window.onscroll = function () {
    if (window.scrollY > 30) {
      worldSvg.classList.add("small");
    } else {
      worldSvg.classList.remove("small");
    }
  };
});
