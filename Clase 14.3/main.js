// ciclo for 

    // variable ; hasta que 1 sea menor que 1 ; se suma 1 
for (let i = 0; i < 10; i++) {
    alert(i);
}
// entra al for hasta que i sea 9 y se va sumando de uno empezando de cero

// let i = 0 // Desde -- se ejecuta una vez al entrar al bucle 
// i < 10 // condicion se comprueba antes de cada interacion del bucle, si es false el ciclo se detiene
// i ++ // Actualizacion -- se ejecuta desp del body
// alert (i) // se ejecuta hasta que la condicion sea falsa

for (let i = 10; i > 0; i--) {
    alert(i);
}

//Tabla de multiplicar 

let ingresarNumero = parseInt(prompt("Ingresar numero"));

for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ; 
    alert(ingresarNumero + " X " + i + "=" + resultado);
}

//Dar turnos del 1 al 20 

for (let i = 1; i <= 20; i++) {
    let ingresarNombre = prompt("Ingresar su nombre: ")
   alert("Turno numero: " + i + " Nombre: " + ingresarNombre);
}

//Sentencia break detiene un ciclo 

for (let i=1; i<=10; i++) {
    if (i == 5) {
        break
    }
    alert(i);
}

//Sentencia continue saltea un valor 

for (let i=1; i<=10; i++) {
    if (i == 5) {
        continue
    }
    alert(i);
}

// While se repite la instruccion mientras la condicion sea verdadera, cuando sea falso se corta automaticamente
// El if se ejecuta una sola vez por eso es distinto de while  

let entrada = prompt("Ingrese un dato"); 

while (entrada != "ESC") {
    alert("El usuario ingreso: " + entrada);

    entrada = prompt("Ingrese otro dato");
}

// DO primero se ejecuta una vez y luego evalua el while, con esto nos aseguramos que el ciclo se ejecute al menos una vez

let repetir = false

do {
    console.log("Solo una vez");
} while (repetir);


// Este ciclo se ejecuta la primera vez seguro y desp corta cuando el usuario ingresa algo diferente a numero lo que no se pueda parsear

let numero = 0; 

do {
    numero = prompt("Ingrese un numero ");
    console.log(numero);
} while (parseInt(numero));

let entrada1 = prompt("Ingresar un nombre").toUpperCase();

while (entrada1 != "ESC") {
    switch (entrada1) {
        case "ANA":
            alert("Hola Ana")
            break;
        case "JUAN":
            alert("Hola Juan")
            break;
        default:
            alert("Quien sos?")
            break;
    }

    entrada1 = prompt("Ingrese un nombre").toUpperCase();
}