export function cacheDOM() {
  const carauselContainer = document.querySelector("#carauselContainer");
  const images = carauselContainer.querySelectorAll("#carauselContainer img");
  const dots = carauselContainer.querySelector("#nav #dots");
  const description = carauselContainer.querySelector("#nav #desc");
  return { images, dots, description };
}
