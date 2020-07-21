$(document).ready(function(){

    var swiper = new Swiper('.swiper-container', {
      loop: true,
      lazy: true,
      autoplay: 1000,
      slidesPerView: 1,
      spaceBetween: 30
    });

    var fullBox = document.getElementById("fullBox");
    var leftArrow = document.getElementById("leftArrow");
    var rightArrow = document.getElementById("rightArrow");
    var swiperContainer = document.getElementById('swiperContainer');
    var bg1 = document.getElementById("bg1");
    var bg2 = document.getElementById("bg2");
    var bg3 = document.getElementById("bg3");
    var bg4 = document.getElementById("bg4");
    var bg5 = document.getElementById("bg5");
    var bg5 = document.getElementById("bg5");
    var leftFloat = document.getElementsByClassName("left-float");
    

    fullBox.addEventListener('click', function(){
        $(fullBox).css('visibility', 'hidden');
    })

    swiperContainer.addEventListener('click', function(event){
        // event.stopPropagation();
    })

    leftArrow.addEventListener('click', function(event){
        swiper.slidePrev()
        event.stopPropagation();

    })

    rightArrow.addEventListener('click', function(event){
        swiper.slideNext()
        event.stopPropagation();
    })

    bg1.addEventListener('click', function(){
        $(fullBox).css('visibility', 'visible');
        swiper.slideTo(1);
    })

    bg2.addEventListener('click', function(){
        $(fullBox).css('visibility', 'visible');
        swiper.slideTo(2);
    })

    bg3.addEventListener('click', function(){
        $(fullBox).css('visibility', 'visible');
        swiper.slideTo(3);
    })

    bg4.addEventListener('click', function(){
        $(fullBox).css('visibility', 'visible');
        swiper.slideTo(4);
    })
    
    bg5.addEventListener('click', function(){
        $(fullBox).css('visibility', 'visible');
        swiper.slideTo(5);
    })

    bg6.addEventListener('click', function(){
        $(fullBox).css('visibility', 'visible');
        swiper.slideTo(6);
    })


    // 當滑到這裡要變色

    function detectScroll () {

        var windowHeight = $(window).height()
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var offsetTop = document.querySelector('.center-big-img').offsetTop


        // test

        // var windowHeightT = document.getElementById("windowHeight");
        // var scrollTopT = document.getElementById("scrollTop");
        // var offsetTopT = document.getElementById("offsetTop");

        // windowHeightT.textContent = windowHeight
        // scrollTopT.textContent = scrollTop
        // offsetTopT.textContent = offsetTop

        // test

        if (windowHeight + scrollTop > offsetTop) {
            leftFloat[0].style.color = '#604a40';
            document.querySelector('.right-fb').style.backgroundImage = "url('https://ik.imagekit.io/yayan/share/fb-brown_OHrsXSy-dC.png')";
            document.querySelector('.right-ig').style.backgroundImage = "url('https://ik.imagekit.io/yayan/share/ig-brown_1vMu4r0ct.png')";
            document.querySelector('.logo').style.backgroundImage = "url('https://ik.imagekit.io/yayan/share/icon-brown_VKLysCOjDJV.png')";
            document.querySelector('.menu-open').style.backgroundImage = "url('https://ik.imagekit.io/yayan/share/menu-brown_2lONjaIULr.png')";

        } else {
            leftFloat[0].style.color = 'white';
            document.querySelector('.right-fb').style.backgroundImage = "url('https://ik.imagekit.io/yayan/share/fb-white_OJOYYxm1v.png')";
            document.querySelector('.right-ig').style.backgroundImage = "url('https://ik.imagekit.io/yayan/share/ig-white_II5PBPhVB1.png')";
            document.querySelector('.logo').style.backgroundImage = "url('https://ik.imagekit.io/yayan/share/icon-white_GUI2kxaVEO.png')";
            document.querySelector('.menu-open').style.backgroundImage = "url('https://ik.imagekit.io/yayan/share/menu-white_UtPlT0nVo.png')";
        }
    }

    window.addEventListener('scroll', detectScroll)
    detectScroll()

  })