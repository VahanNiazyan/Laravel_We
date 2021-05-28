$(document).ready(function () {

    $('.toggle li').on("click", function () {
        $('.toggle li').attr('class', '');
        $(this).filter('li').attr('class', 'different');
    })

    $('.thirt-a a').on("click", function () {
        $('.thirt-a a').attr('class', '');
        $(this).filter('a').attr('class', 'thirt-click');
    })

    $('.menu i').on("click", function () {
        $('.menu-down').toggleClass('tog');
    })

    $('.pricing-text .but').on("click", function () {
        $('.but').attr('id','');
        $(this).attr('id','button-color');
    })
})
