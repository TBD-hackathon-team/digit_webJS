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
            printJSON(results);
        }
    });
}

function printJSON(results){

}

$(document).ready(function(){
    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });
});