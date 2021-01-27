'use strict';

new Swiper('.slider__items', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1.5,
  spaceBetween: 45,
  loop: true,
  freeMode: true,
  autoplay: {
    delay: 1500,
    disableOnInteractive: false
  },
  speed: 800,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 100
    }
  }
});

new Swiper('.swiper__container', {
  navigation: {
    nextEl: '.swiper__next',
    prevEl: '.swiper__prev',
  },
  loop: true,
  slidesPerView: 1,
  // effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    }
  },

});

(function ($) {
  $(document).ready(function () {
    // Code
    $('.menu').on('click', function () {
      $(this).toggleClass('menu__open');
      $('.navigation__wrapper').toggleClass('navigation__open');
    });

    $('.carousel__items').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.booking__content',
    });
    $('.booking__content').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.carousel__items',
      focusOnSelect: true,
      centerMode: true,
      centerPadding: 50,
      prevArrow: '<div class="booking__arrow booking__prev"><i class="icon-arrow"></div>',
      nextArrow: '<div class="booking__arrow booking__next"><i class="icon-arrow"></div>'
    });
  });

  $(window).scroll(() => {
    if ($(window).scrollTop() > 5) {
      $('.booking__navigation').addClass('booking__navigation--active');
      $('.booking__menu-link').addClass('booking__menu-link--scroll');
    }
    else {
      $('.booking__navigation').removeClass('booking__navigation--active');
      $('.booking__menu-link').removeClass('booking__menu-link--scroll');
    }
    

  });
})(jQuery);


