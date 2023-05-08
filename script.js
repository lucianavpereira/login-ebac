function logar(){
    var login = document.getElementById('login').value
    var senha = document.getElementById('senha').value

    if (login == 'admin' && senha == 'admin') {
        // alert('sucesso')
        // ir para página de cadastro
        var url = 'cadastro.html'
        var btn = document.querySelector('#botao')

        function openInNewTab(url) {
            var win = window.open(url, '_blank') 
            win.focus()
        }
        btn.addEventListener('click', () => {
            openInNewTab(url)
        })


    } else {
        alert('Acesso negado.')
    }
}