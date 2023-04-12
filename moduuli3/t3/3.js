'use strict';

const targetElement = document.getElementById("target");

const names = ["John", "Paul", "Jones"];

targetElement.innerHTML = `
  <li>${names[0]}</li>
  <li>${names[1]}</li>
  <li>${names[2]}</li>
`;
