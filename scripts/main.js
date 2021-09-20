function mobileMenu() {
    var nav = document.getElementById("main-nav");
    var ul = document.getElementById("menu");

    if (nav.style.display === "block") {
        $("#main-nav").css('display', '');
        $("#menu").css('display', '');
        $(".logo-right").css('display', 'inline');
        ul.style.textAlign = "initial";
        $(".logo-left").css('display', '');
        $("#added-home-page").remove();
        $(ul).css('margin-right', '20%');
        $(ul).css('width', '50%');
        $(nav).css('z-index', '');
        $(nav).css('position', '');
        $(nav).css('height', '100%');
        $(nav).css('width', '');
        $(nav).css('background-color', 'white');
        $(".nav-item").css('color', '#242323');
        $("#languages").css('display', '');
        $(".fas").css('color', 'black');
        $("head").append('<style>.fa-bars:before{z-index:0; position:static; top:0;}</style>');
    } else {
        nav.style.display = "block";
        ul.style.display = "block";
        ul.style.textAlign = "center";
        $(".logo-right").css('display', 'none');
        $("#home-page-hamburger").append('<a id="added-home-page" href="index.html" style="color: white;">home page</a>');
        $(ul).css('margin-right', '');
        $(ul).css('width', '100%');
        $(nav).css('z-index', '10');
        $(nav).css('position', 'relative');
        $(nav).css('height', '250px');
        $(nav).css('width', '100%');
        $(nav).css('background-color', 'black');
        $(".nav-item").css('color', 'white');
        $(".chez-feng-logo").css('display', 'none');
        $("#languages").css('display', 'none');
        $(".fas").css('color', 'white');
        $("head").append('<style>.fa-bars:before{z-index:11; position:relative; top:-250px;}</style>');
    }
}