let result = "";
let roll;

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

let rollNumber = 0;
while (roll !== 6) {
  roll = rollDice();
  rollNumber++;
  result += `<li>Roll ${rollNumber}: ${roll}</li>`;
}

document.getElementById('target').innerHTML = `<ul>${result}</ul>`;
