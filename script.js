
setInterval(() => {
const time = document.querySelector("#time");
const todayDate = document.querySelector("#todayDate");
let date = new Date();
let hours = date.getHours(); 
let minutes = date.getMinutes(); 
let seconds = date.getSeconds();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let AmPm = "PM"; 
// const anime = require('animejs');
if (hours>12){
    AmPm = "AM"
    // hours =  hours-12;
}
if (minutes< 10){
    minutes = "0" + minutes;
}
if (seconds< 10){
    seconds = "0" + seconds;
}
if (hours<10){
    hours = "0" + hours;
}

if(day<10){
    day  = "0" + day;
}

if(month<10){
    month = "0" + month;
}
date.textContent = 
time.textContent = hours + ":" + minutes + ":" + seconds + AmPm;
todayDate.textContent =  day + "/" + month + "/" + year;
});




