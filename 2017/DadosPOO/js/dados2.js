$("#tirarDados").on("click", tirarDados);

$("#tirarMuchos").on("click", function(){
    let val = $("input").val();
    tirarNDados(val);
}
);

$(".btnToggle").on("click", function () {
  $("img").remove();
  document.querySelectorAll("img").forEach(x=>x.remove())
})

const CANT_CARAS = 6;
function obtenerDado(){
  return Math.floor(Math.random() * CANT_CARAS + 1);
}
let ap = [];
for (let i = 0; i < CANT_CARAS*2+1; i++) {
  ap[i] = 0;
}

let valor =  2;

let dado = crearDado();
let dado2 = crearDado();

function crearDado(){
  return
    {
      "valor": 1,
      "tirar": function(){
        this.valor = Math.floor(Math.random()*CANT_CARAS+1);
      }
    };
}

function  tirarDados(){
  let dado1 = obtenerDado();
  let dado2 = obtenerDado();
  let d1 = document.getElementById("primerDado");
  d1.src = "images/dado" + dado1 + ".png";
  let d2 = document.getElementById("segundoDado");
  d2.src = "images/dado" + dado2 + ".png";
  let suma = dado1+dado2;
  ap[suma] += 1;
  let fila = ""
  for (var i = 2; i <= 12; i++) {
    fila += "<td>"+ap[i]+"</td>";
  }
  //document.getElementById("resultado").innerHTML = fila;
  $("#resultado").html(fila);
  //alert(ap);
}

function tirarNDados(veces) {
  for (let i = 1; i <= veces; i++) {
    tirarDados();
  }

}

function jugar() {
  tirarDados();
  let timer = setTimeout('jugar()', 500);
}
/* Comentario de varias
lineas */
