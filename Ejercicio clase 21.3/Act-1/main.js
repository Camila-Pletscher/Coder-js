class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}

const tienda1 = new Tienda ("Josimar", "Colombres 200", "Carlos Josi", "Supermercado");
const tienda2 = new Tienda ("Zenska", "Loria 477", "Liliana Lopez", "Salon de belleza");


console.log(tienda1);
console.log(tienda2);

