/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let jorge = {
    comer: 2,
    dormir: 12,
    trabajar: 8
}
// 2. Accede y muestra su valor
console.log(jorge)
// 3. Agrega una nueva propiedad
jorge.jugar = 3
console.log(jorge.jugar)
// 4. Elimina una de las 3 primeras propiedades
delete jorge.trabajar
console.log(jorge)
// 5. Agrega una función e invócala
jorge.aprender = function aprender() {
    let leer = 1
    let escribir = 1

}
console.log(jorge.aprender())
// 6. Itera las propiedades del objeto
for(let i in jorge ){
    console.log(`Jorge tiene que: ${i}, durante ${jorge[i]} horas al dia`)
}
// 7. Crea un objeto anidado
let sujeto = {
    datos:{
        nombres: "Jorge Luis",
        apellidos : "Sanchez Jimenez",
        edad: 25
    },
    caracteristicas : {
        altura: 1.80,
        peso :80,
        complexion : "delgada",
        imc : function (peso, altura){
            return this.peso/ this.altura * this.altura
        }
    },
    nacimiento: {
        pais: "Mexico",
        estadoOProvincia: "Estado de Mexico",
        vivo : true
    },
    estado : "soltero",
    ocupacion : {
        ocupacion: "estudiante",
        lugar: "escuela",
        nomina : false
    },
    recidencia : {
        pais: "mexico",
        estadoOProvincia: "Estado de Mexico",
        municipio : "Chimalhucan"
    }
    }

console.log(sujeto)

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(`Este es ${sujeto.datos.nombres} ${sujeto.datos.apellidos}, es un ${sujeto.ocupacion.ocupacion} de ${sujeto.datos.edad} años de edad. ${sujeto.nomina ?  "tiene empleo muy bien remunerado" : "No chambea, asi que es pobre"}`)

// 9. Comprueba si los dos objetos creados son iguales
let senhorCaraDePapa = {
    edad: "2-7",
    empresa: "hasvro",
    venta: true
}
let maxSteel = {
    edad : "6-12",
    empresa : "matel",
    venta : false
}
let senhioraCaraDePapa = {
    edad: "2-7",
    empresa: "hasvro",
    venta: true
}
// *Esta forma de comprobacion no funciono
// const claves1 = Object.keys(senhioraCaraDePapa);
// const claves2 = Object.keys(senhorCaraDePapa);
// console.log(claves1 == claves2 ? "son iguales": "no son iguales")
// console.log(claves1, claves2)

let valores1
let valores2
let valores3

for(let key in senhioraCaraDePapa){

    valores1 = valores1 + (`${key}: ${senhorCaraDePapa[key]}, `)
}
for(let key in senhioraCaraDePapa){

    valores2 = valores2 + (`${key}: ${senhioraCaraDePapa[key]}, `)
}
console.log(valores1 == valores2)
// 10. Comprueba si dos propiedades diferentes son iguales

for(let key in maxSteel){

    valores3 = valores3 + (`${key}: ${maxSteel[key]}, `)
}
console.log(valores3 == valores1)