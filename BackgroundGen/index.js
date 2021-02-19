var css = document.querySelector("h3"); 
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random"); 




function setGradient() {
    body.style.background = "linear-gradient(to right, "
     + color1.value + ", " + color2.value + ")";

     css.textContent = body.style.background + ";";
}


function randNum(max){

    return Math.floor(Math.random() * max); // returns a random integer from 0 to max-1
  
}
  
  

  function randomColor() {
  var r1 = randNum(256);
  var g1 = randNum(256);
  var b1 = randNum(256);
  var r2 = randNum(256);
  var g2 = randNum(256);
  var b2 = randNum(256);
  
  body.style.background = "linear-gradient(to right, rgba(" + r1 + "," + g1 + "," + b1 + "), rgba(" + r2 + "," + g2 + "," + b2 + "))";
  
  
  css.textContent = body.style.background + ";";
}




color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener('click', randomColor)