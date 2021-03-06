
function getInformationByGroup(){
  event.preventDefault();
  let grupo = $("#groupid").val();
  $.ajax({
     method: "GET",
     dataType: 'JSON',
     url: "http://web-unicen.herokuapp.com/api/thing/group/" + grupo,
     success: function(resultData){
       //al ser tipo JSON resultData es un objeto listo para usar
       let html = "";
       for (let i = 0; i < resultData.information.length; i++) {
         html += "Id: " + resultData.information[i]['_id'] + "<br />";
         html += "Grupo: " + resultData.information[i]['group'] + "<br />";
         html += "Informacion: " + resultData.information[i]['thing'] + "<br />";
         html += "--------------------- <br />";
       }
       $("#infoGroup").html(html);
     },
     error:function(jqxml, status, errorThrown){
       console.log(errorThrown);
     }
  });
}

function getInformationByItem(){
  event.preventDefault();
  let item = $("#itemid").val();
  $.ajax({
     method: "GET",
     dataType: 'JSON',
     //si la info va en la URL o se pasa por "data" depende del servicio
     url: "http://web-unicen.herokuapp.com/api/thing/" + item,
     success: function(resultData){
       //al decir que dataType es JSON, ya resultData es un objeto
       let html = "";
       html += "Id: " + resultData.information['_id'] + "<br />";
       html += "Grupo: " + resultData.information['group'] + "<br />";
       html += "Informacion: " + resultData.information['thing'] + "<br />";
       html += "--------------------- </br>";
       $("#infoItem").html(html);
     },
     error:function(jqxml, status, errorThrown){
       console.log(errorThrown);
     }

  });
}

function guardarInformacion(){
  event.preventDefault();
  let grupo = $("#grupo").val();
  let informacion = $("#informacion").val();
  //la estructura que debemos enviar es especifica de cada servicio que usemos
  //en este caso un hay que enviar un objeto con el numero de grupo y con lo que queramos guardarInformacion
  //thing puede ser un objeto JSON con tanta información como queramos (en este servicio)
  let info = {
      group: grupo,
      thing: informacion //puede ser un objeto JSON!
      };

  if (grupo && informacion){
    $.ajax({
       method: "POST",
       dataType: 'JSON',
       //se debe serializar (stringify) la informacion (el "data:" de ida es de tipo string)
       data: JSON.stringify(info),
       contentType: "application/json; charset=utf-8",
       url: "http://web-unicen.herokuapp.com/api/thing",
       success: function(resultData){
         $("#guardarAlert").removeClass("alert-danger")
         $("#guardarAlert").addClass("alert-success")
         //como le dimos dataType:"JSON" el resultData ya es un objeto
         //la estructura que devuelve es especifica de cada servicio que usemos
         $("#guardarAlert").html("Informacion guardada con ID=" + resultData.information._id);
         console.log(resultData);
       },
       error:function(jqxml, status, errorThrown){
         console.log(errorThrown);
         $("#guardarAlert").addClass("alert-danger")
         $("#guardarAlert").html("Error por favor intente mas tarde");
       }
    });
  }
  else
  {
    $("#guardarAlert").addClass("alert-danger")
    $("#guardarAlert").html("Grupo e Informacion son campos requeridos");
  }
}
