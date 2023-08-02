var todayWorked = 0;

function calculate() 
{
  const currentDate = new Date();
  var yearly = parseFloat(document.querySelector(".inp").value);

  var daily = yearly / 365;
  var hourly = daily / 24;
  var secondly = hourly / 3600;

  const startOfDay = new Date(currentDate);
  startOfDay.setHours(0, 0, 0, 0);
  var msSinceStartOfDay = currentDate - startOfDay;
  var secondsSinceStartOfDay = msSinceStartOfDay / 1000;
  var todayEarned = secondsSinceStartOfDay * secondly;

  document.getElementById("todayEarned").textContent = todayEarned.toFixed(2);

  setTimeout(updateWorked, 1000);
}

function updateWorked() 
{
  var yearly = parseFloat(document.querySelector(".inp").value);
  var start = document.getElementById("start").value;
  var end = document.getElementById("end").value;
  const currentDate = new Date();

  var dailyWork = yearly / 250; // Assuming 250 working days in a year
  var startHour = Number(start.split(":")[0]);
  var startMinute = Number(start.split(":")[1]);
  var endHour = Number(end.split(":")[0]);
  var endMinute = Number(end.split(":")[1]);
  var totalWorkHours = (endHour + endMinute / 60) - (startHour + startMinute / 60);
  var hourlyWork = dailyWork / totalWorkHours;
  var secondlyWork = hourlyWork / 3600;

  var workStartDateTime = new Date();
  var workEndDateTime = new Date();

  workStartDateTime.setHours(startHour);
  workStartDateTime.setMinutes(startMinute);

  workEndDateTime.setHours(endHour);
  workEndDateTime.setMinutes(endMinute);

  if (currentDate >= workStartDateTime && currentDate < workEndDateTime) {
    const differenceInMilliseconds = currentDate - workStartDateTime;
    const secondsSinceStartOfDay = differenceInMilliseconds / 1000;
    todayWorked = secondsSinceStartOfDay * secondlyWork;
  } else {
    todayWorked = 0;
  }
  document.getElementById("todayWorked").textContent = todayWorked.toFixed(2);

  setTimeout(calculate, 1000);
}

document.querySelector(".btn").addEventListener("click", function () {
  calculate();
});

