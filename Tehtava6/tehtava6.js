let x = confirm('Lasketaanko neliöjuuri?');

if (x === true){
    let num = +prompt('Give number')

    if (num >=0){
        let result = Math.sqrt(num);
        document.getElementById('target').innerHTML = `Square of ${num} is ${result}`

    }
    else{
                document.getElementById('target').innerHTML = `Can't square a negative number`

    }

}
