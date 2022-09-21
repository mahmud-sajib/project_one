$(document).ready(function () {
    var stickyNavTop = $('.navbar-nav').offset().top;

    var stickyNav = function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('.navbar-nav').addClass('sticky');
        } else {
            $('.navbar-nav').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function () {
        stickyNav();
    });
});