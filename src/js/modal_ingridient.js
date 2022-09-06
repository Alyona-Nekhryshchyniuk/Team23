(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open_ingridient]"),
    closeModalBtn: document.querySelector("[data-modal-close_ingridient]"),
    modal: document.querySelector("[data-modal_ingridient]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();