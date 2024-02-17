// "TIENDA DE POSTRES VIRTUAL" (REPOSTERÍA)


// CANTIDAD DE PRODUCTOS PERMITIDOS PARA COMPRA EN BASE AL STOCK:

// const CANTIDAD = prompt("Ingresa cantidad de pays helados");

// if(CANTIDAD <= 5){
//     console.log("Continúa con tu compra")
// }
// else{
//     console.log("Productos agotados");
// }


// CONINUAR COMPRA SI LA FORMA DE PAGO ES CON TARJETA O PAYPAL

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

let suma = 0;
let continuar;

do {
    const NUMERO = parseFloat(prompt("Ingresa la cantidad de productos a sumar a tu carrito"));

    if (!isNaN(NUMERO)) {
        suma += NUMERO;
        continuar = prompt("¿Quieres ingresar otra cantidad? (Sí o No)").toLowerCase();
    } else {
        alert("Ingresa un numero válido");
        continuar = "si"; //en caso de que no ingrese un numero que el programa se puede continuar
    }
}

while (continuar === "si");

alert("la suma total es: " + suma)


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


// INGRESO DE DATOS DEL USUARIO PARA CONTINUAR COMPRA

let ingresoDeNombre = prompt("Ingresar nombre:");
let ingresoDeApellido = prompt("Ingresar apellido:");
let ingresoDeCorreo = prompt("Ingresar correo:");
let ingresoDeDomicilio = prompt("Ingresar dirección de domicilio:");

function ingresarDatos(nombre, apellido, correo, domicilio) {
    console.log("El nombre del usuario es: " + nombre + " y su apellido es: " + apellido + " y su correo es: " + correo + " y su domicilio es: " + domicilio);
}

ingresarDatos(ingresoDeNombre, ingresoDeApellido, ingresoDeCorreo, ingresoDeDomicilio);



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

// const producto ={
//     tipo: "",
//     categoría: "",
//     sabor: "",
//     precio: ""
// }

// producto.tipo = "pay helado";
// producto.categoría = "chocolates";
// producto.sabor = "Conejito";
// producto.precio = "360"

// console.log(producto);

// producto.tipo = "pay helado";
// producto.categoría = "chocolates";
// producto.sabor = "Ferrero";
// producto.precio = "380"

// console.log(producto);

// producto.tipo = "pay helado";
// producto.categoría = "frutales";
// producto.sabor = "Limón";
// producto.precio = "350"

// console.log(producto);

// producto.tipo = "pay helado";
// producto.categoría = "frutales";
// producto.sabor = "Mango";
// producto.precio = "350"

// console.log(producto);


// PARA MODIFICAR ALGÚN PRODUCTO

// producto["sabor"] = "Guayaba";
// console.log(producto)


// OBJETOS CONSTRUCTORES PRODUCTOS

// function Productos(producto, categoria, sabor, precio) {
//     this.producto = producto
//     this.categoria = categoria
//     this.sabor = sabor
//     this.precio = precio
// }

// const PRODUCTO_UNO = new Productos("pay helado", "chocolates", "Conejito", "360")
// const PRODUCTO_DOS = new Productos("pay helado", "frutales", "limón", "350")
// const PRODUCTO_TRES = new Productos("pay helado", "chocolates", "Ferrero", "380")
// const PRODUCTO_CUATRO = new Productos("pay helado", "frutales", "mango", "350")
// const PRODUCTO_CINCO = new Productos("pay helado", "chocolates", "Raffaello", "380")
// const PRODUCTO_SEIS = new Productos("pay helado", "frutales", "moras", "370")
// const PRODUCTO_SIETE = new Productos("pay helado", "chocolates", "KitKat", "360")
// const PRODUCTO_OCHO = new Productos("pay helado", "frutales", "guayaba", "350")
// console.log(PRODUCTO_UNO, PRODUCTO_DOS, PRODUCTO_TRES, PRODUCTO_CUATRO, PRODUCTO_CINCO, PRODUCTO_SEIS, PRODUCTO_SIETE, PRODUCTO_OCHO);


// PARA MODIFICAR PRODUCTO DESPUÉS

