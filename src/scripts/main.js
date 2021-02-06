// var registerFormDiv = document.getElementsByClassName('.regForm');
// var loginFormDiv = document.getElementsByClassName('.logForm');

// window.onclick = function(event) {
//     if (event.target == registerForm || event.target == loginForm) {
//         modal.style.display = "none";
//     }
// }


$(document).ready(function(){
    // Social Buttons section
    $('.fa-instagram').click(function() {
        window.location.href = "http://instagram.com";
    });
    $('.fa-facebook-square').click(function() {
        window.location.href = "http://facebook.com";
    });
    $('.fa-twitter-square').click(function() {
        window.location.href = "http://twitter.com";
    });
    $('.fa-linkedin').click(function() {
        window.location.href = "https://www.linkedin.com/";
    });

     //---------------------------------------------------------

    var yourNavigation = $(".secondNavBar_");
    stickyDiv = "sticky";
    yourHeader = $('.upperNavBar').height();

    $(window).scroll(function() {
        if( $(this).scrollTop() > yourHeader ) {
            yourNavigation.addClass(stickyDiv);
            $(yourNavigation).css('background-color', 'rgb(55,71,79)');
        } else {
            yourNavigation.removeClass(stickyDiv);
            $(yourNavigation).css('background-color', 'rgba(55,71,79, .7)');
        }
    });


    var yourNavigation_ = $(".secondNavBar");
    stickyDiv_ = "sticky";
    yourHeader_ = $('.upperNavBar').height();

    $(window).scroll(function() {
        if( $(this).scrollTop() > yourHeader_ ) {
            yourNavigation_.addClass(stickyDiv_);
            $(yourNavigation_).css('background-color', 'rgb(55,71,79)');
        } else {
            yourNavigation_.removeClass(stickyDiv_);
            $(yourNavigation_).css('background-color', 'rgba(55,71,79, .7)');
        }
    });

    //---------------------------------------------------------

    $(document).mouseup(function(e) 
    {
        var loginFormDiv = $('.logForm'), regFormDiv = $('.regForm');
        
        if (!loginFormDiv.is(e.target) && loginFormDiv.has(e.target).length === 0) 
        {
            loginFormDiv.hide();
        }
        if (!regFormDiv.is(e.target) && regFormDiv.has(e.target).length === 0) {
            regFormDiv.hide();
        }
    });
    
    $('i.fab').hover(function(){
        $(this).toggleClass('hoverSocialLinks');
    });

    $('.navButtonsList li').hover(function() {
        $(this).toggleClass('hoverNavigationLinks');
    });

    $('.registerButton').hover(function() {
        $(this).toggleClass('hoverRegisterButton');
    });



    $('.registerButton').click(function() {
        $('.logForm').fadeIn('fast');
    });

    $('.toReg a').click(function(){
        $('.logForm').fadeOut(500);
        $('.regForm').fadeIn(500);
    });

    $('.toLog a').click(function(){
        $('.regForm').fadeOut(500);
        $('.logForm').fadeIn(500);
    });

    $('.navButton_contact').click(function() {
        window.location.href = "contact.html";
    });

    $(".navButton_home").click(function() {
        window.location.href = "index.html";
    });

    $(".navButton_trip").click(function() {
        window.location.href = "trip.html";
    });

    $(".navButton_about").click(function() {
        window.location.href = "#";
    });

});


