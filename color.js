var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var color3 = document.getElementById('color3');
var color4 = document.getElementById('color4');
var color5 = document.getElementById('color5');
var clockText = document.getElementById('clock');
var dateText = document.getElementById('date');

color1.onclick = function(){updateColor(color1);}
color2.onclick = function(){updateColor(color2);}
color3.onclick = function(){updateColor(color3);}
color4.onclick = function(){updateColor(color4);}
color5.onclick = function(){updateColor(color5);}

function updateColor(color){
  for(var i = 0; i < 5; i++){
    var colorName = "color"+(i+1);
    document.getElementById(colorName).setAttribute("class", "circle")
  }

  var newColor = color.getAttribute('id')+"Text";

  color.setAttribute("class", "circle circleBorder");
  clockText.setAttribute("class", newColor);
  dateText.setAttribute("class", newColor);
}
