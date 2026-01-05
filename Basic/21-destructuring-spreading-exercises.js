/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let array1 = [1,2,3,4]

let [valor1, valor2] = array1
console.log(valor1)
console.log(valor2)
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let array2 = [5,6]
let [valor3 = 0, valor4 = 0, valor5 = 0] = array2
console.log(valor3)
console.log(valor4)
console.log(valor5)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let impresora = {
    imprimir : "hojas de papel",
    escanea : "documentos",
    copias: "blanco y negro"
}
let {imprimir, escanea} = impresora

console.log(imprimir)
console.log(escanea)
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {copias} = impresora
let sacarCopias = copias
let imprimirDocumento = imprimir

console.log(sacarCopias, imprimirDocumento, typeof(sacarCopias))
// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let comidasTipicas = {
    mexico : {
        sopes : ["masa", "frijol", "queso", "salsa"],
        enchiladas : ["toritlla", "salsa", "queso", "crema", "proteina"],
        pambazo : ["pan", "salsa", "guisado", "lechuga", "queso", "crema"]
    },
    estadosUnidos : {
        pizza : ["masa", "salsa", "peperoni"],
        hamburguesa : ["carne", "pan", "verdura"],
        kfc : ["pollo", "bisquets", "pure", "ensalada"]
    }
}
let {mexico:{sopes}} = comidasTipicas

let {estadosUnidos:{pizza}} = comidasTipicas
console.log(sopes)
console.log(pizza)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let roomiesMujeres = ["ana", "pamela"]
let roomiesHombres =  ["salvador", "aletaih"]

let roomies = [...roomiesMujeres, ...roomiesHombres]
console.log(roomies)

// 7. Usa propagación para crear una copia de un array
let roomies2 = [...roomies]
console.log(roomies2)
// 8. Usa propagación para combinar dos objetos en uno nuevo
let cocina = {
    chef : "el que cocina",
    pinche : "ayudante del chef",
    lavaPlatos : "lava los trastes",
    mesero : "atiende a las gentes"
}
let otros = {
    RH: "contratan empleados",
    cuenta: "pagan a los empleados",
    recepcionista: "indica a las gentes a llegar a sus mesas",
    gerente: "esta, pero nadie sabe porque ni cual es su funcion"
}
let personal = {...cocina, ...otros}
console.log(personal)
console.log(typeof(personal))
// 9. Usa propagación para crear una copia de un objeto
let sucursal2personal = {...personal}
console.log(`los roles para abrir la siguiente sucursal son:`)
console.log(sucursal2personal)
// 10. Combina desestructuración y propagación

let array5 = [10,11,12]
let array6 = [13,14,15]
let array7 = [16,17,18]
//*propagacion
let arraytotal = [...array5, ...array6, ...array7]
console.log(arraytotal)
//* desestructuracion
let [valor10, ,valor12, , , valor15, , ,valor18] = arraytotal

console.log(valor10)
console.log(valor12)
console.log(valor15)
console.log(valor18)
// console.log(valor11) --> estos ultimo no van a salir, ya que no los definimos
// console.log(valor13)