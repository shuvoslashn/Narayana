/*
==========================================================
        * Author        : "Shuvo3664"
        * Template Name : Narayana | HTML Template
        * Version       : 1.0.0
==========================================================
=================== TABLE OF CONTENTS ====================
        
                
                01. Start Menu JS
                02. Revolution Slider JS
                03. Video Popup JS
                04. Masonry JS
                05. Feedback JS ( slick slider )
                06. Counter JS
                07. Client JS ( slick slider )
                08. Replay Button JS
                09. Load More JS
                10. Back Top Button JS
                11. Preloader JS

                
==========================================================
*/

$(document).ready(function () {
    "use strict";

/*--------------------------------------------------------
                01. Start Menu JS
---------------------------------------------------------*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar-dark').addClass('menu-shrink');
        } else {
            $('.navbar-dark').removeClass('menu-shrink');
        }
    });

    $('.navbar-nav .nav-item .nav-link').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    $(document).on('click', '.navbar-collapse.show', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
            $('.nav-icon').removeClass('open');
        }
    });

    $('.navbar-toggler').click(function () {
        $('.nav-icon').toggleClass('open');
    });

/*--------------------------------------------------------
                02. Revolution Slider JS
---------------------------------------------------------*/
    var tpj = jQuery;

    var revapi1078;
    tpj(document).ready(function () {
        if (tpj("#rev_slider_1078_1").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_1078_1");
        } else {
            revapi1078 = tpj("#rev_slider_1078_1").show().revolution({
                sliderType: "standard",
                jsFileLocation: "revolution/js/",
                sliderLayout: "fullwidth",
                dottedOverlay: "none",
                delay: 9000,
                navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    mouseScrollReverse: "default",
                    onHoverStop: "off",
                    touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    }
                    ,
                    arrows: {
                        style: "zeus",
                        enable: true,
                        hide_onmobile: true,
                        hide_under: 500,
                        hide_onleave: true,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 30,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 30,
                            v_offset: 0
                        }
                    }
                    ,
                    bullets: {
                        enable: true,
                        hide_onmobile: true,
                        hide_under: 600,
                        style: "metis",
                        hide_onleave: true,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        direction: "horizontal",
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 30,
                        space: 5,
                        tmp: '<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
                    }
                },
                viewPort: {
                    enable: true,
                    outof: "pause",
                    visible_area: "80%",
                    presize: false
                },
                responsiveLevels: [1240, 1024, 778, 480],
                visibilityLevels: [1240, 1024, 778, 480],
                gridwidth: [1240, 1024, 778, 480],
                gridheight: [680, 650, 650, 700],
                lazyType: "none",
                parallax: {
                    type: "mouse",
                    origo: "slidercenter",
                    speed: 2000,
                    levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 47, 48, 49, 50, 51, 55],
                    type: "mouse",
                },
                shadow: 0,
                spinner: "off",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            });
        }
    });

/*--------------------------------------------------------
                03. Video Popup JS
---------------------------------------------------------*/
    $(".js-modal-btn").modalVideo();


/*--------------------------------------------------------
                04. Masonry JS
---------------------------------------------------------*/
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-sizer'
        }
    });

    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        var target = $(event.target);   
        target.siblings().removeClass('btn-active');
        target.addClass('btn-active');
        $grid.isotope({ filter: filterValue });
    });

/*--------------------------------------------------------
                05. Feedback JS ( slick slider )
---------------------------------------------------------*/
    $('.center').slick({
        centerMode: true,
        centerPadding: '0px',
        autoplay: true,
        arrows: true,
        slidesToShow: 3,
        prevArrow: '<i class="icofont-block-left arrow-left"></i>',
        nextArrow: '<i class="icofont-block-right arrow-right"></i>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });


/*--------------------------------------------------------
                06. Counter JS
---------------------------------------------------------*/
    $('.counter').counterUp({
        delay: 10,
        time: 4000
    });


/*--------------------------------------------------------
                07. Client JS ( slick slider )
---------------------------------------------------------*/
    $('.client').slick({
        centerMode: true,
        centerPadding: '0px',
        autoplay: true,
        arrows: false,
        pauseOnHover: false,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
            }
        ]
    });


/*--------------------------------------------------------
                08. Replay Button JS
---------------------------------------------------------*/
    $('.replay-1').click(function () {
        $('.comment-replay-1').slideToggle(250);
    });

    $('.replay-2').click(function () {
        $('.comment-replay-2').slideToggle(250);
    });

    $('.replay-3').click(function () {
        $('.comment-replay-3').slideToggle(250);
    });


/*--------------------------------------------------------
                09. Load More JS
---------------------------------------------------------*/
    $(".media-hidden").slice(0, 3).show();
    $("#load-more").on('click', function (e) {
        e.preventDefault();
        $(".media-hidden:hidden").slice(0, 1).slideDown();
        if ($(".media-hidden:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
    });



/*--------------------------------------------------------
                10. Back Top Button JS
---------------------------------------------------------*/
    $('body').append('<div id="toTop" class="top-button"><i class="icofont-swoosh-up"></i></div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 5000) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

/*--------------------------------------------------------
                11. Preloader JS
---------------------------------------------------------*/
    jQuery(window).on('load', function () {
        jQuery(".preloader").fadeOut(500);
    });


});