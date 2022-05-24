'use strict'

function BinarioADecimal(num) { // D * 2 ** Index (formula binario a decimal)
  // tu codigo aca
let sum = 0;
for (let i = 0; i < num.length; i++){
  sum = sum + num[i] * 2 ** (num.length - 1 -i);
}
return sum;
}

function DecimalABinario(num) { // D / 2 %
  // tu codigo aca
let str = "";
while (num > 0){
  let resto = num % 2;
  str = resto + str;
  num = Math.floor(num / 2);
}
return str;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}