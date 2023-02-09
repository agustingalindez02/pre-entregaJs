let boton = document.getElementById("icon")
boton.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "asetts/sun-solid.png";
    }else{
        icon.src = "asetts/moon-solid.svg";
        
    }

})


let form = document.querySelector("form")
form.addEventListener("submit", function (e) {
    e.preventDefault()
})

let agregar = document.getElementById("agregar")
agregar.addEventListener("click", function () {

    let nombre = document.getElementById("nombre").value;
    let descripcion = document.getElementById("descripcion").value;
    let precio = document.getElementById("precio").value;
    let stock = document.getElementById("stock").value;
    let imagen = document.getElementById("imagen").value;

    if ((nombre != "") || (descripcion != "") || (codigo != "") || (precio != 0) || (stock != 0)) {

        let lista = document.getElementById("lista-productos");
        let li = document.createElement("li")

        li.innerHTML = `<li>Nombre:${nombre}</li>
        <li>Descripcion:${descripcion}</li>
        <li>Precio:${precio}</li>
        <li>Stock:${stock}</li>
        <li>Imagen:${imagen}</li>
        <button id="borrar">Borrar</button>
        <button id="editar">Editar</button>`;

        lista.append(li)

        const producto = {
            nombre: `${nombre}`,
            descripcion: `${descripcion}`,
            precio: `${precio}`,
            stock: `${stock}`,
            imagen: `${imagen}`,
        }

        let borrar = document.getElementById("borrar")
        borrar.addEventListener("click", function () {
            li.remove()
        })
    }




    /*let editar = document.getElementById("editar")
    editar.addEventListener("click", function (){
        li.
    })*/



})


const id = 0

id++

console.log(id)


