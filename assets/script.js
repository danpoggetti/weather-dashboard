let weatherAPIKey = '&appid=bf0591a4f4a4606b14032926c3f66d98';
let weatherCall = 'https://api.openweathermap.org/data/2.5/forecast?q=';
let iconURL = 'https://openweathermap.org/img/w/';


var sub_btn = document.getElementById('sub_btn');
sub_btn.addEventListener('click', function(){
    var search_btn = document.getElementById('search_btn').value;
    
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+search_btn+'&appid=bf0591a4f4a4606b14032926c3f66d98')
    .then(response => response.json())
    .then(data => {

       console.log(data);

       // start 5 day forecast

        // Day 1 of 5 day forecast:

        var currentDate2 = data.list[0].dt_txt; //will display current date
        //const icon = data.list[0].weather[0].icon; //will display weather icon
        var tem2 = data.list[0].main.temp; //temp displays K, need to convert to F
        var temp2 =  (tem2 - 273.15 ) * 1.8 + 32; // equation converts to F
        var tempWeather2 = Math.round(temp2);
        var description2 = data.list[0].weather[0].description; //will display verbiage for weather condition
        var wind2 = data.list[0].wind.speed; //will display the wind strength
        var humid2 = data.list[0].main.humidity; //will display humidity


        document.getElementById('weather_date2').innerHTML = currentDate2;
        //document.getElementById('icon').innerHTML = icon;
        document.getElementById('temp2').innerHTML = tempWeather2;
        document.getElementById('desc2').innerHTML = description2;
        document.getElementById('wind2').innerHTML = wind2;
        document.getElementById('humid2').innerHTML = humid2;
        
        
        var icon2 = data.list[1].weather[0].icon;
        var imgSrc2 = 'https://openweathermap.org/img/w/'+icon2+'.png';
        var img2Icon2 = document.getElementById('picture2');
        img2Icon2.src=imgSrc2;


     // Day 2 of 5 day forecast:

     var currentDate3 = data.list[8].dt_txt; //will display current date
    //const icon = data.list[0].weather[0].icon; //will display weather icon
     var tem3 = data.list[8].main.temp; //temp displays K, need to convert to F
     var temp3 =  (tem3 - 273.15 ) * 1.8 + 32; // equation converts to F
     var tempWeather3 = Math.round(temp3);
     var description3 = data.list[8].weather[0].description; //will display verbiage for weather condition
     var wind3 = data.list[8].wind.speed; //will display the wind strength
     var humid3 = data.list[8].main.humidity; //will display humidity


    document.getElementById('weather_date3').innerHTML = currentDate3;
    //document.getElementById('icon').innerHTML = icon;
    document.getElementById('temp3').innerHTML = tempWeather3;
    document.getElementById('desc3').innerHTML = description3;
    document.getElementById('wind3').innerHTML = wind3;
    document.getElementById('humid3').innerHTML = humid3;
 
 
    var icon3 = data.list[8].weather[0].icon;
    var imgSrc3 = 'https://openweathermap.org/img/w/'+icon3+'.png';
    var img3Icon3 = document.getElementById('picture3');
    img3Icon3.src=imgSrc3;

    })
})

