/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
let num = 0
while (num <= 20 ) {
    console.log(num)
    num++;
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0;
for(let i = 1; i <=100 ; i++){
    suma = suma + i
}
console.log(suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
let i = 0;
suma = 0;
while(i<=50){
    if (i%2 == 0){
        suma = suma + i
    }
    i++
}
console.log(suma)

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["Jorge","Luis","Sanchez","Jimenez"]
for(i = 0; i < nombres.length; i++){
    console.log(`El nombre es: ${nombres[i]}`)
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadena = "faciles"
const vocales = ["a", "e", "i", "o", "u"]
let numVocales = 0
for(i = 0; i < cadena.length; i++){
    for(let j = 0; j < vocales.length; j++){
        if(cadena[i]==vocales[j])
            numVocales +=1
    }
}
console.log(`El numero de vocales de la cadena es:${numVocales}`)
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numerosArray = [2,4,6]
i = 0;
let multiplicacion = 1
while(i<numerosArray.length){

    multiplicacion = multiplicacion * numerosArray[i]
    i++
} 
console.log("la multiplicacion de la cadena de numeros es:", multiplicacion)
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for(i = 0; i<=10; i++){
    console.log(`5 * ${i} = ${ 5 * i}`)
}
// 8. Usa un bucle para invertir una cadena de texto
cadena = "Cadena a invertir"
let cadenaInvertida = ""
for(i = cadena.length -1 ; i > -1 ; i--){
    cadenaInvertida += cadena[i]
}
console.log(cadenaInvertida)
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let a = 0;
let b = 1;
let c = 0;
for( i = 0; i <= 10; i ++){
    console.log(a)
    c = a+b;
    a = b
    b = c
    }
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
numerosArray = [3,5,16,4,31,20,4,16]
let numerosMayoresde10 = []
for(i =  0; i <= numerosArray.length; i++){
    if(numerosArray[i]>=10){
        numerosMayoresde10.push(numerosArray[i])
    }
}
console.log(numerosMayoresde10)

// 10. Dado un array de números, usa un bucle que sume solo los numeros mayoreso  iguales de 10

numerosArray = [3,5,16,4,31]
let sumaNumerosMayoresA10 = 0
for( i =  0 ; i <= numerosArray.length ; i++){
    if (numerosArray[i] >= 10){
        sumaNumerosMayoresA10 =  sumaNumerosMayoresA10 + numerosArray[i]
    }
}
console.log(sumaNumerosMayoresA10)