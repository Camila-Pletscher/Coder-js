class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
    
}

let ingresados = ""

for(let i = 0; i < 5; i++){

let tienda1 = new Tienda(prompt("Nombre"), 
                        prompt("Direccion:"),
                        prompt("Propietario"),
                        prompt("Rubro"));

ingresados += "Tienda numero: " + i + "\nTienda: " + tienda1.nombre + "\n" + "Direccion: " + tienda1.direccion + "\n" + "Propietario: " + tienda1.propietario + "\n" + "Rubro: " + tienda1.rubro + "\n\n"


                    }

alert(ingresados)
