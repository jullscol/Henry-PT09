'use strict'

function BinarioADecimal(num) {
  
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
     sum += +num[i] * 2 ** (num.length - 1 - i);
  }
  return sum;


}

function DecimalABinario(num) {
  // tu codigo aca
  let num1 = num;
    let binary = (num1 % 2).toString();
    for (; num1 > 1; ) {
        num1 = parseInt(num1 / 2);
        binary =  (num1 % 2) + (binary);
    }
    console.log(binary);
}




module.exports = {
  BinarioADecimal,
  DecimalABinario,
}