$(document).ready(function(){

    $('.owl-carousel_1').owlCarousel({
        loop:true,
        autoplay: false,
        autoplayTimeout: 1000,
        margin:5,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:2
            }
        }
    });
    $('.owl-carousel_2').owlCarousel({
        loop:true,
        autoplay: false,
        autoplayTimeout: 1000,
        margin:5,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:4
            }
        }
    });
    $( function() {
        $( "#accordion" ).accordion();
    } );
});


