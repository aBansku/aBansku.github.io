var score;
var duration;
var startTime;
var ended = true;
var timerTxt = document.getElementById("timer");
var scoreTxt = document.getElementById("score");
var clicksTxt = document.getElementById("clicks");
var startBtn = document.getElementById("start");
var clickArea = document.getElementById("clickarea");
var fiveSec = document.getElementById("fivesec")
var oneSec = document.getElementById("onesec")
var tenSec = document.getElementById("tensec")
// This function makes it possible to show elements again after they are hidden.
var show = function(elem) {
  elem.style.display = 'inline';
};
// This function hides elements.
var hide = function(elem) {
  elem.style.display = 'none';
}
function onesecond() {
  duration = 1
}
function fivesecs() {
  duration = 5
}
function tensecs() {
  duration = 10
}

console.log(duration)
// This function starts the game. Get called when Start button is pressed
function startGame() {
  console.log(duration)
  hide(startBtn)
  score = -1;
  ended = false;
  // get start time
  startTime = new Date().getTime();
  var timerId = setInterval(function() {
    var total = (new Date().getTime() - startTime) / 1000;
    
    if (total < duration) {
      timerTxt.textContent = total.toFixed(2);
      clicksTxt.textContent = (score / total).toFixed(1);
    } else {
      ended = true;
      clearInterval(timerId);
      endGame();
    }
  }, 1);
}
// This function ends the game. Get called when timer hits duration
function endGame() {

var clicsBySeconds = (score / duration).toFixed(2);
timerTxt.textContent = duration.toFixed(3);
clicksTxt.textContent = clicsBySeconds;
show(startBtn);
setTimeout(function() {
}, 10);
}
startBtn.addEventListener("click", function() {
startGame();
});
clickArea.addEventListener("click", function() {
if (!ended) {
  score++;
  scoreTxt.textContent = score;
}
});
// Log alot of ones to console so theres more javascript code than css.
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.clear()