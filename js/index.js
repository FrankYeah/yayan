$(document).ready(function () {
  window.onload = function () {
    var owl = $('.owl-carousel').owlCarousel({
      loop: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 3000,
      // lazyLoad: true,
      // animateIn: 'fadeIn',
      // animateOut: 'fadeOut',
      animateIn: 'fadeLeftInLeft',
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
