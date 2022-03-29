const equipo = [];

let jugador = prompt("Ingrese nombre del jugador");

while(jugador != "ESC") {
    equipo.push(jugador);
    jugador = prompt("Ingrese nombre del jugador");
}

for (index = 0; index < equipo.length; index++) {
    alert("Jugador " + equipo[index] + "\nPosicion " + index);
}

