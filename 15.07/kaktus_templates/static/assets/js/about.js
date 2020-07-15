window.onload = function () {
    document.body.classList.add('loaded');
}

$(document).ready(function () {
    //       Menu
    $(".header_burger").click(function (event) {
        $(".header_burger, .header_menu").toggleClass("active");
        $("body").toggleClass("lock");
    });
});