// domUtils.js
export function cacheDOM() {
  const services = document.querySelector("#services");
  const dropdownList = document.querySelector("#dropDownList");
  return { services, dropdownList };
}
