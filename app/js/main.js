$(function () {
  $('.footer-top__title').on('click', function() {
    $(this).next().slideToggle()
    $(this).toggleClass('active')
  })

  $('.menu__btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active')
  })

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });


  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--list');
  });

  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
  });

  $('.product-slide__thumbs').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    vertical: true,
    draggable: false
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumbs',
    draggable: false,
    arrows: false
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    // autoplay: true,
    autoplaySpeed: 2000
  });
  $('.blog-page__slider').slick({
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="9pt" height="16pt" viewBox="0 0 9 16" version="1.1"><g><path d="M 1.113281 7.46875 L 5.894531 3.21875 C 6.226562 2.925781 6.761719 2.925781 7.085938 3.21875 L 7.882812 3.925781 C 8.210938 4.21875 8.210938 4.695312 7.882812 4.984375 L 4.496094 8 L 7.886719 11.011719 C 8.214844 11.304688 8.214844 11.78125 7.886719 12.070312 L 7.089844 12.78125 C 6.761719 13.074219 6.226562 13.074219 5.898438 12.78125 L 1.117188 8.53125 C 0.785156 8.238281 0.785156 7.761719 1.113281 7.46875 Z M 1.113281 7.46875 "/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="9pt" height="16pt" viewBox="0 0 9 16" version="1.1"><g><path d="M 7.886719 8.53125 L 3.105469 12.78125 C 2.773438 13.074219 2.238281 13.074219 1.914062 12.78125 L 1.117188 12.074219 C 0.789062 11.78125 0.789062 11.304688 1.117188 11.015625 L 4.507812 8.003906 L 1.117188 4.992188 C 0.789062 4.695312 0.789062 4.222656 1.117188 3.929688 L 1.910156 3.21875 C 2.238281 2.925781 2.773438 2.925781 3.101562 3.21875 L 7.882812 7.46875 C 8.214844 7.761719 8.214844 8.238281 7.886719 8.53125 Z M 7.886719 8.53125 "/></g></svg></button>'
  });

  $('.slick-arrow').on('click', function() {
    $('.slick-arrow').removeClass('slick-arrow--active');
    $(this).addClass('slick-arrow--active')
  });

  $('.select-style, .product-one__item-num').styler();

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    }
  });

  $('.star').rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: "true",
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14pt" height="14pt" viewBox="0 0 14 14" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;"d="M 6.304688 0.484375 L 4.71875 4.109375 L 1.164062 4.6875 C 0.527344 4.792969 0.273438 5.675781 0.734375 6.183594 L 3.300781 9 L 2.695312 12.976562 C 2.585938 13.695312 3.261719 14.234375 3.824219 13.898438 L 7 12.019531 L 10.175781 13.898438 C 10.738281 14.230469 11.414062 13.695312 11.304688 12.976562 L 10.699219 9 L 13.265625 6.183594 C 13.726562 5.675781 13.472656 4.792969 12.835938 4.6875 L 9.28125 4.109375 L 7.695312 0.484375 C 7.414062 -0.15625 6.589844 -0.167969 6.304688 0.484375 Z M 6.304688 0.484375 "/></g></svg >'
  });

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.querySelector('.promo__clock');
  const daysSpan = clock.querySelector('.promo__days');
  const hoursSpan = clock.querySelector('.promo__hours');
  const minutesSpan = clock.querySelector('.promo__minutes');
  const secondsSpan = clock.querySelector('.promo__seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}
const deadline = $('.promo__clock').attr('data-time');
initializeClock('promo__clock', deadline);

});