$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        center:true,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            },

            1000:{
                items:3
            }
        }
    });
});