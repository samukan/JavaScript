let x = +prompt("Montako kertaa heitetään noppaa?")



let total = +0;

for (let i=0; i < x; i++ ) {

    total += Math.floor((Math.random() * 6)+ 1);

}

document.getElementById('target').innerHTML = `You rolled ${total}`;



