// function logar(){
//     var login = document.getElementById('login').value
//     var senha = document.getElementById('senha').value

//     if (login == 'admin' && senha == 'admin') {
//         // alert('sucesso')
//         // ir para página de cadastro
//         var url = 'cadastro.html'
//         var btn = document.querySelector('#botao')

//         function openInNewTab(url) {
//             var win = window.open(url, '_blank') 
//             win.focus()
//         }
//         btn.addEventListener('click', () => {
//             openInNewTab(url)
//         })


//     } else {
//         alert('Acesso negado.')
//     }
// }


var url = 'cadastro.html'
var btn = document.querySelector('#botao')

//Com função nomeada----------------
// function executa(event){
//     event.preventDefault()
//     logar(url)
// }

// btn.addEventListener('click', executa)

//Com função anônima----------------
// btn.addEventListener('click', function (event){
//     event.preventDefault()
//     logar(url)
// })

//Com arrow function-----------------------
btn.addEventListener('click', (evento) => {
    evento.preventDefault()
    logar(url)
})

function logar(url){
    var login = document.getElementById('login').value
    var senha = document.getElementById('senha').value

    if (login == 'admin' && senha == 'admin') {
        // alert('sucesso')
        // ir para página de cadastro
 
        window.open(url,'_self') 
        // var win = window.open(url,'_blank') 
        // win.focus()

    } else {
        alert('Acesso negado.')
    }
}
