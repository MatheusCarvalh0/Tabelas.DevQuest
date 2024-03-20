const inputText = document.querySelectorAll(".input-text")

inputText.forEach(input => {
    input.addEventListener("change",function(){
        if (input.value !== "") {
            input.classList.add("green-border")
        } else {
            input.classList.remove("green-border")
        }
    })
})