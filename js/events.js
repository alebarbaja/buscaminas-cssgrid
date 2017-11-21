var puntaje = parseInt('00');
var tiempo = parseInt('00');

/* PUNTAJE | SCORE */

$('.fa-trophy').click(function() {
  puntaje += 1; // Suma un punto
  if ( puntaje < 10 ) {
    document.getElementById("puntaje").innerHTML="0"+puntaje; // Agrega el 0 al puntaje
  } else {
    document.getElementById("puntaje").innerHTML=puntaje;
  }
})

/* SEGUNDOS | SECONDS */

var timerVar = setInterval(countTimer, 1000);
function countTimer() {
   ++tiempo;
   var hour = Math.floor(tiempo /3600);
   var minute = Math.floor((tiempo - hour*3600)/6000);
   var seconds = tiempo - (hour*3600 + minute*6000);
    if ( tiempo < 10 ) {
      document.getElementById("tiempo").innerHTML = "0"+seconds; // Agrega el 0 a los segundos
    } else {
    document.getElementById("tiempo").innerHTML = seconds;
    }
}
