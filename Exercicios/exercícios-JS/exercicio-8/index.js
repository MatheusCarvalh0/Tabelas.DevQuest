let box = document.getElementById("caixa").addEventListener("click", function(){
   if (this.className == "preta") {
        this.classList.remove("preta")
        this.classList.add("azul")
   } else if(this.className == "azul") {
        this.classList.remove("azul")
        this.classList.add("preta")
   }
})