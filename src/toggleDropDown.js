import { cacheDOM } from "./domUtils";
import { showDropDown, hideDropDown } from "./eventHandlers";

const { services, dropdownList } = cacheDOM();

export function toggleDropDown() {
  services.addEventListener("click", showDropDown);
  dropdownList.addEventListener("mouseleave", hideDropDown);
}
