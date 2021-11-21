$(document).ready(function () {
    $('.openMenu').click(function (e) { 
        e.preventDefault();
        $('.nav').toggleClass('show');
    });

    $('.openSidebar').click(function (e) { 
        e.preventDefault();
        isShowSidebar();
        $('.sidebar').toggleClass('show');
    });

    $(document).on('click', function (e) {
        if ( !( ($(e.target).parents('.nav').length) || ($(e.target).hasClass('nav-link')) 
        || ($(e.target).parents('.openMenu').length) || ($(e.target).hasClass('openMenu')) ) ) {
            $('.nav').removeClass('show');
        }
    })

    $(document).on('click', function (e) {
        if ( !( ($(e.target).parents('.sidebar').length) || ($(e.target).hasClass('nav-link')) 
        || ($(e.target).parents('.openSidebar').length) || ($(e.target).hasClass('openSidebar')) 
        || ($(e.target).parents('.openMenu').length) || ($(e.target).hasClass('openMenu')) ) ) {
            isShowSidebar();
            $('.sidebar').removeClass('show');
        }
    })
});

function isShowSidebar() {
    if ($('.sidebar').hasClass('show')) {
        $('body').css('margin-left', '0');
        $('.openSidebar').css('right', '0');
        $('.openMenu').css('right', '0');
    } else {
        $('body').css('margin-left', '240px');
        $('.openSidebar').css('right', '240px');
        $('.openMenu').css('right', '240px');
    }
}