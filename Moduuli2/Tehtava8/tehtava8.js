function concat(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  }
  
  const names = ["Johnny", "DeeDee", "Joey", "Marky"];
  const concatenated = concat(names);
  document.getElementById("target").innerHTML = concatenated;
  