
function calculate()
{
//get current time
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

//get difference in seconds between now and 8:30am
var diff = (today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds()) - (8 * 3600 + 30 * 60);
x = diff*0.00594814814

y = document.getElementById("day");
y.innerHTML = x.toFixed(2);


//get current day of the week
var day = today.getDay();
x += (160.60 * (day-1));
y = document.getElementById("week");
y.innerHTML = x.toFixed(2);


//get current day of the month
var date = today.getDate();
x += (114.714285714 * (date-1));
y = document.getElementById("month");
y.innerHTML = x.toFixed(2);


//get difference in days between now and May 16 (including may 16)
var diff = (today.getTime() - new Date("May 16, 2023").getTime()) / (1000 * 3600 * 24);
x = diff * 114.714285714;
y = document.getElementById("total");
y.innerHTML = x.toFixed(2);
sleep(1000);
setTimeout(calculate, 1000);

}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
