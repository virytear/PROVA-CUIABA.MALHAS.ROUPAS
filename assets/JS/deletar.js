let tabela = document.querySelector('#tabelaConstrucaoR')

tabela.addEventListener('dblclick', function(event){
 event.target.parentNode.classList.add('fadeOut')

 setTimeout(function (){
    event.target.parentNode.remove ()
 }, 600)

 soma()
})