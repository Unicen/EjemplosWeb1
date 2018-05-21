"use strict";
let calorias = 0;
SumarCantidad(0); //fuerzo actualización inical sumando 0 calorias
function SumarInput() {
    //lee el nombre
    let nodoInput =  document.getElementById("calorias");
    let nuevasCalorias = parseInt(nodoInput.value);
    SumarCantidad(nuevasCalorias);
}
function SumarCantidad(nuevas){
    calorias += nuevas;
    let nodoTotal = document.getElementById("txtTotal");
    nodoTotal.innerHTML = calorias;
}
