"use strict";

var bodyStyles = window.getComputedStyle(document.body);
var gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));
"use strict";

var burger = document.querySelector('.burger');
var menu = document.querySelector('.header__nav');
var header = document.querySelector('.header');

var disScroll = function disScroll() {
  var pagePosition = window.scrollY;
  document.body.classList.add('dis-scroll');
  document.body.dataset.position = pagePosition;
  document.body.style.top = -pagePosition + 'px';
};

var enScroll = function enScroll() {
  var pagePosition = parseInt(document.body.dataset.position, 10);
  document.body.style.top = 'auto';
  document.body.classList.remove('dis-scroll');
  window.scrollTo({
    top: pagePosition,
    left: 0
  });
  document.body.removeAttribute('data-position');
};

burger.addEventListener('click', function (e) {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--open');
  header.classList.toggle('header--open');

  if (burger.classList.contains('burger--active')) {
    disScroll();
  } else {
    enScroll();
  }
});
"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var tabs = document.querySelector('.catalog-filter');
  var tabsBtn = document.querySelectorAll('.catalog-filter__item');
  var tabsContent = document.querySelectorAll('.catalog__list');

  if (tabs) {
    tabs.addEventListener('click', function (e) {
      if (e.target.classList.contains('catalog-filter__item')) {
        var tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach(function (el) {
          el.classList.remove('catalog-filter__item--active');
        });
        document.querySelector("[data-tabs-path=\"".concat(tabsPath, "\"]")).classList.add('catalog-filter__item--active');
        tabsHandler(tabsPath);
      }
    });
  }

  var tabsHandler = function tabsHandler(path) {
    tabsContent.forEach(function (el) {
      el.classList.remove('catalog__list--active');
    });
    document.querySelector("[data-tabs-target=\"".concat(path, "\"]")).classList.add('catalog__list--active');
  };
});
"use strict";

var heroSlider = new Swiper('.hero__slider', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false
  }
});
"use strict";

var projectsSlider = new Swiper('.projects__slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.slider-btn__next',
    prevEl: '.slider-btn__prev'
  },
  pagination: {
    el: ".swiper-bullets",
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3
    }
  }
});
"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var tabs = document.querySelector('.filter');
  var tabsBtn = document.querySelectorAll('.filter__btn');
  var tabsContent = document.querySelectorAll('.projects__slider');

  if (tabs) {
    tabs.addEventListener('click', function (e) {
      if (e.target.classList.contains('filter__btn')) {
        var tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach(function (el) {
          el.classList.remove('filter__btn--active');
        });
        document.querySelector("[data-tabs-path=\"".concat(tabsPath, "\"]")).classList.add('filter__btn--active');
        tabsHandler(tabsPath);
      }
    });
  }

  var tabsHandler = function tabsHandler(path) {
    tabsContent.forEach(function (el) {
      el.classList.remove('projects__slider--active');
    });
    document.querySelector("[data-tabs-target=\"".concat(path, "\"]")).classList.add('projects__slider--active');
  };
});
"use strict";

var search = document.querySelector('.mobile__btn');
var overlay = document.querySelector('.overlay');
var formClose = document.querySelector('.form__close');
var formCloseMobile = document.querySelector('.mobile-form__close');
var formSearch = document.querySelector('.form');
var formInput = document.querySelector('.form__input');
var headerPhone = document.querySelector('.header__actions-item--phone');
var formMobile = document.querySelector('.mobile__item--form');
formSearch.addEventListener('click', function (e) {
  formSearch.classList.toggle('form--active');
  formInput.classList.toggle('form__input--active');
  headerPhone.classList.toggle('header__actions-item--phone-active');
});
formClose.addEventListener('click', function (e) {
  formSearch.classList.remove('form--active'); // formInput.classList.remove('form__input--active');
  // headerPhone.classList.remove('header__actions-item--phone-active');
});
search.addEventListener('click', function (e) {
  formMobile.classList.toggle('mobile__item--form-open');
  overlay.classList.toggle('overlay--active');
});
formCloseMobile.addEventListener('click', function (e) {
  formMobile.classList.remove('mobile__item--form-open');
  overlay.classList.remove('overlay--active');
});
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
