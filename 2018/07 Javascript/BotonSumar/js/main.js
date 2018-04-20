"use strict";
let contador = 0;
console.log("Paso 1: declarando funciones");

function sumar(){

  console.log("Paso 3: Valor anterior del contador:" + contador);
  contador = contador + 1;
  console.log("Paso 4: El contador ahora vale:" + contador);
  let mensaje = "Hiciste " + contador + " clicks";
  alert(mensaje);
}

function restar(p1, p2){
  let res = p1 - p2;

  return res;
}

let parametro1 = "6";
let parametro2 = 3;


let aux = restar(restar(parametro1, parametro2), 1);

alert(aux);