// PRODUCTO_DOS.sabor = "guayaba"
// console.log(PRODUCTO_DOS);


// PRECIO OBJETOS CON IVA

// const IVA = 0.16;

// function Productos(producto, categoria, sabor, precio) {
//     this.producto = producto
//     this.categoria = categoria
//     this.sabor = sabor
//     this.precio = precio
//     this.precioConIVA = function () {
//         let precioFinal = this.precio * IVA;
//         return "$" + precioFinal
//     }
// }

// if (cantidad >= 5) {
//     precioFinal *= 0.9;

// }
// return precioFinal;

// const PRODUCTO_UNO = new Productos("pay helado", "chocolates", "Conejito", "350")
// const PRODUCTO_DOS = new Productos("pay helado", "frutales", "limón", "360")
// const PRODUCTO_TRES = new Productos("pay helado", "chocolates", "Ferrero", "380")
// const PRODUCTO_CUATRO = new Productos("pay helado", "frutales", "mango", "350")
// const PRODUCTO_CINCO = new Productos("pay helado", "chocolates", "Raffaello", "380")
// const PRODUCTO_SEIS = new Productos("pay helado", "frutales", "moras", "370")
// const PRODUCTO_SIETE = new Productos("pay helado", "chocolates", "KitKat", "360")
// const PRODUCTO_OCHO = new Productos("pay helado", "frutales", "guayaba", "350")

// console.log(PRODUCTO_UNO);
// console.log(PRODUCTO_UNO.precioConIVA())
// console.log(PRODUCTO_DOS.precioConIVA())
// console.log(PRODUCTO_TRES.precioConIVA())
// console.log(PRODUCTO_CUATRO.precioConIVA())
// console.log(PRODUCTO_CINCO.precioConIVA())
// console.log(PRODUCTO_SEIS.precioConIVA())
// console.log(PRODUCTO_SIETE.precioConIVA())
// console.log(PRODUCTO_OCHO.precioConIVA())


// CLASS PRODUCTOS

class Productos{
    constructor(producto, categoria, sabor, precio){
        this.producto = producto
        this.categoria = categoria
        this.sabor = sabor
        this.precio = precio
    }
    saludar(){
        console.log(`Hola el producto es ${this.producto} y es de la categoría ${this.categoria} y es de ${this.sabor} y cuesta ${this.precio}} `)
    }
}

const PRODUCTO1 = new Productos("pay helado", "chocolates", "Conejito", 350);
const PRODUCTO2 = new Productos("pay helado", "frutales", "limón", 360);
const PRODUCTO3 = new Productos("pay helado", "chocolates", "Ferrero", 380)
const PRODUCTO4 = new Productos("pay helado", "frutales", "mango", 350)
const PRODUCTO5 = new Productos("pay helado", "chocolates", "Raffaello", "380")
const PRODUCTO6 = new Productos("pay helado", "frutales", "moras", "370")
const PRODUCTO7 = new Productos("pay helado", "chocolates", "KitKat", "360")
const PRODUCTO8 = new Productos("pay helado", "frutales", "guayaba", "350")

PRODUCTO1.saludar();
PRODUCTO2.saludar();
PRODUCTO3.saludar();
PRODUCTO4.saludar();
PRODUCTO5.saludar();
PRODUCTO6.saludar();
PRODUCTO7.saludar();
PRODUCTO8.saludar();


// CALCULAR PRECIO CON DESCUENTO EN BASE A LA CANTIDAD DE PRODUCTOS

// function calcularPrecioConDescuento(cantidad, precioUnitario) {

//     let precioTotal = cantidad * precioUnitario;

//     if (cantidad >= 5) {
//         precioTotal *= 0.9;

//     }
//     return precioTotal;
//     }

// console.log(calcularPrecioConDescuento(6, 350));



// ARRAYS 

// TIPOS DE ARRAYS

// let sabores = ["limón","Conejito","Ferrero","mango"]; 
// let numeros = [1,2,3,4,5,6] 
// let boolean = [true, false, false, true, false] 
// let popurri = ["Conejito",1 ,true] 


