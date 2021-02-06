$(document).ready(function(){

    $(document).mouseup(function(e) 
    {
        var loginFormDiv = $('.tripPopUpMenu');
        
        if (!loginFormDiv.is(e.target) && loginFormDiv.has(e.target).length === 0) 
        {
            loginFormDiv.hide();
        }
    });

                 
    $('.tripButton').click(function() {
        $('.tripPopUpMenu').fadeIn('fast');
        
    });


    $('.cardDeleteButton i').click(function() {
        $('.popUpResponse').fadeIn('fast');
    });


    $(document).mouseup(function(e) 
    {
        var loginFormDiv = $('.popUpResponse');
        
        if (!loginFormDiv.is(e.target) && loginFormDiv.has(e.target).length === 0) 
        {
            loginFormDiv.hide();
        }
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


