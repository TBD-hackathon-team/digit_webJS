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
    $.ajax({
        url: "https://l3k4n5rrs9.execute-api.us-east-2.amazonaws.com/prod/DigIt-Serenity",
        dataType: 'json',
        headers: {"Access-Control-Allow-Origin":"*"},
        success: function(results){
            console.log(results);
        }
    });
}
