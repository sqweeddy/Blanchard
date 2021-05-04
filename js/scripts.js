/* Nav */

window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.header__link').forEach(function(headerLink){
    headerLink.addEventListener('click', function() {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.header__list--dropdown').forEach(function(dropdown) {
        dropdown.classList.remove('dropdown-list--active')
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('dropdown-list--active')

      document.querySelector('.header__list--dropdown').classList.toggle('dropdown-list--active');
      document.querySelector('.header__img').classList.toggle('header__img--active');
      document.querySelector('.header__link').classList.toggle('header__link--active');
    })
  })
})


/* Menu */

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('menu--is-active');
  })
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#close').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('menu--is-active');
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
