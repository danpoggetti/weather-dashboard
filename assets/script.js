let weatherAPIKey = '&appid=bf0591a4f4a4606b14032926c3f66d98';
let weatherCall = 'https://api.openweathermap.org/data/2.5/forecast?q=';
let iconURL = 'https://openweathermap.org/img/w/';


var sub_btn = document.getElementById('sub_btn');
sub_btn.addEventListener('click', function () {
    var search_btn = document.getElementById('search_btn').value;

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + search_btn + '&appid=bf0591a4f4a4606b14032926c3f66d98')
        .then(response => response.json())
        .then(data => {

            console.log(data);

            var cityName = data.city.name; //will display city name
            var currentDate = data.list[0].dt_txt; //will display current date
            //const icon = data.list[0].weather[0].icon; //will display weather icon
            var tem1 = data.list[0].main.temp; //temp displays K, need to convert to F
            var temp1 = (tem1 - 273.15) * 1.8 + 32; // equation converts to F
            var tempWeather1 = Math.round(temp1);
            var description1 = data.list[0].weather[0].description; //will display verbiage for weather condition
            var wind1 = data.list[0].wind.speed; //will display the wind strength
            var humid1 = data.list[0].main.humidity; //will display humidity


            document.getElementById('cityName').innerHTML = cityName;
            document.getElementById('weather_date').innerHTML = currentDate;
            //document.getElementById('icon').innerHTML = icon;
            document.getElementById('temp1').innerHTML = tempWeather1;
            document.getElementById('desc1').innerHTML = description1;
            document.getElementById('wind1').innerHTML = wind1;
            document.getElementById('humid1').innerHTML = humid1;


            var icon1 = data.list[0].weather[0].icon;
            var imgSrc1 = 'https://openweathermap.org/img/w/' + icon1 + '.png';
            var img1Icon1 = document.getElementById('picture1');
            img1Icon1.src = imgSrc1;

            // start 5 day forecast

            // Day 1 of 5 day forecast:

            var currentDate2 = data.list[0].dt_txt; //will display current date
            //const icon = data.list[0].weather[0].icon; //will display weather icon
            var tem2 = data.list[0].main.temp; //temp displays K, need to convert to F
            var temp2 = (tem2 - 273.15) * 1.8 + 32; // equation converts to F
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
            var imgSrc2 = 'https://openweathermap.org/img/w/' + icon2 + '.png';
            var img2Icon2 = document.getElementById('picture2');
            img2Icon2.src = imgSrc2;

            // Day 2 of 5 day forecast:

            var currentDate3 = data.list[8].dt_txt; //will display current date
            //const icon = data.list[0].weather[0].icon; //will display weather icon
            var tem3 = data.list[8].main.temp; //temp displays K, need to convert to F
            var temp3 = (tem3 - 273.15) * 1.8 + 32; // equation converts to F
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
            var imgSrc3 = 'https://openweathermap.org/img/w/' + icon3 + '.png';
            var img3Icon3 = document.getElementById('picture3');
            img3Icon3.src = imgSrc3;

            // Day 3 of 5 day forecast

            var currentDate4 = data.list[16].dt_txt; //will display current date
            //const icon = data.list[0].weather[0].icon; //will display weather icon
            var tem4 = data.list[16].main.temp; //temp displays K, need to convert to F
            var temp4 = (tem4 - 273.15) * 1.8 + 32; // equation converts to F
            var tempWeather4 = Math.round(temp4);
            var description4 = data.list[16].weather[0].description; //will display verbiage for weather condition
            var wind4 = data.list[16].wind.speed; //will display the wind strength
            var humid4 = data.list[16].main.humidity; //will display humidity


            document.getElementById('weather_date4').innerHTML = currentDate4;
            //document.getElementById('icon').innerHTML = icon;
            document.getElementById('temp4').innerHTML = tempWeather4;
            document.getElementById('desc4').innerHTML = description4;
            document.getElementById('wind4').innerHTML = wind4;
            document.getElementById('humid4').innerHTML = humid4;


            var icon4 = data.list[16].weather[0].icon;
            var imgSrc4 = 'https://openweathermap.org/img/w/' + icon4 + '.png';
            var img4Icon4 = document.getElementById('picture4');
            img4Icon4.src = imgSrc4;

            // Day 4 of 5 day forecast:

            var currentDate5 = data.list[24].dt_txt; //will display current date
            //const icon = data.list[0].weather[0].icon; //will display weather icon
            var tem5 = data.list[24].main.temp; //temp displays K, need to convert to F
            var temp5 = (tem5 - 273.15) * 1.8 + 32; // equation converts to F
            var tempWeather5 = Math.round(temp5);
            var description5 = data.list[24].weather[0].description; //will display verbiage for weather condition
            var wind5 = data.list[24].wind.speed; //will display the wind strength
            var humid5 = data.list[24].main.humidity; //will display humidity


            document.getElementById('weather_date5').innerHTML = currentDate5;
            //document.getElementById('icon').innerHTML = icon;
            document.getElementById('temp5').innerHTML = tempWeather5;
            document.getElementById('desc5').innerHTML = description5;
            document.getElementById('wind5').innerHTML = wind5;
            document.getElementById('humid5').innerHTML = humid5;


            var icon5 = data.list[24].weather[0].icon;
            var imgSrc5 = 'https://openweathermap.org/img/w/' + icon5 + '.png';
            var img5Icon5 = document.getElementById('picture5');
            img5Icon5.src = imgSrc5;

            // Day 5 of 5 day forecast:

            var currentDate6 = data.list[32].dt_txt; //will display current date
            //const icon = data.list[0].weather[0].icon; //will display weather icon
            var tem6 = data.list[32].main.temp; //temp displays K, need to convert to F
            var temp6 = (tem6 - 273.15) * 1.8 + 32; // equation converts to F
            var tempWeather6 = Math.round(temp6);
            var description6 = data.list[32].weather[0].description; //will display verbiage for weather condition
            var wind6 = data.list[32].wind.speed; //will display the wind strength
            var humid6 = data.list[32].main.humidity; //will display humidity


            document.getElementById('weather_date6').innerHTML = currentDate6;
            //document.getElementById('icon').innerHTML = icon;
            document.getElementById('temp6').innerHTML = tempWeather6;
            document.getElementById('desc6').innerHTML = description6;
            document.getElementById('wind6').innerHTML = wind6;
            document.getElementById('humid6').innerHTML = humid6;


            var icon6 = data.list[32].weather[0].icon;
            var imgSrc6 = 'https://openweathermap.org/img/w/' + icon6 + '.png';
            var img6Icon6 = document.getElementById('picture6');
            img6Icon6.src = imgSrc6;


        })
})

