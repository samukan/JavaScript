let result = "";
let rollCount = 0;
let roll;

function rollDice(maxSides) {
  return Math.floor(Math.random() * maxSides) + 1;
}

function rollDiceLoop() {
  let maxSides = document.getElementById("sides").value;
  let rollsList = document.getElementById("rolls");
  rollsList.innerHTML = "";

  while (roll !== parseInt(maxSides)) {
    roll = rollDice(parseInt(maxSides));
    rollCount++;
    result += `<li>Roll ${rollCount}: ${roll}</li>`;
  }

  rollsList.innerHTML = result;
}

document.getElementById('target').innerHTML = `<label for="sides">Number of sides:</label>
<input type="number" id="sides" name="sides">
<button onclick="rollDiceLoop()">Roll the dice</button>
<ul id="rolls"></ul>`;
