$(document).ready(function () {
    $('.team__item').on('click',function (e) {

        var teamTab = $('.team__list');
        var ndx = $(this).index;
        console.log(ndx);
        $(this)
            .addClass('active')
            .siblings()
            .removeClass('active');
    });
});