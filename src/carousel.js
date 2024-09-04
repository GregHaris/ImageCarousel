import { cacheDOM } from "./domUtils";
import navigateCarousel from "./navbtns";
import setInitiators from "./initiators";
import { updateContent } from "./updateCarousel";

const { images, dots } = cacheDOM();
let { speed, index, intervalID } = setInitiators();

export default function createCarousel() {
  function startInterval() {
    if (intervalID) clearInterval(intervalID);
    intervalID = setInterval(() => {
      index = (index + 1) % images.length;
      updateContent();
    }, speed);
  }

  function setupDots() {
    images.forEach((image, i) => {
      const dotSpan = document.createElement("span");
      dotSpan.classList.add("dot");

      if (i === 0) {
        dotSpan.classList.add("active");
      }

      dotSpan.addEventListener("click", () => {
        index = i;
        startInterval();
        updateContent();
      });

      dots.appendChild(dotSpan);
    });
  }

  function initializeCarousel() {
    setupDots();
    updateContent();
    startInterval();
    navigateCarousel();
  }

  initializeCarousel();
}
