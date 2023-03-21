// INICIO DO EVENTO DE CADASTRO E ADICIONAR
let addRoupasTb = document.querySelector('#addRoupasTb')
    addRoupasTb.addEventListener('click', function (evento) {
    evento.preventDefault()
    let addForm = document.querySelector('#addForm')
    let controleConstrucao = ValorRoupasForm(addForm)


    //console.log(controleConstrucao)
    
    let erros = validarRoupas(controleConstrucao)

    if(erros.length > 0){
        exibeMensagemDeErro(erros)
        return
    }

    ControleCadastralTabela(controleConstrucao)

    let mensagemErro = document.querySelector("#mensagens-erro") 
    mensagemErro.innerHTML = ''

    calculodeQuantidadeEstoque()
    calculodeQuantidadeVendida()
    
})

// FINAL DO EVENTO DE ADICIONAR 

// INICIO DA VALIDAÇÃO

////////////////////ROTEIRO DE VALIDAÇÃO///////////////////////////////
function validarRoupas(controleConstrucao){
    let erros = []

    if(controleConstrucao.nomeDoItem.length == 0){
        erros.push('O nome não pode estar em branco')
    } 
    if(controleConstrucao.tamanhoDoItem.length == 0){
        erros.push('A data não pode estar em branco')
    }
    if(controleConstrucao.corDoItem.length == 0){
        erros.push('O horario não pode estar em branco')
    }
    if(controleConstrucao.valorDoItem.length == 0){
        erros.push('o numero de reservantes não pode estar em branco')
    }
    if(controleConstrucao.quantidadeItem.length == 0){
        erros.push('o numero de reservantes não pode estar em branco')
    }
    


   
    return erros
}


function exibeMensagemDeErro(erros){
    let ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = ''

    erros.forEach(function(erro){
        let li = document.createElement('li')
        li.textContent = erro 
        ul.appendChild(li) 
    })
}


//////////////////////////////////////////////////////////////////////////

function ControleCadastralTabela(controleConstrucao) {
    let controleConstrucaoTr = montarTr(controleConstrucao)
    let tabela = document.querySelector('#tabelaConstrucaoR')
    tabela.appendChild(controleConstrucaoTr)
}
/////////////////////EXPOR A ONDE SERA ADICIONADO///////////////////////
function ValorRoupasForm(addForm) {
    let controleConstrucao = {
        nomeDoItem:     addForm.nomeDoItem.value,
        tamanhoDoItem:  addForm.tamanhoDoItem.value,
        corDoItem:      addForm.corDoItem.value,
        valorDoItem:    addForm.valorDoItem.value,
        quantidadeItem: addForm.quantidadeItem.value
    
    }

    return controleConstrucao
}


//////////////////////////////FEITO PARA ADICIONAR NOVA TABELA/////////////////////////////////////////
function montarTr(controleConstrucao) {
    let controleConstrucaoTr = document.createElement('Tr')
    controleConstrucaoTr.classList.add('controleConstrucao')

    // *LEMBRAR QUE É O NOME DO ID DA TABELA
    controleConstrucaoTr.appendChild(montarTd(controleConstrucao.nomeDoItem,      "nomeRoupa"))
    controleConstrucaoTr.appendChild(montarTd(controleConstrucao.tamanhoDoItem,   "tamanhoRoupa"))
    controleConstrucaoTr.appendChild(montarTd(controleConstrucao.corDoItem,       "corRoupa"))
    controleConstrucaoTr.appendChild(montarTd(controleConstrucao.valorDoItem,     "precoRoupa"))
    controleConstrucaoTr.appendChild(montarTd(controleConstrucao.quantidadeItem,  "quantidadeDisponivel"))

    
    return controleConstrucaoTr
}
/////////////MONTAR AS NOVAS LINHAS//////////////////
function montarTd(dado, classe) { // F -adicionei o parametro classe q tava faltando
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe) // F - tirei o comentário
    return td
}

/////////////////////////////////////

