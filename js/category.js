$(document).ready(function(){

  if(window.screen.availWidth > 1023) {
    // 電腦版

    var swiper = new Swiper('.swiper-container', {
      lazy: true,
      // loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  } else {

    // 手機版

    var swiper = new Swiper('.swiper-container', {
      lazy: true,
      // loop: true,
      effect: 'coverflow',
      slidesPerView: '2',
      spaceBetween: 30,
      centeredSlides: true,
      initialSlide: 3,
      mousewheel: true,
      grabCursor: true,
      mousewheelControl: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

  }


  // 電腦版點擊

  document.querySelector('.next-img').addEventListener('click', function(){
    swiper.slideNext()
  })

  // 手機版選單點擊

  var selectForm = document.getElementById('selectForm');
  var formOpen = document.getElementById('formOpen');

  selectForm.addEventListener('click', function() {
    formOpen.style.display = 'flex'
  })

  formOpen.addEventListener('click', function() {
    formOpen.style.display = 'none'
  })

})