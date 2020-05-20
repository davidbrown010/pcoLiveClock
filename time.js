getTime();
fadeTime();
setInterval(function() {getTime()}, 1000);

function getTime(){
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var day = date.getDay();
  var dateNum = date.getDate();

  if (hour > 12)
    hour = hour-12;
  if (hour == 0)
    hour = 12;

  if (day == 0)
    day = 'Sunday';
  if (day == 1)
    day = 'Monday';
  if (day == 2)
    day = 'Tuesday';
  if (day == 3)
    day = 'Wednesday';
  if (day == 4)
    day = 'Thursday';
  if (day == 5)
    day = 'Friday';
  if (day == 6)
    day = 'Saturday';

  if (min < 10)
    min = "0"+min;

  document.getElementById('clock').innerHTML = hour+":"+min;
  document.getElementById('date').innerHTML = day+" "+dateNum;
}

function fadeTime(){
  document.getElementById('colorPickerWrapper').setAttribute("class", "fadeIn");
  document.getElementById('textWrapper').setAttribute("class", "fadeIn");
}
