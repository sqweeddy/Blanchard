/* Nav */

// window.addEventListener('DOMContentLoaded', function() {
//   document.querySelectorAll('.header__link').forEach(function(headerLink){
//     headerLink.addEventListener('click', function() {
//       const path = event.currentTarget.dataset.path

//       document.querySelectorAll('.header__list--dropdown').forEach(function(dropdown) {
//         dropdown.classList.remove('dropdown-list--active')
//       })

//       document.querySelector(`[data-target="${path}"]`).classList.add('dropdown-list--active')

//       let activeList = document.querySelector('.dropdown-list--active');

//       activeList.previousElementSibling('.header__link').classList.add('header__link--active');
//       activeList.closest('.header__img').classList.add('header__img--active');

      // document.querySelectorAll('.dropdown-list--active > .header__img').classList.toggle('header__img--active');
      // document.querySelectorAll('.dropdown-list--active > .header__link').classList.toggle('header__link--active');
//     })
//   })
// })

const params = {
  btnClassName: "header__link",
  activeClassName: "dropdown-list--active",
  disabledClassName: "dropdown-list--disable"
}

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

    if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(`[data-target="${path}"]`);

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();



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

/* Select */

const element = document.querySelector('#gallery-filter');
const choices = new Choices(element, {
  choices: [{
    value: 'Живопись',
    label: 'Живопись',
    selected: true,
    disabled: true,
  },
  {
    value: 'Рисунок',
    label: 'Рисунок',
    selected: false,
    disabled: false,
  }, {
    value: 'Скульптура',
    label: 'Скульптура',
    selected: false,
    disabled: false,
  }
],

  shouldSort: false,
  searchEnabled: false,
  removeItemButton: false,
  itemSelectText: "",
});

/* Swiper */

var swiper = new Swiper('.gallery__swiper', {
  // slidesPerColumnFill: 'row',
  // slidesPerView: 3,
  // slidesPerColumn: 2,
  // slidesPerGroup: 3,
  // spaceBetween: 50,
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerColumnFill: 'row',
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerGroup: 1,
      spaceBetween: 1,
    },

    768: {
      slidesPerColumnFill: 'row',
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 4,
      spaceBetween: 34,
    },

    1024: {
      slidesPerColumnFill: 'row',
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 4,
      spaceBetween: 34,
    },

    1700: {
      slidesPerColumnFill: 'row',
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  }
});
