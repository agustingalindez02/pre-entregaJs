let boton = document.getElementById("icon")
boton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "asetts/sun-solid.png";
    } else {
        icon.src = "asetts/moon-solid.svg";

    }

})

const lista_productos = []

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

    let lista = document.getElementById("lista-productos");
    let section = document.getElementById("products");
    let li = document.createElement("li");
    let div = document.createElement("div");

    li.innerHTML = `<li>Nombre:${nombre}</li>
        <li>Descripcion:${descripcion}</li>
        <li>Precio:${precio}</li>
        <li>Stock:${stock}</li>
        <li>Imagen:${imagen}</li>
        <button id="borrar">Borrar</button>
        <button id="editar">Editar</button>`;

    lista.append(li)

    div.innerHTML =
        `<div class="products">
            <div class="card">
            <img src="${imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">${descripcion}</p>
                <button id="add-cart">Agregar al carrito</button>
                </div>
            </div>
        </div>`;

    //section.append(div)

    const producto = {
        nombre: `${nombre}`,
        descripcion: `${descripcion}`,
        precio: `${precio}`,
        stock: `${stock}`,
        imagen: `${imagen}`,
    }

    lista_productos.push(producto)
    let lista_JSON = JSON.stringify(lista_productos);
    localStorage.setItem("productos", lista_JSON);

    console.log(lista_productos)




    let borrar = document.getElementById("borrar")
    borrar.addEventListener("click", function () {

        let list = localStorage.getItem("productos");
        console.log(list)
        let lista_obj = JSON.parse(list)
        console.log(lista_obj)
        let index = lista_obj.indexOf(producto)
        lista_obj.splice(index, 1)



        li.remove()
        //div.remove()
    })
    /*let editar = document.getElementById("editar")
    editar.addEventListener("click", function (){
        li.
    })*/

})




