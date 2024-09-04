import { cacheDOM } from "./domUtils";
import setInitiators from "./initiators";

const { images, description } = cacheDOM();
let { index } = setInitiators();

export function updateContent() {
  updateImages();
  updateDescription();
  updateDots();
}

function updateImages() {
  images.forEach((image) => image.classList.remove("active"));
  images[index].classList.add("active");
}

function updateDescription() {
  description.textContent = images[index].dataset.desc;
}

function updateDots() {
  const dotSpans = document.querySelectorAll(".dot");
  dotSpans.forEach((dot) => dot.classList.remove("active"));
  dotSpans[index].classList.add("active");
}
