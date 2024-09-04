import { cacheDOM } from "./domUtils";

const { images, description, carouselNavBtn } = cacheDOM();

export default function navigateCarousel() {
  carouselNavBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const offset = btn.dataset.carouselBtn === "next" ? 1 : -1;

      const activeImage = document.querySelector("[data-active]");
      let newIndex = [...images].indexOf(activeImage) + offset;
      if (newIndex < 0) newIndex = images.length - 1;
      if (newIndex >= images.length) newIndex = 0;

      // Remove the data-active attribute from the current active image
      activeImage.removeAttribute("data-active");

      // Add the data-active attribute to the new active image
      images[newIndex].setAttribute("data-active", true);

      // Update the content
      updateContent(newIndex);
    });
  });
}

function removeActiveClassFromImages() {
  images.forEach((image) => image.classList.remove("active"));
}

function addActiveClassToImage(index) {
  images[index].classList.add("active");
}

function updateDescription(index) {
  description.textContent = images[index].dataset.desc;
}

function updateDots(index) {
  const dotSpans = document.querySelectorAll(".dot");
  dotSpans.forEach((dot) => dot.classList.remove("active"));
  dotSpans[index].classList.add("active");
}

function updateContent(index) {
  removeActiveClassFromImages();
  addActiveClassToImage(index);
  updateDescription(index);
  updateDots(index);
}
