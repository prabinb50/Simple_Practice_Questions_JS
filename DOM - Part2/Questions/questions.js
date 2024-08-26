// Qs. Create a new button element. Give it a text “click me”, background color of red & text color
// of white.
// Insert the button as the first element inside the body tag.
let newButtonElement = document.createElement("button");
newButtonElement.innerText = "click me";

newButtonElement.style.backgroundColor = "red";
newButtonElement.style.color = "white";

document.querySelector("body").prepend(newButtonElement);



// Qs. Create a <p> tag in html, give it a class & some styling. Now create a new class in CSS and 
// try to append this class to the <p> element.
// Solve this problem using classList.
// Did you notice, how you overwrite the class name when you add a new one?
let paragraph = document.querySelector("p");

// using get and set.... this is not good bcz when we use get and set, these overwrite the class when we add a new one
// paragraph.getAttribute("class");
// paragraph.setAttribute("class", "newClass");

// so solve by using classList
paragraph.classList.add("newClass");
