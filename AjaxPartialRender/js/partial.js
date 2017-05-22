$(document).ready(function(){
  function mostrarAJAX(data, textStatus, jqXHR) {
      //mostrar en el DOM
      $("#contenedor").html(data);
      $(".js-comportamiento").on("click", function(){
        alert("Boton 2");
      });
  }
  function cargar(){
    $.ajax({
      "url": "partial.php?",
      "method": "GET",
      "dataType": "HTML",
      "success": mostrarAJAX
    });
    $("#contenedor").html("Cargando...");
  }
  $("#cargar").on("click", function () {
    cargar();
  });
  cargar();
});
