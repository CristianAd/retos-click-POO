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




    
    }

    popUpJuegoActivo(){
        const popUpHome = document.getElementById("popUpHome")
        const popUpJA = `<div id="popupContainer">
        <div class="turnoJugador"></div>
        <div id="popupBox">
          <span id="closeButton"><img src="/assets/png/siguiente-boton.png" alt=""></span>
          <p id="retoSelected">#</p>
          <div class="cajaPuntos">0</div>
          <div class="zonBtnReclamar"><button id="btnReclamar" >Reclamar</button></div>
        </div>
      </div>`
        popUpHome.innerHTML = popUpJA
      console.log(popUpJA)
    
    }





}




 