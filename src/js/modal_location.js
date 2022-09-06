(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open_map]"),
    closeModalBtn: document.querySelector("[data-modal-close_map]"),
    modal: document.querySelector("[data-modal_map]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();