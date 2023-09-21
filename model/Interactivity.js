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
  console.log(laMeta.textContent)

  const jugadoresFull = document.getElementById("zonaJugadores")
   const numeroParticipantes = jugadoresFull.children.length
   
   btnReclamar.addEventListener("click", ()=>{

   

      const valorPrevioP = jugadoresFull.children[secuencia].lastChild.textContent
      popupContainer.style.display = "block"
      const valorProximo = parseInt(valorPrevioP) + parseInt(numeroAleatorio)
      jugadoresFull.children[secuencia].lastChild.textContent = valorProximo + " pts" 

      btnReclamar.style.display = "none";
      nextBtnGame.style.display = "block"
      secuencia = (secuencia + 1) % numeroParticipantes
      
      if (valorProximo > parseInt(laMeta.textContent)) {
        console.log("El "+ valorPrevioP + "supera a " + laMeta)
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

mostrarTipoJ(param){
    console.log(param)
}


  runGame(){
 

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
              case tipoJuegoEnTablero.includes("Verdad o desafio"):
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
          console.log(todosLosRetos)

    
          
  
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
      
    }
   
    
    )
   
  


    

  }


alertaGanador() {
 // popupContainer.style.display = "none"
 // document.getElementById("popupGanador").style.display = "block"
 
  let puntos = ""
  const ptsJugador =  document.querySelectorAll('.players')
  for (let i = 0; i < ptsJugador.length; i++) {
    puntos = parseInt(ptsJugador[i].lastChild.textContent);
     if (puntos >= parseInt(laMeta)) {
        popupContainer.style.display = "none";
        document.getElementById('popupGanador').style.display = "block"
        document.querySelector('.nombreGanador').innerHTML = ptsJugador[i].firstChild.textContent
       console.log(ptsJugador[i].firstChild.textContent + ' ganaste!!')
     }
    
  }
  console.log(puntos)
/*
  if (puntos >= parseInt(laMeta)) {

    if (JSON.parse(localStorage.getItem('valorPremio')) === "") {
      document.querySelector('.zonaPremioGando').innerHTML = "Pídele un helado a tu mejor amig@"
    }else{
      document.querySelector('.zonaPremioGando').innerHTML = localStorage.getItem('valorPremio');
    }
   
    */
}
 



 


 
 

      ejecutar(){
      this.savePredeterminados()
      this.runGame()
      this.reclamarPuntos()
      this.closeBtnGame()

   

      
    
      

    }


}




