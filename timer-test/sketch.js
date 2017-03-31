var counter = 0;
var lifetime = 70;

function convertSec(s){
  //var hr = floor(s/3600);
  var min = floor(s/60);

  var sec = s % 60;

  return nf(0,2) + ':' + nf(min,2) + ':' + nf(sec,2);

}
var whistle;
function preload(){
  whistle = loadSound("whistle.mp3");

}
function setup() {
  noCanvas();

  var params = getURLParams();
  if(params.minute){
  var min = params.minute;
  lifetime = min * 60;
}
  var timer = select('#timer');
  timer.html('0');

  function time(){
    counter++;
    timer.html(convertSec(lifetime - counter));
    if(counter == lifetime){
      whistle.play();
      clearInterval();
      counter = 0;
    }

  }

  setInterval(time, 1000);
}
