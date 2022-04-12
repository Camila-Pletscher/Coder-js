// // set -> guardar 
// // get -> obtener

// localStorage.setItem('bienvenida', 'Hola coder');
// localStorage.setItem('booleano', true);
// localStorage.setItem('numero', 10);

// let mensaje = localStorage.getItem('bienvenida');

// console.log(mensaje);

// sessionStorage.setItem('array', [1,2,3]);
// sessionStorage.setItem('esValido', false);
// sessionStorage.setItem('email', 'main@mail.com');


// //Para unir el array y separarlo por coma, y no devuelva un string completo
// let lista = sessionStorage.getItem('array').split(",");
// //Para convertir el false en un booleano y que no sea un string. Decimos que false es igual a true y eso dara false
// let esValido = (sessionStorage.getItem('esValido') == 'true');

// console.log(lista);
// console.log(esValido);


// for (let i = 0; i < localStorage.length; i++) {
//     let clave = localStorage.key(i);
//     console.log(clave);
//     console.log(localStorage.getItem(clave));
    
// }

// localStorage.removeItem('numero');
// localStorage.clear();

// const producto1 = { id: 2, producto: "Arroz"};
// const enJSON = JSON.stringify(producto1);

// console.log(enJSON);

// //Guardo en el storage en formato JSON 
// localStorage.setItem("producto1", enJSON);

// //Obtengo mi objeto nuevamente con JSON.parse()
// const producto2 = JSON.parse(localStorage.getItem("producto1"));

// console.log(producto2);

// //Almacenar Arrays de Objetos

// const productos = [ { id: 1, producto: "Arroz", precio: 125},
//                     { id: 2, producto: "Harina", precio: 120},
//                     { id: 3, producto: "Fideos", precio: 100},
//                     { id: 4, producto: "Leche", precio: 130} ];

// //La funcion guarda cada clave y valor que reciba
// const guardarLocal = (clave, valor) => {
//     localStorage.setItem(clave, valor)
// };

// //Guardar todo el array de objetos
// // guardarLocal("listaProductos", JSON.stringify(productos))

// //Guardar de a uno 

// for (const producto of productos) {
//     guardarLocal(producto.id, JSON.stringify(productos));
// }

class Producto {
    constructor(obj) {
        this.nombre = obj.producto.toUpperCase();
        this.precio = parseFloat(obj.precio);
    }

    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const productos = [];

for (const objeto of almacenados ) {
    productos.push(new Producto(objeto))
}

console.log(productos);
