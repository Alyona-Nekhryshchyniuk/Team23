const swiper = new Swiper('.gallery__slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

   autoplay: {
    delay: 3000,
  },
  
  speed: 800,

});