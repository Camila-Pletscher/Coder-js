class Cliente {
    constructor(nombre, presupuesto, tarjetaDescuento, telefono) {
        this.nombre = nombre;
        this.presupuesto = presupuesto;
        this.tarjetaDescuento = tarjetaDescuento;
        this.telefono = telefono;
    }
    transferirDinero(valor) {
        if((valor <= this.presupuesto) && (this.presupuesto > 0)) {
            this.presupuesto -= valor
            return true;

        } else {
            return false;
        }

    }
} 

const cliente1 = new Cliente ("Camila" , 100000, "Si", 1568545967);
const cliente2 = new Cliente ("Claudia", 250000, "No", 1551043062);

for(i = 0; i<5; i++) {
    let numero = parseInt(prompt("Ingrese monton de transferencia"));

    if (cliente1.transferirDinero(numero)) {
        alert(cliente1.nombre + " puede realizar la transfencia. Y su saldo es " + cliente1.presupuesto)
    } if (cliente2.transferirDinero(numero)) {
        alert(cliente2.nombre + " puede realizar la transferencia. Y su saldo es " + cliente2.presupuesto)
    } else {
        alert("Ningun cliente puede realizar la transferencia")
    }
}

