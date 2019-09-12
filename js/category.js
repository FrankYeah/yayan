$(document).ready(function(){



  var swiper = new Swiper('.swiper-container', {
    lazy: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  document.querySelector('.next-img').addEventListener('click', function(){
    swiper.slideNext()
  })

})