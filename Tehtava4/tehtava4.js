let name = prompt("Type your name here:")

let random = Math.floor((Math.random() * 4)+ 1);


if (random === 1) {
document.getElementById('target').innerHTML =`${name} you are ravenclaw`;
}
else if (random === 2) {
document.getElementById('target').innerHTML =`${name} you are Gryffindor`;
}
else if (random === 3) {
document.getElementById('target').innerHTML =`${name} you are Hufflepuh`;
}
else if (random === 4) {
document.getElementById('target').innerHTML =`${name} you are Slytherin`;
}


