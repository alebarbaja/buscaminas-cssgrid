let puntaje = parseInt('00');
let tiempo = parseInt('00');

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

let timerVar = setInterval(countTimer, 1000);
function countTimer() {
   ++tiempo;
   let hour = Math.floor(tiempo /3600);
   let minute = Math.floor((tiempo - hour*3600)/6000);
   let seconds = tiempo - (hour*3600 + minute*6000);
    document.getElementById("tiempo").innerHTML = seconds;
}
