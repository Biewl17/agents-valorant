import clickForaDoMenu from "./clickForaDoMenu.js";

export default function initDropdown() {
  const menu = document.querySelector("[data-dropdown]");
  const userEvent = ["click", "touchstart"];

  function clickMenu(event) {
    event.preventDefault();
    this.classList.add("ativo");

    clickForaDoMenu(this, userEvent, () => {
      this.classList.remove("ativo");
    });
  }

  userEvent.forEach((userEvent) => {
    menu.addEventListener(userEvent, clickMenu);
  });
}
