(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open_buy]"),
    closeModalBtn: document.querySelector("[data-modal-close_buy]"),
    modal: document.querySelector("[data-modal_buy]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();