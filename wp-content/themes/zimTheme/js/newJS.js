jQuery(document).ready(function ($) {

    $(document).on('click','.comButtonSingle',function (){
        if($('#telMask').val() == ''){
            $('.errorPhone').fadeIn();
        }else {
            $('.errorPhone').fadeOut();
        }
    });
    $("#form-single-commercial").submit(function () {
        var str = $(this).serialize();
        str = str + '&url=' + document.URL;
        $(this).find('.modal__body-btn-close').addClass('loadedButton');
        $.ajax({
            type: "POST",
            url: "/wp-content/themes/zimTheme/contactPhp/form-single-commercial.php",
            data: str,
            success: function (msg) {
                $('.modal-single-commercial').fadeOut();
                $('.modal__body-btn-close').removeClass('loadedButton');
                $('#thanksModal').fadeIn();
                $('body').addClass('popup-active');
            }
        });
        return false;
    });
    $("#contactsBlockForm").submit(function () {
        var str = $(this).serialize();
        $(this).find('.contacts__form-btn').addClass('loadedButton');
        $.ajax({
            type: "POST",
            url: "/wp-content/themes/zimTheme/contactPhp/formContacts.php",
            data: str,
            success: function (msg) {
                $('input').val('');
                $('textarea').val('');
                $('.contacts__form-btn').removeClass('loadedButton');
                $('#thanksModal').fadeIn();
                $('body').addClass('popup-active');
            }
        });
        return false;
    });

    $("#formCallBack").submit(function () {
        var str = $(this).serialize();
        $(this).find('.contacts__form-btn').addClass('loadedButton');
        $.ajax({
            type: "POST",
            url: "/wp-content/themes/zimTheme/contactPhp/formCallBack.php",
            data: str,
            success: function (msg) {
                $('#modalCallBack').removeClass('active');
                $('input').val('');
                $('textarea').val('');
                $('.contacts__form-btn').removeClass('loadedButton');
                $('#thanksModal').fadeIn();
                $('body').addClass('popup-active');
            }
        });
        return false;
    });


    $(document).on('click','.closeThanksModal, thanks-close-modal',function () {
        $('#thanksModal').fadeOut();
        $('body').removeClass('popup-active');
    });

    $(window).scroll(function scrollLoadStyleMap() {
        if ($(window).scrollTop() > 50) {
            $('body').append('<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2Zq7VBtQJJ41xXy6EuxQoQm0k5J31zBw&callback=initMap"></script>');
            $(window).off("scroll", scrollLoadStyleMap);
        }
    });

    $(document).on('click','.closeRost',function () {
        $('.blockNagr').fadeOut();
    });

    $(document).on('click','.modal__btn-close',function () {
        $('#thanksModal').fadeOut();
    });

});