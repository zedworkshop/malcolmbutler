$(document).ready(function() {

    $(".js-jumplink").click(function(e) {
        e.preventDefault();

        var t = $(this).attr('href');

        console.log($(t).offset().top);
        $('html, body').animate({
            scrollTop: $(t).offset().top
        }, 1000);
    });

    $('.js-nav-toggle').click(function(e) {
        e.preventDefault();

        if (!$('.nav-active').length) {
            $('body').addClass('nav-active');
        } else {
            $('body').removeClass('nav-active');
        }

    });

});