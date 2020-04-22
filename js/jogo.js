listaTem = []
listaLetras = []
listaLetras.push(document.querySelectorAll(".escondida"))
novaLista = []

let pontuacaoInicial = 6

atualizaPontuacao(pontuacaoInicial)

document.querySelectorAll(".alfabeto button").forEach(letraAlfabeto => {
    
    letraAlfabeto.addEventListener("click", () => {
        document.querySelector(`#letra-${letraAlfabeto.value}`).setAttribute("disabled", true)
        document.querySelector(`#letra-${letraAlfabeto.value}`).classList.add("selecionado")

        listaSelecionado = []
        listaNaoSelecionado = []
    
        listaSelecionado = document.querySelectorAll(".selecionado")
    
        listaNaoSelecionado = document.querySelectorAll("button:not(.selecionado)")

        verificaLetra(palavra, letraAlfabeto.value)
        
        listaTem.forEach(letra => {
            document.querySelectorAll(`.letra-${letra}`).forEach(encontrada => {
                encontrada.classList.remove("escondida")
            })
        })
        novaListaSelecionado = []

        listaSelecionado.forEach(item => {
            novaListaSelecionado.push(item.value)
        })

        document.querySelector(".erros").innerText = validarDiferenca(novaListaSelecionado, novaLista).join(" - ")
        
        atualizaPontuacao(pontuacaoAtual);
        verificaFim();
    })
})

function verificaLetra(palavra, letra) {
    palavra.forEach(letraPalavra => {
        if(letraPalavra == letra){
            listaTem.push(letra)
            novaLista = listaTem.filter(function(este, i){
                return listaTem.indexOf(este) === i
            })
        }
    })
    novaLista.forEach(item => {
        console.log(`Encontrado: ${item}`)
    })
    console.log(novaLista.length)
    listaSelecionado.forEach(item => {
        console.log(`Selecionado: ${item.value}`)
    })
    console.log(listaSelecionado.length)
    console.log(`${pontuacaoInicial} - (${listaSelecionado.length} - ${novaLista.length})`)
    pontuacaoAtual = pontuacaoInicial - (listaSelecionado.length - novaLista.length)
    console.log(`Atualmente com ${pontuacaoAtual}`)
}
function verificaFim() {
    listaFaltantes = document.querySelectorAll(".escondida")
    if(listaFaltantes.length == 0){
        document.querySelector(".palavra").style = "color: green;"
        setTimeout(() => {
            alert(`
Parabéns!!
            
Encontrado: ${sorteada.palavra}
            
Pontos: ${pontuacaoAtual}
`)
            alert("Recarregando para uma nova partida")
            document.location.reload(true);
        }, 2000)
    }
}

function validarDiferenca(diferenciado, comparativo) {

    var diferenca = diferenciado.filter(function (element, index, array) {
        if(comparativo.indexOf(element) == -1)
            return element;
    });

    return diferenca
}