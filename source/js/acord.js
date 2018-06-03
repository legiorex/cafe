$(document).ready(function() {

    //прикрепляем клик по заголовкам к классу faq__item--name
    $('.faq__item--name').on('click', f_acc);

});

function f_acc(){

//скрываем все кроме того, что должны открыть
    $('.faq__item--desc').not($(this).next()).stop(true, true).slideUp(1000);
// открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().stop(true, true).slideToggle(2000);
}

// (function () {
//     $('.faq__item--name').on('click',function(e) {
//         e.preventDefault();
//
//         var
//             $this = $(this),
//             container = $this.closest('.faq'),
//             faqItem = $this.closest('.faq__item'),
//             content = faqItem.find('.faq__item--desc'),
//
//             duration = 500;
//
//         if(content.hasClass('is-hidden')){
//
//             // content.removeClass('is-hidden');
//             content.slideUp(duration);
//         }else {
//             // content.addClass('is-hidden');
//             content.slideDown(duration);
//         }
//     });
// })();
