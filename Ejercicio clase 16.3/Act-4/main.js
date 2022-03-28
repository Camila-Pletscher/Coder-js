const cotizacionDolar = 184;



function cotizarDolar(pesos) {
    return pesos / cotizacionDolar;
    
}

function cotizarPesos(dolar) {
    return dolar * cotizacionDolar;
}

let seleccion = prompt("Seleccione la cotizacion que desea\n 1. De pesos a dolares\n2. De dolares a pesos");
let valor = parseFloat(prompt("Ingrese el valor a cotizar"))

switch (seleccion) {
    case "1":
        alert("El valor es de U$S " + cotizarDolar(valor));
        break;
    case "2":
        alert("El valor es de $ " + cotizarPesos(valor));
        break;
    default:
        break;
}













// const cotizacionDolar = 184; 



// function cotizarDolar(pesos) {
//     pesos = pesos * cotizacionDolar; 
//     alert(pesos);
//     return pesos;
    
// }

// function cotizarPesos(dolar) {
//     dolar = dolar / cotizacionDolar;
//     alert(dolar);
//     return dolar;
// }

// let seleccion = prompt("Seleccion cotizacion\n 1- Dolares a pesos\n 2- Pesos a dolares"); 

// let valor = prompt("Ingrese valor");

// switch (seleccion) {
//     case "1":
//         cotizarPesos(valor);
//         break;
//     case "2": 
//         cotizarDolar(valor);
        
//     default:
//         break;
// }


