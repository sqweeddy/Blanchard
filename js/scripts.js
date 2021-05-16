/* Nav */

window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.header__link').forEach(function(headerLink){
    headerLink.addEventListener('click', function() {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.header__list--dropdown').forEach(function(dropdown) {
        dropdown.classList.remove('dropdown-list--active')
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('dropdown-list--active')

      let activeList = document.querySelector('.dropdown-list--active');

      activeList.previousElementSibling('.header__link').classList.add('header__link--active');
      activeList.closest('.header__img').classList.add('header__img--active');

      // document.querySelectorAll('.dropdown-list--active > .header__img').classList.toggle('header__img--active');
      // document.querySelectorAll('.dropdown-list--active > .header__link').classList.toggle('header__link--active');
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
    document.querySelector('.search-top').classList.toggle('search-top--active');
    document.querySelector('#close-search').classList.toggle('search__close--active');
    document.querySelector('#searchInput').classList.toggle('search-top__input--is-active');
  })
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#close-search').addEventListener('click', function() {
    document.querySelector('.search-top').classList.toggle('search-top--active');
    document.querySelector('#close-search').classList.toggle('search__close--active');
    document.querySelector('#searchInput').classList.toggle('search-top__input--is-active');
  })

  document.querySelector('.hero').addEventListener('click', function() {
    document.querySelector('.search-top').classList.remove('search-top--active');
    document.querySelector('#close-search').classList.remove('search__close--active');
    document.querySelector('#searchInput').classList.remove('search-top__input--is-active');
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

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});
