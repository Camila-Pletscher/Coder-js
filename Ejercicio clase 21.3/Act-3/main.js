class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
    estaAbierto(hora) {
        if((hora > 8 && hora < 12) || (hora > 15 && hora < 19)) {
            return true;
        } else {
            return false; 
        }
    }
}

const tienda1 = new Tienda ("Josimar", "Colombres 200", "Carlos Josi", "Supermercado");


for(i = 0; i < 5; i++) {
    let entrada = parseInt(prompt("Ingrese hora en punto"));
    if(tienda1.estaAbierto(entrada)) {
        alert("La tienda esta abierta")
    } else {
        alert("La tienda esta cerrada")
    }
}

