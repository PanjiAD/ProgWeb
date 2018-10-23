
// Navbar scroll
// $(document).ready(function () {
//     $(window).scroll(function () {
//         if ($(document).scrollTop() > 500) {
//             // $('#navbar').addClass('navbar');
//             $('#navbar').addClass('bg-dark');
//             // $('#navbar').addClass('navbar-expand-md');
//             $('#navbar').addClass('fixed-top');
//         }
//         else {
//             // $('#navbar').removeClass('navbar');
//             // $('#navbar').removeClass('navbar-expand-md');
//             $('#navbar').removeClass('bg-dark');
//             $('#navbar').removeClass('fixed-top');
//         }
//     });

//     $(window).scroll(function () {
//         var currentScrollPos = $(document).scrollTop();

//         //Iterate through all node
//         $('.navbar > .navbar-collapse > .navbar-nav > .nav-item > a').each(function () {
//             var curLink = $(this);
//             var refElem = $(curLink.attr('href'));
//             //Compare the value of current position and the every section position in each scroll
//             if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
//                 //Remove class active in all nav
//                 $('.navbar > .navbar-collapse > .navbar-nav > .nav-item > a').removeClass("active");
//                 //Add class active
//                 curLink.parent().addClass("active");
//             }
//             else {
//                 curLink.parent().removeClass("active");
//             }
//         });
//     });
// });

// active menu
// $(document).ready(function () {
//     $('.navbar-nav .nav-item').click(function () {
//         $('.nav-item').removeClass("active");
//         $(this).addClass("active");
//     });
// });

// Navigationbar Transparant

// var navbar = $(".navbar.navbar-dark");
// var dark = "bg-dark";
// var image = $('#home').height();
// navbar.removeClass(dark);
// // Beckgorund color aktif ketika scroll down
// $(window).scroll(function () {
//     if ($(this).scrollTop() > (image - 50)) {
//         navbar.addClass(dark);
//     }
//     else {
//         navbar.removeClass(dark);
//     }
// });

// Typewriter

var app = document.getElementById('nama');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<span style="font-size: 35px; ">Aku, Panji Awwaludi D.</span>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<span style="font-size: 35px;">Aku, Seorang 3D Modeling.</span>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<span style="font-size: 35px; ">Aku, Penikmat <strong>Kopi.</strong></span>')
    .pauseFor(2500)
    .start();

// Ganti Foto

function notFound() {
    $("#foto")
        .removeClass()
        .addClass("foto0");
}

function foto1() {
    $("#foto")
        .removeClass()
        .addClass("foto1");
}

function foto2() {
    $("#foto")
        .removeClass()
        .addClass("foto2");
}

function foto3() {
    $("#foto")
        .removeClass()
        .addClass("foto3");
}