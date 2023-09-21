
export class InterfazG{
    constructor(){}




    tablero(param){
      const tarjetasHome =  document.getElementById("tarjetasHome")
      const zonaG = document.getElementById("zonaG")
      tarjetasHome.innerHTML = ""
      const tableroG = `   

      <div class="ruleta">
      <div class="area-superior-juego">
                  <div class="metaJuego">La meta es: <span id="metaJuego">${param}</span> puntos </div>
                  <div id="zonaJugadores">

                  </div>
                      
                    
                </div>
                <div class="topZone"></div>
                <div class="zonaMedia">
                    <div class="leftZone"></div>
                    <div style="display: flex;justify-content: center; flex-direction: column; align-items: center; height: 90%;">
                          <h2 style="margin-top: 0; color: aliceblue;" id="elTitulo">TIPO JUEGO</h2>
                            <button id="playGame">Go!!</button>

                        </div>
                   
                    <div class="rigthZone"></div>
                </div>
                <div class="bottomZone"></div>
                <div class="menuBtnHomeZone">
                <div> <input class="homeBtn" type="button" onclick="window.location.href='index.html'" value="HOME"> </div>
                </div>
      </div>
                        `
      //  tarjetasHome.classList.remove("tarjetasHome")
      zonaG.innerHTML = tableroG
       
    }

    premio(param){
      const elPremio = document.querySelector(".elPremio")
        if (param.trim() === "") {
          elPremio.textContent = `Pídele un helado a tu mejor amig@`
        }else{
          elPremio.textContent = `${param}`
        }
    }

     

    showTable(param){
      const topZone = document.querySelector(".topZone")
      const leftZone = document.querySelector(".leftZone")
      const rigthZone = document.querySelector(".rigthZone")
      const bottomZone = document.querySelector(".bottomZone")
      
      
      const contenedorCuadros1 = document.createElement("div")
              contenedorCuadros1.className = "contenedorCuadros1"
      topZone.appendChild(contenedorCuadros1)
      
      for (let i = 0; i < 3; i++) {
          const cuadroA = document.createElement("div")
          cuadroA.className = "cajasA"
          cuadroA.textContent = i+1
          contenedorCuadros1.appendChild(cuadroA)
      
      }
      
      const contenedorCuadros2 = document.createElement("div")
              contenedorCuadros2.className = "contenedorCuadros2"
      rigthZone.appendChild(contenedorCuadros2)
      
      for (let i = 0; i < 3; i++) {
          const cuadroB = document.createElement("div")
          cuadroB.className = "cajasB"
          cuadroB.textContent = (i+3)+1
          contenedorCuadros2.appendChild(cuadroB)
      }
      
      const contenedorCuadros3 = document.createElement("div")
              contenedorCuadros3.className = "contenedorCuadros3"
      bottomZone.appendChild(contenedorCuadros3)
      
      for (let i = 0; i < 3; i++) {
          const cuadroC = document.createElement("div")
          cuadroC.className = "cajasC"
          cuadroC.textContent = (i - 9)*-1
          contenedorCuadros3.appendChild(cuadroC)
      }
      
      const contenedorCuadros4 = document.createElement("div")
              contenedorCuadros4.className = "contenedorCuadros4"
      leftZone.appendChild(contenedorCuadros4)
      
      for (let i = 0; i < 3; i++) {
          const cuadroD = document.createElement("div")
          cuadroD.className = "cajasD"
          cuadroD.textContent = (i - 12)*-1
          contenedorCuadros4 .appendChild(cuadroD)
      }

      document.getElementById("elTitulo").innerHTML = param
    }

    showPlayerNames(param){
      param.forEach(jugador => {
        const players = document.createElement('div'); // Crea el elemento "players"
        players.classList.add('players'); // Agrega la clase "players" al elemento
      
        const divJugador = document.createElement('div');
        divJugador.textContent = jugador;
      
        const losPuntos = document.createElement('div');
        losPuntos.classList.add('losPuntos')
        losPuntos.textContent = 0
      
        players.appendChild(divJugador); // Agrega divJugador como hijo de players
        players.appendChild(losPuntos); // Agrega losPuntos como hijo de players
      
        zonaJugadores.appendChild(players); // Agrega players como hijo de zonaJugadores
      });
    }




    showGanador(){
   
          
    }


}