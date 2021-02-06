$(document).ready(function(){

    $(document).mouseup(function(e) 
    {
        var guiderFormDiv = $('.sendRequest');
        
        if (!guiderFormDiv.is(e.target) && guiderFormDiv.has(e.target).length === 0) 
        {
            guiderFormDiv.hide();
        }
    });

                 
    $('.guiderProfile').click(function() {
        $('.sendRequest').fadeIn('fast');
        
    });

    $('.tripperProfile').click(function() {
        $('.sendRequest').fadeIn('fast');
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
