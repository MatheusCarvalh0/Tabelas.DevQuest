const blueBox = document.querySelector(".azul")
const changeBtn = document.getElementById("change-color-btn")

changeBtn.addEventListener("click",changeColor)

function changeColor(){
    blueBox.classList.remove("azul")
    blueBox.classList.add("amarelo")
}