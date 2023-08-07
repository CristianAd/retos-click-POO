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
    deposit(ingreso){
         this.amount = this.amount + ingreso
         
    },

    withdraw(retiro){
    this.amount = this.amount - retiro
}

}
account.deposit(300)
account.deposit(150)
account.deposit(230)
console.log(account)



 
const jugador = {
    categoryGame: (nombreJuego)=>{
        document.querySelector(".mostrarRespuesta").innerHTML= nombreJuego
    },
    AgregarJugador : {
        nombre: ""
    },
    Premio: "",
    metaJuego: Number(undefined)


}

console.log(jugador.categoryGame("HOLA SOY EL TIPO DE JUEGO A"))
console.log(jugador.categoryGame("HOLA SOY EL TIPO DE JUEGO c"))
console.log(jugador.categoryGame("HOLA SOY EL TIPO DE JUEGO d"))
console.log(jugador.categoryGame("HOLA SOY EL TIPO DE JUEGO e"))
 


// CONSCTRUCTORES
//Los contructores en js son generadores de objetos con propiedades y métodos
//OBJETO:
const theUser = {
    nombre: "David",
    apellido: "Osorio",
    meta: Number(undefined),
    devolverNombre: function showName() {
        
        return `${this.nombre} ${this.apellido}`
    }
 
}
console.log(theUser.devolverNombre())
// CONSTRUCTOR: Nota los constructores en js se escriben con letra mayúscula:

function TheUsers(){
    this.name = ""
    this.apellido = ""
    this.age = 0
    this.showFullName = function () {
       return this.name + " " + this.apellido
    }
}

const user1 =  new TheUsers
user1.name = "Cristian"
user1.apellido = "Arsss"
 

console.log(user1.showFullName())

const user2 = new TheUsers
user2.name = "Kevin"
user2.age = 54
console.log(user2)
console.log(user2.showFullName())
