import { cacheDOM } from "./domUtils";

const { dropdownList } = cacheDOM();

export function showDropDown() {
  dropdownList.removeAttribute("hidden");
}

export function hideDropDown() {
  dropdownList.setAttribute("hidden", true);
}
