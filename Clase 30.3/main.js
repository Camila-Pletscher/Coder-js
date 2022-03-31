// // FOR EACH

// const numeros = [1, 2, 3, 4, 5];

// numeros.forEach( (numero) => {console.log(numero);})

// // FIND

// const numeros = [1, 2, 3, 4, 5];

// const nombres = ["Ana", "Jorge", "Mateo"];


// const encontrado = numeros.find( elemento => elemento > 3);

// const nombreEncontrado = nombres.find (elemento => elemento === "Jorge")

// console.log(encontrado);
// console.log(nombreEncontrado);

// const cursos = [
//     {nombre: "Javascript", precio: 15000},
//     {nombre: "ReactJs",precio: 35000}
// ]

// const resultado = cursos.find (elemento => elemento.nombre === "ReactJs");

// console.log(resultado);

// //FILTER 

// const cursos = [
//         {nombre: "Javascript", precio: 15000},
//         {nombre: "ReactJs",precio: 22000},
//         {nombre: "AngularJs",precio: 22000},
//         {nombre: "Desarrollo web",precio: 16000},
//     ]

// const resultado = cursos.filter( (el) => el.nombre.includes("Js"))

// console.log(resultado);

// const resultado1 = cursos.filter ( (el) => el.precio < 20000);

// console.log(resultado1);

// //SOME 

// const cursos = [
//         {nombre: "Javascript", precio: 15000},
//         {nombre: "ReactJs",precio: 22000},
//         {nombre: "AngularJs",precio: 22000},
//         {nombre: "Desarrollo web",precio: 16000},
//     ]

// console.log( cursos.some ( (el) => el.nombre == "Desarrollo web"));

// const numeros = [1,2,3,4,5,6];

// const resultado = numeros.map(numero => numero * 2);

// console.log(resultado);


// //Nos devuelvo la cantidad de letras de cada nombre 

// const nombres = ["Ana", "Mateo"];

// const lengths = nombres.map(nombre => nombre.length);

// console.log(lengths);


// // REDUCE 

// const numeros = [1,2,3,4,5,6];

// const total = numeros.reduce( (acumulador, elemento) => acumulador + elemento, 0 )


//Como usarlo para carrito de compras

// const carritoDeCompras = [
//         {nombre: "Zapatillas", precio: 15000, cantidad: 1},
//         {nombre: "Zapatos",precio: 22000, cantidad: 2},
//         {nombre: "Bicicleta",precio: 32000, cantidad: 1}
//     ]

// const contadorCarrito = carritoDeCompras.reduce( (acc, el) => acc + el.cantidad, 0);
// const precioTotal = carritoDeCompras.reduce( (acc, el) => acc + el.precio * el.cantidad, 0);

// console.log(contadorCarrito);
// console.log(precioTotal);


const numeros = [1,3,8,5,2,6];

const resultado = numeros.sort( (a, b) => a - b ) //de menor a mayor

console.log(resultado);

const resultado1 = numeros.sort ( (a, b ) => b - a) // de mayor a menor 

console.log(resultado1);







