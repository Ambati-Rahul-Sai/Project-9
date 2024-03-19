
var timer = 60;
var score = 0;
var newHit;

function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

function makeBubble() {
  
  var clutter = "";
  
  for(var i=1; i<=112; i++) {
    var num = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${num}</div>`;
  }
  
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerInt = setInterval(function(){
    if(timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

function resetHit() {
  newHit = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = newHit;
}

document.querySelector("#pbtm").addEventListener("click", 
function(details) {
  var x = Number(details.target.textContent);
  if(newHit === x) {
    increaseScore();
  }
  resetHit();
  makeBubble();
});

resetHit();
runTimer();
makeBubble();