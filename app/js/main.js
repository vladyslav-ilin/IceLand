'use strict';

// let slider = document.getElementById("myRange");
// let price = document.getElementById("price");
// price.innerHTML = slider.value;

// slider.oninput = function() {
//   price.innerHTML = this.value;
// }

function initMap() {
  let map, coords, styles, marker, info, content;

  coords = {
    lat: 64.14311360365512,
    lng: -21.926393842068492
  }

  map = new google.maps.Map(document.getElementById("map"), {
    center: coords,
    zoom: 13,
    styles: styles,
    disableDefaultUI: true,
    zoomControl: false,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
    },
    streetViewControl: true,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ["roadmap", "satellite"],
    },

  });

  marker = new google.maps.Marker({
    position: coords,
    map: map,
    title: "This is here!",
    animation: google.maps.Animation.DROP,
    // draggable: true,
    icon: 'images/marker.png',
  });

  content = `<h1 class="map__title">Hello</h1>
				<p class="map__txt">This is your place!</p>`;

  info = new google.maps.InfoWindow({
    content: content,
  });

  marker.addListener("click", () => {
    info.open(map, marker);
  });
}

new Swiper('.slider__items', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  clickable: true,
  slidesPerView: 1,
  spaceBetween: 45,
  loop: true,
  freeMode: false,

  // autoplay: {
  //   delay: 2500,
  //   disableOnInteractive: false
  // },
  speed: 800,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 100,
      width: 970
    },

    480: {
      slidesPerView: 1
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
      dots: true,
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

    AOS.init();
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

  $('.tours__subtitle').on('click', function () {
    $(this).toggleClass('tours__subtitle--open');
    $('.tours__open').toggleClass('tours__open--open');
  });
})(jQuery);


