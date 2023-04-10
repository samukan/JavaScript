let dogs = [];
let result = "";
for (let i = 0; i < 6; i++) {
    let dog = prompt('Enter the name of dog ' + (i+1));
    dogs.push(dog);
}
dogs.sort().reverse();

for (const dog of dogs) {
    result += `<li>${dog}</li>`;
}

document.getElementById('target').innerHTML = `<ul>${result}</ul>`;
