//Função para sortear
function sorteio(array) {
    return array[Math.floor(Math.random() * ((array.length - 1) - 0 + 1))]
}
//Gerar palavra e adicionar a tela
let sorteada = sorteio(palavras)
let palavra = sorteada.palavra.toLowerCase().split("")
let dica = sorteada.dica