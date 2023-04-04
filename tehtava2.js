let people = +prompt('Anna ihmisten lukumäärä')
let nimet = [];
let result = "";
for (let i = 0; i < people; i++) {
    let human = prompt('Anna nimi')
    nimet.push(human);

}
nimet.sort();

for (const nimi of nimet) {
    result += `<li>${nimi}</li>`;
}


document.getElementById('target').innerHTML = `${result}`;