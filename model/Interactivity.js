import {retos} from "../data/retos.js"



export class Interactivity{
    constructor(){}

    runGame(){
         
const arrayElementos1 = Array.from(document.querySelectorAll('.contenedorCuadros1 .cajasA'));
const arrayElementos2 = Array.from(document.querySelectorAll('.contenedorCuadros2 .cajasB'));
const arrayElementos3 = Array.from(document.querySelectorAll('.contenedorCuadros3 .cajasC'));
const arrayElementos4 = Array.from(document.querySelectorAll('.contenedorCuadros4 .cajasD'));

const arrayCompletoCajas = arrayElementos1.concat(arrayElementos2, arrayElementos3.reverse(), arrayElementos4.reverse()) 

// Amacenamos color original


let colorOriginal; // Declarar la variable fuera de la función

Array.from(arrayCompletoCajas).forEach(caja => {
  const computedStyle = getComputedStyle(caja);
  colorOriginal = computedStyle.backgroundColor; // Almacenar el color original


});

// Función para restaurar el color original de las cajas
function restaurarColor() {
 
  Array.from(arrayCompletoCajas).forEach(caja => {
    caja.style.backgroundColor = colorOriginal;
   
  });

}

//Deshabilitando Botón temporal
const btnPush =  document.getElementById("playGame")

btnPush.addEventListener("click", function disablesBtn() {
  btnPush.disabled = true
  
})

///
const zonaJugadores = document.getElementById("zonaJugadores");
const jugadores = zonaJugadores.children;

 

let indice = 0;

const popupBox = document.getElementById('popupBox')
function mostrarValor() {


  const jugadorActual = jugadores[indice].firstChild.textContent;
 // jugadores[indice].style.backgroundColor = "yellow"
  
  
   popupBox.firstChild.remove()
 
//Insertamos al inicio del popup el nombre del jugador
  const nuevoDiv = document.createElement('div')

  nuevoDiv.innerText = jugadorActual
  popupBox.insertBefore(nuevoDiv, popupBox.firstChild)


//  console.log(jugadorActual);
  indice = (indice + 1) % jugadores.length; // Incrementa el índice y lo reinicia al llegar al final
 //
   
}


const playGame = document.getElementById("playGame");
const laMeta = 15


playGame.addEventListener("click", () => {
  /*deshablitamos el botón cerrar o flecha*/
 closeButton.style.display = "none"
mostrarValor()

    // Obtener el conjunto desde localStorage
   // const conjunto = JSON.parse(localStorage.getItem('conjunto'));
    // const valorPremio = JSON.parse(localStorage.getItem('valorPremio'));
    const conjunto = retos
    const valorPremio = "PremioAconfigurar"
   
 
  const elementos = arrayCompletoCajas;

  let index = 0;
  let jota = 0


const numeroAleatorio = generarNumeroAleatorio()


                         
 


        /*GENERAR NUMERO ALEATORIO */
  function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 12) + 1;
  }
  
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
    
            
                  const popupContainer = document.getElementById("popupContainer");
                  const textoReto =  document.getElementById("retoSelected");

   
          /*OBTENER EL CONJUNTO DE RETOS */
        //  const todosLosRetos = JSON.parse(localStorage.getItem('conjunto'))
        function mostrarRetos() {
          return retos
      }
        const todosLosRetos = mostrarRetos().amistades
        

        function retoGenerado() {
          return todosLosRetos[numeroAleatorio] 
        }

        /*MOSTRAR PUNTOS A RECLAMAR */
        document.querySelector('.cajaPuntos').innerHTML = numeroAleatorio
        /*Mostrar reto aleatorio */
                  textoReto.innerHTML= retoGenerado()
                  popupContainer.style.display = "block";

        
              } 



    }


  }
 
  pintarCuadros();


});


//////////////////////////////////////////

let secuencia = 0
function getPoints() {
  const players =  document.querySelectorAll('.players')
  
  
  const valorPrevio = players[secuencia].lastChild.textContent
  players[secuencia].lastChild.textContent = parseInt(valorPrevio) + parseInt(document.querySelector('.cajaPuntos').innerHTML) + " pts"
     
  
  
}

//const losJugadores = localStorage.getItem("losjugadores");

const jugadoresArray = retos.amistades
const numeroParticipantes = parseInt(jugadoresArray.length);

const reclamarButton = document.getElementById('btnReclamar');
reclamarButton.addEventListener('click', function() {
   
  
  getPoints()
  
  secuencia = (secuencia + 1) % numeroParticipantes
  alertaGanador()
  closeButton.style.display = "block"
  reclamarButton.style.display = "none"

  
});


let nameGanador 
let puntos = ""
function alertaGanador() {
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

  if (puntos >= parseInt(laMeta)) {

    if (JSON.parse(localStorage.getItem('valorPremio')) === "") {
      document.querySelector('.zonaPremioGando').innerHTML = "Pídele un helado a tu mejor amig@"
    }else{
      document.querySelector('.zonaPremioGando').innerHTML = localStorage.getItem('valorPremio');
    }
   
  }
}

//BOTÓN PARA CERRAR POP UP
const closeButton = document.getElementById("closeButton");
  closeButton.addEventListener("click", () => {
     reclamarButton.style.display = "block"
  popupContainer.style.display = "none";
  btnPush.disabled = false

  // Turno de jugador, lo pintamos
  function pintarSiguiente(indice) {
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
  
  // Llamar a la función para pintar el primer elemento
  pintarSiguiente(indice);
  

  restaurarColor()

});


 

///  
    }

}

//const zonaJugadores = document.getElementById("zonaJugadores");
//const jugadores = zonaJugadores.children;


