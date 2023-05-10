function logar(){
    var login = document.getElementById('login').value
    var senha = document.getElementById('senha').value

    var url = 'cadastro.html'
    var btn = document.querySelector('#botao')

    if (login == 'admin' && senha == 'admin') {
        // alert('sucesso')
        // ir para página de cadastro
        // Com função nomeada----------------
        
        btn.addEventListener('click', executa) 
        function executa(event){
            event.preventDefault()
            logar(url)
        }
        open(url,'_blank')

    } else {
        alert('Acesso negado.')
    }
}