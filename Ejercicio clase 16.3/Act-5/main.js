
function validacion(cadena) {
    return cadena != "";
}

let entrada = prompt("Ingrese una cadena");

while (entrada != "ESC") {
    alert(validacion(entrada));
    entrada = prompt("Ingrese una cadena");
    
}












// function validacion(cadena) {
//     if(cadena !== '') {
//         cadena = true
//     } else {
//         cadena = false
//     }
//     return cadena;
// }

// do {
//     cadena = prompt("Ingrese cadena o ESC para salir");
//     validacion(cadena);

// } while(cadena != "ESC");

