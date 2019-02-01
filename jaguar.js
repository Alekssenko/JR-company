
    $(document).ready(function () {
        $('.about-us-slider').slick({
            arrows: false,
            dots: true
        });
        $('#burger').click(function () {
            $('.header ul').toggleClass('show');
                           });
        $(window).resize(function () {
            if ($(window).width() >= 700) {
                $('.header ul').removeClass('show');

            }
        })
    });
