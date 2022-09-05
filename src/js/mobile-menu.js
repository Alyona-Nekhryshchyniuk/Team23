(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    menulinks: document.querySelectorAll('.mobile-menu-nav__link'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.menulinks.forEach(menulink => {
    menulink.addEventListener('click', toggleModal);
  });

  function toggleModal() {
    document.body.classList.toggle('locked');
    refs.menu.classList.toggle('is-open');
  }
})();
