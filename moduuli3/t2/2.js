const targetElement = document.getElementById("target");

const ulElement = document.createElement("ul");

const liElement1 = document.createElement("li");
liElement1.textContent = "First item";
ulElement.appendChild(liElement1);

const liElement2 = document.createElement("li");
liElement2.textContent = "Second item";
liElement2.classList.add("my-item");
ulElement.appendChild(liElement2);

const liElement3 = document.createElement("li");
liElement3.textContent = "Third item";
ulElement.appendChild(liElement3);

targetElement.appendChild(ulElement);
