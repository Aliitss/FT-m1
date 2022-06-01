'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
if (array.length < 2) return array;

  let pivot = array.shift();
  let left = [];
  let right = [];

  while (array.length) {
    let item = array.shift();
    if (item < pivot){
      left.push(item);
    }else {
      right.push(item);
    }
  }
  array = [...quickSort(left), pivot, ...quickSort(right)];
  return array;
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 2){
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, array.length);

  array = [];
  left = mergeSort(left);
  right = mergeSort(right);

    while (left.length && right.length) {      
      if(left[0] < right[0]){
      array.push(left.shift());
      }else{
      array.push(right.shift());
      }
    }
  array = array.concat(left, right);
return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
