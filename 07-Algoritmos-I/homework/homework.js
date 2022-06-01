'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  /* Continuación del ejemplo:
  lo que va a hacer el código de forma interna es lo siguiente
  180 / 1 = 180
  180 / 2 = 90
  90 / 2 = 45
  45 / 3 = 15
  15 / 3 = 5
  5 / 5 = 1   lo cual está buscando que el numero entregado se vaya dividiendo (con resto 0) hasta que el resultado sea 1.
  // Tu código:
*/

let resultado = [1]; // ya que inicio siempre con el menor número, ya sabemos que el uno va a estar, por lo que se inicia el array con el 1 en lugar de iniciarlo vacío.
let i = 2;  // inicializamos i en 2 ya que todo num div entre 1 da como resultado el mismo num :).
while (num > 1) {   // acá condicionamos que mientras num sea mayor a 1 siga ejecutando el alg, de lo contrario, se detendrá
  if (num % i === 0) {  // 2da condición, mientras que el resto de la div sea 0 se va a ejecutar la división, de lo contrario, se saltará al paso en la linea 26
    resultado.push(i);
    num = num / i;    // asignamos el resultado obtenido para iniciar el alg de nuevo con ese nuevo num, es decir, si el resultado fue 90, num se convierte en 90 y regresa al inicio para ser dividido nuevamente.
  } else {
    i++;    // si, el if no se cumple, el código salta a este paso para poder incrementar i, es decir, si num / i no da un resto de 0, se incrementa i hasta que el numero de i sea uno que nos dé num % i === 0;
  }
}
return resultado;   //se devuelve el array solicitado en el enunciado.
}

// [3,2,5,6,1] ejemplo 2 = [2,3,5,6,1] los que se cambian en la primera vuelta serían 2 y 3, y así sigue hasta que todo quede organizado de menor a mayor.
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
let change = true;
while (change) {
  change = false;
  for(let i = 0; i < array.length; i++){
    if (array[i] > array[i + 1]){   //condiciono para saber si el ele en la posición 1 es mayor que el ele de la posición 2, si esta condición es verdad entonces...
      let aux = array[i];           //creamos una variable para extraer el valor (el mayor) para poder reasignarlo
      array[i] = array[i + 1];      // array[i] queda vacío ya que su valor fue asignado al aux, entonces se cambia su valor a array[i +1] que era menor que su valor anterior, se reasigna.
      array[i + 1] = aux;           // ver ejemplo 2
      change = true;
    }
  }
}
return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
    for (let i = 1; i < array.length; i++){
      let j = i - 1;
      let aux = array[i];
      while (j >= 0 && array[j] > aux){
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = aux;
    }
    return array;
  }


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

for (let i = 0; i < array.length; i++) {
  let min = i;
  for (let j = i + 1; j < array.length; j++) {
    if (array[j] < array[min]){
      min = j;
    }  
  }
  if (i !== min){
    let aux = array[i];
    array[i] = array[min];
    array[min] = aux;
  }
}
return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
