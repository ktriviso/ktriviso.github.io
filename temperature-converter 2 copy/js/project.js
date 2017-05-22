$(document).ready(function () {

    $('#mouseButton').hover( function(){
        $(this).css("background-color", "rgba(255,255,255,.7)" );
    }, function(){
        $(this).css("background-color", "black");
    })

    // fahrenheit to celsius
    $("#trigger").click(function(){

        var fah = $("#fahrenheit").val();
        var conversion = (fah - 32) * (9/5);
        var fahrenheitConvertedAnswer = $('#fahrenheitConvertedAnswer');
        fahrenheitConvertedAnswer.text(conversion);
        $('.degree-celsius').show();

        console.log(conversion);
    });

    // celsius to fahrenheit
    $("#trigger2").click(function(){

        var cel = $("#celsius").val();
        var conversion = cel * (9/5) + 32;
        var celsiusConvertedAnswer = $('#celsiusConvertedAnswer');
        celsiusConvertedAnswer.text(conversion);
        $('.degree-fahrenheit').show();

        console.log(conversion);
    });


});
