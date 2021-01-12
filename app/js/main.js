'use strict';



  $('.menu').on('click', function() {
    $(this).toggleClass('menu__open');
    $('.navigation__wrapper').toggleClass('navigation__open');
  });

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
