class Jugador {
    constructor (nombre, camiseta, edad, lesion) {
        this.nombre = nombre
        this.camiseta = camiseta
        this.edad = edad
        this.lesion = lesion
    }
}

const jugador1 = new Jugador ("Lautaro Acosta", 7, 30, true)
const jugador2 = new Jugador ("Jose Sand", 9, 36, false)
const jugador3 = new Jugador ("Tomas Belmonte", 13, 23, false)

const arrayJugadores = [];

arrayJugadores.push(jugador1, jugador2, jugador3);

console.log(arrayJugadores);