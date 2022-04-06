let total = 0;

class Producto {
    constructor (codigo, nombre, precio, stock) {
        this.codigo = codigo
        this.nombre = nombre
        this.precio = parseFloat(precio)
        this.stock = stock
    }

}

const listaDeProductos = [];

listaDeProductos.push(new Producto (1, 'Buzo del REY LEON', 4500, 10))
listaDeProductos.push(new Producto (2, 'Buzo de MULAN', 4200, 10))
listaDeProductos.push(new Producto (3, 'Buzo de TOY STORY', 4300, 10))
listaDeProductos.push(new Producto (4, 'Buzo de ALADIN', 4250, 10))
listaDeProductos.push(new Producto (5, 'Buzo de SAILOR MOON', 4100, 10))
listaDeProductos.push(new Producto (6, 'Remera de FRIENDS', 2100, 10))
listaDeProductos.push(new Producto (7, 'Remera de JUEGO DE GEMELAS', 2200, 10))
listaDeProductos.push(new Producto (8, 'Remera de CHANDLER MOOD', 2350, 10))
listaDeProductos.push(new Producto (9, 'Remera de PANTONE MUSHU', 2500, 10))
listaDeProductos.push(new Producto (10, 'Remera de HAKUNA MATATA', 2400, 10))


function buscarProducto(listaDeProductos) {
    let buscar = confirm("Queres ingresar el producto que estas buscando?");
    
    while(buscar) {
        let busqueda = prompt("Ingresa el producto que buscas");
        let resultado = listaDeProductos.some( (el) => el.nombre.toLowerCase() == (busqueda.toLowerCase()));
        
        if (resultado) {
            const encontrado = listaDeProductos.find((el) => el.nombre.toLowerCase() === busqueda.toLowerCase());
            alert(`Producto: ${encontrado.nombre}\nPrecio: $ ${encontrado.precio}\nDisponibles: ${encontrado.stock} unidades`)
            
        } else {
            alert("Producto no encontrado");
        }

        buscar = confirm("Indique si quiere buscar otro producto")
    }

    let respuesta = confirm("Indique si quiere continuar con la compra"); 
    
    if (respuesta) {
        agregarAlCarrito();
        agregarCostoDeEnvio(total);
        aplicarDescuento(total);
    } else {
        alert("Adios");
    }
}



function agregarAlCarrito() {
    console.log(listaDeProductos[0].codigo);
    let otroProducto;

    do {
        let codigoDeProducto = prompt("Elija la opcion del producto que sea comprar:\n\n 1. Buzo del REY LEON\n\n 2. Buzo de MULAN\n\n 3. Buzo de TOY STORY\n\n 4. Buzo de ALADIN\n\n 5. Buzo de SAILOR MOON\n\n 6. Remera de FRIENDS\n\n 7. Remera de JUEGO DE GEMELAS\n\n 8. Remera de CHANDLER MOOD\n\n 9. Remera de PANTONE MUSHU\n\n 10. Remera de HAKUNA MATATA", 2);
        
        let cantidad = parseInt(prompt("Indique la cantidad que desea comprar", 0));
        console.log(cantidad);
        console.log(codigoDeProducto);
        let precio = 0;

        let codigoCorrecto = false;



        for (let i = 0; i < listaDeProductos.length; i++) {
            if (codigoDeProducto == listaDeProductos[i].codigo) {
                codigoCorrecto = true;
                if(listaDeProductos[i].stock > cantidad) {
                    listaDeProductos[i].stock = listaDeProductos[i].stock - cantidad;
                    precio = listaDeProductos[i].precio * cantidad;
                } else {
                    alert("No hay suficiente stock del producto seleccionado");
                }
            } 
            
        } 
        if (codigoCorrecto == false) {            
                alert("El codigo ingresado no coincide con ninguno de nuestros productos")
            
        } 

        total = total + precio;
        otroProducto = confirm("Indique 'ACEPTAR' si quiere seguir agregando productos o 'CANCELAR' si quiere terminar la compra");
    } while(otroProducto)
}

function aplicarDescuento(total) {
    if (total >= 5000) {
        total = total * 0.80
        console.log(total);
        alert("Su compra supera los $5000 por lo que se le aplicará un descuento.\n\nEnvio gratis\n\nTotal $" + total)
    }

    return total
}

function calcularEnvio (total) {
        alert("Aquí podrá calcular el costo de su envio con su código postal\n\nNuestras zonas de envio  son:\n1832: Lomas de Zamora\n1854: Longchamps\n1836: Adrogue\n1870: Avellaneda\n1820: Lanus")
        let codigoPostal = parseInt(prompt("Ingrese su código postal"))
        switch (codigoPostal) {
            case 1832:
                total = total + 500;
                alert("Código postal: 1832 - Lomas de Zamora\n\nEnvio: $500.\n\nTotal: $" + total);
                break;
            case 1854:
                total = total + 700;
                alert("Código postal: 1854 - Longchamps\n\nEnvio: $700.\n\nTotal: $" + total);
                break;
            case 1836:
                total = total + 600;
                alert("Código postal: 1836 - Adrogue\n\nEnvio: $600.\n\nTotal: $" + total);
                break;
            case 1870:
                total = total + 300;
                alert("Código postal: 1870 - Avellaneda\n\nEnvio: $300.\n\nTotal: $" + total);
                break;
            case 1820:
                total = total + 400;
                alert("Código postal: 1820 - Lanus\n\nEnvio: $400.\n\nTotal: $" + total);
                break;
        
            default:
                alert("El código ingresado no es valido");
            calcularEnvio(total);
        }

        return total
}

function agregarCostoDeEnvio(total) {
    let confirmacion = confirm("Indique 'ACEPTAR' si quiere envio a domicilio o 'CANCELAR' si quiere retirar por el local");

    if(confirmacion) {
        
        if(total >= 8000) {
            alert("El envio para tu compra es GRATIS.\n\nTotal $" + total);
            
        } else if (total < 8000 && total != 0) {
            calcularEnvio(total);
            
        } else {
            alert("Hubo un error en el calculo");
        }
    } else {
        alert("Retira por el local.\n\nTotal: $" + total);
    }

    return total

}



buscarProducto(listaDeProductos);


