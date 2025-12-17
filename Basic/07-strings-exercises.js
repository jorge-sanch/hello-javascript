/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let cadena1 ="Cadena uno"
let cadena2 = "cadena dos"
console.log(`Concatenacion de la ${cadena1} con la ${cadena2}`)
// 2. Muestra la longitud de una cadena de texto
console.log(`La longitud de la cadena 1 es de ${cadena1.length}`)
// 3. Muestra el primer y último carácter de un string
console.log(`La primera letra de la cadena 1 es: ${cadena1[1]}`)
console.log(`La ultima letra de la cadena 1 es: ${cadena1[9]}`)
// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena1.toLocaleUpperCase())
console.log(cadena2.toLocaleLowerCase())
// 5. Crea una cadena de texto en varias líneas
let mensaje = `Esto es
un mensaje
escrito en
varias lineas`

console.log(mensaje)
// 6. Interpola el valor de una variable en un string
console.log(`Esta es la interpolcaion de la cadena 1 ${cadena1} con el mensaje: ${mensaje}`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(cadena1.replace(" ", "-"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(cadena1.includes("uno"))
// 9. Comprueba si dos strings son iguales
cadena1 == cadena2 ? console.log("son iguales") : console.log("no son iguales")
console.log(cadena1 == cadena2)
// 10. Comprueba si dos strings tienen la misma longitud
cadena1.length == cadena2.length ? console.log("cadena 1 y cadena 2 tienen la misma longiud") : console.log("los strings no tienen la misma longitud")