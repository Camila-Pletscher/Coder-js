let presupuesto = parseFloat(prompt("Ingrese su presupuesto"));

if((presupuesto >0) && (presupuesto <1000)) {
    alert("Presupuesto bajo");
} else if((presupuesto >1001) && (presupuesto <3000)) {
    alert("Presupuesto medio");
} else if(presupuesto >3000) {
    alert("Presupuesto alto");
} else {
    alert("No ingreso un numero valido");
}

