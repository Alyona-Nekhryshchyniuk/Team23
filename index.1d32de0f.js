!function(){new Swiper(".gallery__slider",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:3e3},speed:800});var e,t=document.getElementById(".btn-prev"),n=document.getElementById(".btn-next"),o=document.querySelectorAll(".slide"),l=document.querySelectorAll(".dot"),c=0,r=function(e){!function(e){var t=!0,n=!1,l=void 0;try{for(var c,r=o[Symbol.iterator]();!(t=(c=r.next()).done);t=!0)slide=c.value,slide.classList.remove("active")}catch(e){n=!0,l=e}finally{try{t||null==r.return||r.return()}finally{if(n)throw l}}o[e].classList.add("active")}(e),function(e){var t=!0,n=!1,o=void 0;try{for(var c,r=l[Symbol.iterator]();!(t=(c=r.next()).done);t=!0)dot=c.value,dot.classList.remove("active")}catch(e){n=!0,o=e}finally{try{t||null==r.return||r.return()}finally{if(n)throw o}}l[e].classList.add("active")}(e)},i=function(){c==o.length-1?r(c=0):(c++,r(c))};l.forEach((function(e,t){e.addEventListener("click",(function(){r(c=t)}))})),setInterval(i,3e3),n.addEventListener("click",i),t.addEventListener("click",(function(){0==c?(o.length,r(c)):(c--,r(c))})),function(){var e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),menulinks:document.querySelectorAll(".mobile-menu-nav__link")};function t(){document.body.classList.toggle("locked"),e.menu.classList.toggle("is-open")}e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t),e.menulinks.forEach((function(e){e.addEventListener("click",t)}))}(),(e={button:document.querySelector(".hero-content__button"),text:document.querySelector(".hero-content__text")}).button.addEventListener("click",(function(){e.text.classList.toggle("modified")}))}();
//# sourceMappingURL=index.1d32de0f.js.map
