/*
Ejercicio 2 Arreglar bug
Nuestro cliente está intentando calcular el promedio de una lista de números pero nos dice que no funciona. No nos da el error, solo este código que es el que tiene en producción. Para este ejercicio tenemos que crear un archivo llamado bug.js con la solución.
*/

const calcularPromedio = (numeros) => {
  let sumaTotal = 0;

  /* 
    Corregimos la condicion del bucle for.
    La variable i debe ser menor a la longitud del array, caso contrario i tendrá un valor undefined, y la suma de un número con un undefined es NaN (Not a Number)
    */

  for (let i = 0; i < numeros.length; i++) {
    sumaTotal += numeros[i];
  }
  const promedio = sumaTotal / numeros.length;
  return promedio;
};
const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);
