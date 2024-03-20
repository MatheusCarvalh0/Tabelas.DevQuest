const imagens = document.querySelectorAll(".slide")
const setaEsquerda = document.getElementById("seta-esquerda")
const setaDireita = document.getElementById("seta-direita")

let imagemAtual = 0

setaDireita.addEventListener("click",function(){
    if(imagemAtual === imagens.length-1){
        return;
    }

    imagemAtual++
   
    esconderImagemAberta()
    mostrarImagem()
    mostrarOuEsconderSetas()
})

setaEsquerda.addEventListener("click",function(){
    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--

    esconderImagemAberta()
    mostrarImagem()
    mostrarOuEsconderSetas()
})

function mostrarImagem() {
    imagens[imagemAtual].classList.add("mostrar")
}

function esconderImagemAberta(){
    const imagemAberta = document.querySelector(".mostrar")
    imagemAberta.classList.remove("mostrar")
}

function mostrarOuEsconderSetas(){
    const naoEhAPrimeiraImagem = imagemAtual !== 0
    if (naoEhAPrimeiraImagem) {
        setaEsquerda.classList.remove("opacidade")
    }else{
        setaEsquerda.classList.add("opacidade")
    }

    const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length -1
    if (chegouNaUltimaImagem) {
        setaDireita.classList.add("opacidade")
    } else {
        setaDireita.classList.remove("opacidade")
    }
}