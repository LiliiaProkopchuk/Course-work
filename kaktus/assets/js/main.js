$(document).ready(function () {

    $('.slider-top').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.slider-kaktus').slick({
        dots: false,
        arrows: false,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    dots: true
                }
            }
        ]
    });

    $('.slider-succulent').slick({
        dots: false,
        arrows: false,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    dots: true
                }
            }
        ]
    });

    $('.slider-news').slick({
        dots: false,
        arrows: false,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    dots: true
                }
            }
        ]
    });

    $('.slider-bottom').slick({
        dots: false,
        arrows: false,
        centerMode: true,
        variableWidth: true,
        slidesToScroll: 1
    });

    //       Menu
    $(".header_burger").click(function (event) {
        $(".header_burger, .header_menu").toggleClass("active");
        $("body").toggleClass("lock");
    });
});

function PrevSlideBottom() {
    $(".slider-bottom").slick('slickPrev');
}
function NextSlideBottom() {
    $(".slider-bottom").slick('slickNext');
}

function PrevSlideKaktus() {
    $(".slider-kaktus").slick('slickPrev');
}
function NextSlideKaktus() {
    $(".slider-kaktus").slick('slickNext');
}

function PrevSlideSucculent() {
    $(".slider-succulent").slick('slickPrev');
}
function NextSlideSucculent() {
    $(".slider-succulent").slick('slickNext');
}

function PrevSlideNews() {
    $(".slider-news").slick('slickPrev');
}
function NextSlideNews() {
    $(".slider-news").slick('slickNext');
}
let isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
let body = document.querySelector('body');
if (isMobile.any()) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.arrow');
    for (i = 0; i < arrow.length; i++) {
        let thisLink = arrow[i].previousElementSibling;
        let subMenu = arrow[i].nextElementSibling;
        let thisArrow = arrow[i];

        arrow[i].addEventListener('click', function () {
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        });
    }
} else {
    body.classList.add('mouse');
}

    // stars 1
/*   $(function () {
       $('#example').barrating({
           theme: 'css-stars'
       });
   });
   //stars 2
   $('div.rating').rating();  */