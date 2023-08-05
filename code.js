// document.write("Hello World")

function digiClock(){
    var hour2 ,meredian;
    var time = new Date();
var hour= time.getHours();
var min= time.getMinutes();
var sec= time.getSeconds();
if(hour>12){
    hour=hour-12;
    meredian="PM"
}
else{
    meredian="AM"
}
document.querySelector("#Hours p").innerText=hour;
document.querySelector("#min p").innerText=min;
document.querySelector("#sec p").innerText=sec;
document.querySelector("#meredian ").innerText=meredian;document.querySelector(".second p").innerText
}
setInterval(digiClock,1000)
