let total = 0;
let precio = 0;
let otroProducto = false;

function agregarAlCarrito() {
    do {
        let codigoDeProducto = prompt("Elija la opcion del producto que sea comprar:\n 1. Shampoo\n 2. Acondicionador\n", 2);
        let cantidad = parseInt(prompt("Indique la cantidad que desea comprar", 0));

        switch (codigoDeProducto) {
            case "1":
                precio = 500;
                break;
            case "2":
                precio = 200;
                break;
        
            default:
                alert("Ingreso un código no valido");
                precio = 0;
                cantidad = 0;
                
        }

        total = total + precio * cantidad;
        otroProducto = confirm("Indique 'ACEPTAR' si quiere seguir agregando productos o 'CANCELAR' si quiere terminar la compra");

    } while (otroProducto);
    
    alert("El total de su pedido es de: " + total);
    
}

function aplicarDescuento(total) {
    if (total >= 5000) {
        total = total * 0.80
    }

    return total
}

function calcularEnvio () {
    let calculoEnvio = confirm("Indique 'ACEPTAR' si quiere calcular el costo de envio a domicilio o 'CANCELAR' si quiere continuar al pago de la compra");
    let codigoPostal;

    if(calculoEnvio) {
        codigoPostal = parseInt(prompt("Ingrese su código postal"))
        switch (codigoPostal) {
            case 1832:
                alert("Su codigo postal pertenece a Lomas de Zamora y el costo de envio es $700");
                agregarCostoDeEnvio(total);
                break;
            case 1854:
                alert("Su codigo postal pertenece a Longchamps y el costo de envio es $900");
                agregarCostoDeEnvio(total);
                break;
        
            default:
                alert("El código ingresado no es valido");
        }
    } else {
        agregarCostoDeEnvio(total);
    }

    return codigoPostal;
}

function agregarCostoDeEnvio(total) {
    let confirmacion = confirm("Indique 'ACEPTAR' si quiere envio a domicilio o 'CANCELAR' si quiere retirar por el local");

    if(confirmacion) {
        calcularEnvio();
        if(total >= 2000) {
            alert("El envio para tu compra es GRATIS. El total de tu compra es $" + total);
        } else if (total < 2000 && total != 0 && codigoPostal == 1832) {
            total = total + 700;
            alert("El costo de tu envio es $700. El total de tu compra es $" + total);
        } else if (total < 2000 && total != 0 && codigoPostal == 1854) {
            total = total + 900;
            alert("El costo de tu envio es $900. El total de tu compra es $" + total); 
        } else {
            alert("Codigo invalido");
        }
    } else {
        alert("El total de tu pedido es $" + total);
    }

    return total;
}

agregarAlCarrito();
aplicarDescuento(total);
agregarCostoDeEnvio(total);