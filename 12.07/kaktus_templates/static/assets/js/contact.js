$(document).ready(function () {
    //       Menu
    $(".header_burger").click(function (event) {
        $(".header_burger, .header_menu").toggleClass("active");
        $("body").toggleClass("lock");
    });

    let = map;

    map = L.map('map').setView([46.970835, 31.991487], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var marker = L.marker([46.970835, 31.991487]).addTo(map);
    marker.bindPopup("<b>Hamatis</b><br>Succulent shop").openPopup();
});
