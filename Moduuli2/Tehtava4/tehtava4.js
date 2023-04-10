let numbers = [];
let input = 1;

while (input != 0) {
  input = parseInt(prompt("Enter a number (enter 0 to stop): "));
  if (input != 0) {
    numbers.push(input);
  }
}

numbers.sort(function(a, b) {
  return b - a;
});

console.log("Numbers you entered from largest to the smallest:");
console.log(numbers);
