$(document).ready(function() {

    $('body').addClass('loaded');

    $(".js-jumplink").click(function(e) {
        e.preventDefault();

        var t = $(this).attr('href');

        console.log($(t).offset().top);
        $('html, body').animate({
            scrollTop: $(t).offset().top
        }, 1000);
    });

});
