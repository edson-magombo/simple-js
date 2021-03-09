//AUTHOR :EDSON MAGOMBO 
//PHONE #:0881955791

//alert("hello eddie");
//console.log("hello js programmer kkk ");

//LETS CREATE FUNCTIONS FOR CALCULATING DAYS FOR EVERY AGE YOU ENTER;
function ageInDays() {
var birthYear = prompt('WHAT YEAR WERE YOU BORN??');
var days= ( 2021 - birthYear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode("You're " + days +" days old.");
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('results').appendChild(h1);
 console.log(days);
}
function reset(){
    document.getElementById('results').remove();
}