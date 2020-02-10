jQuery(document).ready(function ($) {

  $('#burger').on('click', function () {
    $(this).toggleClass('active');
    $('.header-bottom__mobmenu').slideToggle();
  });

  $(window).on('resize', function () {
    const scrollbarWidth = 17;
    $(window).width() >= (1700 - scrollbarWidth) ? $('#burger').removeClass('active') && $('.header-bottom__mobmenu').css('display', 'none') : null;
  });

  $('.our-clients__slider').owlCarousel({
    loop: true,
    touchDrag: false,
    mouseDrag: false,
    dots: false,
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      1200: {
        items: 4,
        autoWidth: true
      }
    }
  });

  const sliderPhotos = $('.our-clients__slider');
  $('#slider-nav__prev').on('click', function () {
    sliderPhotos.trigger('prev.owl.carousel');
  });

  $('#slider-nav__next').on('click', function () {
    sliderPhotos.trigger('next.owl.carousel');
  });

});