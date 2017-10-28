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


var jsonDataToday = {
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
   var jsonDataJanuary = {
    "Outcome": "Success",
    "Message": null,
    "Identity": "Request",
    "Delay": 0.070943,
    "FromCurrencySymbol": "BTC",
    "FromCurrencyName": "Bitcoin",
    "ToCurrencySymbol": "USD",
    "ToCurrencyName": "United States dollar",
    "Date": "01/30/2017",
    "Time": "10:00:00 PM",
    "Amount": 1500,
    "Result": 8937000,
    "Rate": 6423,
    "Source": "SIX Financial Information"
   };

function bitcoinInformation(){
    var dateToday= $("<div>").append($("<div>").text("Date: " + jsonDataToday.Date));
    var dataToday= $("<div>").append($("<div>").text("1 "+jsonDataToday.FromCurrencySymbol + " to " +jsonDataToday.ToCurrencySymbol +": " + jsonDataToday.Rate));
    $('#today').append(dateToday, dataToday,'<img src="http://www.cringely.com/wp-content/uploads/2013/09/bitcoin-logo-3d.jpg">');

    var date= $("<div>").append($("<div>").text("Date: " + jsonDataJanuary.Date));
    var data= $("<div>").append($("<div>").text("1 "+jsonDataJanuary.FromCurrencySymbol + " to " +jsonDataJanuary.ToCurrencySymbol +": " + jsonDataJanuary.Rate));
    $('#jan').append(date, data);
}

function printJSON(results){

}


$(document).ready(function(){
    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });
    $(".nav-tabs a").first().tab('show');
});