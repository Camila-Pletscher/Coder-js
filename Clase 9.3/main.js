//Estructura IF

if (true) {
    console.log("Vas a ver este mensaje");
}

if (false) {
    console.log("No se muestra");
}


// Operador de igualdad debil (loose equality)  ==
//Coerción de tipos - cuando comparamos number y string js los convierte en un solo tipo 

if (2 == "2") {
    console.log("Esto es correcto");
}

// Operador de igualdad estricta (strict equality)  ===
// Compara tambien tipo de datos

if (2 === "2") {
    console.log("Esto es correcto");
}


let numero = 2 

if (numero == 2) {
    console.log("Es verdadero");
}

//Estructura if else 

let unColor = "Rojo"

if (unColor == "Rojo") {
    console.log("El color es rojo");
} else {
    console.log("El color no es rojo");
}


let stock = 0; 

if (stock == 0) {
    alert("Necesitamos nuevo stock de este producto");
}

//Validacion if else


let nombreDeUsuario = prompt("Ingrese su nombre de usuario");

if (nombreDeUsuario == "") {
    alert("No ha ingresado ningun nombre");
} else {
    alert("Nombre de usuario ingresado: " + nombreDeUsuario);
}

//ejemplo de if else if 

let precio = 50; 

if (precio < 20) {
    alert("El precio es menor a 20"); 
} else if (precio < 50) {
    alert("Precio es menor a 50"); 
} else if (precio < 100) {
    alert ("precio es menor a 100"); 
} else {
    alert("El precio es mayor a 100");
}


// true or false 

let numero1 = 10;
let esMayorQue5 = (numero1 > 5); 

if (esMayorQue5) {
    alert( numero1 + " es mayor que 5");
} else {
    alert("El" + numero1 + "no es mayor que 5");
}


//condiciones con &&

let nombreIngresado = prompt("Ingresar nombre"); 
let apellidoIngresado = prompt("Ingresar apellido");

if ( (nombreIngresado != "") && (apellidoIngresado != "")) {
    alert("Nombre: " + nombreIngresado + "Apellido: " + apellidoIngresado);
} else {
    alert("Error: Falta uno de los datos"); 
}

//condiciones con || or

let nombreIngresado1 = prompt("Ingresar nombre"); 

if ( (nombreIngresado1 == "ANA") || (nombreIngresado1 == "ana")) {
    alert("El nombre ingresado es Ana");
} else {
    alert("El nombre ingresado no es Ana"); 
}

let numero2 = parseInt(prompt("Ingrese un numero para comparar", 0)); //el 0 es de ayuda al usuario 
let numero3 = parseInt(prompt("Ingrese otro numero", 0));

if((numero2 >= 10) && (numero3 <= 50)) {
    alert("Los numero ingresados estan entre 10 y 50 y son: " + numero2 + "y" + numero3)
} else {
    alert("Los numero ingresados NO estan entre 10 y 50 y son: " + numero2 + "y" + numero3)
}