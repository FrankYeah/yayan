$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        // merge: true,
        // margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoWidth: true,
        // URLhashListener: true,
        // autoplayHoverPause: true,
        // startPosition: 'URLHash',
        // dotsContainer: '.custom-dots',
        // responsiveRefreshRate: 0,
        responsive: {
          0: {
            autoWidth: false
          },
          992: {
            autoWidth: false
          }
        }
      });

})