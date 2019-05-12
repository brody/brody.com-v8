// Mobile Nav Expand & Theme Toggle

$(function () {
    $("#sandwich").on("click", function () {
        $("#menu").toggleClass("hidden");
        $("#theme-toggle").toggleClass("hidden");
        $("#nav").toggleClass("nav-open");
    });
    $("#toggle-day").on("click", function () {
        Cookies.set('theme', 'day', { expires: 7 });
        $("html").removeClass("night");
        $("html").removeClass("font-mono");
        $("html").addClass("day");
        $("#theme-toggle svg").removeClass("text-primary-01");
        $(this).find("svg").addClass("text-primary-01");
        if ($("html").hasClass("konami")) {
            draw();
            $("html").removeClass("konami");
        };
    });
    $("#toggle-night").on("click", function () {
        Cookies.set('theme', 'night', { expires: 7 });
        $("html").removeClass("day");
        $("html").removeClass("font-mono");
        $("html").addClass("night");
        $("#theme-toggle svg").removeClass("text-primary-01");
        $(this).find("svg").addClass("text-primary-01");
        if ($("html").hasClass("konami")) {
            $("html").removeClass("konami");
            draw();
        };
    });
    $("#peace").on("click", function () {
        Cookies.set('theme', 'konami', { expires: 7 });
        $("html").addClass("konami");
        $("html").removeClass("night");
        $("html").removeClass("day");
        $("html").addClass("font-mono");
        $("#theme-toggle svg").removeClass("text-primary-01");
        draw();
        (function smoothscroll(){
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                 window.requestAnimationFrame(smoothscroll);
                 window.scrollTo (0,currentScroll - (currentScroll/12));
            }
        })();
    });
});

// Logo Collapse

$(window).scroll(function(){
    if ($(this).scrollTop() > 54) {
       $('#logo').addClass('collapse');
    } else {
       $('#logo').removeClass('collapse');
    }
});


// Smooth Scroll to Anchor

$("a[href='/#work']").on("click", function () {
    $("html, body").animate({
        scrollTop: $("#work").offset().top-180
    }, 1000);
    $("#menu").toggleClass("hidden");
    $("#theme-toggle").toggleClass("hidden");
    $("#nav").toggleClass("nav-open");
});
