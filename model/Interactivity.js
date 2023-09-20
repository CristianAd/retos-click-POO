import { InterfazElements } from "./AccessDon.js";
import { CustomJugadores } from "./CustomsJugadores.js";
import {retos} from "../data/retos.js"



const btnReclamar = new InterfazElements().btnReclamar
const nextBtnGame = new InterfazElements().nextBtn
const popupContainer = new InterfazElements().popUpGameActive
const numeroAleatorio = new InterfazElements().generarNumAleatorio()


let colorOriginal; // Declarar la variable fuera de la función
let secuencia = 0


export class Interactivity{
    constructor(){
      this.tipoD = "Futbol Americano"

    }

    cambiaTipoD(nombre) {
      this.tipoD = nombre;
    }




///////////////////////////////////////////////////////////

conjuntoCajas() {
  const arrayElementos1 = Array.from(document.querySelectorAll('.contenedorCuadros1 .cajasA'));
  const arrayElementos2 = Array.from(document.querySelectorAll('.contenedorCuadros2 .cajasB'));
  const arrayElementos3 = Array.from(document.querySelectorAll('.contenedorCuadros3 .cajasC'));
  const arrayElementos4 = Array.from(document.querySelectorAll('.contenedorCuadros4 .cajasD'));
  
  const arrayCompletoCajas = arrayElementos1.concat(arrayElementos2, arrayElementos3.reverse(), arrayElementos4.reverse()) 
  return arrayCompletoCajas
}


reclamarPuntos(){
  console.log(secuencia)
  const jugadoresFull = document.getElementById("zonaJugadores")
   const numeroParticipantes = jugadoresFull.children.length
   
   btnReclamar.addEventListener("click", ()=>{
   
    const valorPrevioP = jugadoresFull.children[secuencia].lastChild.textContent
    jugadoresFull.children[secuencia].lastChild.textContent = parseInt(valorPrevioP) + numeroAleatorio + " pts" 
   
     secuencia = (secuencia + 1) % numeroParticipantes
    
    btnReclamar.style.display = "none";
    nextBtnGame.style.display = "block"
   
    })
 
}


savePredeterminados(){
  Array.from(this.conjuntoCajas()).forEach(caja => {
    const computedStyle = getComputedStyle(caja);
    colorOriginal = computedStyle.backgroundColor; // Almacenar el color original
  });

}

pintarSiguiente(indice){
  const jugadores = document.getElementById("zonaJugadores").children;
  if (indice < jugadores.length) {
    for (let i = 0; i < jugadores.length; i++) {

      if (i === indice) {
        jugadores[i].style.backgroundColor = "#ff7f00" // Pinta el elemento actual de amarillo

      } else {
        jugadores[i].style.backgroundColor = ""; // Restablece el color de fondo de los elementos anteriores
      }
    }
  }

}


closeBtnGame(){
  
   nextBtnGame.addEventListener("click", ()=>{
    popupContainer.style.display = "none"
  // console.log(jugadoresFull)

  
  // Función para restaurar el color original de las cajas
 // function restaurarColor() {}
        Array.from(this.conjuntoCajas()).forEach(caja => {
          caja.style.backgroundColor = colorOriginal;
        
        });

        const btnPush = document.getElementById("playGame")
        btnPush.disabled = false
        this.pintarSiguiente(secuencia)

   })
  

  
   
}



  runGame(param){
  
     
    console.log(this.tipoD)
    
    let index = 0
    let jota = 0
    const elementos = this.conjuntoCajas()

  
//////////////////////////////////////////
  const btnPush = document.getElementById("playGame")
    btnPush.addEventListener("click", 
    
    function pintarCuadros() {  
      if (index < elementos.length) {
        elementos[index].style.backgroundColor = "rgb(147, 0, 255)";
        index++;
        setTimeout(pintarCuadros, 200);
      } else if (index === elementos.length) {
  
        if (jota < numeroAleatorio ) {
  
    
          elementos[jota].style.backgroundColor = "blue";
         
          jota++
          setTimeout(pintarCuadros, 200);
  
  
        } else if(jota === numeroAleatorio){
            
            ////////////////////
          document.getElementById("btnReclamar").style.display = "block"

      
                    const popupContainer = document.getElementById("popupContainer");
                    const textoReto =  document.getElementById("retoSelected");

            /*OBTENER EL CONJUNTO DE RETOS */
          function mostrarRetos() {
            return retos
        }
          const todosLosRetos = mostrarRetos().amistades
          
  
          function retoGenerado() {
            const resultadoReto = numeroAleatorio - 1
            console.log(resultadoReto, todosLosRetos[resultadoReto])
             return todosLosRetos[resultadoReto]
          }
  
          /*MOSTRAR PUNTOS A RECLAMAR */
          document.querySelector('.cajaPuntos').innerHTML = numeroAleatorio
          /*Mostrar reto aleatorio */
                    textoReto.innerHTML= retoGenerado()
                    popupContainer.style.display = "block";

                  /////////
                   
                  const popupBox = document.getElementById('popupBox')
                  const jugadorActual = document.getElementById("zonaJugadores").children[secuencia].firstChild.textContent;
                  // jugadores[indice].style.backgroundColor = "yellow"
                    popupBox.firstChild.remove()
                  
                 //Insertamos al inicio del popup el nombre del jugador
                   const nuevoDiv = document.createElement('div')
                 
                   nuevoDiv.innerText = jugadorActual
                   popupBox.insertBefore(nuevoDiv, popupBox.firstChild)
                  ////////


                
  
          
                } 
  
      }

      btnPush.disabled = true
      nextBtnGame.style.display = "none"
      console.log("Bton Push activo")
    }
   
    
    )
   
  

 
    

  }
 



 


 
 

      ejecutar(){
      this.savePredeterminados()
      this.runGame()
      this.reclamarPuntos()
      this.closeBtnGame()

      
    
      

    }


}




