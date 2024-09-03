import { cacheDOM } from "./domUtils";

const { images, dots, description } = cacheDOM();

export default function createCarousel() {
  let speed = 5000;
  let index = 0;
  let intervalID;

  function startInterval() {
    if (intervalID) clearInterval(intervalID);
    intervalID = setInterval(() => {
      index++;
      if (index === images.length) index = 0;
      updateContent();
    }, speed);
  }

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

  function updateContent() {
    images.forEach((image) => image.classList.remove("active"));
    images[index].classList.add("active");

    const dotSpans = document.querySelectorAll(".dot");
    dotSpans.forEach((dot) => dot.classList.remove("active"));
    dotSpans[index].classList.add("active");

    description.textContent = images[index].dataset.desc;
  }

  startInterval();
}
