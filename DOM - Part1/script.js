// DOM MANIPULATION
// selecting with id
console.dir(document.getElementById("haha"));
console.log(document.getElementById("haha"));

// selecting with class
console.dir(document.getElementsByClassName("heading"));
console.log(document.getElementsByClassName("heading"));

// selecting with tag
console.log(document.getElementsByTagName("p"));
console.dir(document.getElementsByTagName("p"));

// query selector 
console.log(document.querySelectorAll(".heading")); // for class
console.log(document.querySelectorAll("#haha")); // for id
console.log(document.querySelectorAll("p")); // for tag


// PROPERTIES OF DOM MANIPULATION
// innerText  and innerHTML
console.log(document.querySelector("div").innerText);
console.log(document.querySelector("div").innerHTML);

// textContent
console.log(document.querySelector("h2").textContent);


