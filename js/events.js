var puntaje = parseInt('00');
var tiempo = parseInt('00');

/* PUNTAJE */

$('.fa-trophy').click(function() {
  puntaje += 1;
  if ( puntaje < 10 ) {
    document.getElementById("puntaje").innerHTML="0"+puntaje;
  } else {
    document.getElementById("puntaje").innerHTML=puntaje;
  }
})

/* SEGUNDERO */

var timerVar = setInterval(countTimer, 1000);
function countTimer() {
   ++tiempo;
   var hour = Math.floor(tiempo /3600);
   var minute = Math.floor((tiempo - hour*3600)/6000);
   var seconds = tiempo - (hour*3600 + minute*6000);
    document.getElementById("tiempo").innerHTML = seconds;
}