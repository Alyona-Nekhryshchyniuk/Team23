(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open_franchise]'),
    closeModalBtn: document.querySelector('[data-modal-close_franchise]'),
    modal: document.querySelector('[data-modal_franchise]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
