let producto1 = prompt("Ingrese el primer producto")
let producto2 = prompt("Ingrese el segundo producto")
let producto3 = prompt("Ingrese el tercer producto")
let producto4 = prompt("Ingrese el cuarto producto")

if(
    (producto1 !="") && 
    (producto2 !="") && 
    (producto3 !="") && 
    (producto4 !="")
    ) {
    alert("Los productos ingresados son " + "\n" + producto1 + "\n" + producto2 + "\n" + producto3 + "\n" +producto4); 
} else {
    alert("Es necesario cargar todos los productos")
}