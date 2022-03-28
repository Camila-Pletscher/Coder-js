//Objeto literal 

const persona1 = {
    nombre: "Homero",
    edad: 39,
    calle: "Av. Siempreviva 742"
}

//para acceder a sus propiedades

console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.calle);

//para acceder a todo el objeto

console.log(persona1);

//para asignar un valor 
persona1.nombre = "Marge"

console.log(persona1.nombre);

// objetos constructores 
// nombre de la funcion --> primera letra en mayus y tiene que ser el gral de los datos que vamos a almacenar

function Persona (nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
};

//estoy creando un objeto desde la funcion constructora usando la palabra new
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");

console.log(persona1);
console.log(persona2);


//metodos personalizados 

function Persona (nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function() { //creamos metodo hablar 
        console.log("Hola soy: " + this.nombre);
    }
    this.identificarse = function() {
        console.log("Hola soy: " + this.nombre + " Mi edad es: " + this.edad);
    }
};


const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");

persona1.hablar(); //invoco metodo hablar y traigo dato persona1 
persona1.identificarse(); // invoco metodo identificarse

//Operador IN Y FOR IN

const persona1 = {
    nombre: "Homero",
    edad: 39,
    calle: "Av. Siempreviva 742"
}

//aca pregunto si existe nombre dentro de persona 1, guarda un valor booleano, en este caso true
console.log("nombre" in persona1);




for(const propiedades in persona1) {
    console.log(propiedades);//recorro el objeto persona1 todas sus propiedades
    console.log(persona1[propiedades]);//recorro el objeto persona1 y accedo a sus valores por medio de las propiedades
}


//Class constructor 

class Venta {
    constructor(nombre, marca, precio) {
        this.nombre = nombre.toUpperCase();
        this.marca = marca;
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumarIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
};

//Ejemplo para agregar productos
class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}