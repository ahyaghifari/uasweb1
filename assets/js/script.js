$(document).ready(function () {
    $('#nav-toggler').on('click', function () {
        $('#nav-list').toggleClass('active')
    })

    $('.theme-mode-toggler').on('click', function () {
        if ($('.theme-mode-toggler').hasClass('dark')) {
            $('.theme-mode-toggler').removeClass('dark')
            $('.theme-mode-toggler').html('Light Mode')
            $('.theme-mode-toggler').addClass('light')
            $('html').removeClass('dark')
        } else {
            $('.theme-mode-toggler').removeClass('light')
            $('.theme-mode-toggler').html('Dark Mode')
            $('.theme-mode-toggler').addClass('dark')
            $('html').addClass('dark')
        }
    })

});