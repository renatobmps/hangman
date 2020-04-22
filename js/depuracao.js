function depurar() {
    window.open(document.URL)
    
    listaNova = []
    
    palavras.forEach(palavra => {
        listaNova.push(`
        <div style="display: flex; align-items: center; justify-content: space-between;" class="${palavra.palavra}">
            <p>Categoria: ${palavra.dica} | </p>
            <p>${palavra.palavra}</p>
            <div>
                <label for="${palavra.dica}-${palavra.palavra}-sim">S</label>
                <input type="radio" id="${palavra.dica}-${palavra.palavra}-sim" class="sim">
                <label for="${palavra.dica}-${palavra.palavra}-nao">N</label>
                <input type="radio" id="${palavra.dica}-${palavra.palavra}-nao" class="nao">
            </div>
        </div>
        `)
    })
    
    document.body.innerHTML = `
    ${listaNova.join("")}
    <h2>Sim</h2>
    <ul class="ul-sim" style="padding: 0; list-style: none;">
        
    </ul>
    <h2>Não</h2>
    <ul class="ul-nao" style="padding: 0; list-style: none;">
        
    </ul>
    `
    
    listaSim = []
    listaNao = []
    
    document.querySelectorAll(".sim").forEach(item => {
        item.addEventListener("click", function(){
            console.clear()
            listaSim.push(this.parentElement.parentElement.classList)
            this.parentElement.parentElement.style = "display: none;"
            console.log("-- Sim --")
            listaSim.forEach(item => {
                console.log(item.value)
            })
            console.log("-- Não --")
            listaNao.forEach(item => {
                console.log(item.value)
            })
            let li = document.createElement("li");
            li.innerText = this.parentElement.parentElement.classList
            document.querySelector(".ul-sim").appendChild(li)
        })
    })
    
    document.querySelectorAll(".nao").forEach(item => {
        item.addEventListener("click", function(){
            console.clear()
            listaNao.push(this.parentElement.parentElement.classList)
            this.parentElement.parentElement.style = "display: none;"
            console.log("-- Sim --")
            listaSim.forEach(item => {
                console.log(item.value)
            })
            console.log("-- Não --")
            listaNao.forEach(item => {
                console.log(item.value)
            })
            let li = document.createElement("li");
            li.innerText = this.parentElement.parentElement.classList
            document.querySelector(".ul-nao").appendChild(li)
        })
    })
}