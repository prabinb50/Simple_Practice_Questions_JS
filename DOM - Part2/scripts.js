// getAttribute
let Div = document.querySelector("div");
console.log(Div);

let idName = Div.getAttribute("id");
console.log(idName);

let paraName = document.querySelector("p");
console.log(paraName.getAttribute("class"));

// setAttribute
let heading = document.querySelector("h4");
console.log(heading.setAttribute("class", "newClass"));

// node.style
let heading2 = document.querySelector("h2");
heading2.style.backgroundColor = "Red";





