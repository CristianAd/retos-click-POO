import { CustomJugadores } from "./CustomsJugadores.js"
export class interfazJ{
        constructor(nombreR){
            this.nombreR = nombreR
        }


        popUp(){
         const popUpHome = document.getElementById("popUpHome")
         const popUpHtml = `
         <div id="popupContainerHome">
         <div id="popupBoxHome">
           
                 <div id="customGamer">
                   <div id="tituloReto"> <h2 id="tipoReto">${this.nombreR}</h2> <span id="cerrarPopH">&times;</span> </div>
                   <div id="jugadores"></div>
                   <button id="btnAgregar" >Agregar jugador</button>
                     <div class="zonaPremio">
                         <input id="premio" type="text" placeholder="Escribe aquí el premio para el ganador">
                     
                         <div id="customNumberInput">
                           
                                    <div class="slider-container">
                                    <div id="slider">
                                    <div id="slider-button"></div>
                                    </div>
                                    <span id="value">12</span>
                                    </div>

                           </div>
 
                           <div>
                            <div id="jugar"></div>
                           </div>
                     </div>
                 </div>
                 
                 <button id="irAltablero">A jugar</button>
         </div>
       </div>
         `


         const tarjetasHome =   document.getElementById("tarjetasHome")
            tarjetasHome.style.display = "none"
         popUpHome.innerHTML = popUpHtml

         

        const customPlayer = new CustomJugadores()
         
        const btnAdd = document.getElementById("btnAgregar")
       


        btnAdd.addEventListener("click", ()=>{
            customPlayer.agregarJugadores()
            
        })

             

        }

    cerrarPopUp(){
        const cerrarPopH = document.getElementById("cerrarPopH")
        cerrarPopH.addEventListener("click", ()=>{
            const popupContainerHome = document.getElementById("popupContainerHome")

            popupContainerHome.style.display = "none"
            tarjetasHome.style.display = "flex"
       




            
           
        })
    }

 
       
}