$(document).ready(function(){

    var swiper = new Swiper('.swiper-container', {
      lazy: true,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    var fullBox = document.getElementById("fullBox");
    var fullInner = document.getElementById("fullInner");
    var leftArrow = document.getElementById("leftArrow");
    var rightArrow = document.getElementById("rightArrow");
    var bg1 = document.getElementById("bg1");
    var bg2 = document.getElementById("bg2");
    var bg3 = document.getElementById("bg3");
    var bg4 = document.getElementById("bg4");
    var bg5 = document.getElementById("bg5");
    var bg5 = document.getElementById("bg5");
    fullBox.addEventListener('click', function(event){
        $(fullBox).css('display', 'none');
    })

    fullInner.addEventListener('click', function(event){
        event.stopPropagation();
    })

    leftArrow.addEventListener('click', function(event){
        event.stopPropagation();
        swiper.slidePrev(600)
    })

    rightArrow.addEventListener('click', function(event){
        event.stopPropagation();
        swiper.slideNext(600)
    })

    bg1.addEventListener('click', function(){
        $(fullBox).css('display', 'flex');
        swiper.slideTo(1);
    })

    bg2.addEventListener('click', function(){
        $(fullBox).css('display', 'flex');
        swiper.slideTo(2);
    })

    bg3.addEventListener('click', function(){
        $(fullBox).css('display', 'flex');
        swiper.slideTo(3);
    })

    bg4.addEventListener('click', function(){
        $(fullBox).css('display', 'flex');
        swiper.slideTo(4);
    })
    
    bg5.addEventListener('click', function(){
        $(fullBox).css('display', 'flex');
        swiper.slideTo(5);
    })

    bg6.addEventListener('click', function(){
        $(fullBox).css('display', 'flex');
        swiper.slideTo(6);
    })





  })