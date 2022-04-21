const btnComprar = document.getElementById("btn-comprar");

btnComprar.addEventListener("click", () => {
    swal({
        title: 'Genial',
        text: 'Tu producto se agrego correctamente',
        icon: 'success',
        confirm: 'Ok'
    })
})