class Producto {
    constructor (nombre, precio, stock) {
        this.nombre = nombre
        this.precio = parseFloat(precio)
        this.stock = stock
    }
}

const listaDeProductos = [];

listaDeProductos.push(new Producto ('Buzo del REY LEON', 4500, 10))
listaDeProductos.push(new Producto ('Buzo de MULAN', 4200, 9))
listaDeProductos.push(new Producto ('Buzo de TOY STORY', 4300, 8))

console.log((listaDeProductos));


