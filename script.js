

  var randome1 = Math.floor((Math.random()*6)+1);
  var rd1 = "images/dice" + randome1 + ".png";
  
var sle1 = document.querySelectorAll("img")[0];
sle1.setAttribute("src", rd1);

    
  var randome2 = Math.floor((Math.random()*6)+1);
  var rd2 = "images/dice" + randome2 + ".png";
  
var sle2 = document.querySelectorAll("img")[1];
sle2.setAttribute("src", rd2);

if(randome1<randome2){
  
}