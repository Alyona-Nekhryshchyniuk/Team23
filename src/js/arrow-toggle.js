(() => {
  const refs = {
    button: document.querySelector('.hero-content__button'),
    text: document.querySelector('.hero-content__text'),
  };

  refs.button.addEventListener('click', toggleParagraph);

  function toggleParagraph() {
    refs.text.classList.toggle('modified');
  }
})();
