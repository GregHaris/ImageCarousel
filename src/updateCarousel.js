import { cacheDOM } from "./domUtils";
import setInitiators from "./initiators";

const { images, description } = cacheDOM();
let { index } = setInitiators();

export function updateContent() {
  images.forEach((image) => image.classList.remove("active"));
  images[index].classList.add("active");
  navigate();
  description.textContent = images[index].dataset.desc;
}
export function navigate() {
  const dotSpans = document.querySelectorAll(".dot");
  dotSpans.forEach((dot) => dot.classList.remove("active"));
  dotSpans[index].classList.add("active");
}
