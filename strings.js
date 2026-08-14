//  concatenación

let myName = "jhonatan"
let saldo = `Hola, ${myName}`+"!"


console.log(saldo)
console.log(typeof saldo)

console.log(saldo.length )
console.log(saldo[0] )
console.log(saldo[saldo.length-1] )



console.log(saldo.toUpperCase())
console.log(saldo.toLowerCase())
console.log(saldo.indexOf("Hola"))
console.log(saldo.indexOf("jhonatan"))
console.log(saldo.indexOf("Diego"))
console.log(saldo.includes("Hola"))
console.log(saldo.indexOf("jhonatan"))
console.log(saldo.indexOf(Diego))
console.log(saldo.replace("jhonatan", "don pepito"))
console.log(saldo.slice(0,10))
//console.log(saldo.slice(0, (saludo.length-1))