"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique 
  por parámetro ("post-order", "pre-order", o "in-order"). 
  Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
this.value = value;
this.left = null;
this.right = null;
}

BinarySearchTree.prototype.insert = function(valuesToInsert){
  if (this.value > valuesToInsert){
    if (!this.left){ //inserto a la izquierda
      this.left = new BinarySearchTree(valuesToInsert);
    }else{
      this.left.insert(valuesToInsert);
    }
  } else { //inserto a la derecha
    if (!this.right){
      this.right = new BinarySearchTree(valuesToInsert);
    }else{
      this.right.insert(valuesToInsert);
    }
  }
}
BinarySearchTree.prototype.contains = function(value){
  if (this.value === value) return true;

  if (this.left?.contains(value)) return true;

  if (this.right?.contains(value)) return true;

  return false;
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order = "in-order"){
switch (order) {
  case "in-order": {
    this.left?.depthFirstForEach(cb, order)
    cb(this.value)
    this.right?.depthFirstForEach(cb, order)
      break;
  }
    case "post-order": {    
      this.left?.depthFirstForEach(cb, order)
      this.right?.depthFirstForEach(cb, order)
      cb(this.value)
      break;
    }
   
    case "pre-order":{
      cb(this.value)
      this.left?.depthFirstForEach(cb, order)
      this.right?.depthFirstForEach(cb, order)
      break;
    }
}
}
BinarySearchTree.prototype.breadthFirstForEach = function(cb, niveles = []){
  cb(this.value);
  if(this.left) {
    niveles.push(this.left)
  }
  if(this.right) {
    niveles.push(this.right)
}
if (niveles.length){ //verificamos si tenemos algo en el array
  niveles.shift().breadthFirstForEach(cb, niveles) //sacamos el primer elemento del array para comenzar un nuevo ciclo, es decir, ese primer elemento que sacamos se convierte en el nodo principal y a partir de él comenzamos a preguntar si tiene o no elementos del lado izquierdo o derecho. (se ejecutan de nuevo las primeras fases del código)
  }
}

BinarySearchTree.prototype.size = function(){
let count = 1;
if (this.left) count += this.left.size()
if (this.right) count += this.right.size()

return count;
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
