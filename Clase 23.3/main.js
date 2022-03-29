//Declaracion y acceso a un array

const numeros = [1,2,3,4,5];

let resultado = numeros[0] + numeros[3];

console.log(resultado);

//Agrego un valor al final --> precio

const miArray = ["marca", 3, "palabra"];

miArray.push("precio");

console.log(miArray);

//Creamos un string con todos los valores del array separado por / JOIN

const miArray = ["marca", 3, "palabra"];

console.log(miArray.join("/"));

//CONCAT --> creamos un nuevo array concatenando dos array 

const miArray = ["marca", 3, "palabra"];
const otroArray = ["ford", 4];

const nuevoArray = miArray.concat(otroArray);

console.log(nuevoArray);


// IMPORTANTE QUE LOS METODOS QUE NO MODIFIQUEN EL ARRAY ORIGINAL 

//INFEXOF retorna el indice del valor entre () si no existe devuelve -1

const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

console.log(nombres.indexOf('Ana'));

let nuevoUsuario = "";

do {
    if(nuevoUsuario != "") {
        alert("El nombre de usuario ya existe, ingrese otro");
    }

    nuevoUsuario = prompt("Ingrese un nombre de usuario ");

} while (nombres.indexOf(nuevoUsuario) != -1)

alert("El nombre de usuario " + nuevoUsuario + " se creo existosamente");


//ARRAY DE OBJETOS

const objeto1 = {id: 1, producto: "Arroz"}; 

const array = [objeto1, {id: 2, producto: "Fideo"}];

array.push({id: 3, producto: "Pan"});

console.log(array);


//FOR OF

const productos = [
    {id: 1, producto: "Arroz"}, 
    {id: 2, producto: "Fideo"}, 
    {id: 3, producto: "Pan"}
]

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
}