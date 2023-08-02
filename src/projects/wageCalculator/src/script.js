function calculate() 
{
  var yearly = document.getElementById("salary").value;
  var daily = yearly / 260;

  var start = document.getElementById("start").value;
  var end = document.getElementById("end").value;

  var startTime = new Date("1970-01-01T" + start + "Z");
  var endTime = new Date("1970-01-01T" + end + "Z");

  var shiftInMs = endTime.getTime() - startTime.getTime();
  var shiftInSeconds = shiftInMs / 1000;

  var hourly = daily / (shiftInSeconds / 3600); // No need for shiftInMinutes or shiftInHours
  var secondly = daily / shiftInSeconds;

  var currentTime = new Date();

  var targetTime = new Date();
  targetTime.setHours(startTime.getHours());
  targetTime.setMinutes(startTime.getMinutes());
  targetTime.setSeconds(startTime.getSeconds());
  targetTime.setMilliseconds(startTime.getMilliseconds());

  var timePastInMs = currentTime.getTime() - targetTime.getTime();
  var timePastInSeconds = timePastInMs / 1000;

  var targetTime2 = new Date();
  targetTime2.setHours(endTime.getHours());
  targetTime2.setMinutes(endTime.getMinutes());
  targetTime2.setSeconds(endTime.getSeconds());
  targetTime2.setMilliseconds(endTime.getMilliseconds());

  if (currentTime.getDay != 0 && currentTime.getDay != 6) 
  {
    if (currentTime.getTime() > targetTime.getTime() && currentTime.getTime() < targetTime2.getTime())
    {
      document.getElementById("todayEarned").innerHTML = (timePastInSeconds * secondly).toFixed(2) + "$";
    }
    if (currentTime.getTime() > targetTime2.getTime())
    {
      document.getElementById("todayEarned").innerHTML = "You've finished your shift, and earned: " + daily.toFixed(2) + "$";
    }
    else
    {
      document.getElementById("todayEarned").innerHTML = "Your shift hasn't started yet, you'll earn: " + daily.toFixed(2) + "$";
    }
  
  }
  else
  {
    document.getElementById("todayEarned").innerHTML = "it is not a work day today!";
  }
  setInterval(calculate, 1000);   
}

