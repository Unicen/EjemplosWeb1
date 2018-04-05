$(document).ready(function(){
  "use strict";
  function crearBoton(numBoton) {
    //let boton =   '<button>Boton '+numBoton+'</button>';
    let botonJquery = $('<button>Boton '+numBoton+'</button>');
    let botonera = $("#buttons");
    //botonera.html(botonera.html()+boton);
    botonera.append(botonJquery);
    console.log("Boton: " + ".n"+numBoton);
    console.log($(".n"+numBoton));
    botonJquery.on("click",function(){
      alert("El numero del boton es "+ numBoton);
    })

  }

  $("#create").on("click", function (){
    let cantBotones = $("#quantity").val();
    for (let numBoton = 0; numBoton < cantBotones; numBoton++) {
      let tiempoEspera = Math.floor(Math.random()*5000);
      setTimeout(function(){crearBoton(numBoton)}, tiempoEspera);
    }
  });
});
