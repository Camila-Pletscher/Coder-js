alert("Primero corrobore que el producto que busca se encuentra a nuestra alcance");

let producto = prompt("Ingrese el nombre del producto que esta buscando, si no esta buscando nada deje el campo vacio").toUpperCase();

while (producto != "") {
    switch (producto) {
        case "REMERA":
            alert(producto + " esta dentro de nuestros productos");
            break;
        case "GORRA":
            alert(producto + " esta dentro de nuestros productos");
            break;
        case "JEANS":
            alert(producto + " esta dentro de nuestros productos");
            break;
        case "SHORT":
            alert(producto + " esta dentro de nuestros productos");
            break;
    
        default:
            alert("El producto que busca no esta dentro de nuestro alcance");
            break;
    }
    producto = prompt("Ingrese el nombre del producto que esta buscando, si no esta buscando nada deje el campo vacio").toUpperCase();
}

alert("Si encontro lo que estaba buscando consulte el precio");

let respuesta = "SI";

while(respuesta == "SI") {
    
    let nombreProducto = prompt("Ingrese el nombre del producto para conocer el precio").toUpperCase();
    
    if (nombreProducto == "REMERA") {
        alert("El precio de " + nombreProducto + " es de $1500");
    } else if (nombreProducto == "GORRA") {
        alert("El precio de " + nombreProducto + " es de $1000");
    } else if (nombreProducto == "JEANS") {
        alert("El precio de " + nombreProducto + " es de $3500");
    } else if (nombreProducto == "SHORT") {
        alert("El precio de " + nombreProducto + " es de $2500");
    } else {
        alert("El producto ingresado no existe"); 
    }
    
    
    respuesta = prompt("Quiero buscar el precio de algun otro producto? Indique SI o NO").toUpperCase();
    
    if (respuesta == "NO") {
    alert("Muchas gracias por visitarnos");
    } else if (respuesta != "SI") {
    alert("La respuesta ingresada no es valida");
    }

}
