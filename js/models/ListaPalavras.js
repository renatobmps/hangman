class ListaPalavras{
    
    constructor(){
        
        this.lista = []
        this.concluidas = JSON.parse(localStorage.getItem('palavrasConcluidas'), JSON) || []
        this.faltantes = [] //Adicionar valor direto para ins
        
        this.init()
    }
    
    init(){
        
        let listaComparaExistente = []
        let listaComparaNovo = []
        
        this.lista.forEach(i => {
            listaComparaExistente.push(JSON.stringify(i))
        })
        this.concluidas.forEach(i => {
            listaComparaNovo.push(JSON.stringify(i))
        })
        
        let faltantes = listaComparaExistente.filter(function (element, index, array) {
            
            if (listaComparaNovo.indexOf(element) == -1) {
                
                return element;
            }
        })

        let novafaltantes = []
        
        faltantes.forEach(i => {
            
            novafaltantes.push(JSON.parse(i))
        })

        this.faltantes = novafaltantes.filter(function(este, i) {
            return novafaltantes.indexOf(este) === i;
        });

        setInterval(() => {
            this.init()
        }, 30000)
    }
    
    adiciona(palavra){
        
        this.lista.push(palavra)
    }
    acerta(palavra){
        
        this.concluidas.push(palavra)
        
        localStorage.setItem('palavrasConcluidas', JSON.stringify(this.concluidas))
    }
    exibeCertas(){
        
        console.log(`-- Total: ${this.concluidas.length} --`);
        this.concluidas.forEach(i => console.log(i))
    }
    exibeFalantes(){
        
        console.log(`-- Total: ${this.faltantes.length} --`);
        this.faltantes.forEach(i => console.log(i))
    }
}