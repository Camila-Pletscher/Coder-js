let total = 0;
let precio = 0;
let otroProducto = false;

function agregarAlCarrito() {
    do {
        let codigoDeProducto = prompt("Elija la opcion del producto que sea comprar:\n\n 1. Buzo del REY LEON\n\n 2. Buzo de MULAN\n\n 3. Buzo de TOY STORY\n\n 4. Buzo de ALADIN\n\n 5. Buzo de SAILOR MOON\n\n 6. Remera de FRIENDS\n\n 7. Remera de JUEGO DE GEMELAS\n\n 8. Remera de CHANDLER MOOD\n\n 9. Remera de PANTONE MUSHU\n\n 10. Remera de HAKUNA MATATA", 2);
        let cantidad = parseInt(prompt("Indique la cantidad que desea comprar", 0));

        switch (codigoDeProducto) {
            case "1":
                precio = 4500;
                break;
            case "2":
                precio = 4200;
                break;
            case "3":
                precio = 4300;
                break;
            case "4":
                precio = 4250;
                break;
            case "5":
                precio = 4100;
                break;
            case "6":
                precio = 2100;
                break;
            case "7":
                precio = 2200;
                break;
            case "8":
                precio = 2350;
                break;
            case "9":
                precio = 2500;
                break;
            case "10":
                precio = 2400;
                break;
            
            default:
                alert("Ingreso un código no valido");
                precio = 0;
                cantidad = 0;
                
        }

        total = total + precio * cantidad;
        otroProducto = confirm("Indique 'ACEPTAR' si quiere seguir agregando productos o 'CANCELAR' si quiere terminar la compra");

    } while (otroProducto);
    
    return total
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

agregarAlCarrito();
agregarCostoDeEnvio(total);
aplicarDescuento(total);