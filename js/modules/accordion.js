export default function initAccordion() {
  const faq = document.querySelector(".js-accordion");
  const h2 = faq.querySelectorAll("h2");

  const paragrafo = faq.querySelectorAll("p");

  h2[0].classList.add("ativo");
  paragrafo[0].classList.add("ativo");

  function callbackAccordion(event) {
    let itemClicado = event.target;

    itemClicado.classList.toggle("ativo");
    itemClicado.nextElementSibling.classList.toggle("ativo");
  }

  h2.forEach((h2) => {
    h2.addEventListener("click", callbackAccordion);
  });
}
