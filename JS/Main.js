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

//function


function agregarAlArry(arry,articulo) {
arry.push(articulo)
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
        // input:
        // inputPlaceholder:
        // inputValue:
        // inputOptions:
        
        //  customClass:
        // 	container:
        // 	popup:
        // 	header:
        // 	title:
        // 	closeButton:
        // 	icon:
        // 	image:
        // 	content:
        // 	input:
        // 	actions:
        // 	confirmButton:
        // 	cancelButton:
        // 	footer:	
    
        // showConfirmButton:
        // confirmButtonColor:
        // confirmButtonAriaLabel:
    
        // showCancelButton:
        // cancelButtonText:
        // cancelButtonColor:
        // cancelButtonAriaLabel:
        
        // buttonsStyling:
        // showCloseButton:
        // closeButtonAriaLabel:
    }); ;
    agregarAlArry(carrito,articulo1);
};


Swal.fire({
    title:"Binenvenidos a Don Juan"
});

// let Compra = prompt("Introduzca el número del artículo deseado. \n Si desea terminar la compra escriba: finalizar")

// function compra() {
// while (Compra != "finalizar") {
    
//     switch (Compra) {
//         case "1":
//             console.log("remera basica");
//             pregunta =  parseInt(prompt ("¿Cuantas unidades?"))
//         for (let i = 0; i < pregunta; i++) {
//             console.log(agregarAlArry(carrito,articulo1))
//             }
    
//             break;

//         case "2":
//             console.log("Pantalon de vestir");
//             pregunta =  parseInt(prompt ("¿Cuantas unidades?"))
//         for (let i = 0; i < pregunta; i++) {
//             console.log(agregarAlArry(carrito,articulo2))
//             }
//             break;

//         case "3":
//             console.log("Camisa Don Juan");
//         pregunta =  parseInt(prompt ("¿Cuantas unidades?"))
//         for (let i = 0; i < pregunta; i++) {
//             console.log(agregarAlArry(carrito,articulo3))
//             }
//             break;
        
//         case "4":
//             console.log("Chomba deportiva");
//         pregunta =  parseInt(prompt ("¿Cuantas unidades?"))
//         for (let i = 0; i < pregunta; i++) {
//             console.log(agregarAlArry(carrito,articulo4))
//             }
//             break;
        
//             case "5":
//                 console.log("Zapatos");
//         pregunta =  parseInt(prompt ("¿Cuantas unidades?"))
//         for (let i = 0; i < pregunta; i++) {
//             console.log(agregarAlArry(carrito,articulo5))
//             }
//                 break;
        
//             default:
//                 alert("seleccione un item valido")
//             break;
//     }
//     Compra = prompt("Introduzca el número del artículo deseado. Si desea terminar la compra escriba: finalizar")
// }

// }
// compra();
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
