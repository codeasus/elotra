$(document).ready(function(){


    $('.footerRegister').click(function() {
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



    // $('.navButton_contact').click(function() {
    //     window.location.href = "contact.html";
    // });

    // $(".navButton_home").click(function() {
    //     window.location.href = "index.html";
    // });

    // $(".navButton_trip").click(function() {
    //     window.location.href = "trip.html";
    // });

    // $(".navButton_about").click(function() {
    //     window.location.href = "about.html";
    // });

});