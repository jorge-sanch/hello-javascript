/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Luis Sanchez"
if(nombre = "Luis Sanchez"){
    console.log(true)
}else{
    console.log(false)
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let password = 1234;
if(password = 1234){
    console.log("Clave de acceso correcta")
}else{
    console.log("Clave de acceso incorrecta")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
const number = 0
if(number == 0){
    console.log("El numero es cero")
}else if(number < 0 ){
    console.log("El numero es negativo")
}else{
    console.log("El numero es positivo")
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 10;
if(edad >= 18){
    console.log("Eres mayor de edad, ya puedes votar")
}else{
    console.log(`aun no puedes votar, te faltan ${18-edad} años`)
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let rango = edad < 18 ? "adulto" : "menor"
console.log(rango)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 2
switch(mes){
    case 1:
        mes = "Enero"
        break
    case 2:
        mes = "Febrero"
        break
    case 3:
        mes = "Marzo"
        break
    case 4:
        mes = "Abri"
        break
    case 5:
        mes = "Mayo"
        break
    case 6:
        mes = "Junio"
        break
    case 7:
        mes = "Julio"
        break
    case 8:
        mes = "Agosto"
        break
    case 9:
        mes = "Septiembre"
        break
    case 10:
        mes = "Octubre"
        break
    case 11:
        mes = "Noviembre"
        break
    case 12:
        mes = "Diciembre"
        break
    default:
        mes = NaN
}

console.log(mes)
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let dias

switch(mes){
    case "Enero":
        dias = 31
        break
    case "Febrero":
        dias = 28
        break
    case "Marzo":
        dias = 31
        break
    case "Abril":
        dias = 30
        break
    case "Mayo":
        dias = 31
        break
    case "Junio":
        dias = 30
        break
    case "Julio":
        dias = 31
        break
    case "Agosto":
        dias = 31
        break
    case "Septiembre":
        dias = 30
        break
    case "Octubre":
        dias = 31
        break
    case "Noviembre":
        dias = 30
        break
    case "Diciembre":
        dias = 31
        break
    
}

console.log(`El mes de ${mes} tiene ${dias} dias!!`)
