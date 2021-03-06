$(document).ready(function () {
    let starListTop = $('.star-ratings-css-top span');
    let starListBottom = $('.star-ratings-css-bottom span');

    $('.openMenu').click(function (e) { 
        e.preventDefault();
        $('.nav').toggleClass('show');
    });

    $('.openSidebar').click(function (e) { 
        e.preventDefault();
        isShowSidebar();
        $('.sidebar').toggleClass('show');
    });

    $('.sidebar .nav-item.dropdown-item').click(function (e) {
        e.preventDefault();
        $('.sidebar .nav-item.dropdown-item').siblings().removeClass('active');
        $(this).addClass('active');
    })

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
            $('body').css('margin-left', '0');
            $('.openSidebar').css('right', '0');
            $('.openMenu').css('right', '0');
            $('.sidebar').removeClass('show');
        }
    })

    // hoverRatings(starListTop);
    // hoverRatings(starListBottom);
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

function hoverRatings(obj) {
    $(obj).mouseover(function (e) { 
        let width = 0;
        width = 20 * ($(this).index() + 1);
        $(e.target).parents().siblings('.star-ratings-css-top').css('width', `${width}%`);
    })
        .mouseout(function(e) {
            $(e.target).parents().siblings('.star-ratings-css-top').css('width', '0');
        })
    ;
}