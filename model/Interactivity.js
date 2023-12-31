import { InterfazElements } from "./AccessDon.js";
import {retos} from "../data/retos.js"



const btnReclamar = new InterfazElements().btnReclamar
const nextBtnGame = new InterfazElements().nextBtn
const popupContainer = new InterfazElements().popUpGameActive
 


let colorOriginal; // Declarar la variable fuera de la función
let secuencia = 0
let index = 0
let jota = 0
let numeroAleatorio = null

export class Interactivity{
 


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
  
  const laMeta = document.getElementById("metaJuego")


  const jugadoresFull = document.getElementById("zonaJugadores")
   const numeroParticipantes = jugadoresFull.children.length
   
   btnReclamar.addEventListener("click", ()=>{

  

    const valorPrevioP = jugadoresFull.children[secuencia].lastChild.textContent
    const valorProximo = parseInt(valorPrevioP) + parseInt(numeroAleatorio);
  

      if (valorProximo >= parseInt(laMeta.textContent)) {
        popupContainer.style.display = "none"
        document.getElementById("popupGanador").style.display = "block"
        document.querySelector('.nombreGanador').innerHTML = jugadoresFull.children[secuencia].firstChild.textContent 
        

        const elementosJ = document.querySelectorAll('.players');
        const elementosPlayers = [];
        elementosJ.forEach(item => {
                 const losDivs =   item.querySelectorAll('div')

                 for (const div of losDivs) {
                  if (!div.classList.length) {
                    elementosPlayers.push(div.innerText);
                    break;
                    
                  }
                  
                 }


        });
                         // Filtra los elementos que no coinciden con 'secuencia'
                         const noAparecen =   elementosPlayers.filter(elemento => elemento !== jugadoresFull.children[secuencia].firstChild.textContent);
                         // Muestra los elementos que no aparecen en la consola

                         document.getElementById("Perdedores").innerText = noAparecen.join(', ')
                          

        
      }else{
        
        popupContainer.style.display = "block"
       
        jugadoresFull.children[secuencia].lastChild.textContent = valorProximo + " pts" 
  
        btnReclamar.style.display = "none";
        nextBtnGame.style.display = "block"
        secuencia = (secuencia + 1) % numeroParticipantes
      }
  
  
   
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
    index = 0 /* Reestableemos el valor a cero, porque en el primer clic index valor se conserva */
    jota = 0 /* Reestableemos el valor a cero, porque en el primer clic jota valor se conserva */
  
     numeroAleatorio = this.generarNumAleatorio() /* Regeneramos un nuevo num Aleatorio */
    
    popupContainer.style.display = "none"

        Array.from(this.conjuntoCajas()).forEach(caja => {
          caja.style.backgroundColor = colorOriginal;
        
        });

        const btnPush = document.getElementById("playGame")
        btnPush.disabled = false
        this.pintarSiguiente(secuencia)

      

   })
  

  
   
}

generarNumAleatorio() {
  const numAleat = Math.floor(Math.random() * 12) + 1;
  return numAleat
}


  runGame(){

        numeroAleatorio = this.generarNumAleatorio()
      


    const elementos = this.conjuntoCajas()

  
//////////////////////////////////////////
    const btnPush = document.getElementById("playGame")
    btnPush.addEventListener("click", 
  
    
    function pintarCuadros() {  
      if (index < elementos.length) {
        elementos[index].style.backgroundColor = "#9300FF"
        index++;
        setTimeout(pintarCuadros, 200);
      } else if (index === elementos.length) {
  
        if (jota < numeroAleatorio ) {
  
    
          elementos[jota].style.backgroundColor  = "#E0BB0E";
         
          jota++
          setTimeout(pintarCuadros, 200);
  
  
        } else if(jota === numeroAleatorio){
            
            
            ////////////////////
          document.getElementById("btnReclamar").style.display = "block"

                    const textoReto =  document.getElementById("retoSelected");

            /*OBTENER EL CONJUNTO DE RETOS */
          
          function mostrarRetos() {
            
            const tipoJuegoEnTablero =  document.getElementById("elTitulo").textContent
            switch (true) {
              case tipoJuegoEnTablero.includes("Amistad"):
                return retos.amistades;
              case tipoJuegoEnTablero.includes("Deportivas"):
                return retos.deportes;
              case tipoJuegoEnTablero.includes("Noviazgo"):
                return retos.noviazgos;
              case tipoJuegoEnTablero.includes("Verdad o desafío"):
                return retos.verdadyDesafio;
              case tipoJuegoEnTablero.includes("Cocina"):
                return retos.retosComida;
              case tipoJuegoEnTablero.includes("Trivias"):
                return retos.trivia
              default:
                return null
               
            }

        }
        
       
          const todosLosRetos = mostrarRetos()
          

  
          function retoGenerado() {
            const resultadoReto = numeroAleatorio - 1
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
 
       
      
    }
    
    )
   
  
 
    
    

  }




// 
 

      ejecutar(){
        
       this.runGame()
       this.reclamarPuntos()
       this.closeBtnGame()
       this.savePredeterminados()


    }


}




