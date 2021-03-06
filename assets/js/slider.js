document.addEventListener('DOMContentLoaded', function () {
    gamesSlider();
    reviewSlider();
})

function gamesSlider() {
  const swiperContainer = '.swiper-games';
  const swiperOptions = {
      // Optional parameters
      // autoplay: {
      //     delay: 5000,
      // },
    
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
          }
        }
    };

  const swiper = new Swiper(swiperContainer, swiperOptions);
}

function reviewSlider() {
  const swiperContainer = '.game-review .review';
  const swiperOptions = {
      // Optional parameters
      // autoplay: {
      //     delay: 5000,
      // },
      centeredSlides: true,
      spaceBetween: 30,
    
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
    };

  const swiper = new Swiper(swiperContainer, swiperOptions);
}