let a = 25;
let b = 2;

console.log(a + b)
console.log(a - b)
console.log(a / b)
console.log(a % b)
console.log(a ** b)
console.log(a ** (1/b))

//Particuñlaridad

console.log("5"+1);
console.log("4"-2);
console.log('4'+1);
console.log('4'-1);
console.log(`4`-1);

console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(a++);
console.log(--a);
console.log(--a);
console.log(--a);

//operaciones de asignación

let myVariable = 2;

console.log(myVariable);
myVariable += 4
console.log(myVariable)

console.log(myVariable);
myVariable -= 4
console.log(myVariable)

console.log(myVariable);
myVariable *= 4
console.log(myVariable)

console.log(myVariable);
myVariable /= 4
console.log(myVariable)

console.log(myVariable);
myVariable **= 4
console.log(myVariable)

console.log(myVariable);
myVariable %= 4
console.log(myVariable)

console.log(5 > 10) //mayor que
console.log(5 < 10) //menor que
console.log(5 >= 10) //mayor o igual que
console.log(5 <= 10) //menor o igual que
console.log(5 == "5") //igual
console.log(5 === "5") //Estrictamente igual 
console.log(5 != "5") //desigualdad
console.log(5 !== "5") //Estrictamente desigual (Compara valor y tipo de dato)

//operadores lógicos

console.log(5 > 10 && 15 < 20) //AND
console.log(5 < 10 && 15 > 20) //AND
console.log(5 < 10 && 15 < 20) //AND
console.log(5 > 10 && 15 < 20) //AND

console.log(5 < 10 || 15 < 20) //OR
console.log(5 < 10 || 15 > 20) //OR
console.log(5 > 10 || 15 < 20) //OR
console.log(5 > 10 || 15 > 20) //OR

//operador ternario

const isRaining = false;
isRaining ? console.log("Lleva paraguas") : 
console.log("No lleva paraguas");