"use strict";

AOS.init();

const sliderb = document.querySelector('.swiper-containerb');
const slider = document.querySelector('.swiper-container');

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 6,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
  });
  var galleryTop = new Swiper('.gallery-top', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    thumbs: {
      swiper: galleryThumbs
    }
  });

const slidera = new Swiper('.swiper-containera', {
    mode:'horizontal',
    loop: false,
    pagination: {
       el: '.swiper-pagination',
       type: 'progressbar',
       clickable: true,
    },
 
    navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
    },
 })
 $('.swiper-wrapper').on('click',  '.swiper-slide', function() {
    const index = $(this).data('index')
    mySwiper.slideTo(index)
 });


var mySwiper = new Swiper(sliderb, {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
});

var show = function (state) {
  document.getElementById('welcome').style.display = state;
  document.getElementById('filter').style.display = state;
}


$(document).ready(function () {
  $(function () {
    $(".accordion__title").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);

      if (!$this.hasClass("active")) {
        $(".accordion__content").slideUp(400);
        $(".accordion__title").removeClass("active");
        $(".accordion__item").removeClass("active");
      }
      $this.toggleClass("active");
      $this.parent().toggleClass("active");
      $this.next().slideToggle();
    });
  });
});