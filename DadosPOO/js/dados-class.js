$("#tirarDados").on("click", tirarDados_handler);

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

class Dado{
  constructor(idDOM){
    this.valor = 1;
    this.idDOM = idDOM;
  }
  tirar(){
    this.valor = Math.floor(Math.random()*CANT_CARAS+1);
    let d = document.getElementById(this.idDOM);
    d.src = "images/dado" + this.valor + ".png";
  };
}
class Cubilete{
  constructor(){
    this.resultado = 1;
    this.dado1 = new Dado("primerDado");
    this.dado2 = new Dado("segundoDado");
  }
  tirar(){
    this.dado1.tirar();
    this.dado2.tirar();
    this.resultado = this.dado1.valor + this.dado2.valor;
    return this.resultado;
  }
}


class Tablero{
  constructor(){
    this.apariciones = [];
    for (let i = 0; i <= CANT_CARAS*2; i++) {
      this.apariciones[i] = 0;
    }
  }
  incrementarAparicion(aparecido){
    this.apariciones[aparecido] += 1;
    let fila = ""
    for (var i = 2; i <= 12; i++) {
      fila += "<td>"+this.apariciones[i]+"</td>";
    }
    //document.getElementById("resultado").innerHTML = fila;
    $("#resultado").html(fila);
  }
}

class Jugador{
  constructor(){
    this.cubilete = new Cubilete();
    this.tablero = new Tablero();
  }
  jugarTurno(){
      let suma = this.cubilete.tirar();
      this.tablero.incrementarAparicion(suma);
  }
}

let jugador = new Jugador();
function  tirarDados_handler(){
  jugador.jugarTurno();
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
