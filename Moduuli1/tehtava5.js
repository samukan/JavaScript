
let year = +prompt('Anna tarkastettava vuosi:')

if (year%4===0 && year%100!==0 || year%400===0){
    document.getElementById('target').innerHTML =`${year} is leap`;
}
else {
        document.getElementById('target').innerHTML =`${year} is not leap`;
}

