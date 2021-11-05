var STOCKAGUA = +20;
var STOCKCERVEZA = +20;
var STOCKVINO = +20;
var STOCKGASEOSA = +20;
var PRECIOAGUA = +50;
var dataName = prompt("ingrese su nombre");
var dataLastname = prompt("ingrese su apellido");
var dataAge = parseInt(prompt("ingrese su edad"));
var parametro = true;
let saludar = alert(`bienvenido ${dataName} a drinkers`)
do{
    var eleccion = prompt("que desea comprar?");
    if (eleccion === 'agua') {
        var compraAgua = parseInt(prompt("cuantos packs desea comprar)"));
        let stockAgua = (STOCKAGUA -= compraAgua);
        console.log(`stock de agua = ${stockAgua}`);
        
      } else if (eleccion === 'cerveza') {
          var compraCerveza = parseInt(prompt("cuantos cajones desea?"));
          let stockCerveza = (STOCKCERVEZA -= compraCerveza);
          console.log(`stock de cerveza = ${stockCerveza}`);
          
      }else if (eleccion === 'gaseosa'){
          var compraGaseosa = parseInt(prompt('cuantos packs desea comprar?'));  
          let stockGaseosa = (STOCKGASEOSA -= compraGaseosa);
          console.log(`stock gaseosa = ${stockGaseosa}`);

        }else if(eleccion === 'vino'){
        var compraVino = parseInt(prompt('cuantas cajas desea comprar?'));  
        let stockVino = (STOCKVINO -= compraVino)
        console.log(`stock vino = ${stockVino}`);
    }  
      else {
          alert("no tenemos stock en este momento");
      }

      var cierre = prompt('desea comprar algo mas?');
      if(cierre === "no"){
          alert(`muchas gracias por su compra`)
          parametro = false;
      }
    }while(parametro)