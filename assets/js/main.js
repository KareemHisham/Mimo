$(document).ready(function() {
    "use strict";
    $(".owl-carousel").owlCarousel({
        items:1,
        dots: false,
        nav: true,
        margin: 20
    });

    // Dashboard Page
    $(".dashboard-body .sidebar li").click(function() {
        $(this).addClass("active").siblings().removeClass("active")
    });
    $(".dashboard-body .sidebar .icon-change").click(function() {
        $(".dashboard-body .sidebar").toggleClass("move-side");
        if($(".dashboard-body .sidebar").hasClass("move-side")) {
            $("body").css("overflow", "hidden");
        } else {
            $("body").css("overflow", "auto");
        }
    });
    // Pricing Page
    $(".price-body ul li").click(function(){
        $(this).find(".right-arrow").addClass("active").parent().siblings().find(".right-arrow").removeClass("active");
        $(".price-content .items > div").css("display", "none");
        $($(this).data("content")).fadeIn()
    })
});
