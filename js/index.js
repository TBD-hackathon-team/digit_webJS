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

var lambdaReturn;

function lambdaConnect() {
    var json = null;
    console.log("hello");
    $.ajax({
        url: "https://gld7uor0li.execute-api.us-east-1.amazonaws.com/dev/headlines",
        dataType: 'json',
        success: function (results) {
            console.log("hello wordl");
            lambdaReturn = results;
        }
    });
}



function financialInformation(financialResults) {

    //var jsonDataFinancial=financialResults;
   // var dateToday = $("<div>").append($("<div>").text("Date: " + jsonDataToday.Date));
    //var dataToday = $("<div>").append($("<div>").text("1 " + jsonDataToday.FromCurrencySymbol + " to " + jsonDataToday.ToCurrencySymbol + ": " + jsonDataToday.Rate));
    //$('#today').append(dateToday, dataToday);//,'<img src="http://pngimg.com/uploads/bitcoin/bitcoin_PNG3.png?i=1">');

    // var date= $("<div>").append($("<div>").text("Date: " + jsonDataJanuary.Date));
    //  var data= $("<div>").append($("<div>").text("1 "+jsonDataJanuary.FromCurrencySymbol + " to " +jsonDataJanuary.ToCurrencySymbol +": " + jsonDataJanuary.Rate));
    // $('#janFin').append(date, data);//,'<img src="http://pngimg.com/uploads/bitcoin/bitcoin_PNG3.png?i=1">');
 
    $.each(financialResults, function (data, item) {
        //console.log(data);
        //console.log(i);
        //console.log(i.EndDate);
 
            //console.log(item);
           var date = JSON.stringify(item.EndDate);
            var month = date.substring(1, 6);

            var finDate = $("<div>").append($("<div>").text("Date: " + item.EndDate));
            var data = $("<div>").append($("<div>").text("1 " + item.BaseCurrency + " to " + item.QuoteCurrency + ": " + item.Average));
            if (month == "01/02") {
                $('#janFin').append(finDate, data)
            }
            if (month == "02/01") {
                $('#febFin').append(finDate, data)
            }
            if (month == "03/01") {
                $('#marFin').append(finDate, data)

            }
            if (month == "04/01") {
                $('#aprFin').append(finDate, data)

            }
            if (month == "05/01") {
                $('#mayFin').append(finDate, data)

            }
            if (month == "06/01") {
                $('#junFin').append(finDate, data)

            }
            if (month == "07/01") {
                $('#julFin').append(finDate, data)

            }
            if (month == "08/01") {
                $('#augFin').append(finDate, data)

            }
            if (month == "09/01") {
                $('#sepFin').append(finDate, data)

            } 
            if (month == "10/01") {
                $('#today').append(finDate, data)

            } 
 
   });

}

function newsJanArticle(data) {
    var jsonNewsDates = data;

    $.each(jsonNewsDates.Headlines, function (i, item) {
        var date = JSON.stringify(item.Date);
        var month = date.substring(1, 3);

        if (month == "1/") {
            $('#newsJan').append('<tr><td><a href="' + item.Url + '">' + item.Title + '<br />' + item.Date + ' </td></tr>');
        }
        if (month == "2/") {
            $('#newsFeb').append('<tr><td><a href="' + item.Url + '">' + item.Title + '<br />' + item.Date + ' </td></tr>');
        }
        if (month == "3/") {
            $('#newsMar').append('<tr><td><a href="' + item.Url + '">' + item.Title + '<br />' + item.Date + ' </td></tr>');
        }
        if (month == "4/") {
            $('#newsApr').append('<tr><td><a href="' + item.Url + '">' + item.Title + '<br />' + item.Date + ' </td></tr>');
        }

        if (month == "5/") {
            $('#newsMay').append('<tr><td><a href="' + item.Url + '">' + item.Title + '<br />' + item.Date + ' </td></tr>');
        }

        if (month == "6/") {
            $('#newsJun').append('<tr><td><a href="' + item.Url + '">' + item.Title + '<br />' + item.Date + ' </td></tr>');
        }

        if (month == "7/") {
            $('#newsJul').append('<tr><td><a href="' + item.Url + '">' + item.Title + '<br />' + item.Date + ' </td></tr>');
        }

        if (month == "8/") {
            $('#newsAug').append('<tr><td><a href="' + item.Url + '">' + item.Title + '<br />' + item.Date + ' </td></tr>');
        }

        if (month == "9/") {
            $('#newsSep').append('<tr><td><a href="' + item.Url + '">' + item.Title + '<br />' + item.Date + ' </td></tr>');
        }
    })
    /* var headline = $("<div>").append($("<a href="+jsonNews.Headlines[0].Url+">").text(jsonNews.Headlines[0].Title));
     $("#newsJan").append(headline); */
}

