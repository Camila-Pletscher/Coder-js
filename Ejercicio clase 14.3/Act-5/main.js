let numProducto;
let lista = ''


while(numProducto != "ESC") {
    numProducto = prompt("Ingrese un numero de producto del 1 al 4 o ESC para salir");
    switch (numProducto) {
        
        case "1":
            alert("Tomate");
            lista = lista + "Tomate" + "\n";          
            break;
        case "2":
            alert("Papa");
            lista = lista + "Papa" + "\n";
            break;
        case "3":
            alert("Carne");
            lista = lista + "Carne" + "\n";
            break;
        case "4": 
            alert("Pollo");
            lista = lista + "Pollo" + "\n";
            break;
        case "ESC":
            alert("Adios");
            break;
        default:
            alert("Numero invalido");

    }
    
}

alert("Lista de productos\n" + lista);