'use strict';

/*tooltip*/
$('.tooltip').mouseover(function(e) {
    $(this).append(`<span class="tooltip-content">${e.target.dataset.tooltip}</span>`);
}).mouseout(function() {
    $(this).find('span').remove();
});

/*list*/
$('.list-title').click(function () {
    $(this).toggleClass('active');
});

/*tabs*/
$(window).on('hashchange', function() {
    $('.tab-content div').hide();
    $(location.hash).show();
}).trigger('hashchange');
