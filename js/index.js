//function bitcoinData(){
 //   $.getJSON("bitcoinData.json", function(json){
 //       console.log(json);
   // });
//}

/*
$(document).ready(function(){
    $.get('https://l3k4n5rrs9.execute-api.us-east-2.amazonaws.com/prod/DigIt-Serenity',function(data){
        console.log(data);
    });
});*/
function lambdaConnect(){
    var json =null;

    $.ajax({
        url: "https://l3k4n5rrs9.execute-api.us-east-2.amazonaws.com/prod/DigIt-Serenity",
        dataType: 'json',
        success: function(results){
            var parsed_result=JSON.parse(results);
            $('#jan').text(JSON.stringify(results));
            printJSON(results);
        }
    });
}


var jsonData = {
    "Outcome": "Success",
    "Message": null,
    "Identity": "Request",
    "Delay": 0.070943,
    "FromCurrencySymbol": "BTC",
    "FromCurrencyName": "Bitcoin",
    "ToCurrencySymbol": "USD",
    "ToCurrencyName": "United States dollar",
    "Date": "10/20/2017",
    "Time": "10:00:00 PM",
    "Amount": 1500,
    "Result": 8937000,
    "Rate": 5958,
    "Source": "SIX Financial Information"
   };

function tempJSONRead(){
    var date= $("<div>").append($("<div>").text("Date: " + jsonData.Date));
    var data= $("<div>").append($("<div>").text("1 "+jsonData.FromCurrencySymbol + " to " +jsonData.ToCurrencySymbol +": " + jsonData.Rate));
    $('#today').append(date, data);
}

function printJSON(results){

}


$(document).ready(function(){
    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });

    $('#jan').text("this is unique text for january weee");
});