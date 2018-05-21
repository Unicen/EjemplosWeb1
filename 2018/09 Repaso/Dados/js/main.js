/* Mi codigo de Javascript que tira dados.
*/
"use strict";

let cuenta = 0; //inicializacion de cuenta

function tirarDados() {
    //genera dos numeros al azar y cambia las fuentes de las imagenes
  let path = "http://tudai1-1.alumnos.exa.unicen.edu.ar/web-1/material/archivos/";
  let d1 = Math.floor((Math.random() * 6) + 1);
  let d2 = Math.floor((Math.random() * 6) + 1);
  document.getElementById("dado1").src = path + "dado"+d1+"JAVI.png"; //link externo
  document.getElementById("dado2").src =  path + "dado"+d2+"JAVI.png"; //link externo
  let suma = d1 + d2;
  if (suma == 7){ //verificacion del resultado e incremento si es 7
    cuenta++;
  }
  document.getElementById("resultado").innerHTML = cuenta; //mostrar la cuenta
}
