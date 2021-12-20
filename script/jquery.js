
$(document).ready(function(){
    $(".con2-nav-main01").mouseover(function(){
        $(".con-nav-background01").stop().slideDown();
        $(".con2-nav-main01").css({"background":"#333"});
        $(".con2-nav-main01>a").css({"color":"#fff"});
    });
    $(".con2-nav-main01").mouseleave(function(){
        $(".con-nav-background01").stop().slideUp();
        $(".con2-nav-main01").css({"background":"#fff"});
        $(".con2-nav-main01>a").css({"color":"#222"});
    });
    $(".con2-nav-main02").mouseover(function(){
        $(".con-nav-background02").stop().slideDown();
        $(".con2-nav-main02").css({"background":"#333"});
        $(".con2-nav-main02>a").css({"color":"#fff"});
    });
    $(".con2-nav-main02").mouseleave(function(){
        $(".con-nav-background02").stop().slideUp();
        $(".con2-nav-main02").css({"background":"#fff"});
        $(".con2-nav-main02>a").css({"color":"#222"});
    });

const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 30,
    debugger: true,
    mousewheel: true,
    loop: true,
    centeredSlides: true,  effect: 'fade',
    autoplay: {
        delay: 3500,
        disableOnInteraction: false, },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev', 
    }, 
});

$('.nav-itsme').click(function(){
    var offset = $('.content01').offset();
    $('html').animate({scrollTop : offset.top}, 600);
});
$('.nav-skill').click(function(){
    var offset = $('.content02').offset();
    $('html').animate({scrollTop : offset.top}, 600);
});
$('.nav-porfolio').click(function(){
    var offset = $('.content03').offset();
    $('html').animate({scrollTop : offset.top}, 600);
});
$('.nav-info').click(function(){
    var offset = $('.footer').offset();
    $('html').animate({scrollTop : offset.top}, 600);
});
$('.actionBtn5').click(function(){
    var offset = $('.content03').offset();
    $('html').animate({scrollTop : offset.top}, 600);
});



})
