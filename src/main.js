import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import User from './js/calculator.js';

$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();
    let inputtedAge = $("#input-age").val();
    let inputtedExpectancy = $("#input-expectancy").val();
    let user = new User(inputtedAge, inputtedExpectancy);
    $(".info-screen").show();

    $("#age-on-mercury").text(`Age on Mercury: ${user.mercuryAge()} years.`);
    $("#years-left-mercury").text(user.mercuryYearsLeft());

    $("#age-on-venus").text(`Age on Venus: ${user.venusAge()} years.`);
    $("#years-left-venus").text(user.venusYearsLeft());

    $("#age-on-mars").text(`Age on Mars: ${user.marsAge()} years.`);
    $("#years-left-mars").text(user.marsYearsLeft());

    $("#age-on-jupiter").text(`Age on Jupiter: ${user.jupiterAge()} years.`);
    $("#years-left-jupiter").text(user.jupiterYearsLeft());
  });
});