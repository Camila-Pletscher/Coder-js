let total = 0; 

class Producto {
  constructor(codigo, nombre, precio, stock) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.stock = stock;
  }
}

const listaDeProductos = [];


listaDeProductos.push(new Producto(1, "Buzo del REY LEON", 4500, 10));
listaDeProductos.push(new Producto(2, "Buzo de MULAN", 4200, 10));
listaDeProductos.push(new Producto(3, "Buzo de TOY STORY", 4300, 10));
listaDeProductos.push(new Producto(4, "Buzo de ALADIN", 4250, 10));
listaDeProductos.push(new Producto(5, "Buzo de SAILOR MOON", 4100, 10));
listaDeProductos.push(new Producto(6, "Remera de FRIENDS", 2100, 10));
listaDeProductos.push(new Producto(7, "Remera de JUEGO DE GEMELAS", 2200, 10));
listaDeProductos.push(new Producto(8, "Remera de CHANDLER MOOD", 2350, 10));
listaDeProductos.push(new Producto(9, "Remera de PANTONE MUSHU", 2500, 10));
listaDeProductos.push(new Producto(10, "Remera de HAKUNA MATATA", 2400, 10));

let datalist = document.getElementById("datalist");
let cantidadProducto = document.getElementById("cantidadProducto");
let tablaPedido = document.getElementById("tablaPedido");

const crearListaDeProductos = (listaDeProductos) => {
    listaDeProductos.forEach( producto => {
        datalist.innerHTML += `<option value="${producto.nombre}">${producto.nombre}</option>`
    })
};

let boton = document.getElementById("agregarAlPedido"); 

boton.addEventListener("click", agregarAlCarrito);

function agregarAlCarrito () {
    

    let nombreProducto = datalist.value; 
    let cantidadSeleccionada = cantidadProducto.value;
    let precio = 0; 

    for (let i = 0; i < listaDeProductos.length; i++) {
        if (nombreProducto == listaDeProductos[i].nombre) {
          
          if (listaDeProductos[i].stock > cantidadSeleccionada) {
            listaDeProductos[i].stock = listaDeProductos[i].stock - cantidadSeleccionada;
            precio = listaDeProductos[i].precio * cantidadSeleccionada;
            tablaPedido.innerHTML += `<tr>                
            <td>${nombreProducto}</td>
            <td>${cantidadSeleccionada}</td>
            <td>${precio}</td>
            </tr>`
            total += precio;
          } else {
            alert("No hay suficiente stock del producto seleccionado");
          }
        }
      }


}

let botonFinalizar = document.getElementById("finalizarPedido");

botonFinalizar.addEventListener("click", finalizarPedido);

function finalizarPedido () {
    alert(`Pedido realizado correctamente\nEl total a pagar es de ${total}`);

}



crearListaDeProductos(listaDeProductos);


