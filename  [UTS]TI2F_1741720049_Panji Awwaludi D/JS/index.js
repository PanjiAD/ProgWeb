// Hidden Foto

$(document).ready(function () {
    $('#gambar').hover(
        function () {
            document.getElementById("photo").className = "text-center";
        },
        function () {
            document.getElementById("photo").className = "text-center hide";
        }
    );

});

// Typewriter

var app = document.getElementById('nama');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<span style="font-size: 35px; color: rgb(250, 250, 250); font-family: kenyan coffee; letter-spacing: 2.5px;">Aku, Panji Awwaludi Dzikriawan</span>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<span style="font-size: 35px; color: rgb(250, 250, 250); font-family: kenyan coffee; letter-spacing: 2.5px;">Aku, Mahasiswa Polinema [ Prodi D4-TI ]</span>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<span style="font-size: 35px; color: rgb(250, 250, 250); font-family: kenyan coffee; letter-spacing: 2.5px;">Aku, Penikmat <strong>Kopi.</strong></span>')
    .pauseFor(2500)
    .start();

// Ganti Foto

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

