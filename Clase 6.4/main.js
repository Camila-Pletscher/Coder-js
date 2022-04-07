// //Con esto vemos donde hacemos click en una pagina. el evento.target hace referencia a ese elemento

// document.addEventListener("click", (event) => {
//     console.log("Hiciste click en:", event.target);
// })

// let boton = document.getElementById("btnPrincipal")

// boton.addEventListener("click", respuestaClick)

// function respuestaClick() {
//     console.log("Respuesta evento");
// }

// let elemento = document.getElementById("t");

// elemento.addEventListener("click", modificarTexto);

// function modificarTexto() {
//     let t2 = document.getElementById("t2");

//     t2.innerHTML = "three";
// }

// let boton = document.getElementById("btnMain"); 

// boton.onmousemove = () => {
//     console.log("moviendo");
// }

// let input1 = document.getElementById("nombre");
// let input2 = document.getElementById("edad");

// input1.onkeyup = () => {
//     console.log("keyup");
    
// }

// input1.onkeyup = (event) => {
//     console.log(event.target.value);
// }

// input2.onkeydown = () => {
//     console.log("keydown");
// }

// let input1 = document.getElementById("nombre");
// let input2 = document.getElementById("edad");

// // input1.onchange = () => {
// //     console.log("valor1");
// // }

// // input2.onchange = () => {
// //     console.log("valor2");
// // }

// input1.onchange = (e) => {
//     console.log(e.target.value);
// }

// input2.onchange = (e) => {
//     console.log(e.target.value);
// }

// let input1 = document.getElementById("nombre");

// input1.addEventListener("input", () => {
//     console.log(input1.value);
// })

// let miFormulario =  document.getElementById("formulario"); 

// miFormulario.addEventListener("submit", validarFormulario);

// function validarFormulario(e) {
//     e.preventDefault();

//     let formulario = e.target;

//     let nombre = formulario.children[0].value

//     let edad = formulario.children[1].value

//     alert(`Bienvenido ${nombre}`);
// }



