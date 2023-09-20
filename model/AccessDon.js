export class InterfazElements{
    constructor(){
        this.btnReclamar = document.getElementById("btnReclamar");
        this.nextBtn = document.getElementById("closeButton");
        this.popUpGameActive = document.getElementById("popupContainer");
       
        

    }




    generarNumAleatorio() {
        const numAleat = Math.floor(Math.random() * 12) + 1;
        return numAleat
      }




}