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

(function($){
	$(document).ready(function() {
		// Code
		$('.menu').on('click', function() {
      $(this).toggleClass('menu__open');
      $('.navigation__wrapper').toggleClass('navigation__open');
    });
	});
})(jQuery);

new Swiper ('.swiper__container', {

});
  // new Swiper ('.swiper', {
  //   navigation: {
  //     nextEl: '.swiper__next',
  //     prevEl: '.swiper__prev',
  //   },
  //   touchRatio: 1,
  //   grabCursor: true,
  //   slidesPerView: 3,
  //   spaceBetween: 45,
  //   loop: true
  // });
