// Funciones 

function solicitarNombre() {
    let nombreIngresado = prompt("Ingresar nombre");
    alert("El nombre ingresado es: " + nombreIngresado); 
}

solicitarNombre();
solicitarNombre();



function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero
}

let resultado = sumar(3, 5);


// Ejemplo calculadora

function calculadora(numero1, numero2, operacion) {
    switch (operacion) {
        case "+":
            return numero1 + numero2;
            break;
        case "-":
            return numero1 - numero2;
            break
        case "*":
            return numero1 * numero2;
            break
        case "/":
            return numero1 / numero2;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(10, 5, "+"));

//ERROR --> funcion local esta intentando usarse afuera scope de fx

function sumar (primerNumero, segundoNumero) {
    let resultado = primerNumero + segundoNumero;
}

sumar(3, 5); 

console.log(resultado);

// OK --> la variable esta declarada fuera de la fx se puede usar

let resultado = 0

function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero
}

sumar(4, 5);

console.log(resultado)

// Scope de var, el ultimo a es 20

function explainVar() {
    var a = 10;
    console.log(a);

    if(true) {
        var a = 20;
        console.log(a);
    }

    console.log(a);
}

explainVar();

// Scope con let, respetando los bloques valor de a ultimo es 10

function explainVar() {
    let a = 10;
    console.log(a);

    if(true) {
        let a = 20;
        console.log(a);
    }

    console.log(a);
}

explainVar();

// Funciones anonimas 

const suma = function (a, b) {return a + b}

console.log(suma(15,10)); 

//Funciones flecha

const suma = (a, b) => {return a + b}

console.log(suma(15, 10));

// Funciones flecha el return es implicito, no hace falta colocarlo siempre y cuando sea una sola operacion 

const suma = (a, b) => a + b

console.log(suma(15, 10));