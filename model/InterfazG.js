export class InterfazG{
    constructor(){}


    tarjetas(){
      const tarjetasH = `
      <div id="tarjetasHome">
      <div id="deportivas">Deportivas</div>
      <div id="noviazgo">Noviazgo</div> 
      <div id="trivias">Trivias</div>
      <div id="verdadDesafio">Verdad o desafio</div>
      <div id="cocina">Cocina</div>
      <div id="amistad">Amistad</div>
      </div>`

     const zonaG = document.getElementById("zonaG")
     zonaG.innerHTML = tarjetasH
    }

    tablero(){
      const tarjetasHome =  document.getElementById("tarjetasHome")
      const zonaG = document.getElementById("zonaG")
      tarjetasHome.innerHTML = ""
      const tableroG = `    <div id="gameT">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">Go !!</div>
      <div class="item">6</div>
      <div class="item">7</div>
      <div class="item">8</div>
      <div class="item">9</div>
  </div>`
      //  tarjetasHome.classList.remove("tarjetasHome")
      zonaG.innerHTML = tableroG
       
    }


}