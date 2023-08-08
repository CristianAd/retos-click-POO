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

//Objetos vacíos

const obj1 = new Object(345)

console.log(obj1)
const obj2 = {}
console.log(obj2.constructor === Object)

//Accediendo a las claves y valores 

const Coche = {
    modelo: "",
    año: "",
    precio: 10000,
    mostrarMolelo: function() {
        return modelo
         
    }

}

console.log(Object.keys(Coche))
Coche.modelo = "Crevrolet"
console.log(Object.values(Coche))

// ASIGNANDO VALORES AL OBJETO QUE LO CONTIENE

const Ciudad = {
    detalles: function() {
        this.name = "norte",
        this.geo = "",
        this.habitantes = 1349432
   }
}


const lugar1 = new Ciudad.detalles()

console.log(lugar1)
console.log(Ciudad)

/// CREAR MÉTODOS A PARTIR DE CONSTRUCTORES

function Gorra() {
    this.marca = "Tomy",
    this.precio = 5,
    this.color = "grey"
    this.marcaPrecio =  function() {
        return this.marca + this.precio
    }
}


const gorra1 = new Gorra
console.log(gorra1.marcaPrecio())

gorra1.estado = function(){
    return "Estamos accediendo a" + this.color
}
console.log(gorra1.estado())


gorra1.marcaPrecioDesdeFuera = function() {
    return "La propiedad marcaPrecio del constructor es" + this.marcaPrecio()
    
}
console.log(gorra1.marcaPrecioDesdeFuera())

// Repaso contructor:

function Casa() {
    this.techo = "zinc"
}

const vivienda = new Casa
console.log(vivienda.techo)

const person2 = {}
console.log(person2.constructor)


const parte1 = new Object("Es la primera parte")

parte1.otraMitad = function() {
    return this + "segunda parte"
}

console.log(parte1.otraMitad())

// 

const makind = {
    Person: function () {
        "use strict"
        this.name =  ""
        this.lasName = ""
    }
}
const sinNew = makind.Person()
console.log(sinNew)
console.log(makind)

// Modiicando Objetos ya creados

const  s = new String("hola soy el objeto texto")

String.prototype.cualquieCosa = function () {
    return this + "test"
}

console.log(s.cualquieCosa())