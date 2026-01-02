/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a,b){
    return a+b;
}
console.log(suma(8,5))
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let arrayNumeros  = [1,2,3,4,59,6,71,8,9,10]
function numeroMayor(a){
    let mayor
    let comparar = a[0]
    for( let i = 0 ; i <= a.length ; i++)
        if(comparar < a[i]){
            comparar = a[i]
        }
        return comparar
}
console.log(numeroMayor(arrayNumeros))
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function contadorDeVocales(texto){
    let vocales = 0
    for(let i = 0 ; i< texto.length; i++){
        if (texto[i] =="a"||texto[i] =="e"||texto[i] =="i"||texto[i] =="o"||texto[i] =="u"){
            vocales ++
        }
    }
    return vocales  
}
console.log(contadorDeVocales("pepe pecas"))
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let arraysDeStrings = ["string 1", "string 2", "String 3"]
function arrayMayusculas(arrays){
    let newArraya = []
    for(let i = 0; i < arrays.length ; i++){
        newArraya.push(arrays[i].toUpperCase())
    }
    return newArraya
}
console.log(arrayMayusculas(arraysDeStrings));
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function primo(numero){
    let esPrimo = false
    for (let  i = 0 ; i < esPrimo ; i --){
    }
}

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let mascotas = ["perro", "gato", "kiwi", "piedra", "conejo",2]
let frutas = ["manzana", "uva", "kiwi", "piedra", "guayaba",2]
function comparacionValores(array1, array2){
    let newArray = []
for(let i = 0; i <mascotas.length; i++){
    for(let j = 0; j< frutas.length; j++){
        if (frutas[j] == mascotas[i]){
            newArray.push(frutas[j])
            }
        }
    }
    return newArray
}
console.log(comparacionValores(mascotas,frutas))
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
let numeros = [1,2,3,4,6,5,10,9,7,7]
function sumarNumerosPares(arrayDeNumeros){
    let sumaDeNumerosPares = 0;
    for( let i = 0 ; i < arrayDeNumeros.length ; i ++){
        if (arrayDeNumeros[i] % 2 == 0) {
            sumaDeNumerosPares = sumaDeNumerosPares + arrayDeNumeros[i]
        }
    }
    return sumaDeNumerosPares
}
console.log(sumarNumerosPares(numeros))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
numeros = [1,2,3,4,5]
function numerosCuadrado(arrayNumeros){
    let newArray = []
    for(let i = 0; i < arrayNumeros.length ; i++)
        newArray.push(arrayNumeros[i]* arrayNumeros[i])
    return newArray;
}
console.log(numerosCuadrado(numeros))
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function invertirCadena(cadena){
    let newCadena = ""
    for(let i = cadena.length -1; i >= 0 ; i--){
        newCadena += cadena[i]
    }
    return newCadena;
}
console.log(invertirCadena("esto se tiene que invertir"))
// 10. Crea una función que calcule el factorial de un número dado
function factoriales(numero) {
    let resultado  = numero
    while (numero>2){
        resultado = (numero-1) * resultado
        numero--
    }
    return resultado
}
console.log(factoriales(10))