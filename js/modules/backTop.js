export default function initBackTop() {
  const btn = document.querySelector("[data-backTop]");

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
    });
  });
  window.addEventListener("scroll", () => {
    const altura = window.scrollY;
    altura > 2500 ? btn.classList.add("ativo") : btn.classList.remove("ativo");
  });
}
