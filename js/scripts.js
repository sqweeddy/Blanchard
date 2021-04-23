/* select */

const element = document.querySelector('#realism');
const choices = new Choices(element, {
  choices: [{
    value: 'Реализм',
    label: 'Реализм',
    selected: true,
    disabled: true,
  }
],

  shouldSort: false,
  searchEnabled: false,
  removeItemButton: false,
  itemSelectText: "",
});

const element1 = document.querySelector('#impressionizm');
const choices1 = new Choices(element1, {
  choices: [{
    value: 'Импрессионизм',
    label: 'Импрессионизм',
    selected: true,
    disabled: true,
  }
],

  shouldSort: false,
  searchEnabled: false,
  removeItemButton: false,
  itemSelectText: "",
});

const element2 = document.querySelector('#postImpressionizm');
const choices2 = new Choices(element2, {
  choices: [{
    value: 'Постимпрессионизм',
    label: 'Постимпрессионизм',
    selected: true,
    disabled: true,
  }
],

  shouldSort: false,
  searchEnabled: false,
  removeItemButton: false,
  itemSelectText: "",
});

const element3 = document.querySelector('#avantGarde');
const choices3 = new Choices(element3, {
  choices: [{
    value: 'Авангард',
    label: 'Авангард',
    selected: true,
    disabled: true,
  }
],

  shouldSort: false,
  searchEnabled: false,
  removeItemButton: false,
  itemSelectText: "",
});

const element4 = document.querySelector('#futurism');
const choices4 = new Choices(element4, {
  choices: [{
    value: 'Футуризм',
    label: 'Футуризм',
    selected: true,
    disabled: true,
  }
],

  shouldSort: false,
  searchEnabled: false,
  removeItemButton: false,
  itemSelectText: "",
});


/* Menu */

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#close').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })
})

/* Search */

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#search').addEventListener('click', function() {
    document.querySelector('#searchInput').classList.add('is-active')
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
