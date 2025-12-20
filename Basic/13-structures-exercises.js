/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animales = []
animales.push("perro")
animales.push("gato")
animales.push("conejo")
animales.push("tortuga")
animales.push("toro")
console.log(animales)


// 2. Añade dos más. Uno al principio y otro al final
animales.push("ornitorrinco")
animales.unshift("calamar")
console.log(animales)
// 3. Elimina el que se encuentra en tercera posición
animales.splice(2,0)
console.log(animales)
// 4. Crea un set que almacene cinco libros
let libros = new Set();
libros.add("libro 1");
libros.add("libro 2");
libros.add("libro 3");
libros.add("libro 4");
libros.add("libro 5");

console.log(libros)

// 5. Añade dos más. Uno de ellos repetido
libros.add("libro 6")
libros.add("libro 7")
console.log(libros)
// 6. Elimina uno concreto a tu elección
libros.delete("libro 5")
console.log(libros)
// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map([
    [1, "enero"],
    [2, "febrero"],
    [3, "marzo"],
    [4, "abril"],
    [5, "mayo"],
    [6, "junio"],
    [7, "julio"],
    [8, "agosto"],
    [9, "septiembre"],
    [10, "octubre"],
    [11, "noviembre"],
    [12, "diciembre"],
])
console.log(meses)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(meses.has(5))
console.log(meses.get(5))
// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set("verano", ["junio", "julio", "agosto"])
console.log(meses.get("verano"))
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let array1 = [1,2,3,4,5]
let setArray = new Set(array1);
let map1 = new Map([["set", setArray]])
console.log(map1)