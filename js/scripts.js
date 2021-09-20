/* Nav */

const params = {
  btnClassName: "header__link",
  activeClassName: "is-active",
  disabledClassName: "is-disable"
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




window.addEventListener('DOMContentLoaded', function() {
  /* Menu */

  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('menu--is-active');
  });

  document.querySelector('#close').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('menu--is-active');
  });
  /* Search */

  document.querySelector('#search').addEventListener('click', function() {
    document.querySelector('.search-top').classList.toggle('search-top--active');
    document.querySelector('.search-top__btn').classList.toggle('search-top__btn--active');
    document.querySelector('#close-search').classList.toggle('search__close--active');
    document.querySelector('#searchInput').classList.toggle('search-top__input--is-active');
  });

  document.querySelector('#close-search').addEventListener('click', function() {
    document.querySelector('.search-top').classList.toggle('search-top--active');
    document.querySelector('.search-top__btn').classList.toggle('search-top__btn--active');
    document.querySelector('#close-search').classList.toggle('search__close--active');
    document.querySelector('#searchInput').classList.toggle('search-top__input--is-active');
  });

  document.querySelector('.hero').addEventListener('click', function() {
    document.querySelector('.search-top').classList.remove('search-top--active');
    document.querySelector('#close-search').classList.remove('search__close--active');
    document.querySelector('#searchInput').classList.remove('search-top__input--is-active');
  });

  /* Tabs */

  document.querySelectorAll('.accordion__link').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.about-author').forEach(function(tabContent) {
        tabContent.classList.remove('about-author--active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('about-author--active');
    });
  });

  document.querySelectorAll('.accordion__link').forEach(function(linkBtn) {
    linkBtn.addEventListener('click', function(e) {
      document.querySelectorAll('.accordion__link').forEach(function(linkColor) {
        linkColor.classList.remove('accordion__link--active');
      });
      e.currentTarget.classList.add('accordion__link--active');
    });
  });

  document.querySelectorAll('.country-link').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.catalog__bot').forEach(function(tabContent) {
        tabContent.classList.remove('catalog__bot--active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__bot--active');
    });
  });

  document.querySelectorAll('.country-link').forEach(function(linkBtn) {
    linkBtn.addEventListener('click', function(e) {
      document.querySelectorAll('.country-link').forEach(function(linkCircle) {
        linkCircle.classList.remove('country-link--active');
      });
      e.currentTarget.classList.add('country-link--active');
    });
  });

  /* events slides */

  class Cards {
    isOpened = false;

    get current() {
      return this;
    }

    params = {
      // здесь, в параметрах, необходимо задать настройки
      MIN_DESKTOP: 1023,
      MIN_TABLET: 581,
      DESKTOP_CARDS: 3,
      TABLET_CARDS: 2,
      MOBILE_CARDS: false,

      cardsWrapName: "js-cards-wrap",
      paginationClassName: "pagination",
      btn: "btn",
      card: "card",
      hidden: "is-hidden",
      interaction: "interaction",
      openAnimation: "fade-in",
      closeAnimation: "fade-out",
      showText: "Все события",
      hideText: "Скрыть"
    };

    constructor() {
      this.setCards();
    }

    cardsWrap = document.querySelector(`.${this.params.cardsWrapName}`);
    btn = this.cardsWrap.querySelector(`.${this.params.btn}`);
    cards = Array.from(this.cardsWrap.querySelectorAll(`.${this.params.card}`));

    setHiddenCards(quantity, isResize) {
      if (quantity) {
        this.cards.forEach((el, i) => {
          el.classList.remove(
            this.params.hidden,
            this.params.interaction,
            this.params.openAnimation,
            this.params.closeAnimation
          );

          if (i >= quantity) {
            el.classList.add(this.params.hidden, this.params.interaction);
          }

          const currentCards = this;

          el.addEventListener("animationend", function (evt) {
            if (
              !currentCards.isOpened &&
              evt.target.classList.contains(currentCards.params.interaction)
            ) {
              evt.target.classList.add(currentCards.params.hidden);
              evt.target.classList.remove(
                currentCards.params.closeAnimation,
                currentCards.params.openAnimation
              );
            }
          });

          this.isOpened = false;
          this.btn.textContent = this.params.showText;

          if (isResize === "resize") {
            this.isOpened = false;
            this.btn.textContent = this.params.showText;
          }
        });

        this.btn.classList.remove(this.params.hidden);
      } else {
        this.cards.forEach((el) => {
          el.classList.remove(this.params.hidden);
        });

        this.btn.classList.add(this.params.hidden);
      }

      this.setBtnListener(quantity);
    }

    setBtnListener(quantity) {
      const currentCards = this.current;

      this.btn.outerHTML = this.btn.outerHTML;
      this.btn = this.cardsWrap.querySelector(`.${this.params.btn}`);

      this.btn.addEventListener("click", function () {
        currentCards.isOpened = !currentCards.isOpened;

        if (currentCards.isOpened) {
          currentCards.btn.textContent = currentCards.params.hideText;

          currentCards.cards.forEach((el) => {
            el.classList.remove(
              currentCards.params.hidden,
              currentCards.params.closeAnimation
            );
            el.classList.add(currentCards.params.openAnimation);
          });

          currentCards.cards[quantity].scrollIntoView({
            block: "start",
            behavior: "smooth"
          });
        } else {
          currentCards.btn.textContent = currentCards.params.showText;

          currentCards.cards.forEach((el, i) => {
            if (el.classList.contains(currentCards.params.interaction)) {
              el.classList.add(currentCards.params.closeAnimation);
            }
          });

          currentCards.cards[0].scrollIntoView({
            block: "start",
            behavior: "smooth"
          });
        }
      });
    }

    checkDisplay(evt, currentObj) {
      let isResize;

      if (evt) {
        isResize = evt.type;
      }

      this.windowWidth = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
      );

      switch (true) {
        case this.windowWidth > currentObj.params.MIN_DESKTOP:
          this.setHiddenCards(currentObj.params.DESKTOP_CARDS, isResize); // цифра означает количество карточек, которые будут показаны изначально
          break;
        case this.windowWidth > currentObj.params.MIN_TABLET &&
          this.windowWidth <= currentObj.params.MIN_DESKTOP:
          this.setHiddenCards(currentObj.params.TABLET_CARDS, isResize);
          break;
        default:
          this.setHiddenCards(currentObj.params.MOBILE_CARDS, isResize);
      }
    }

    setCards() {
      const cards = this.current;

      cards.checkDisplay(false, cards);
      cards.setSlider(cards);

      window.addEventListener("resize", (evt) => {
        cards.checkDisplay(evt, cards);
        cards.setSlider(cards);
      });
    }

    setSlider(cards) {
      if (
        this.windowWidth < cards.params.MIN_TABLET &&
        (!cards.cardsSlider || cards.cardsSlider.destroyed)
      ) {
        const pagination = document.createElement("div");
        pagination.classList.add(cards.params.paginationClassName);
        cards.cardsWrap.append(pagination);

        cards.cardsWrap.classList.add("swiper");
        cards.cardsWrap.children[0].classList.add("swiper-wrapper");


        cards.cardsSlider = new Swiper(`.${cards.params.cardsWrapName}`, {
          slidesPerColumnFill: "row",
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerView: 1,
          spaceBetween: 20,

          pagination: {
            el: `.${cards.params.cardsWrapName} .${cards.params.paginationClassName}`,
          },

          on: {
            beforeInit() {
              document
                .querySelectorAll(`.${cards.params.card}`)
                .forEach((el) => {
                  el.classList.add("swiper-slide");
                });
            },
            beforeDestroy() {
              this.slides.forEach((el) => {
                el.classList.remove("swiper-slide");
                el.removeAttribute("role");
                el.removeAttribute("aria-label");
              });

              this.pagination.el.remove();
            }
          }
        });
      } else if (
        this.windowWidth >= cards.params.MIN_TABLET &&
        cards.cardsSlider
      ) {
        cards.cardsSlider.destroy();
        cards.cardsWrap.classList.remove("swiper");
        cards.cardsWrap.children[0].classList.remove("swiper-wrapper");
        cards.cardsWrap.children[0].removeAttribute("aria-live");
        cards.cardsWrap.children[0].removeAttribute("id");
      }
    }
  }

  const cards = new Cards();


});


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

  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  },

  slidesPerView: 1,
  grid: {
    rows:1,
    fill: 'row'
  },
  spaceBetween: 50,

  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1,
      },
      spaceBetween: 1,
    },

    580: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 34,
    },

    1400: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper('.editions__swiper', {

  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  },

  slidesPerView: 3,
  grid: {
    rows:1,
    fill: 'row'
  },
  spaceBetween: 50,

  breakpoints: {
    320: {
      slidesPerView: 2,
      grid: {
        rows: 4,
      },
      spaceBetween: 30,
    },

    580: {
      slidesPerView: 2,
      grid: {
        rows: 1,
      },
      spaceBetween: 34,
    },

    769: {
      slidesPerView: 2,
      grid: {
        rows: 1,
      },
      spaceBetween: 50,
    },

    1300: {
      slidesPerView: 3,
      grid: {
        rows: 1,
      },
      spaceBetween: 50,
    },
  },
});

