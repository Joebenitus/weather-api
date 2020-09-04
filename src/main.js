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
    console.log(user);
  });
});