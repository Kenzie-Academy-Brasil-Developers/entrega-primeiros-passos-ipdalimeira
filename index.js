    alert('Olá, vamos somar a nossa compra?')
    
    const somaRefrigerante = parseFloat(prompt("Digite o valor do Refrigerante"))
    let quantidadeRefrigerante = parseInt(prompt("São Quantos Refrigerante?"))

    const somaMacarrao = parseFloat(prompt("Digite o valor do Macarrao"))
    let quantidadeMacarrao = parseInt(prompt("São Quantos Macarrão?"))

    const somaErvilha = parseFloat(prompt("Digite o valor da Ervilha"))
    let quantidadeErvilha = parseInt(prompt("São Quantas Ervilhas?"))

    const somaArroz = parseFloat(prompt("Digite o valor do Arroz"))
    let quantidadeArroz = parseInt(prompt("São Quantos Arroz?"))

    const somaFeijao = parseFloat(prompt("Digite o valor do Feijão"))
    let quantidadeFeijao = parseInt(prompt("São Quantos Feijões?"))

    const somaVinho = parseFloat(prompt("Digite o valor do Vinho"))
    let quantidadeVinho = parseInt(prompt("São Quantos Vinhos?"))

    const total = somaRefrigerante * quantidadeRefrigerante + somaMacarrao * quantidadeMacarrao + somaErvilha * quantidadeErvilha + somaArroz * quantidadeArroz + somaFeijao * quantidadeFeijao + somaVinho * quantidadeVinho

    alert(`Valor total a ser pago: ${total}`)

    let divisao = total / 2

    if (total % 2 == 0) { 
    alert('O valor total da compra é Par')
    alert(`Cada um deve pagar exatamente: ${divisao - (somaVinho * quantidadeVinho)} e meu amigo pagará: ${divisao + (somaVinho * quantidadeVinho)}`)
     
    }   else {
    alert('O valor total da compra é Impar')
    alert(`Cada um deve pagar exatamente: ${divisao}`)
    }

   
    