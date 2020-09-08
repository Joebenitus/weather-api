import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const zipcode = $('#zipcode').val();

    $('#city').val("");
    $('#state').val("");
    $('#zipcode').val("");
    //$('#countryCode').val("")

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${zipcode},US&appid=${process.env.API_KEY}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.showHumidity').text(`The humidity in ${response.name} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Fahrenheit is ${toFahrenheit(response.main.temp)} degrees.`);
      $(".showWindSpeed").text(`The Wind Speed is ${response.wind.speed} MPH.`);
      $(".showSunrise").text(`The Sunrise is ${toPST(response.sys.sunrise)}`);
      $(".showSunset").text(`The Sunset is ${toPST(response.sys.sunset)}`);
      
    }

    function toFahrenheit(temp){
      return parseInt((temp - 273.15) * (9/5) + 32);
    }

    function toPST(time){
      let date = new Date(time * 1000);
      let hours = date.getHours();
      let minutes = date.getMinutes();
      return hours + ":" + minutes
    }

    
  });
});
