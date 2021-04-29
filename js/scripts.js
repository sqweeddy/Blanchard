/* Nav */

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__link').addEventListener('click', function() {
    document.querySelector('.header__list--dropdown').classList.toggle('active');
    document.querySelector('.header__img').classList.toggle('active');
    document.querySelector('.header__link').classList.toggle('active');
  })
})


/* Menu */

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active');
  })
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#close').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active');
  })
})

/* Search */

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#search').addEventListener('click', function() {
    document.querySelector('#searchInput').classList.add('is-active');
  })
})

/* Swiper */

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  autoplay: {
    delay: 5000,
  },
  effect: 'fade',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});
