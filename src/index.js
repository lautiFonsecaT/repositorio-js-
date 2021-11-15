var STOCKAGUA = +20;
var STOCKCERVEZA = +20;
var STOCKVINO = +20;
var STOCKGASEOSA = +20;
var PRECIOAGUA = +50;
var PRECIOCERVEZA = +30;
var PRECIOGASEOSA = +20;
var PRECIOVINO = +100;
var Carrito = [];
var stock = [];
var dataName = prompt("ingrese su nombre");
var dataLastname = prompt("ingrese su apellido");
var dataAge = parseInt(prompt("ingrese su edad"));
var parametro = true;
var total = 0;


class usuario {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  saludar() {
    alert(`bienvenido ${this.nombre} a drinkers`);
  }
}

var usuariox = new usuario(dataName, dataLastname, dataAge);
usuariox.saludar();

function compra(){
    do{
        var eleccion = prompt("que desea comprar?");
        if (eleccion === 'agua') {
            var compraAgua = parseInt(prompt("cuantos packs desea comprar)"));
            let stockAgua = (STOCKAGUA -= compraAgua);
            let totalAgua = (PRECIOAGUA *= compraAgua);
            stock.push(stockAgua)
            Carrito.push(totalAgua);
            console.log(`stock de agua = ${stockAgua}`);
            
          } else if (eleccion === 'cerveza') {
              var compraCerveza = parseInt(prompt("cuantos cajones desea?"));
              let stockCerveza = (STOCKCERVEZA -= compraCerveza);
              let totalCerveza = (PRECIOCERVEZA *= compraCerveza);
              stock.push(stockCerveza);
              Carrito.push(totalCerveza);
              console.log(`stock de cerveza = ${stockCerveza}`);
              
          }else if (eleccion === 'gaseosa'){
              var compraGaseosa = parseInt(prompt('cuantos packs desea comprar?'));  
              let stockGaseosa = (STOCKGASEOSA -= compraGaseosa);
              let totalGaseosa = (PRECIOGASEOSA *= compraGaseosa);
              stock.push(stockGaseosa);
              Carrito.push(totalGaseosa);
              console.log(`stock gaseosa = ${stockGaseosa}`);
            }else if(eleccion === 'vino'){
            var compraVino = parseInt(prompt('cuantas cajas desea comprar?'));  
            let stockVino = (STOCKVINO -= compraVino);
            let totalVino = (PRECIOVINO *= compraVino);
            stock.push(stockVino)
            Carrito.push(totalVino);
            console.log(`stock gaseosa = ${stockVino}`);
        }  
          else {
              alert("no tenemos stock en este momento");
          }    
          
          for (let i = 0; i < Carrito.length; i++) {
              total += Carrito[i];  
              console.log(`su total a pagar es de $${total}`);
            }  
          
            var cierre = prompt('desea comprar algo mas?');
          if(cierre === "no"){
              alert(`su total a pagar es de $${total}, muchas gracias por su compra`)
              parametro = false;
              
            }    
            

        }while(parametro)      
    }    
    if(usuariox.edad >= 18){
        
        compra();

}else if(usuariox.edad < 18){

    alert('usted no puede comprar disculpe las molestias');

}
