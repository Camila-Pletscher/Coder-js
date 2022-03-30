class Agenda {
    constructor(numero, nombre, movil, edad, mail) {
        this.numero = numero
        this.nombre = nombre
        this.movil = movil
        this.edad = edad 
        this.mail = mail

    }
}

const agendaDeContactos = [];

agendaDeContactos.push(new Agenda (1, prompt("Nombre"), prompt("movil"), prompt("edad"), prompt("mail")));
agendaDeContactos.push(new Agenda (2, prompt("Nombre"), prompt("movil"), prompt("edad"), prompt("mail")));
agendaDeContactos.push(new Agenda (3, prompt("Nombre"), prompt("movil"), prompt("edad"), prompt("mail")));
agendaDeContactos.push(new Agenda (4, prompt("Nombre"), prompt("movil"), prompt("edad"), prompt("mail")));

console.log(agendaDeContactos);

for (const contactos of agendaDeContactos) {
    
    alert("Estos son los nombres agendados")
    alert(contactos.nombre);

}




