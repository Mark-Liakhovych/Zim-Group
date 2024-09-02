jQuery(document).ready(function ($) {


  $(document).ready(function () {
    $.fn.setCursorPosition = function (pos) {
      if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
      } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    };

    $('.form__wrapper input[type="tel"]').click(function () {
      $(this).setCursorPosition(5);
    }).mask("+38-099-999-99-99");

    $('.form__wrapper input[name="code"]').click(function () {
      $(this).setCursorPosition(0);
    }).mask("9999999999:99:999:9999");

    $(window).on('load', function () {
      let hash = $('input[checked]').attr('id');
      let emailTo = $('.' + hash).data('email');
      $('.form__hiddend-inp').val(emailTo);
    });

    $('.invite__form-select-btn').on('click', function () {
      let emailTo = $(this).data('email');
      $('.form__hiddend-inp').val(emailTo);
    });

    $('#upload').change(function (e) {
      $('.form__controlls-text').html(e.target.files[0].name);
    });

    $('.invite__form').submit(function (e) {
      e.preventDefault();
      let formData = new FormData(this);
      $.ajax({
        enctype: 'multipart/form-data',
        type: "POST",
        url: "/wp-content/themes/zimTheme/sendform/sendform.php",
        data: formData,
        success: function (msg) {
          Swal.fire({
            icon: 'success',
            title: "Дякую!",
            text: "Ми отримали Вашу заявку. Скоро наш консультант зв'яжеться з вами.",
            confirmButtonText: "Закрити!",
          });
          $('.form__inp').val('');
          $('.form__textarea').val('');
          $('.form__controlls-text').html('завантажте файл');
        },
        cache: false,
        contentType: false,
        processData: false,
      });
    });
  });
});