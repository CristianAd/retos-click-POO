const zonaJugadores= document.querySelector("zona-jugadores")
const generadorJugador= document.getElementById("Njugador")






const user = {
    nombre: "David",
    premio: "Osorio",
    meta: Number(undefined),
    devolverNombre: function showName() {
        
        return this.nombre + " " + this.premio
    }

}



console.log(user.devolverNombre())

const account = {
    numero: 12346789,
    amount: 100,
    deposit(){
         this.amount = this.amount + 100
         
    }
}
account.deposit()
account.deposit()
account.deposit()
console.log(account)