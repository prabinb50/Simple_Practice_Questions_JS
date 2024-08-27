let button1 = document.querySelector('#button1');
button1.onclick = () => {
    console.log("button was clicked");
}

let button2 = document.querySelector('#button2');
button2.ondblclick = () => {
    console.log("button was clicked 2 times");
}

let div1 = document.querySelector('#div1');
div1.onmouseover = ()=>{
    console.log("Yangma Lama");
}


// event listeners
let button3 = document.querySelector("#button3");
button3.addEventListener("click", ()=>{
    console.log("Hi!");
})

let div2 = document.querySelector("#div2");
div2.addEventListener("mouseover", ()=>{
    console.log("Hello");
})