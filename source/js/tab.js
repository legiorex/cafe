$(document).ready(function () {
    $('.team__link').on('click',function(e) {
        e.preventDefault();

        var
            $this = $(this),
            item = $this.closest('.team__item'),
            container = $this.closest('.team'),
            contentLeft = container.find('.team__text--fist'),
            contentRight = container.find('.team__text'),
            ndx = item.index();

        item
            .addClass('active')
            .siblings()
            .removeClass('active');

        contentRight.eq(ndx)
            .removeClass('is-hidden')
            .siblings()
            .addClass('is-hidden');

        contentLeft.eq(ndx)
            .removeClass('is-hidden')
            .siblings()
            .addClass('is-hidden');


    });
});
