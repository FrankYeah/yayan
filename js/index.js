$(document).ready(function () {
  //   $('.owl-carousel').owlCarousel({
  //     loop: true,
  //     items: 1,
  //     autoplay: true,
  //     autoplayTimeout: 5000,
  //     lazyLoad: false,
  //     // startPosition: 1,
  //     // animateIn: 'fadeIn',
  //     // animateOut: 'fadeOut',
  //   });
  window.onload = function () {
    console.log('123');
    var owl = $('.owl-carousel').owlCarousel({
      loop: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      lazyLoad: false,
    });
    owl.trigger('to.owl.carousel', [1]);
  };

  // var menuOpen = document.getElementById("menuOpen");
  // var menuClose = document.getElementById("menuClose");
  // var menu = document.getElementById("menu");

  // menuOpen.addEventListener("click", function(){
  //     $(menu).css('display', 'inline');
  // });

  // menuClose.addEventListener("click", function(){
  //     $(menu).css('display', 'none');
  // });
});
