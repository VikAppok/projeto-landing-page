var SetaDireita = window.document.getElementById("seta-direita")
var Bruna = window.document.getElementById("Bruna")
var Samanta = window.document.getElementById("Samanta")
var Leonardo = window.document.getElementById("Leonardo")
var SetaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita(){
    Bruna.style ="display:none"
    Leonardo.style ="display:flex"
    SetaDireita.style ="display:none"
    SetaEsquerda.style="display:flex; margin-top:55px"
}

function RolarParaEsquerda(){
    Bruna.style ="display:flex"
    Leonardo.style ="display:none"
    SetaDireita.style ="display:flex; margin-top:55px"
    SetaEsquerda.style="display:none"
}