
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
    
})



