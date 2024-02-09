const Button=document.querySelector(".btn");
const Box=document.querySelector(".box");
let turn="X";
function changeColor(){
    if(turn==="X"){
        turn="O";
        Box.classList.add("active");
        Button.innerText="ON";
        Button.style.color="white";
    }
    else{
        turn="X";
        Box.classList.remove("active");
        Button.innerText="OFF";
        Button.style.color="black";
    }
}

Button.addEventListener("click",changeColor);