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

function lambdaConnect(){
    var json =null;
    console.log("hello");
    $.ajax({
        url: "https://gld7uor0li.execute-api.us-east-1.amazonaws.com/dev/headlines",
        dataType: 'json',
        success: function(results){
            console.log("hello wordl");
            lambdaReturn=results;
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

var jsonDataFinancial = {
      "Currencies": [
        {"Outcome": "Success",
        "Message": null,
        "Identity": "Request",
        "Delay": 0.070943,
        "FromCurrencySymbol": "BTC",
        "FromCurrencyName": "Bitcoin",
        "ToCurrencySymbol": "USD",
        "ToCurrencyName": "United States dollar",
        "Date": "01/30/2017",
        "Time": "10:00:00 PM",
        "Amount": 13420,
        "Result": 8937000,
        "Rate": 623,
        "Source": "SIX Financial Information"
      },{
      "Outcome": "Success",
      "Message": null,
      "Identity": "Request",
      "Delay": 0.070943,
      "FromCurrencySymbol": "BTC",
      "FromCurrencyName": "Bitcoin",
      "ToCurrencySymbol": "USD",
      "ToCurrencyName": "United States dollar",
      "Date": "02/30/2017",
      "Time": "10:00:00 PM",
      "Amount": 1500,
      "Result": 8937000,
      "Rate": 6563,
      "Source": "SIX Financial Information"
      },
      {
        "Outcome": "Success",
        "Message": null,
        "Identity": "Request",
        "Delay": 0.070943,
        "FromCurrencySymbol": "BTC",
        "FromCurrencyName": "Bitcoin",
        "ToCurrencySymbol": "USD",
        "ToCurrencyName": "United States dollar",
        "Date": "03/30/2017",
        "Time": "10:00:00 PM",
        "Amount": 1500,
        "Result": 8937000,
        "Rate": 1443,
        "Source": "SIX Financial Information"
        }
       ]
   }
var jsonNews = {
    
        "Headlines": [
         {
          "Title": "Better Buy: Intel Corp. vs. NVIDIA",
          "Url": "https://www.fool.com/investing/2017/09/28/better-buy-intel-corp-vs-nvidia.aspx?source=iedfolrf0000001"
         },
         {
          "Title": "Insider Selling: Ormat Technologies, Inc. (ORA) SVP Sells 9,983 Shares of Stock",
          "Url": "https://www.tickerreport.com/banking-finance/2924003/insider-selling-ormat-technologies-inc-ora-svp-sells-9983-shares-of-stock.html"
         },
         {
          "Title": "Head to Head Survey: Morningstar (MORN) versus Broadridge Financial Solutions (BR)",
          "Url": "https://www.tickerreport.com/banking-finance/2923998/head-to-head-survey-morningstar-morn-versus-broadridge-financial-solutions-br.html"
         },
         {
          "Title": "WWW.DONATEPUERTORICO.COM - Acacia Donates $1 Million Dollars to Puerto Rico Relief",
          "Url": "http://www.prnewswire.com/news-releases/wwwdonatepuertoricocom---acacia-donates-1-million-dollars-to-puerto-rico-relief-300528080.html"
         },
         {
          "Title": "The Latest: Governor grateful for help on pipeline costs",
          "Url": "http://www.foxbusiness.com/markets/2017/09/28/latest-governor-grateful-for-help-on-pipeline-costs.html"
         },
         {
          "Title": "First Trust Strategic High Income Fund II Announces Preliminary Results of Tender Offer",
          "Url": "http://www.businesswire.com/news/home/20170928006418/en/"
         },
         {
          "Title": "Taxing times for the USA - ANZ",
          "Url": "https://www.fxstreet.com/news/taxing-times-for-the-usa-anz-201709282337"
         },
         {
          "Title": "NFL to air unprecedented 6 TV games in LA market on Sunday",
          "Url": "http://www.ocregister.com/2017/09/28/nfl-to-air-unprecedented-6-tv-games-in-la-market-on-sunday/"
         },
         {
          "Title": "Brokerages Anticipate Waste Connections, Inc. (WCN) Will Announce Quarterly Sales of $1.19 Billion",
          "Url": "https://zolmax.com/investing/brokerages-anticipate-waste-connections-inc-wcn-will-announce-quarterly-sales-of-1-19-billion/1675595.html"
         },
         {
          "Title": "Brokerages Set Simmons First National Corporation (SFNC) PT at $61.25",
          "Url": "https://www.tickerreport.com/banking-finance/2923994/brokerages-set-simmons-first-national-corporation-sfnc-pt-at-61-25.html"
         },
         {
          "Title": "In Vitro Diagnostics (IVD) Quality Control Market: Global Industry Analysis, Trends, Market Size and Forecasts up to 2023",
          "Url": "http://www.prnewswire.com/news-releases/in-vitro-diagnostics-ivd-quality-control-market-global-industry-analysis-trends-market-size-and-forecasts-up-to-2023-300528074.html"
         },
         {
          "Title": "UPDATE 1-Gold and cash reign as U.S. fund investors pare stocks -Lipper",
          "Url": "http://www.reuters.com/article/investment-mutualfunds-lipper/update-1-gold-and-cash-reign-as-u-s-fund-investors-pare-stocks-lipper-idUSL2N1M92B8?feedType=RSS&feedName=companyNews"
         },
         {
          "Title": "Pieris Pharmaceuticals, Inc. (PIRS) Trading Up 8.5%",
          "Url": "https://zolmax.com/investing/pieris-pharmaceuticals-inc-pirs-trading-up-8-5/1675591.html"
         },
         {
          "Title": "Wanda Marie Opheim Sells 28,000 Shares of Enbridge Inc (ENB) Stock",
          "Url": "https://zolmax.com/investing/wanda-marie-opheim-sells-28000-shares-of-enbridge-inc-enb-stock/1675584.html"
         },
         {
          "Title": "CarMax Inc (KMX) CFO Sells $5,556,058.50 in Stock",
          "Url": "https://zolmax.com/investing/carmax-inc-kmx-cfo-sells-5556058-50-in-stock/1675586.html"
         },
         {
          "Title": "S&P ekes out record on healthcare gains, tax plan hopes",
          "Url": "http://www.themalaymailonline.com/money/article/sp-ekes-out-record-on-healthcare-gains-tax-plan-hopes"
         },
         {
          "Title": "How long should we wash our hands?",
          "Url": "http://www.bbc.co.uk/news/health-41432555"
         },
         {
          "Title": "Initial jobless claims data reviewed - Nomura",
          "Url": "https://www.fxstreet.com/news/initial-jobless-claims-data-reviewed-nomura-201709282332"
         },
         {
          "Title": "Monoethylene Glycol Market: Global Industry Analysis, Trends, Market Size & Forecasts to 2023",
          "Url": "http://www.prnewswire.com/news-releases/monoethylene-glycol-market-global-industry-analysis-trends-market-size--forecasts-to-2023-300528073.html"
         },
         {
          "Title": "ITALEAF: the Board of TerniEnergia approved the half-yearly report",
          "Url": "http://globenewswire.com/news-release/2017/09/28/1134675/0/en/ITALEAF-the-Board-of-TerniEnergia-approved-the-half-yearly-report.html"
         },
         {
          "Title": "Whole Foods says taprooms, restaurants hacked",
          "Url": "http://www.foxbusiness.com/markets/2017/09/28/whole-foods-says-taprooms-restaurants-hacked.html"
         },
         {
          "Title": "AUD/USD: bulls are correcting but will dollar resurge?",
          "Url": "https://www.fxstreet.com/news/aud-usd-bulls-are-correcting-but-will-dollar-resurge-201709282324"
         },
         {
          "Title": "Rock fall strikes Yosemite for a second day",
          "Url": "http://www.ocregister.com/2017/09/28/rock-fall-strikes-yosemite-for-a-second-day/"
         },
         {
          "Title": "SJW Group Announces Retirement of President and Chief Executive Officer; New President and Chief Executive Officer Named",
          "Url": "http://www.businesswire.com/news/home/20170928006224/en/"
         },
         {
          "Title": "Amino Acid Market: Global Industry Analysis, Trends, Market Size & Forecasts to 2023",
          "Url": "http://www.prnewswire.com/news-releases/amino-acid-market-global-industry-analysis-trends-market-size--forecasts-to-2023-300528072.html"
         },
         {
          "Title": "Haptics 2017-2027: Technologies, Markets and Players",
          "Url": "http://www.prnewswire.com/news-releases/haptics-2017-2027-technologies-markets-and-players-300528071.html"
         },
         {
          "Title": "Medical Image Analysis Software Market: Global Industry Analysis, Trends, Market Size and Forecasts up to 2023",
          "Url": "http://www.prnewswire.com/news-releases/medical-image-analysis-software-market-global-industry-analysis-trends-market-size-and-forecasts-up-to-2023-300528069.html"
         },
         {
          "Title": "Sobering lessons from Afghan reconstruction",
          "Url": "http://www.ocregister.com/2017/09/28/sobering-lessons-from-afghan-reconstruction/"
         },
         {
          "Title": "Jay T. Flatley Sells 20,000 Shares of Illumina, Inc. (ILMN) Stock",
          "Url": "https://www.tickerreport.com/banking-finance/2923984/jay-t-flatley-sells-20000-shares-of-illumina-inc-ilmn-stock.html"
         },
         {
          "Title": "Dean Foods Company (DF) Receives $14.67 Average PT from Analysts",
          "Url": "https://www.tickerreport.com/banking-finance/2923976/dean-foods-company-df-receives-14-67-average-pt-from-analysts.html"
         },
         {
          "Title": "Willis Towers Watson Public Limited Company (WLTW) Insider Sells $47,137,728.00 in Stock",
          "Url": "https://www.tickerreport.com/banking-finance/2923988/willis-towers-watson-public-limited-company-wltw-insider-sells-47137728-00-in-stock.html"
         },
         {
          "Title": "Rockwell Medical, Inc. (RMTI) Trading 8% Higher",
          "Url": "https://www.tickerreport.com/banking-finance/2923989/rockwell-medical-inc-rmti-trading-8-higher.html"
         },
         {
          "Title": "Envestnet (ENV) & Trimble Navigation (TRMB) Financial Contrast",
          "Url": "https://www.tickerreport.com/banking-finance/2923980/envestnet-env-trimble-navigation-trmb-financial-contrast.html"
         },
         {
          "Title": "Tetra Technologies, Inc. (TTI) Trading 5.4% Higher",
          "Url": "https://www.tickerreport.com/banking-finance/2923990/tetra-technologies-inc-tti-trading-5-4-higher.html"
         },
         {
          "Title": "Lovely Love Harris of Florida Sues Apple for Sustaining an Injury while in the Apple Wellington Green Store",
          "Url": "http://www.patentlyapple.com/patently-apple/2017/09/lovely-love-harris-of-florida-sues-apple-for-sustaining-an-injury-while-in-the-apple-wellington-green-store.html"
         },
         {
          "Title": "Technology makes the Jewish High Holidays more accessible to many",
          "Url": "http://www.ocregister.com/2017/09/28/technology-makes-the-jewish-high-holidays-more-accessible-to-many/"
         },
         {
          "Title": "Costco Earnings Preview",
          "Url": "https://seekingalpha.com/article/4110461-costco-earnings-preview"
         },
         {
          "Title": "Sirius XM: Too Pricey For Me",
          "Url": "https://seekingalpha.com/article/4110462-sirius-xm-pricey"
         },
         {
          "Title": "Food for thought: WNY manufacturers tackle challenges, pursue growth",
          "Url": "https://www.bizjournals.com/buffalo/news/2017/09/28/food-for-thought-wny-manufacturers-tackle.html?ana=RSS%26s=article_search"
         },
         {
          "Title": "The First of Long Island Corporation (FLIC) Upgraded by Zacks Investment Research to Buy",
          "Url": "https://zolmax.com/investing/the-first-of-long-island-corporation-flic-upgraded-by-zacks-investment-research-to-buy-2/1675582.html"
         },
         {
          "Title": "Global Telecom Managed Services Market Analysis 2017 - Forecast to 2023",
          "Url": "http://www.prnewswire.com/news-releases/global-telecom-managed-services-market-analysis-2017---forecast-to-2023-300528068.html"
         },
         {
          "Title": "Car and light truck sales off slightly in August, up for the year",
          "Url": "https://www.bizjournals.com/denver/news/2017/09/28/car-and-light-truck-sales-off-slightly-in-august.html?ana=RSS%26s=article_search"
         },
         {
          "Title": "Forget Qualcomm, Micron is the Better Semiconductor Stock",
          "Url": "https://www.fool.com/investing/2017/09/28/forget-qualcomm-micron-is-the-better-semiconductor.aspx?source=iedfolrf0000001"
         },
         {
          "Title": "Two New Builders to Build Semi-Custom Homes at Wickenburg Ranch",
          "Url": "http://www.prnewswire.com/news-releases/two-new-builders-to-build-semi-custom-homes-at-wickenburg-ranch-300528066.html"
         },
         {
          "Title": "Feeling the ups and downs of perfection in flight before Breitling Huntington Beach Airshow",
          "Url": "http://www.ocregister.com/2017/09/28/feeling-the-ups-and-downs-of-perfection-in-flight-before-breitling-huntington-beach-airshow/"
         },
         {
          "Title": "Liquid fertilizer Market: Global Industry Analysis, Trends, Market Size & Forecasts to 2023",
          "Url": "http://www.prnewswire.com/news-releases/liquid-fertilizer-market-global-industry-analysis-trends-market-size--forecasts-to-2023-300528065.html"
         },
         {
          "Title": "MX Gold Corp. Retracts Statements Announcing Mineral Reserves for its Magistral Project in its July 20, 2017 News Release and Retracts Statements Regarding a Max Mine Resource and Economic Analysis in its February 2017 Corporate Presentation",
          "Url": "http://globenewswire.com/news-release/2017/09/28/1134674/0/en/MX-Gold-Corp-Retracts-Statements-Announcing-Mineral-Reserves-for-its-Magistral-Project-in-its-July-20-2017-News-Release-and-Retracts-Statements-Regarding-a-Max-Mine-Resource-and-Ec.html"
         },
         {
          "Title": "Top 11 Smartphones with the Best Audio Quality in 2017",
          "Url": "http://www.insidermonkey.com/blog/top-11-smartphones-with-the-best-audio-quality-in-2017-600486/"
         },
         {
          "Title": "Global Compact Network Canada closes the market",
          "Url": "http://www.newswire.ca/en/releases/archive/September2017/28/c3901.html"
         },
         {
          "Title": "Jones Energy, Inc. (JONE) Expected to Announce Quarterly Sales of $58.95 Million",
          "Url": "https://zolmax.com/investing/jones-energy-inc-jone-expected-to-announce-quarterly-sales-of-58-95-million/1675574.html"
         },
         {
          "Title": "Analyzing Air Products and Chemicals (APD) and Innophos Holdings (IPHS)",
          "Url": "https://zolmax.com/investing/analyzing-air-products-and-chemicals-apd-and-innophos-holdings-iphs/1675580.html"
         },
         {
          "Title": "Elementis plc (ELM) Given Average Recommendation of \"Hold\" by Brokerages",
          "Url": "https://zolmax.com/investing/elementis-plc-elm-given-average-recommendation-of-hold-by-brokerages/1675575.html"
         },
         {
          "Title": "C&J Energy Services (CJES) Earns Daily News Impact Rating of 0.14",
          "Url": "https://zolmax.com/investing/cj-energy-services-cjes-earns-daily-news-impact-rating-of-0-14/1675572.html"
         },
         {
          "Title": "Oil Firms Do Not See A Lasting Impact From Harvey",
          "Url": "http://oilprice.com/Latest-Energy-News/World-News/Most-Oil-Firms-See-Hurricane-Harvey-Impact-Not-Lasting-Long.html"
         },
         {
          "Title": "Citi: An Oil Supply Squeeze Is Inevitable",
          "Url": "http://oilprice.com/Energy/Crude-Oil/Citi-An-Oil-Supply-Squeeze-Is-Inevitable.html"
         },
         {
          "Title": "Picks are in for Week 5 of college football: Stanford, Clemson, Oregon and Oklahoma State earn full trust",
          "Url": "http://www.latimes.com/la-sp-college-football-picks-20170928-story.html"
         },
         {
          "Title": "California firm acquires Big Island shopping center for $22M",
          "Url": "https://www.bizjournals.com/pacific/news/2017/09/28/california-firm-acquires-big-islandshopping-center.html?ana=RSS%26s=article_search"
         },
         {
          "Title": "The Best-Performing Big Bank Stock in September",
          "Url": "https://www.fool.com/investing/2017/09/28/the-best-performing-big-bank-stock-in-september.aspx?source=iedfolrf0000001"
         },
         {
          "Title": "Global Airborne Collision Avoidance System Market Analysis 2017 - Forecast to 2023",
          "Url": "http://www.prnewswire.com/news-releases/global-airborne-collision-avoidance-system-market-analysis-2017---forecast-to-2023-300528064.html"
         },
         {
          "Title": "Exxon Mobil: Buy It On Sale",
          "Url": "https://seekingalpha.com/article/4110460-exxon-mobil-buy-sale"
         },
         {
          "Title": "Brain Monitoring Market: Global Industry Analysis, Trends, Market Size and Forecasts up to 2023",
          "Url": "http://www.prnewswire.com/news-releases/brain-monitoring-market-global-industry-analysis-trends-market-size-and-forecasts-up-to-2023-300528062.html"
         },
         {
          "Title": "Global Mining Chemicals Market Analysis 2017 - Forecast to 2023",
          "Url": "http://www.prnewswire.com/news-releases/global-mining-chemicals-market-analysis-2017---forecast-to-2023-300528061.html"
         },
         {
          "Title": "Judge Ralph K. Winter Awarded Highest Honor Presented to the American Judiciary",
          "Url": "http://www.prnewswire.com/news-releases/judge-ralph-k-winter-awarded-highest-honor-presented-to-the-american-judiciary-300528059.html"
         },
         {
          "Title": "Global Tube Packaging Market Analysis 2017 - Forecast to 2023",
          "Url": "http://www.prnewswire.com/news-releases/global-tube-packaging-market-analysis-2017---forecast-to-2023-300528060.html"
         },
         {
          "Title": "Wal-Mart: Brick-And-Click Investments Enhance Long-Term Growth Prospects",
          "Url": "https://seekingalpha.com/article/4110458-wal-mart-brick-click-investments-enhance-long-term-growth-prospects"
         },
         {
          "Title": "The Price Range Marginally Widens In Natural Gas",
          "Url": "https://seekingalpha.com/article/4110456-price-range-marginally-widens-natural-gas"
         },
         {
          "Title": "Fast Asia Open: Vietnam GDP, Japan retail sales",
          "Url": "https://www.ft.com/content/460e58d6-357f-3a24-bbe3-7faa97e4459b"
         },
         {
          "Title": "Aurora hospitals vs. key competitors",
          "Url": "https://www.bizjournals.com/milwaukee/news/2017/09/28/aurora-hospitals-vs-key-competitors.html?ana=RSS%26s=article_search"
         },
         {
          "Title": "Will More Job Options Support Business Services Stocks?",
          "Url": "http://www.zacks.com/commentary/130080/will-more-job-options-support-business-services-stocks"
         },
         {
          "Title": "Google reports all-time high of government data requests     - CNET",
          "Url": "https://www.cnet.com/news/google-reports-all-time-high-of-government-data-requests/"
         },
         {
          "Title": "Theresa May faces a growing Tory revolt over energy price cap on the eve of Conservative conference",
          "Url": "http://www.independent.co.uk/news/uk/politics/theresa-may-energy-price-cap-tory-revolt-conservative-conference-mps-backbench-prime-minister-a7972526.html"
         }
        ]
       };
    

var jsonNewsDates= {
    
        "Headlines": [
         
         {
          "Title": "25th Anniversary Canadian Grand Prix New Product Awards Now Accepting Entries",
          "Date": "4/28/2017",
          "Url": "http://www.newswire.ca/en/releases/archive/September2017/28/c1726.html"
         },
         {
          "Title": "Comtech Telecommunications Corp. (CMTL)  Shares Down 17.4%",
          "Date": "7/28/2017",
          "Url": "https://zolmax.com/investing/comtech-telecommunications-corp-cmtl-shares-down-17-4/1675613.html"
         },
         {
          "Title": "Blackrock Maryland Municipal Bond Trust (BZM) Given News Impact Rating of 0.24",
          "Date": "6/28/2017",
          "Url": "https://zolmax.com/investing/blackrock-maryland-municipal-bond-trust-bzm-given-news-impact-rating-of-0-24/1675610.html"
         },
         {
          "Title": "PRESS DIGEST- Financial Times - Sept 28",
          "Date": "6/28/2017",
          "Url": "http://www.reuters.com/article/britain-press-ft/press-digest-financial-times-sept-28-idUSL4N1M96BD?feedType=RSS&feedName=companyNews"
         },
         {
          "Title": "Trump health secretary to repay cost of private jet travel",
          "Date": "5/28/2017",
          "Url": "http://www.reuters.com/article/us-usa-trump-expenses/trump-health-secretary-to-repay-cost-of-private-jet-travel-idUSKCN1C32WH?feedType=RSS&feedName=topNews"
         },
         {
          "Title": "Contrasting Mercury Systems (MRCY) & Raytheon (RTN)",
          "Date": "3/28/2017",
          "Url": "https://zolmax.com/investing/contrasting-mercury-systems-mrcy-raytheon-rtn/1675600.html"
         },
         {
          "Title": "Brief on the Morneau reform - Passive income",
          "Date": "2/28/2017",
          "Url": "http://www.newswire.ca/en/releases/archive/September2017/28/c5988.html"
         },
         {
          "Title": "Bitcoin fund pulls listing plan after hitting SEC roadblock",
          "Date": "2/28/2017",
          "Url": "https://www.ft.com/content/ace852ae-a486-11e7-9e4f-7f5e6a7c98a2"
         },
         {
          "Title": "oil giant ignored Warnings before fire",
          "Date": "9/28/2017",
          "Url": "http://online.wsj.com/article/SB22154289489802834488204583334421683043176.html?mod=rss_Page_One"
         },
         {
          "Title": "Royal Caribbean evacuates thousands from San Juan and the Caribbean",
          "Date": "1/28/2017",
          "Url": "http://money.cnn.com/2017/09/28/news/royal-caribbean-san-juan-evacuations/index.html"
         },
         {
            "Title": "Royal Caribbean evacuates thousands from San Juan and the Caribbean",
            "Date": "8/28/2017",
            "Url": "http://money.cnn.com/2017/09/28/news/royal-caribbean-san-juan-evacuations/index.html"
           },
           {
            "Title": "Royal Caribbean evacuates thousands from San Juan and the Caribbean",
            "Date": "9/28/2017",
            "Url": "http://money.cnn.com/2017/09/28/news/royal-caribbean-san-juan-evacuations/index.html"
           },
           {
            "Title": "Royal Caribbean evacuates thousands from San Juan and the Caribbean",
            "Date": "5/28/2017",
            "Url": "http://money.cnn.com/2017/09/28/news/royal-caribbean-san-juan-evacuations/index.html"
           }
        ]
}
function financialInformation(){
   var dateToday= $("<div>").append($("<div>").text("Date: " + jsonDataToday.Date));
   var dataToday= $("<div>").append($("<div>").text("1 "+jsonDataToday.FromCurrencySymbol + " to " +jsonDataToday.ToCurrencySymbol +": " + jsonDataToday.Rate));
    $('#today').append(dateToday, dataToday);//,'<img src="http://pngimg.com/uploads/bitcoin/bitcoin_PNG3.png?i=1">');

   // var date= $("<div>").append($("<div>").text("Date: " + jsonDataJanuary.Date));
  //  var data= $("<div>").append($("<div>").text("1 "+jsonDataJanuary.FromCurrencySymbol + " to " +jsonDataJanuary.ToCurrencySymbol +": " + jsonDataJanuary.Rate));
   // $('#janFin').append(date, data);//,'<img src="http://pngimg.com/uploads/bitcoin/bitcoin_PNG3.png?i=1">');

    $.each(jsonDataFinancial.Currencies,function(i, item){ 
        var date = JSON.stringify(item.Date);
        var month = date.substring(1,3);  

        var finDate=$("<div>").append($("<div>").text("Date: " + item.Date));
        var data= $("<div>").append($("<div>").text("1 "+item.FromCurrencySymbol + " to " +item.ToCurrencySymbol +": " + item.Rate));
        if(month=="01"){
            $('#janFin').append(finDate, data)
         }
         if(month=="02"){
            $('#febFin').append(finDate, data)
         }
         if(month=="03"){
            $('#marFin').append(finDate, data)
     
         }
         if(month=="04"){
            $('#aprFin').append(finDate, data)
     
         }
         if(month=="05"){
            $('#mayFin').append(finDate, data)
     
         }
         if(month=="06"){
            $('#junFin').append(finDate, data)
     
         }
         if(month=="07"){
            $('#julFin').append(finDate, data)
     
         }
         if(month=="08"){
            $('#augFin').append(finDate, data)
     
         }
         if(month=="09"){
            $('#sepFin').append(finDate, data)
     
         }
     })

   
}

function newsJanArticle(headlines)
{ 
    var jsonNewsDates=headlines; 
    
$.each(jsonNewsDates.Headlines,function(i, item){ 
   var date = JSON.stringify(item.Date);
   var month = date.substring(1,3);  
 
 if(month=="1/"){
    $('#newsJan').append('<tr><td><a href="'+ item.Url +'">'+item.Title + '<br />'+ item.Date+' </td></tr>');  
 }
 if(month=="2/"){
    $('#newsFeb').append('<tr><td><a href="'+ item.Url +'">'+item.Title + '<br />'+ item.Date+' </td></tr>');  
 }
 if(month=="3/"){
    $('#newsMar').append('<tr><td><a href="'+ item.Url +'">'+item.Title + '<br />'+ item.Date+' </td></tr>');  
 }
 if(month=="4/"){
    $('#newsApr').append('<tr><td><a href="'+ item.Url +'">'+item.Title + '<br />'+ item.Date+' </td></tr>');  
 }

 if(month=="5/"){
    $('#newsMay').append('<tr><td><a href="'+ item.Url +'">'+item.Title + '<br />'+ item.Date+' </td></tr>');  
 }

 if(month=="6/"){
    $('#newsJun').append('<tr><td><a href="'+ item.Url +'">'+item.Title + '<br />'+ item.Date+' </td></tr>');  
 }

 if(month=="7/"){
    $('#newsJul').append('<tr><td><a href="'+ item.Url +'">'+item.Title + '<br />'+ item.Date+' </td></tr>');  
 }

 if(month=="8/"){
    $('#newsAug').append('<tr><td><a href="'+ item.Url +'">'+item.Title + '<br />'+ item.Date+' </td></tr>');  
 }
         
 if(month=="9/"){
    $('#newsSep').append('<tr><td><a href="'+ item.Url +'">'+item.Title + '<br />'+ item.Date+' </td></tr>');  
 }
})
   /* var headline = $("<div>").append($("<a href="+jsonNews.Headlines[0].Url+">").text(jsonNews.Headlines[0].Title));
    $("#newsJan").append(headline); */
}



function mainDriver(){
//   lambdaConnect();
    financialInformation();
   // newsJanArticle();
}
$(document).ready(function(){
    $.ajax({ // ajax call starts
        url: 'https://gld7uor0li.execute-api.us-east-1.amazonaws.com/dev/stockinfo', // JQuery loads serverside.php
        dataType: 'json', // Choosing a JSON datatype
      })
      .done(function(data) { // Variable data contains the data we get from serverside
        newsJanArticle(data) // Clear #wines div
        console.log(data);
    
      });
    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });
    $(".nav-tabs a").first().tab('show');
});