listaBody = []

//Seção pontuação

listaBody.push(`
<h1>Jogo da Forca</h1>
<section class="secao-pontos">
<p>Pontos: <span class="pontos">0</span></p>
</section>
`)

function atualizaPontuacao(pontuacao) {
    document.querySelector(".pontos").innerText = pontuacao

    if(pontuacao < 1){
        alert("Perdeu!")
        document.querySelectorAll(".alfabeto button").forEach(button => {
            button.setAttribute("disabled", true)
        })
        document.querySelectorAll(".escondida").forEach(letra => {
            letra.style = "color: red; font-weight: bold;"
        })
        document.querySelector(".palavra").style = "color: red;"
        setTimeout(function(){
            alert("Recarregando para uma nova partida")
            document.location.reload(true);
        }, 10000)
    }
}


//Seção de palavra sorteada
listaPalavra = []

palavra.forEach(letra => {
    listaPalavra.push(`<p class="letra-${removeAcento(letra)} escondida">${letra}</p>`)
})

function removeAcento (text)
{       
    text = text.toLowerCase();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    return text;                 
}

listaBody.push(`
<section class="secao-palavra">
<div class="palavra">
${listaPalavra.join("")}
</div>
<p>Dica: ${dica}</p>
</section>
`)

//Seção de letras selecionáveis
listaAlfabeto = []

alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t","u","v","w","x","y","z"]

alfabeto.forEach(letra => {
    listaAlfabeto.push(`<button id="letra-${letra}" value="${letra}">${letra}</button>`)
});

listaBody.push(`
<section class="secao-alfabeto">
<div class="alfabeto">
${listaAlfabeto.join("")}
</div>
<p class="erros"></p>
</section>    
`)

//Rodapé

listaBody.push(`
<footer>
    <p>Sugestões ou problemas:</p>
    <nav>
        <a href="https://github.com/renatobmps/forca/" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="http://api.whatsapp.com/send?phone=5511947689391" target="_blank" rel="noopener noreferrer">WhatsApp</a>
    </nav>
</footer>
`)

document.body.innerHTML = listaBody.join("")