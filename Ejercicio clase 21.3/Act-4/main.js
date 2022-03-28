class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
    esPropietario(nombre) {
        return this.propietario == nombre;
    }
}

const tienda1 = new Tienda ("Josimar", "Colombres 200", "Carlos Josi", "Supermercado");
const tienda2 = new Tienda ("Zenska", "Loria 477", "Liliana Lopez", "Salon de belleza");

for(i = 0; i < 5; i++) {
    let propietarioIngresado = prompt("Ingrese nombre del propietario");

    if(tienda1.esPropietario(propietarioIngresado)) {
        alert ("El propietario ingresado pertenece a la tienda 1");
    } else if (tienda2.esPropietario(propietarioIngresado)) {
        alert("El propietario ingresado pertenece a la tienda 2");
    } else {
        alert("No pertenece");
    }
}