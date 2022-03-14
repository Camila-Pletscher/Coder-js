// Cambiar valor de las variables

let mensaje 

mensaje = "Hola";

mensaje = "Coder";

console.log("mensaje");

// Copar el valor de una variable

let saludo = "Hola Coder"

let mensaje

mensaje = saludo;

console.log(saludo);
console.log(mensaje);

// no puedo variar el valor de const 


// Hoisting

var nombre; 
console.log(nombre); // no se puede mostrar porque no esta asignado el valor
nombre = "Jose" 

// la estructura if 

let year = prompt("en que año fue especificada", 0); 

if(year == 2015) alert("La respuesta es correcta"); 
//esto es si solo hay una accion no se usan las llaves

// Conversion booleana 

if(0) { // cero es evaluado como falso
    // no entra
}

if(1) { // 1 es evaluado como verdadero
    //entra
}

if ("0") { //se vuelve verdadero 

}

// EJEMPLO 1 

let accesoPermitido; 
let edad = prompt("Cuantos años tenes?", 0);

if(edad > 18) {
    accesoPermitido = true;
} else {
    accesoPermitido = false;
}

if(accesoPermitido) alert("Podes ingresar");
if(!accesoPermitido) alert("No podes ingresar"); // el signo es lo contrario 


// descuento 

let precio = parseFloat(prompt("Ingresar precio:"));

let descuento20 = precio - (precio * 0.2);
let descuento30 = precio - (precio * 0.3;

console.log(descuento20);
console.log(descuento30);