// MOSTRAR UN ARRAY EN ESPECÍFICO EN BASE AL ÍNDICE

// console.log(sabores[2]);


// ARRAYS LISTA PRODUCTOS

// const PAYS = [  //
//     {
//         sabor: "limón",
//         precio:"350",
//         stock: 4
//     },
//     {
//         sabor:"Conejito",
//         precio:"360",
//         stock: 5
//     }
// ]

// console.log(PAYS);
// console.log(PAYS[1]);


// RECORRIDO DE SABORES PAYS

// let pays = ["limón","Conejito","Ferrero","mango"];
// console.log (pays);
// for(let i = 0; i < 10; i++){
// console.log(pays[i]);}


// CANTIDAD DE PAYS

// let pays = ["limón","Conejito","Ferrero","mango"]
// let cantidadDePays = pays.length;
// console.log("la cantidad de pays que posee el array es: " + cantidadDePays)

// let texto= "paysHelados";
// let longitudTexto = texto.length
// console.log(longitudTexto);


// let paysHelados = ["limón","Conejito","Ferrero","mango"]

// AGREGAR MORAS AL FINAL
// paysHelados.push("moras");
// console.log(paysHelados);


// ELIMINAR EL ÚLTIMO MANGO
// paysHelados.pop();
// console.log(paysHelados)


// ELIMINAR EL PRIMERO LIMÓN
// paysEliminado = paysHelados.shift();
// console.log(paysEliminado);
// console.log(paysHelados);


// REEMPLAZAR ELEMENTOS
// paysHelados.splice(1,2,"moras","guayaba");


// QUITAR ELEMENTOS
// paysHelados.splice(1,2);


// AGREGAR ELEMENTOS QUE AÚN NO ESTÁN AGREGADOS EN EL ÍNDICE
// paysHelados.splice(4,5,"fresa","plátano");
// console.log(paysHelados);


// CADENA TEXTO CON SEPARADORES 
// let stringPays = paysHelados.join(" | ");
// console.log(stringPays);


// COMBINAR MÁS PRODUCTOS
// let masPays = paysHelados.concat(["moras", "plátano"]);
// console.log(masPays);

// ó

// let pays1 = ["limón","mango","moras"];
// let pays2 = ["Conejito","Ferrero","KitKat"];
// let pays3 = ["plátano","guayaba","Raffaello"];
// const NUEVO_ARRAY = pays1.concat(pays2,pays3);
// console.log(NUEVO_ARRAY);


// SACAR PORCIÓN DE PRODUCTOS Y CREAR UN NUEVO ARRAY SIN LOS OTROS PRODUCTOS
// let pays = ["limón","mango","moras","Conejito","Ferrero"];
// let parteDelArray = pays.slice(1,4);
// console.log(parteDelArray);


// let pays = ["limón","moras","mango","plátano","guayaba"];

// INDEXOF
// let indice = pays.indexOf("mango");
// console.log(indice);

// INCLUDES (verdadero o falso)
// let estaEnPays = pays.includes("fresa");
// console.log(estaEnPays);

// REVERSE (muestra lista al revés)
// let paysDeVuelta = pays.reverse();
// console.log(paysDeVuelta);

// UNSHIFT (Agregar elementos al inicio y desplazar los que ya están)
// let pays = ["limón","moras","mango","plátano","guayaba"];
// const NUEVO_ARRAY = pays.unshift("Conejito");
// console.log(NUEVO_ARRAY)
// console.log(pays);


// ALMACENAR INVENTARIO
// const PAYS = [
//     {
//         sabor: "limón",
//        precio: 350
//     },
//     {
//         sabor: "Conejito",
//        precio: 360
//     },
//     {
//         sabor: "Ferrero",
//        precio: 380
//     }
// ]
// console.log(PAYS)


// FOR... OF (Alguno en específico)
// for (const Objeto of PAYS){
//     console.log(Objeto.sabor);
// }


// PROMEDIO PRECIOS DE TODOS LOS PRODUCTOS AGREGADOS AL CARRITO

