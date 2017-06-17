$(document).ready(function(){
  "use strict";

  function mostrarDatosGrupo(data) { //inicia una funcion
    console.log(data);
    let html = "<h1>Datos</h1>";
    for (let i = 0; i < data.information.length; i++) {
      html = html + "<p>" +
          data.information[i].thing + " ";
      html = html + " --- " +
          data.information[i]._id + "</p>";
    }
    $(".js-info-group").html(html);
  }

  function handleError (xmlhr, r, error) {
    console.log(error);
    console.log(r);
  }

  function traerDatosGrupo(){
    let numGrupo = $(".js-numgrupo-txt").val();
    $.ajax({ //inicia un JSON
      "url": "http://web-unicen.herokuapp.com/api/thing/group/"+numGrupo,
      "method": "GET",
      "dataType": "JSON",
      "success": mostrarDatosGrupo,
      "error": handleError
    });
    $(".js-info-group").html("<h1>Cargando...</h1>");
  }

  $(".js-get-group-info").on("click", traerDatosGrupo)

  function guardadoOK(data){
    console.log(data);
    traerDatosGrupo();
  }
  $(".js-post-info").on("click", function(event){
    event.preventDefault();
    let numGrupo = $(".js-numgrupo-post-txt").val();
    let info = $("#informacion").val();
    let objeto = {
        "group": numGrupo,
        "thing": info
    };
    console.log(objeto);
    $.ajax(
      {
        "url":"http://web-unicen.herokuapp.com/api/thing",
        "method": "POST",
        "contentType": "application/json; charset=utf-8",
        "data": JSON.stringify(objeto),
        "dataType": "JSON",
        "success": guardadoOK,
        "error": handleError
      }
    );

  });
});