var totalFinancialNews = {}; 
var janNews; 
function mainDriver() {
    //   lambdaConnect();
   // financialInformation();
     

}
$(document).ready(function () {
   /*d $.ajax({ // ajax call starts
        url: 'https://gld7uor0li.execute-api.us-east-1.amazonaws.com/dev/headlines', // JQuery loads serverside.php
        dataType: 'json', // Choosing a JSON datatype
    })
        .done(function (data) { // Variable data contains the data we get from serverside
            newsJanArticle(data) // Clear #wines div

        });*/
    $.ajax({ // ajax call starts
        url: 'https://gld7uor0li.execute-api.us-east-1.amazonaws.com/dev/stockinfo', // JQuery loads serverside.php
        dataType: 'json', // Choosing a JSON datatype
    })
        .done(function (data) { // Variable data contains the data we get from serverside
            financialInformation(data) 
        
        });

        $.ajax({ // ajax call starts
            url: 'https://gld7uor0li.execute-api.us-east-1.amazonaws.com/dev/headlines?StartDate=1/31/2017&EndDate=2/01/2017',
            dataType:'json',
        })
            .done(function (data) { // Variable data contains the data we get from serverside
                newsJanArticle(data);//newsJanArticle(data) 
    
            });

            
       $.ajax({ // ajax call starts
            url: 'https://gld7uor0li.execute-api.us-east-1.amazonaws.com/dev/headlines?StartDate=03/01/2017&EndDate=3/02/2017',
            dataType:'json',
        })
            .done(function (data) { // Variable data contains the data we get from serverside
                newsJanArticle(data)//newsJanArticle(data) 
    
            }); 

                  
       $.ajax({ // ajax call starts
        url: 'https://gld7uor0li.execute-api.us-east-1.amazonaws.com/dev/headlines?StartDate=02/05/2017&EndDate=2/07/2017',
        dataType:'json',
    })
        .done(function (data) { // Variable data contains the data we get from serverside
            newsJanArticle(data)//newsJanArticle(data) 

        }); 

              
       $.ajax({ // ajax call starts
        url: 'https://gld7uor0li.execute-api.us-east-1.amazonaws.com/dev/headlines?StartDate=04/05/2017&EndDate=4/09/2017',
        dataType:'json',
    })
        .done(function (data) { // Variable data contains the data we get from serverside
            newsJanArticle(data)//newsJanArticle(data) 

        }); 

              
       $.ajax({ // ajax call starts
        url: 'https://gld7uor0li.execute-api.us-east-1.amazonaws.com/dev/headlines?StartDate=05/05/2017&EndDate=5/08/2017',
        dataType:'json',
    })
        .done(function (data) { // Variable data contains the data we get from serverside
            newsJanArticle(data)//newsJanArticle(data) 

        }); 

              
       $.ajax({ // ajax call starts
        url: 'https://gld7uor0li.execute-api.us-east-1.amazonaws.com/dev/headlines?StartDate=06/01/2017&EndDate=6/02/2017',
        dataType:'json',
    })
        .done(function (data) { // Variable data contains the data we get from serverside
            newsJanArticle(data)//newsJanArticle(data) 

        }); 

              
       $.ajax({ // ajax call starts
        url: 'https://gld7uor0li.execute-api.us-east-1.amazonaws.com/dev/headlines?StartDate=07/01/2017&EndDate=7/02/2017',
        dataType:'json',
    })
        .done(function (data) { // Variable data contains the data we get from serverside
            newsJanArticle(data)//newsJanArticle(data) 

        }); 

              
       $.ajax({ // ajax call starts
        url: 'https://gld7uor0li.execute-api.us-east-1.amazonaws.com/dev/headlines?StartDate=08/01/2017&EndDate=8/02/2017',
        dataType:'json',
    })
        .done(function (data) { // Variable data contains the data we get from serverside
            newsJanArticle(data)//newsJanArticle(data) 

        }); 
              
       $.ajax({ // ajax call starts
        url: 'https://gld7uor0li.execute-api.us-east-1.amazonaws.com/dev/headlines?StartDate=09/01/2017&EndDate=9/02/2017',
        dataType:'json',
    })
        .done(function (data) { // Variable data contains the data we get from serverside
            newsJanArticle(data)//newsJanArticle(data) 

        }); 

    
    $(".nav-tabs a").click(function () {
        $(this).tab('show');
    });
    $(".nav-tabs a").first().tab('show');

    
});


