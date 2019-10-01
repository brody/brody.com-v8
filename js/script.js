// Theme toggle via local storage

// const themes = ['dark', 'light']

// const switchThemes = () => {
//     const body = document.querySelector('body')
//     const currentTheme = body.classList[0].replace('theme-', '')



//     const currentThemeIndex = themes.indexOf(currentTheme)
//     // move to next theme
//     const newTheme = `theme-${
//         themes[(currentThemeIndex + 1) % themes.length]
//     }`
//     body.classList = newTheme
//     localStorage.setItem('theme', newTheme)
// }

// window.addEventListener('DOMContentLoaded', () => {
//     const themeToggle = document.querySelector('#theme-toggle')
//     themeToggle.addEventListener('click', e => {
//         e.preventDefault()
//         switchThemes()
//     })

// })



// Toggle Dark Theme
// var d = document.documentElement,
//     t = document.querySelectorAll(".theme-btn")[0],
//     m = localStorage.getItem("theme");

// if (m == "dark") {
//     d.classList.add("theme-dark");
// }

// t.addEventListener("click", function () {
//     if (d.classList.contains("theme-dark")) {
//         d.classList.remove("theme-dark");
//         localStorage.removeItem("theme");
//     } else {
//         d.classList.add("theme-dark");
//         localStorage.setItem("theme", "dark");
//     }
// });






// Mobile Nav Expand & Theme Toggle

$(function () {
    $("#sandwich").on("click", function () {
        $("#menu").toggleClass("hidden");
        $("#theme-toggle").toggleClass("hidden");
        $("#nav").toggleClass("nav-open");
    });
    $("#toggle-day").on("click", function () {
        localStorage.setItem("theme", "theme-day");
        $("html").removeClass("theme-night");
        $("html").removeClass("font-mono");
        $("html").addClass("theme-day");
        $("#theme-toggle svg").removeClass("text-primary-01");
        $(this).find("svg").addClass("text-primary-01");
        if ($("html").hasClass("theme-konami")) {
            draw();
            $("html").removeClass("theme-konami");
        };
    });
    $("#toggle-night").on("click", function () {
        localStorage.setItem("theme", "theme-night");
        $("html").removeClass("theme-day");
        $("html").removeClass("font-mono");
        $("html").addClass("theme-night");
        $("#theme-toggle svg").removeClass("text-primary-01");
        $(this).find("svg").addClass("text-primary-01");
        if ($("html").hasClass("theme-konami")) {
            $("html").removeClass("theme-konami");
            draw();
        };
    });
    $("#peace").on("click", function () {
        localStorage.setItem("theme", "konami");
        $("html").addClass("theme-konami");
        $("html").removeClass("theme-night");
        $("html").removeClass("theme-day");
        $("html").addClass("font-mono");
        $("#theme-toggle svg").removeClass("text-primary-01");
        draw();
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 12));
            }
        })();
    });
});

// Logo Collapse

$(window).scroll(function () {
    if ($(this).scrollTop() > 54) {
        $('#logo').addClass('collapse');
    } else {
        $('#logo').removeClass('collapse');
    }
});


// Smooth Scroll to Anchor

$("a[href='/#work']").on("click", function () {
    $("html, body").animate({
        scrollTop: $("#work").offset().top - 180
    }, 1000);
    $("#menu").toggleClass("hidden");
    $("#theme-toggle").toggleClass("hidden");
    $("#nav").toggleClass("nav-open");
});