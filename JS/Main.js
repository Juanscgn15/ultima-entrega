//generador de clases//
class producto { 
    constructor(nombre,precio){
        this.nombre=nombre
        this.precio= parseFloat(precio)
    }
}
//constantes//
const articulo1 = new producto ( "Remera basica", 8000)
const articulo2 = new producto ( "Pantalon de vestir", 10000)
const articulo3 = new producto ( "Camisa Don Juan", 14000)
const articulo4 = new producto ( "Chomba deportiva", 10000)
const articulo5 = new producto ( "Zapatos", 20000)
const inventario = [ articulo1 ,articulo2, articulo3,articulo4 ,articulo5]
const carrito = []
const btnRemera = document.getElementById("btnRemera")
const btnChomba = document.getElementById("btnChomba")
const btnCamisa = document.getElementById("btncamisa")
const btnPantalon = document.getElementById("btnpantalon")
const btnZapatos = document.getElementById("btnZapatos")
const verCarrito = document.getElementById("verCarrito")
const carritoContainer = document.getElementById("carrito-container");
const  carritoFinal = carrito.reduce ((acc,el) => acc + el.precio,0);
//function


function agregarAlArry(arry,articulo) {
arry.push(articulo)
}
function guardarEnLS(arr) {
    return localStorage.setItem("carritoFinalLS",JSON.stringify(arr))
}


document.getElementById("btnRemera").onclick = function() { 
    Swal.fire({
        title: "Agregastes  al carrito!", 
        text: "Remera basica",
        icon: "success",
        confirmButtonText: "continuar comprando",
        width: "20%",
        padding: "5rem",        
        backdrop: true,
        position:"top-end",
        timer: "4000",
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
    }); 
    let pregunta = document.getElementById("Unidades-remeras").value;
    for (let i = 0; i < pregunta; i++) {
        agregarAlArry(carrito,articulo1)
    }
    guardarEnLS(carrito);
    return
};

document.getElementById("btnChomba").onclick = function() { 
    Swal.fire({
        title: "Agregastes  al carrito!", 
        text: "Chomba deportiva",
        icon: "success",
        confirmButtonText: "continuar comprando",
        width: "20%",
        padding: "5rem",        
        backdrop: true,
        position:"top-end",
        timer: "4000",
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
    }); 
    let pregunta = document.getElementById("Unidades-chombas").value;
    for (let i = 0; i < pregunta; i++) {
        agregarAlArry(carrito,articulo4)}
        guardarEnLS(carrito);
    return
};

document.getElementById("btnCamisa").onclick = function() { 
    Swal.fire({
        title: "Agregastes  al carrito!", 
        text: "Camisa Don Juan",
        icon: "success",
        confirmButtonText: "continuar comprando",
        width: "20%",
        padding: "5rem",        
        backdrop: true,
        position:"top-end",
        timer: "4000",
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
    }); 
    let pregunta = document.getElementById("Unidades-camisas").value;
    for (let i = 0; i < pregunta; i++) {
        agregarAlArry(carrito,articulo3)}
        guardarEnLS(carrito);
    return

};
document.getElementById("btnPantalon").onclick = function() { 
    Swal.fire({
        title: "Agregastes  al carrito!", 
        text: "Pantalon de vestir",
        icon: "success",
        confirmButtonText: "continuar comprando",
        width: "20%",
        padding: "5rem",        
        backdrop: true,
        position:"top-end",
        timer: "4000",
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
    }); 
    let pregunta = document.getElementById("Unidades-pantalones").value;
    for (let i = 0; i < pregunta; i++) {
        agregarAlArry(carrito,articulo2)}
        guardarEnLS(carrito);
    return

};

document.getElementById("btnZapatos").onclick = function() { 
    Swal.fire({
        title: "Agregastes  al carrito!", 
        text: "Zapatos",
        icon: "success",
        confirmButtonText: "continuar comprando",
        width: "20%",
        padding: "5rem",        
        backdrop: true,
        position:"top-end",
        timer: "4000",
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
    }); 
    let pregunta = document.getElementById("Unidades-zapatos").value;
    for (let i = 0; i < pregunta; i++) {
        agregarAlArry(carrito,articulo5)}
        guardarEnLS(carrito);
    return
};
document.getElementById("Finalizarcompra").onclick = function() {
    Swal.fire({
        title: "Gracias por tu compra!", 
        text: carritoFinal.value,
        icon: "success",
        confirmButtonText: "Finalizar",})
        localStorage.removeItem("carritoFinalLS")
        }

verCarrito.addEventListener("click",() => {
carritoContainer.innerHTML = "";
carritoContainer.style.display= "flex";
const carritoHeader = document.createElement ("div");
carritoHeader.className = "carritoHeader";
carritoHeader.innerHTML = `
<h1 class="carrito-header-titulo">Carrito.</h1>
`;
carritoContainer.append(carritoHeader);

const carritoButton = document.createElement("button");
carritoButton.innerText = "X";
carritoButton.className = "btn btn-secondary";

carritoButton.addEventListener("click", () => {
    carritoContainer.style.display= "none";
});

carritoContainer.append(carritoButton);

carrito.forEach((producto) => {
    let carritoContent = document.createElement ("div");
    carritoContent.className = "carrito-Content";
    carritoContent.innerHTML = `<h3> ${producto.nombre} </h3>
    <p> ${producto.precio}$</p>
    `;
    carritoContainer.append(carritoContent)
});

const total = carrito.reduce ((acc,el) => acc + el.precio,0);
const precioTotal = document.createElement ("div");
precioTotal.className = "precio-total"
precioTotal.innerHTML = `Total a pagar: ${total} $`;
carritoContainer.append(precioTotal);


});

// Swal.fire({
//     title:"Binenvenidos a Don Juan"
// });

// const  carritoFinal = carrito.reduce((acc,el)=> {
//     return acc + el.precio
// },0)
// alert("Su compra tiene un valor de:$ " + carritoFinal);
// formaDeEnvio = prompt("¿Lo retira en el local o se lo enviamos a domicilio? ")
// if (formaDeEnvio != "domicilio") {
//     alert("Genial, entonces puede pasar a retirar su producto el dia de mañama dentro de nuestros horarios de atencion por nuestro local en: calle falsa 123 \n ¡Le agradecemos por su compra!")
// }
// else { direccion= prompt("Genial, le pedimos su direccion ")
// console.log(direccion);
// cp=prompt("y su codigo postal")
// console.log(cp);
// alert("¡Listo! le agradecemos por su compra. En los proximos dias se le despacha")
// }

console.log(carrito);


