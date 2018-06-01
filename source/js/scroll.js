
$(document).ready(function () {
    $(".nav").on("click", "a", function (event) {
        event.preventDefault();

        var scrollBlock = $(this).attr('href'),

            top = $(scrollBlock).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);
    });
});