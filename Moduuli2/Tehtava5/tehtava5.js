let numbers = [];
let input;

while (true) {
  input = parseInt(prompt("Enter a number: "));
  if (numbers.includes(input)) {
    console.log(`Number ${input} has already been given!`);
    break;
  } else {
    numbers.push(input);
  }
}

numbers.sort(function(a, b) {
  return a - b;
});

console.log("The numbers you entered in ascending order:");
console.log(numbers);
