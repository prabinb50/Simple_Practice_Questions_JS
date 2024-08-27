let changeMode = document.querySelector("button");
let currentMode = "light";
changeMode.addEventListener("click", ()=>{
    if(currentMode === "light"){
        currentMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        currentMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
})