const PAYS = [
    { sabor: "limón", precio: 350 },
    { sabor: "Conejito", precio: 360 },
    { sabor: "Ferrero", precio: 380 },
    { sabor: "guayaba", precio: 350 },
    { sabor: "KitKat", precio: 360 },
    { sabor: "Raffaello", precio: 380 },
    { sabor: "moras", precio: 370 },
    { sabor: "mango", precio: 350 }
  ];

function calcularPromedioPrecios(arrayPays){
    let sumaPrecios = 0;

    for(let i = 0; i <arrayPays.length; i++){
        sumaPrecios += arrayPays[i].precio;
    }
    const PROMEDIO = sumaPrecios / arrayPays.length;
    return PROMEDIO;
}

const PROMEDIO_PRECIOS = calcularPromedioPrecios(PAYS);
console.log("El promedio del ticket es: "+ PROMEDIO_PRECIOS)



// CLASE 7 - FUNCIONES DE ORDEN SUPERIOR - HOF PARTE I


// FUNCTION SUMAR PRODUCTOS CARRITO

// function sumar(a, b){
//     return a + b
// }

// let resultado = sumar(350,360);
// console.log(resultado)


// FUNCTION MAYOR O MENOR QUE (Verdadeor o Falso)

// function menorQue(x){
//     return (num) => num < x;
// }

// const menorQueTrescientosCincuenta = menorQue(350);
// const menorQueTrescientosSesenta = menorQue(360);

// console.log(menorQueTrescientosCincuenta(360))


// CALCULADORA CON FUNCIONES QUE POSEEN FUNCIONES

// function Operacion(operacion){
//     if(operacion === "sumar"){
//         return function(num1,num2){
//         return num1 + num2;}
//     }
//     else if(operacion === "restar"){
//         return (num1, num2) => num1 - num2;
//     }
//     else if(operacion === "multiplicar"){
//         return (num1, num2) => num1 * num2;}
//     }

// let sumar = Operacion("sumar");
// let restar = Operacion("restar");
// let multiplicar = Operacion("multiplicar");

// console.log(sumar(350,380))
// console.log(restar(400,380))
// console.log(multiplicar(4,8))


// OTRA CALCULADORA CON FUNCTION QUE POSEE FUNCIONES

// function operar(num1,num2, operacion){
//     return operacion (num1,num2);

// }
// function suma(a,b){
//     return a+ b
// }
// function resta(a,b){
//     return a- b
// }
// function multiplicar(a,b){
//     return a*b
// }

// console.log(operar(5,3,suma));
// console.log(operar(10,4,resta));
// console.log(operar(3,5,multiplicar));


// ForEach => ITERAR SOBRE UN ARRAY

// const pays = ["limon","fresa","mango"];

// for (let i = 0; i < pays.length; i++) {
//     const elemento = pays [i];
//     console.log(elemento);
// }

// letras.forEach(paysHelados => console.log(paysHelados));

// ITERAR Y A LA VEZ MULTIPLICAR NÚMEROS

// const numerosPares = [2,4,6,8];

// numerosPares.forEach(function(numeroPar){
//     const resultadoMultiplicacion = numeroPar * 2;
//     console.log(resultadoMultiplicacion);
// })


// FILTER 

const PRODUCTOS = [
    {
        sabor:"limón",
        precio: 350,
        enStock: false
    },
    {
        sabor:"Conejito",
        precio: 360,
        enStock: true
    },
    {
        sabor:"Ferrero",
        precio: 380,
        enStock:false
    },
    {
        sabor:"mango",
        precio: 350,
        enStock:false
    },

    {
        sabor:"moras",
        precio: 370,
        enStock:true
    },
    {
        sabor:"Raffaello",
        precio: 380,
        enStock:false
    },
    {
        sabor:"guayaba",
        precio: 350,
        enStock:false
    },

    {
        sabor:"KitKat",
        precio: 360,
        enStock:true
    },
]

const respuesta = PRODUCTOS.filter(item => item.enStock === false && item.precio >= 350);

console.log( respuesta);

const search = (letra) =>{
    return PRODUCTOS.filter(item=>{
        return item.sabor.includes(letra) 
    })
}

// console.log(search("lim"));


