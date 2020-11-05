class ForcaController{

    constructor(){

        this.base = palavras
        this.listaPalavras = new ListaPalavras()
        this.itera()

        console.log(this.acerto(this.sorteia(this.listaPalavras.lista)))

        this.exibeResultados()
        this.iniciar()
    }

    iniciar(){

        let palavraSorteada = this.sorteia(this.listaPalavras.faltantes) || this.sorteia(this.listaPalavras.lista)

        console.log(palavraSorteada)
    }

    acerto(palavra){

        this.listaPalavras.acerta(palavra)
    }
    itera(){

        this.base.map(d => {
                
            d.palavras.forEach(p => {
                
                this.listaPalavras.adiciona(new Palavra(d.dica, p))
            })
        })
    }
    sorteia(lista){

        return lista[Math.floor(Math.random() * ((lista.length - 1) - 0 + 1))]
    }

    exibeResultados(){

        /*if(this.listaPalavras.lista.length != this.listaPalavras.concluidas.length + this.listaPalavras.faltantes.length){

            throw new Error(`Valores não batem. ${this.listaPalavras.lista.length} != ${this.listaPalavras.concluidas.length + this.listaPalavras.faltantes.length}`)
        }*/

        this.listaPalavras.exibeCertas()
        this.listaPalavras.exibeFalantes()
    }
}