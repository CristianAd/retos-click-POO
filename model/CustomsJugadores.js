import { InterfazG } from "./InterfazG.js";
import { Interactivity } from "./Interactivity.js";

const llevarTablero = new InterfazG()

export class CustomJugadores {
    constructor(participa){
       
        this.readyPlayer =  participa
    }



    agregarJugadores(){

      /* MUESTRA NUMERO JUGADORES */

        
      
  ///////////////////////////////////////
        
            
        const btnAgregar = document.getElementById("btnAgregar");
        const jugadoresN = document.getElementById("jugadores");
        const nombreBase = "Jugador";
        
        // Función para actualizar el estado de los botones
        function actualizarEstadoBotones() {
          const cantidadJugadores = jugadoresN.childElementCount;
          btnAgregar.disabled = cantidadJugadores >= 4;
          for (let i = 0; i < cantidadJugadores; i++) {
            const jugador = jugadoresN.children[i];
            const btnEliminar = jugador.querySelector('.eliminar');
            btnEliminar.disabled = cantidadJugadores <= 1;
          }
        }
        actualizarEstadoBotones()
        
        // Función para agregar un jugador
        function agregarJugador() {
          // Verificar si se ha alcanzado el límite máximo de jugadores
          if (jugadoresN.childElementCount >= 4) {
            return;
          }
          
          // Crear el nuevo elemento jugador
          const nuevoJugador = document.createElement('div');
          nuevoJugador.classList.add('jugador');
        
          // Crear el elemento input con el nombre del jugador
          const inputNombre = document.createElement('input');
          inputNombre.type = 'text';
          inputNombre.classList.add('nombre');
        
          // Obtener los nombres existentes de los jugadores
          const nombresExistentes = Array.from(jugadoresN.children).map(jugador => {
            return jugador.querySelector('.nombre').value;
             
          });
     
           
          // Encontrar el siguiente nombre disponible
          let nuevoNombre = "";
          for (let i = 1; i <= 4; i++) {
            const nombre = nombreBase + " " + i;
            if (!nombresExistentes.includes(nombre)) {
              nuevoNombre = nombre;
              break;
            }
          }
        
          inputNombre.value = nuevoNombre;
          inputNombre.readOnly = false; // Permitir edición del nombre
        
          // Crear el botón de eliminar
          const btnEliminar = document.createElement('button');
          btnEliminar.classList.add('eliminar');
          btnEliminar.textContent = 'Eliminar';
        
          // Agregar el evento de clic al botón de eliminar
          btnEliminar.addEventListener('click', function() {
            eliminarJugador(nuevoJugador);
          });
        
          // Agregar los elementos al nuevo jugador
          nuevoJugador.appendChild(inputNombre);
          nuevoJugador.appendChild(btnEliminar);
        
          // Agregar el nuevo jugador al contenedor
          jugadoresN.appendChild(nuevoJugador);
        
          // Actualizar el estado de los botones
          actualizarEstadoBotones();
        }
        agregarJugador()
        
        // Función para eliminar un jugador
        function eliminarJugador(jugador) {
          // Verificar si solo queda un jugador para deshabilitar el botón de eliminar
          if (jugadoresN.childElementCount === 1) {
            return;
          }
        
          // Eliminar el jugador del contenedor
          jugador.parentNode.removeChild(jugador);
        
          // Actualizar el estado de los botones
          actualizarEstadoBotones();
          
        }

        


        const jugadores = document.getElementById("jugadores")
        const numerodeJugadores = jugadores.childElementCount
        console.log(numerodeJugadores)
         
        const irAltablero=document.getElementById("irAltablero")
        irAltablero.style.display = "block"

        


    }
 
    ajustesMeta(){
        const slider = document.getElementById("slider");
        const sliderButton = document.getElementById("slider-button");
        const valueSpan = document.getElementById("value");

        const minValue = 12;
        const maxValue = 50;

        // Inicializa el valor del slider
        let sliderValue = minValue;
        valueSpan.textContent = sliderValue;

        // Evento de arrastre del botón
        sliderButton.addEventListener("mousedown", (e) => {
            e.preventDefault();

            // Registra la posición inicial del mouse
            const startX = e.clientX;
            const startLeft = sliderButton.offsetLeft;

            // Evento de movimiento del mouse
            const onMouseMove = (e) => {
                const offsetX = e.clientX - startX;
                let newLeft = startLeft + offsetX;

                // Limita la posición del botón dentro del slider
                if (newLeft < 0) {
                    newLeft = 0;
                } else if (newLeft > slider.clientWidth - sliderButton.clientWidth) {
                    newLeft = slider.clientWidth - sliderButton.clientWidth;
                }

                // Calcula el valor correspondiente al desplazamiento
                const range = maxValue - minValue;
                sliderValue = minValue + Math.round((newLeft / (slider.clientWidth - sliderButton.clientWidth)) * range);

                // Actualiza la posición del botón y el valor mostrado
                sliderButton.style.left = newLeft + "px";
                valueSpan.textContent = sliderValue;
            };

            // Evento de liberación del botón del mouse
            const onMouseUp = () => {
                // Elimina los eventos de movimiento y liberación del mouse
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
            };

            // Agrega los eventos de movimiento y liberación del mouse
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        });
       
    }

   
    capturaDatosJuego(param){
              /* PRUEBA UNITARIA */
              
              const tipoReto = document.getElementById("tipoReto").textContent
              const irAltablero = document.getElementById("irAltablero")
              const jugadores = document.getElementById("jugadores")
  
              irAltablero.addEventListener("click", ()=>{
  
                  if (jugadores.childElementCount > 0) {
                    console.log("Puedes ir al juego")

                    const jugadores = document.getElementById("jugadores");
                    const nJugad = Array.from(jugadores.children).map(nJugad => {
                     return nJugad.firstElementChild.value.trim();
                    });

                   const premioDefinido = document.getElementById("premio")
                    const nivelMeta = document.getElementById("value")


                    llevarTablero.tablero(nivelMeta.textContent)
                    llevarTablero.showTable(tipoReto)
                    llevarTablero.showPlayerNames(nJugad);

                    const zonaJugadores = document.getElementById("zonaJugadores").firstElementChild
                    zonaJugadores.style.backgroundColor = "#ff7f00"
                    
  
                    /*Abriendo funcionalidad para empezar el juego */

                  const preuba1 =  new Interactivity()
                  preuba1.runGame()
                  llevarTablero.popUpJuegoActivo()
                  
                  
                  
                  
                
                    
                    
                  }else{
                    
                    alert("Agrega un jugador")
                    

                  }
  
              })
    }



}