// SOME => PARA VERIFICAR QUE LOS PRECIOS SEAN MAYOR A 350

// const precios = [350,380,360,370];

// const numeroMayorIgual = precios.some(function(numeroArray){
//     return numeroArray >= 350;
// })

// console.log(numeroMayorIgual);


//MAP => CAMBIO SABORES DE MINÚSCULAS A MAYÚSCULAS

// const PAYS = [
//     {sabor:"limón" , precio:350},
//     {sabor:"Conejito" , precio:350},
//     {sabor:"Ferrero" , precio:380},
//     {sabor:"mango" , precio:350}
// ]

// const cambiarLetras = PAYS.map(function(productoArray){
//     return productoArray.sabor.toUpperCase();
// })

// console.log(cambiarLetras);


// AUMENTO IVA EN PAYS

// const porcentajeIVA = 0.16

// const PRECIO_MAS_IVA = PAYS.map(function(producto){
//     return {
//         nombre: producto.sabor,
//         precio: producto.precio * (1 + porcentajeIVA)
//     }

// })

// console.log(PRECIO_MAS_IVA);
// console.log(PAYS);


// REDUCIR - SUMAR PRODUCTOS

// const total = [350,360,380,370]

// let sum = 0;

// for(let i =0; i < total.length; i ++){
//     const elemento = total [i];
//     sum = sum + elemento;
// }
// console.log(sum);

// const totalFinal = total.reduce((sum, elemento)=> sum + elemento, 0);
// console.log(totalFinal);


// REDUCE CON FUNCTION, SUMANDO PRODUCTOS EN EL CARRITO

// const PAYS = [
//     {sabor:"limón" , precio:350},
//     {sabor:"Conejito" , precio:350},
//     {sabor:"Ferrero" , precio:380},
//     {sabor:"mango" , precio:350}
// ]

// const precioTotal = PAYS.reduce(function(acumulador,PAYS){
//     return acumulador + PAYS.precio;
// }, 0)

// console.log(precioTotal);


// SORT PARA ORDENAR LOS ARRAYS DE PRODUCTOS

const PAYS_HELADOS = [
    {sabor:"limón" , precio:350},
    {sabor:"Conejito" , precio:360},
    {sabor:"Ferrero" , precio:380},
    {sabor:"moras" , precio:370}
]

// ORDENAR DE PRECIO MAYOR A MENOR

PAYS_HELADOS.sort(function(a,b){
    return b.precio - a.precio;
})
console.log(PAYS_HELADOS);


// ORDENAR DE PRECIO MENOR A MAYOR

PAYS_HELADOS.sort(function(a,b){
    return a.precio - b.precio;
})
console.log(PAYS_HELADOS)


// ORDEN ALFABÉTICO PRODUCTOS

PAYS_HELADOS.sort(function(a,b){
    const saborA = a.sabor.toLocaleLowerCase();
    const saborB = b.sabor.toLowerCase();

    if (saborA < saborB) {
        return -1;}
    
        if(saborA > saborB) {
            return 1
            }
    return 0;
})

console.log(PAYS_HELADOS);


// FUNCIONES DE ORDEN SUPERIOR II


// MATH MINIMO EN PRECIOS DE PRODUCTOS

// let minimo = Math.min(380,360,350);
// console.log(minimo);


// MATH MAXIMO EN PRECIOS DE PRODUCTOS

// let maximo = Math.max(380,360,350);
// console.log(maximo);


// MATH MINIMO CON ARRAY UTILIZANDO SPREAD OPERATOR

// const NUMERO = [380,360,350,370];
// const valorMinimo = Math.min(...NUMERO);
// console.log(valorMinimo)


// REDONDEAR PRECIOS DE LOS PRODUCTOS CON IVA Y DESCUENTOS

// let round = Math.round(406.89);
// console.log(round);


//RANDOM => nos sirve para retornar numeros aleatorios pero que siempre van a ir desde 0 al 1 

// console.log(Math.random());

//numeros que vayan del 0 al 50
// console.log(Math.round(Math.random()*50));

//numero entre 10 y 50 
// console.log(Math.round(Math.random()*40 + 10));


