calculodeQuantidadeEstoque() //chamando a função//

// CALCULO DA SOMA DE CEDULAS DOS RESERVANTES//
function calculodeQuantidadeEstoque() { 


    let quantidadeDisponivel = document.querySelectorAll('.controleConstrucao')
    let soma = 0
    let quantidadeEstoque = document.querySelector('#quantidadeEstoque')
    for (let i = 0; i < quantidadeDisponivel.length; i++) {
        let quantidade = quantidadeDisponivel[i]

        let numquantidade = quantidade.querySelector('.quantidadeDisponivel')
        let numeroDequantidade = Number(numquantidade.textContent)

        soma = soma + numeroDequantidade

    }

    quantidadeEstoque.innerHTML = soma

}


calculodeQuantidadeVendida() //chamando a função//

// CALCULO DA SOMA DE CEDULAS DOS VALORES VENDIDOS TOTAL//
function calculodeQuantidadeVendida() { 


    let precoRoupa = document.querySelectorAll('.controleConstrucao')
    let soma = 0
    let totalDeVendas = document.querySelector('#totalDeVendas')
    for (let i = 0; i < precoRoupa.length; i++) {
        let valor = precoRoupa[i]

        let numvalor = valor.querySelector('.precoRoupa')
        let numeroDevaloresVendidos = Number(numvalor.textContent)

        soma = soma + numeroDevaloresVendidos

    }

    totalDeVendas.innerHTML = soma

    console.log(calculodeQuantidadeVendida)

}