(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open_made]"),
    closeModalBtn: document.querySelector("[data-modal-close_made]"),
    modal: document.querySelector("[data-modal_made]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();