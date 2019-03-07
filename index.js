$(document).ready(function(){
    $("#bearberry-link").click(function(){
        window.open('https://bearberrycommunity.com/community-hall/')
    });
    $("#trailer-rentals").click(function(){
        window.open('https://www.sundrerv.ca/about-our-rv-travel-trailer-rentals-for-rent-calgary-airdrie-alberta--rentals')
    })
    $("#bnb-1").click(function(){
        window.open('https://www.abedinheaven.com/')
    })
    $("#bnb-2").click(function(){
        window.open('https://www.schottslake.com/')
    })
    $("#hotel").click(function(){
        window.open('https://www.mvisundre.com/')
    })
    $("#rsvp").click(function(){
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSd8LQL4FAlnksUEtaiYIyvSz95cvqI-NgWhBuMXmWFEcess3w/viewform?usp=sf_link')
    })
    $("#potluck-registry").click(function(){
        window.open('https://docs.google.com/spreadsheets/d/1LfRNXR_4pzOIJPHtruDsNoE6iWymRRYcBfe8s2gIrjA/edit?usp=sharing')
    })
    $(".clickable").css("cursor","pointer").css('border','1px solid white')
    $(".clickable").hover(function(){
        $(this).css("border", "1px solid grey");
    }, function(){
        $(this).css("border", "1px solid white");
    }
    );
});