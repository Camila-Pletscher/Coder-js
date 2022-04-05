// //Capturar por id

// let div = document.getElementById("app"); 
// let texto = document.getElementById("parrafo1")

// console.log(div.innerHTML);
// console.log(texto.innerHTML);

// //Capturar por clases

// let paises = document.getElementsByClassName("paises");

// console.log(paises[0].innerHTML);

// let contenedores = document.getElementsByTagName("div");

// console.log(contenedores[0].innerHTML);

// //INNER TEXT --> le estoy asignando un nuevo valor

// let titulo = document.getElementById("parrafo1");


// // titulo.innerText = "Hola coder"

// const nombreUsuario = prompt("Bienvenido, ingrese su nombre");

// titulo.innerText = "Hola" + nombreUsuario;

// console.log(titulo.innerText);

// //Asi agrego etiquetas html a un elemento por clase 

// let container = document.getElementById("container");

// container.innerHTML = "<h2>Hola Mundo</h2><p>Parrafo</p>"

// //Agrego la clase container row al elemento container

// let container = document.getElementById("container");

// container.innerHTML = "<h2>Hola Mundo</h2>"

// container.className = "container row"

// //Creo un elemento <p> y lo agrego con append

// let parrafo = document.createElement("p");

// parrafo.innerHTML = "<h2>Hola Coder</h2>";

// document.body.append(parrafo);

// //Elimino el elemento parrafo 1 

// let parrafo = document.getElementById("parrafo1");

// parrafo.remove();

// //Asigno valor a un input

// document.getElementById("nombre").value = "Homero";

// //Recorro un array que voy llenando

// let padre = document.getElementById("personas");

// let personas = ["Homero", "Marge", "Bart", "Lisa"];

// for (const persona of personas) {
//     let li = document.createElement("li");

//     li.innerHTML = persona

//     padre.appendChild(li);
// }




//PLANTILLAS LITERALES

let producto = {id: 1, nombre: "arroz", precio: 125};

let concatenado = "id: " + producto.id + "producto: " + producto.nombre

let plantillas = `ID: ${producto.id} - Producto: ${producto.nombre}`






