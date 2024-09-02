let needP = -1;
$(document).on('click', '.itemDotSlide', function () {
    $('.itemDotSlide').removeClass('acitveDotAnimate');
    $(this).addClass('acitveDotAnimate');
    let thisIndex = $(this).index();
    let marginDots = 320;
    if ($(window).width() <= 1500)
        marginDots = 250;
    if ($(window).width() <= 1200)
        marginDots = 150;
    // let movePxLeft = (parseInt(thisIndex) * 10 + parseInt(thisIndex) * marginDots + 10) * -1;
    let movePxLeft = (parseInt(thisIndex) * 10 + parseInt(thisIndex) * marginDots) * -1;
    $('.blockDotsSlider').css({
        "-webkit-transform": "translateX(" + movePxLeft + "px)",
        "-ms-transform": "translateX(" + movePxLeft + "px)",
        "transform": "translateX(" + movePxLeft + "px)"
    });
    if (thisIndex != needP) {
        $('.owlFeedAnimated .owl-item.active').removeClass('active');
        setTimeout(function () {
            $('.owlFeedAnimated').trigger('to.owl.carousel', thisIndex);
        }, 1000);
    }
    needP = thisIndex;
});
$(document).on('click', '.triangleAnimFirst', function () {
    let needIndex = $('.itemDotSlide.acitveDotAnimate').index() - 1;
    if(needIndex != -1){
        $('.itemDotSlide').removeClass('acitveDotAnimate');
        let thisIndex = needIndex;
        let nthChildIndex = needIndex + 1;
        $('.itemDotSlide:nth-child(' + nthChildIndex + ')').addClass('acitveDotAnimate');
        let marginDots = 320;
        if ($(window).width() <= 1500)
            marginDots = 250;
        if ($(window).width() <= 1200)
            marginDots = 150;
        // let movePxLeft = (parseInt(thisIndex) * 10 + parseInt(thisIndex) * marginDots + 10) * -1;
        let movePxLeft = (parseInt(thisIndex) * 10 + parseInt(thisIndex) * marginDots) * -1;
        $('.blockDotsSlider').css({
            "-webkit-transform": "translateX(" + movePxLeft + "px)",
            "-ms-transform": "translateX(" + movePxLeft + "px)",
            "transform": "translateX(" + movePxLeft + "px)"
        });
        if (thisIndex != needP) {
            $('.owlFeedAnimated .owl-item.active').removeClass('active');
            setTimeout(function () {
                $('.owlFeedAnimated').trigger('to.owl.carousel', thisIndex);
            }, 1000);
        }
        needP = thisIndex;
    }
});
$(document).on('click', '.triangleAnimLast', function () {
    let needIndex = $('.itemDotSlide.acitveDotAnimate').index() + 1;
    let lengthItemsAnim = $('.itemDotSlide').length;
    if(needIndex != lengthItemsAnim){
        $('.itemDotSlide').removeClass('acitveDotAnimate');
        let thisIndex = needIndex;
        let nthChildIndex = needIndex + 1;
        $('.itemDotSlide:nth-child(' + nthChildIndex + ')').addClass('acitveDotAnimate');
        let marginDots = 320;
        if ($(window).width() <= 1500)
            marginDots = 250;
        if ($(window).width() <= 1200)
            marginDots = 150;
        // let movePxLeft = (parseInt(thisIndex) * 10 + parseInt(thisIndex) * marginDots + 10) * -1;
        let movePxLeft = (parseInt(thisIndex) * 10 + parseInt(thisIndex) * marginDots) * -1;
        $('.blockDotsSlider').css({
            "-webkit-transform": "translateX(" + movePxLeft + "px)",
            "-ms-transform": "translateX(" + movePxLeft + "px)",
            "transform": "translateX(" + movePxLeft + "px)"
        });
        if (thisIndex != needP) {
            $('.owlFeedAnimated .owl-item.active').removeClass('active');
            setTimeout(function () {
                $('.owlFeedAnimated').trigger('to.owl.carousel', thisIndex);
            }, 1000);
        }
        needP = thisIndex;
    }
});


let needAddOpenMenu = true;
$(document).on('click', '.menuButtonHeaderAnimation', function () {
    $(this).addClass('activeMenu');
    $('.blockHideShowImg').addClass('openBgForMenu');
    $('.blockDotsSlider').addClass('hideLineAnimate');
    $('.blockMenuAnimation').addClass('showCircleMenu');
    $('.blockMenuAnimation').fadeIn(1000);
    setTimeout(function () {
        if (needAddOpenMenu){
            $('.insideBlockMenuAnimation').addClass('openedMenu');
            $('.itemInsideBlockMenuAnimation span').css('font-size','14px');
        }
    }, 400);
});
$(document).on('click', '.activeMenu', function () {
    needAddOpenMenu = false;
    $(this).removeClass('activeMenu');
    $('.insideBlockMenuAnimation').removeClass('openedMenu');
    $('.blockMenuAnimation').removeClass('showCircleMenu');
    $('.blockMenuAnimation').fadeOut(1000);
    setTimeout(function () {
        $('.itemInsideBlockMenuAnimation span').css('font-size','0');
    }, 200);
    setTimeout(function () {
        $('.blockHideShowImg').removeClass('openBgForMenu');
    }, 500);
    setTimeout(function () {
        $('.blockDotsSlider').removeClass('hideLineAnimate');
        needAddOpenMenu = true;
    }, 1500);
});

