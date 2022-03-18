// function saludar() {
//     console.log('Bienvenidos al after class');
// }

// saludar();

// // Function expression

// const saludar2 = function() {
//     console.log('Esto es una funcion anónima');
// }
// saludar2();

// //Funcion flecha

// // const saludarUsuario = (nombre) => {
// //     return "bienvenido" + nombre;
// // }

// // //cuando hay return hay que capturar el dato en una variable 

// // const saludoRetornado = saludarUsuario("Gabriel"); 

// //Simplificado -- el return esta implicito -- mientras el parametro sea uno y una sola linea de codigo en la fx solo no se ponen los () ni las {} si hay mas de un parametro si deben poner () y mas de una linea {}

// const saludarUsuario = nombre => "bienvenido" + nombre; 

// const saludoRetornado = saludarUsuario("Gabriel"); 


//Menu
//Registrar una venta
//Reponer
//Salir 

let stock = 10;
let opcion;

function registrarVenta(cantidad) {
    if (cantidad > stock) {
        console.log("No hay stock suficiente");
        console.log("El stock disponible es de " + stock + "unidades");
    } else {
        stock = stock - cantidad;
        // stock -= cantidad;
        console.log("El nuevo stock es de " + stock + "unidades");
    }
}

function reponerStock(cantidad) {
    stock = stock + cantidad;
}

do {
    opcion = parseInt(prompt("1 - Registrar una venta\n2 - Reponer\n3 - Salir"));
    let cantidad;

    switch (opcion) {
        case 1:
            cantidad = parseInt(prompt("Indique cantidad de unidades que se vendieron"));
            registrarVenta(cantidad);
            break;
        case 2:
            reponerStock();
            break;
        case 3:
            console.log("Hasta luego");
            break
        default:
            console.log("Opcion incorrecta");
            break;
    }

    
} while(opcion !== 3);

