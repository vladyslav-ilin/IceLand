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
		
	});
})(jQuery);
