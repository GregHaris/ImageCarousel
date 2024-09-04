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
      updateContent();
    });
  });
}

function updateContent(index) {
  // Remove the active class from all images
  images.forEach((image) => image.classList.remove("active"));

  // Add the active class to the new active image
  images[index].classList.add("active");

  // Update the description
  description.textContent = images[index].dataset.desc;

  // Update the dots
  updateDots();
}
function updateDots(index) {
  const dotSpans = document.querySelectorAll(".dot");
  dotSpans.forEach((dot) => dot.classList.remove("active"));
  dotSpans[index].classList.add("active");
}
