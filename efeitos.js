$(document).ready(function () {

    $(".livros").owlCarousel({
        loop: true,
        margin: 2,
        nav: true,
        navText: ["Anterior", "Próximo"],
        responsive: {
            0: {
                item: 1
            },
            720: {
                item: 3
            },
            1000: {
                item: 4
            },

        }
    });

});