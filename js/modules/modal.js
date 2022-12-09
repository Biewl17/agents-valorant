export default function initModal() {
  const btnAbrir = document.querySelector('[data-modal="abrir"]');
  const btnFechar = document.querySelector('[data-modal="fechar"]');
  const modal = document.querySelector('[data-modal="container"]');

  if (btnAbrir && btnFechar && modal) {
    function abrirModal(event) {
      event.preventDefault();
      modal.classList.add("ativo");
    }

    function fecharModal(event) {
      event.preventDefault();
      modal.classList.remove("ativo");
    }

    function cliqueForaModal(event) {
      if (event.target === this) {
        fecharModal(event);
      }
    }

    btnAbrir.addEventListener("click", abrirModal);
    btnFechar.addEventListener("click", fecharModal);
    modal.addEventListener("click", cliqueForaModal);
  }
}
