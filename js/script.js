$(function () {
    // ========= NAVBAR ANIMATION =========
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 10) {
            $("#navbar").addClass("navbar_animate");
        }
        else {
            $("#navbar").removeClass("navbar_animate");
        }
    });
})