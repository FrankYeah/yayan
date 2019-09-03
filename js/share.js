var menuOpen = document.getElementById("menuOpen");
var menuClose = document.getElementById("menuClose");
var menu = document.getElementById("menu");

menuOpen.addEventListener("click", function(){
    $(menu).css('display', 'inline');
});

menuClose.addEventListener("click", function(){
    $(menu).css('display', 'none');
});