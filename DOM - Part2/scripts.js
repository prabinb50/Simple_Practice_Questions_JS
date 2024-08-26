// getAttribute
// let Div = document.querySelector("div");
// console.log(Div);

// let idName = Div.getAttribute("id");
// console.log(idName);

let paraName = document.querySelector("p");
console.log(paraName.getAttribute("class"));

// setAttribute
let heading = document.querySelector("h4");
console.log(heading.setAttribute("class", "newClass"));

// node.style
let heading2 = document.querySelector("h2");
heading2.style.backgroundColor = "Red";



// INSERRT ELEMENTS
let newButton = document.createElement("button");
newButton.innerText = "Click me";
console.log(newButton);

// 1. node.append(el)....adds at the end of node (inside)
let Div = document.querySelector("div");
Div.append(newButton);

// 2. node.prepand(el)....adds at the start of node (inside)
Div.prepend(newButton);

// 3. node.before(el)....adds before the node (outside)
Div.before(newButton);

// 4. node.after(el)....adds after the node (outside)
Div.after(newButton);


let newHeading = document.createElement("h3");
newHeading.innerText = "My name is Prabin Joshi";
console.log(newHeading);

let newH3 = document.querySelector("body");
newH3.prepend(newHeading);


// 5. node.remove()....removes the node
paraName.remove();





