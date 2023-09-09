import { InterfazG } from "./InterfazG.js"
import { mostrarTarjetas } from "../main.js"

 
export class interfazJ{
        constructor(nombreR){
            this.nombreR = nombreR
        }


        popUp(){
         const zonaG =   document.getElementById("zonaG")
         const popUpHtml = `
         <div id="popupContainerHome">
         <div id="popupBoxHome">
           
                 <div id="customGamer">
                   <div id="tituloReto"> <h2>${this.nombreR}</h2> <span id="cerrarPopH">&times;</span> </div>
                   <div id="jugadores"></div>
                   <button id="btnAgregar" >Agregar jugador</button>
                     <div class="zonaPremio">
                         <input id="premio" type="text" placeholder="Escribe aquí el premio para el ganador">
                     
                         <div id="customNumberInput">
                           
                             <button id="decreaseButton">-</button>
                             <input type="number" class="center-input" id="numberInput" min="12" max="50" value="12" />
                             <button id="increaseButton">+</button>
                           </div>
 
                           <div>
                            <div id="jugar"></div>
                           </div>
                     </div>
                 </div>
                 
                 <button>A jugar</button>
         </div>
       </div>
         `


         zonaG.innerHTML =popUpHtml
        }

    cerrarPopUp(){
        const cerrarPopH = document.getElementById("cerrarPopH")
        cerrarPopH.addEventListener("click", ()=>{
            const popupContainerHome = document.getElementById("popupContainerHome")
            popupContainerHome.style.display = "none"

            mostrarTarjetas()
            
        })
    }
        
}