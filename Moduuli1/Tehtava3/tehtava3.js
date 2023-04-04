const num1 = +prompt("Anna luku:")
const num2 = +prompt("Anna toinen luku:")
const num3 = +prompt("Anna kolmas luku:")

let sum = num1 + num2 + num3;
let prod =  num1 * num2 * num3;
let div = (num1 + num2+ num3) /3;

document.getElementById('target').innerHTML = `${sum}, ${prod}, ${div}`;
