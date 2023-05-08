function logar(){
    var login = document.getElementById('login').value
    var senha = document.getElementById('senha').value

    if (login == 'admin' && senha == 'admin') {
        // alert('sucesso')
        // ir para página de cadastro
        


    } else {
        alert('Acesso negado.')
    }
}