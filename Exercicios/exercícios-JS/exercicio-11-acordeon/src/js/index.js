const itens = document.querySelectorAll(".item")
const respostas = document.querySelectorAll(".resposta")
const perguntas = document.querySelectorAll(".pergunta")

itens.forEach(function(item){
    item.addEventListener("click", function(){
    const itemAtual = document.querySelector(".ativo")
    
    if(itemAtual){itemAtual.classList.remove("ativo")}

    item.classList.add("ativo")
    })
})