// TIRAR UN NÚMERO A LA SUERTE Y SE GANA UN DESCUENTO SI ATINA EL NÚMERO ELEGIDO

// function tirarNumero(){
//     return Math.floor(Math.random()*5+1);
// }

// function simularTiro (){
//     const TIRAR_NUMERO_SUERTE = prompt("¿Quieres tirar un número a la suerte? (si / no)").toLowerCase();

//     if(TIRAR_NUMERO_SUERTE === "si"){
//         let resultado1 = tirarNumero();
//         let resultado2 = tirarNumero();

//         console.log(`dado 1: ${resultado1}`)
//         console.log(`dado 2: ${resultado2}`)
//         console.log(`total: ${resultado1 + resultado2}`);
//     }else{
//         console.log("Suerte para la próxima")
//     }
// }

// simularTiro()


// SI ADIVINA EL NÚMERO SE GANA UN CUPÓN GRATIS EN SU SIGUIENTE COMPRA

// function adivinanza(){
    
//     const numeroAleatorio = Math.floor(Math.random()*20);

//     let intentos = 0;
//     let adivinanza;

//     do{
//         adivinanza = parseInt(prompt("Selecciona números entre 0 y 20"));

//         if(!isNaN(adivinanza) && adivinanza >= 0 && adivinanza <=20){
//             intentos ++;
            
//             if(adivinanza < numeroAleatorio){
//                 console.log("el numero es mayor, vuelve a intentar")
//             } else if(adivinanza > numeroAleatorio){
//                 console.log("el numero es menor, vuelve a intentar")
//             }else{
//                 console.log("Ganaste tu cupón de descuento")
//             }
//         }else{
//             console.log("Ingresa un numero válido")
//         }
// } while(adivinanza !== numeroAleatorio)
// }

// adivinanza()


// DATE PARA INGRESAR FECHA Y HORA DE ENTREGA DE TU PRODUCTO

// let fechaActual = new Date();
// console.log(fechaActual)

// let fechaEspecifica = new Date(2024,6,15,11,12,10);
// console.log(fechaEspecifica)


// OBTENER COMPONENTES DE LA FECHA

// let año = fechaActual.getFullYear();
// let mes = fechaActual.getMonth();
// let dia = fechaActual.getDate()
// let hora= fechaActual.getHours();
// let minutos = fechaActual.getMinutes()
// let segundos = fechaActual.getSeconds();
// let milisegundos = fechaActual.getMilliseconds();
// console.log(año, mes, dia, hora, minutos, segundos, milisegundos);

// let sumaDias=(fechaActual.getDate()+1);

// console.log(sumaDias)


// FUNCTION PROGRAMAR ENTREGA PEDIDO DE PRODUCTOS

function programarEntrega(){

    // PREGUNTAR PRODUCTOS A ENTREGAR
    let descripcionEntrega = prompt("Ingresa el/los productos a entregar");

    let horaEntrega = parseInt(prompt("Ingresa la hora de entrega"))
    
    if(isNaN(horaEntrega) || horaEntrega < 0 || horaEntrega >= 24){
        console.log("Hora no válida, ingresa una válida")
        return;
    }
   
    let minutosEntrega = parseInt(prompt("Ingresa los minutos de entrega"))
    
    if(isNaN(minutosEntrega) || minutosEntrega < 0 || minutosEntrega >= 60){
        console.log("Ingresa minutos válidos")
        return
    }


    // CREAR FECHA CON HORA Y MINUTOS PROGRAMADOS

    let fechaEntrega = new Date();
    fechaEntrega.setHours(horaEntrega, minutosEntrega, 0,0);


    // CALCULAR EL TIEMPO QUE FALTA PARA ENTREGA DE LOS PRODUCTOS

    let tiempoRestante = fechaEntrega.getTime() - new Date().getTime();


    // PROGRAMAR LA ENTREGA

    setTimeout(function(){
        console.log(`Ha llegado la hora de entrega de ${descripcionEntrega}`)
    },tiempoRestante);

    console.log(`Entrega programada de: ${descripcionEntrega} a las ${horaEntrega},${minutosEntrega} `)
}

programarEntrega();