/* Modal */

const modalLink = document.querySelectorAll('.modal-link');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const modalClose = document.querySelectorAll('.modal-close');
const	body = document.body;

let disableScroll = function () {
	let pagePosition = window.scrollY;
	document.body.classList.add('disable-scroll');
	document.body.dataset.position = pagePosition;
	document.body.style.top = -pagePosition + 'px';
}

let enableScroll = function () {
	let pagePosition = parseInt(document.body.dataset.position, 10);
	document.body.style.top = 'auto';
	document.body.classList.remove('disable-scroll');
	window.scroll({ top: pagePosition, left: 0 });
	document.body.removeAttribute('data-position');
}

modalLink.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
    disableScroll();
	});
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
    enableScroll();
	}
});

modalClose.forEach(function(closeModal) {
  closeModal.addEventListener('click', function() {
    modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
    enableScroll();
  });
});


/* Accordion */

$( function() {
  $( "#accordion" ).accordion({
    collapsible: true,
    icons: false,
  });
} );


document.addEventListener("DOMContentLoaded", function () {
  const MOBILE_WIDTH = 580;
  let acc;
  const accWrap = document.querySelector(".js-accordion-wrap");
  const checkboxes = accWrap.querySelector(".js-checkboxes");
  const accHeader = accWrap.querySelector(".js-accordion-heading");

  function sortElems(elems) {
    elems.sort(function (a, b) {
      const valueA = parseInt(a.parentNode.dataset.position);
      const valueB = parseInt(b.parentNode.dataset.position);

      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    });
  }

  function getWindowWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }

  function onAccordionClick(evt, ui) {
    const checkedBoxes = Array.from(accWrap.querySelectorAll(".js-checkbox"));
    sortElems(checkedBoxes);

    if (!ui.newHeader[0]) {
      checkedBoxes.forEach(function (el) {
        if (el.checked) {
          accWrap.append(el.parentNode);
        }
      });
    } else {
      checkedBoxes.forEach(function (el) {
        checkboxes.append(el.parentNode);
      });
    }
  }

  function checkWindowWidth() {
    const currentWidth = getWindowWidth();
    const checkedBoxes = Array.from(accWrap.querySelectorAll(".js-checkbox"));

    if (currentWidth > MOBILE_WIDTH && acc) {
      acc.accordion("destroy");
      acc = false;
      checkedBoxes.forEach(function (el) {
        checkboxes.append(el.parentNode);
      });
    } else if ((currentWidth <= MOBILE_WIDTH) & !acc) {
      acc = $(".js-accordion").accordion({
        header: '.js-accordion-heading',
        collapsible: true,
        active: false,
        icons: false,
        heightStyle: "auto",
        activate: function (evt, ui) {
          console.log(ui);
          onAccordionClick(evt, ui);
        }
      });

      checkedBoxes.forEach(function (el) {
        if (el.checked) {
          accWrap.append(el.parentNode);
        }
      });
    }
  }

  checkWindowWidth();
  window.addEventListener("resize", function () {
    checkWindowWidth();
  });
});
