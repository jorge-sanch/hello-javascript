/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a = 1+2
let b = 2-1
let c = 2*3
let d = 10/5
let e = 2**4
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(4<5)
console.log(5==5)
console.log(6>5)
console.log(0!=5)
console.log(!(6==5))
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(6<5)
console.log(9==5)
console.log(2>5)
console.log(5!=5)
console.log(!(5==5))
// 5. Utiliza el operador lógico and
console.log(5==5 &&3>2)
// 6. Utiliza el operador lógico or
console.log(5>9 || 6>8)
// 7. Combina ambos operadores lógicos
console.log(3!=="5" && 4==3 || 3==2)
// 8. Añade alguna negación
console.log(3!=="5" && 4==3 || 3==2 ||!(true))
// 9. Utiliza el operador ternario
const edad = 24
edad > 24 ? console.log("Ya estas grandecito") : console.log("Tas chiquito")
// 10. Combina operadores aritméticos, de comparáción y lógicas
let nota1 = 9;
let nota2 = 8;
let nota3 = 3;

(nota1 + nota2 + nota3) / 3 < 6 ? console.log("Reprobaste, que burro") : console.log("Felicidades, aprobaste")