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
    $("#time-left-mercury").text(user.mercuryYearsLeft());
  });
});