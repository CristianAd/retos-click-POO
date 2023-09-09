import { InterfazG } from "./model/InterfazG.js"
import { retos } from "./data/retos.js"
import { interfazJ } from "./model/Interfaz-J.js"



const nav = document.querySelector("#nav")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", ()=>{
    nav.classList.add("visible")
})


cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible")
})


/*SHOW TARJETAS */

export function mostrarTarjetas() {
    const tarjetasIncio = new InterfazG()
    tarjetasIncio.tarjetas()

}

mostrarTarjetas()

//Importamo tablero /*  #deportivas, #noviazgo, #trivias, #verdadDesafio, #cocina, #amistad  */


const deportivas = document.getElementById("deportivas");
const noviazgo = document.getElementById("noviazgo")
const amistad = document.getElementById("amistad")
const verdadDesafio = document.getElementById("verdadDesafio")
const cocina = document.getElementById("cocina")
const trivias = document.getElementById("trivias")

 

function selections(param) {

    param.addEventListener("click", () => {
        
        const tipoDeporte = param.innerHTML
        const interfazj = new interfazJ(tipoDeporte);  
        interfazj.popUp()
        interfazj.cerrarPopUp()

        
    });


}

selections(deportivas)
selections(noviazgo)
selections(amistad)
selections(verdadDesafio)
selections(cocina)
selections(trivias)

 