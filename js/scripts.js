$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        center: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 2000,
        navText: ['', ' '],

        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },

            1000: {
                items: 3
            }
        }

    });
});

$(document).ready(function () {
    $('.header_burger').click(function (event) {
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


$(document).ready(function () {
    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });
});
