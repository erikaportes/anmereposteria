// "TIENDA DE POSTRES VIRTUAL" (REPOSTERÍA)


// CANTIDAD DE PRODUCTOS PERMITIDOS PARA COMPRA EN BASE AL STOCK:

// const CANTIDAD = prompt("Ingresa cantidad de pays helados");

// if(CANTIDAD <= 5){
//     console.log("Continúa con tu compra")
// }
// else{
//     console.log("Productos agotados");
// }


// COMPRA EXITOSA EN BASE A LA FORMA DE PAGO (TARJETA O PAYPAL)

// let tarjeta = true;
// let payPal = false; 

// if (tarjeta  || payPal) {
//     console.log("compra exitosa")
// }
// else{
//     console.log("compra no exitosa")
// }


// ¿INICIO SESIÓN O REGISTRO?

// const INICIO = prompt("¿Iniciar sesión?")

// if(INICIO === "si"){
//     console.log("Ingresa tus datos")
// }else{
//     console.log("Registra tus datos");
// }


// USUARIO Y CONTRASEÑA VÁLIDA O NO VÁLIDA

// let usuario = prompt("Ingresa usuario:");
// let contraseña = prompt("Ingresa contraseña");

// if ((usuario === "erika" || usuario === "erikaportes@gmail.com") && (contraseña === "java" || contraseña === "script")){
//     alert("¡Bienvenido(a)")
// }else{
//     alert("Datos erróneos, ingresa tus datos nuevamente");
// }


// SUMAR PRODUCTOS AL CARRITO

// const  NUMERO = 1;

// for(let pastel = 0; pastel <= 10; pastel++){
//     const RESULTADO = NUMERO + pastel;
//     console.log(NUMERO + " + " + pastel + "= " + RESULTADO);
// }


// PERMITIR HASTA 5 PRODUCTOS

// for (let pastel = 1; pastel <= 10; pastel++) {

//     if (pastel === 6) {
//         break;
//     }
//     console.log(pastel)
// }


// SE CUMPLE CONDICION HASTA LLEGAR A 5 PRODUCTOS

// let productos = 1; 

// while(productos <=5){
//     console.log("cantidad:" + productos);
//     productos++ 
// }

// console.log("Limite de productos")


// TEMPORIZADOR PARA RESERVACIÓN DE HORARIO DE ENTREGA DE PRODUCTOS

// let segundos = 60;

// while(segundos >= 0){
//     console.log("cuenta regresiva reservación" + segundos);
//     segundos--;
// }

// console.log("Su reservación se ha cancelado, favor de volver a reservar horario");


// SUMA DE CIERTA CANTIDAD DE PRODUCTOS AL CARRITO

// let suma = 0;
// let continuar;

// do{
//     const NUMERO = parseFloat(prompt("Ingresa la cantidad de productos a sumar a tu carrito"));

//     if(!isNaN(NUMERO)){
//         suma += NUMERO; 
//         continuar = prompt("¿Quieres ingresar otra cantidad? (Sí o No)").toLowerCase();
//     }else{
//         alert("Ingresa un numero válido");
//         continuar = "si"; //en caso de que no ingrese un numero que el programa se puede continuar
//     }
// } 

// while(continuar === "si");

// alert("la suma total es: " + suma)


// DISPONIBILIDAD PRODUCTO

// const producto = 3 ;

// switch(producto){

//     case 1:
//         console.log("Pay fresa");
//         break;
//     case 2:
//         console.log("Pay Ferrero");
//         break;
//     case 3:
//         console.log("Pay limón");
//         break;

//     default:
//         console.log("Producto no disponible");
// }


// INGRESO DE DATOS DEL USUARIO

//  let ingresoDeNombre = prompt("Ingresar nombre:");
//  let ingresoDeApellido = prompt("Ingresar apellido:");
//  let ingresoDeCorreo = prompt("Ingresar correo:");
//  let ingresoDeDomicilio = prompt("Ingresar dirección de domicilio:");

//  function ingresarDatos(nombre, apellido, correo, domicilio){
//      console.log("El nombre del usuario es: " + nombre + " y su apellido es: " + apellido + " y su correo es: " + correo + " y su domicilio es: " + domicilio);
//  }

//  ingresarDatos(ingresoDeNombre, ingresoDeApellido, ingresoDeCorreo, ingresoDeDomicilio);



// FUNCIÓN SUMAR PRODUCTOS

// function sumar(a,b){

//     return a + b; 
// }

// let sumaProductos = sumar(6,8);
// console.log(sumaProductos);


//FUNCION ANONIMA MULTIPLICACIÓN DE PRODUCTOS

// let suma = function(a,b){
//     return a * b;
// }

// console.log(suma(5,5));


//FUNCION DE TIPO FLECHA RESTANDO PRODUCTOS

// let num1= parseInt(prompt("Ingresa num1"))
// let num2= parseInt(prompt("Ingresa num2"))

// let resta = (a,b) => a - b; 

// console.log(resta(num1,num2));


// (OBJETOS) DESCRIPCIÓN PRODUCTOS REPOSTERÍA

// let tipoProductos = "pays helados"
// let productoCategoria = "frutales";
// let productoSabor = "limón";
// let productoPrecio = 350;

// let payHeladoLimon = {
//     producto: "pay helado",
//     categoría: "frutales",
//     sabor: "limón",
//     precio: 350,
// };

// console.log(payHeladoLimon);
// console.log(payHeladoLimon.precio);


// PLANTILLA PARA INGRESAR C/U DE LOS PRODUCTOS 

const producto ={
    tipo: "",
    categoría: "",
    sabor: "",
    precio: ""
}

producto.tipo = "pay helado";
producto.categoría = "chocolates";
producto.sabor = "Conejito";
producto.precio = "360"

console.log(producto);

producto.tipo = "pay helado";
producto.categoría = "chocolates";
producto.sabor = "Ferrero";
producto.precio = "380"

console.log(producto);

producto.tipo = "pay helado";
producto.categoría = "frutales";
producto.sabor = "Limón";
producto.precio = "350"

console.log(producto);

producto.tipo = "pay helado";
producto.categoría = "frutales";
producto.sabor = "Mango";
producto.precio = "350"

console.log(producto);


// PARA MODIFICAR ALGÚN PRODUCTO

producto["sabor"] = "Guayaba";

console.log(producto)