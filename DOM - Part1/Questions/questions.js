// 1 number.............................
let updateText = document.querySelector("h2");
console.log(updateText.innerText);

updateText.innerText = updateText.innerText + " from Apna College students";


// 2 number.................................
let box = document.querySelectorAll(".box");
console.log(box);

// one way of solving 
// box[0].innerText = "hello 1";
// box[1].innerText = "hello 2";
// box[2].innerText = "hello 3";

// another way of solving by using for loop
for(let i = 0; i < box.length; i++){
    box[i].innerText = "This is box number " + (i + 1);
}







