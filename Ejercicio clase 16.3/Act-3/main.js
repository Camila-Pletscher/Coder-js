
function impuesto(precio, porcentaje) {
    return precio = parseFloat(precio + ((precio / 100) * porcentaje));
}


for(let i = 0; i < 5; i++) {
    let precioU = parseFloat(prompt("Ingrese precio"));
    let porcentajeU = parseInt(prompt("Ingrese porcentaje"));

    alert(impuesto(precioU, porcentajeU));

}










// function impuesto(precio, porcentaje) {
//     let total = precio + ((precio / 100) * porcentaje);
//     alert("El total es " + total);
//     return total;

// }


// for(let i=0; i < 5; i++) {
//     let precio = parseInt(prompt("Ingresar el precio"));
//     let porcentaje = parseInt(prompt("Ingresar porcentaje"));
//     impuesto(precio, porcentaje);
    
    
// }