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

    })
})

