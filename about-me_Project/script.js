// Navbar scroll
$(document).ready(function() {
	$(window).scroll(function() {
        if($(document).scrollTop() > 200) {
            $('#navbar').addClass('scroll');
            $('#navbar').addClass('navbar-light');
            $('#navbar').addClass('bg-white');
            $('#navbar').addClass('shadow');
            $('#navbar').removeClass('navbar-dark');
        }
        else {
            $('#navbar').removeClass('scroll');
            $('#navbar').removeClass('navbar-light');
            $('#navbar').removeClass('bg-white');
            $('#navbar').removeClass('shadow');
            $('#navbar').addClass('navbar-dark');
        }
    });
    
    $(window).scroll(function () {
        var currentScrollPos = $(document).scrollTop();

        //Iterate through all node
        $('.navbar-nav > .nav-item > a').each(function () {
            var curLink = $(this);
            var refElem = $(curLink.attr('href'));
            //Compare the value of current position and the every section position in each scroll
            if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
                //Remove class active in all nav
                $('.navbar-nav > .nav-item > a').removeClass("active");
                //Add class active
                curLink.parent().addClass("active");
            }
            else {
                curLink.parent().removeClass("active");
            }
        });
    });
});

// active menu
$(document).ready(function(){
    $('.navbar-nav .nav-item').click(function(){
        $('.nav-item').removeClass("active");
        $(this).addClass("active");
    });
});

