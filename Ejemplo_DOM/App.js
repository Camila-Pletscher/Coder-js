const contenedorProductos = document.getElementById("producto-contenedor");

const mostrarProductos = (productos) => {
    productos.forEach( producto => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML += `<div class="card-image">
                            <img src=${producto.img}>
                            <span class="card-title">${producto.nombre}</span>
                            <a class="btn-floating halfway-fab wabes-effect waves-light red" id=boton${producto.id}><i class="material-icons">add_shopping_cart</i></a>
                        </div>
                        <div class="card-content">
                            <p>${producto.desc}</p>
                            <p>Talle: ${producto.talle}</p>
                            <p>${producto.precio}</p>
                        </div>
                        `


        contenedorProductos.appendChild(div);
    });
};

mostrarProductos(productos);