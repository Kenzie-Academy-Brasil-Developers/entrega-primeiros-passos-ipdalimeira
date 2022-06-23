const precoRefrigerante = 11.99
    let qntRefrigerante = 3
    let valorRefrigerante = qntRefrigerante * precoRefrigerante

const precoMacarrao = 6.99
    let qntMacarrao = 4
    let valorMacarrao = qntMacarrao * precoMacarrao

const precoErvilha = 6.99
    let qntErvilha = 3
    let valorErvilha = qntErvilha * precoErvilha

const precoArroz = 22.99
    let qntArroz = 3
    let valorArroz = qntArroz * precoArroz

const precoFeijao = 11.89
    let qntFeijao = 2
    let valorFeijao = qntFeijao * precoFeijao

const precoVinho = 70.00
    let qntVinho = 3
    let valorVinho = qntVinho * precoVinho

let valorTotal = valorRefrigerante + valorMacarrao + valorErvilha + valorArroz + valorFeijao + valorVinho
    console.log(`O Valor total da compra é: ${valorTotal}`)


    if (valorTotal % 2 == 0) {
    alert('O valor total da compra é Par')
     
    }   else {
    alert('O valor total da compra é Impar')
    }

let divisao = valorTotal / 2
    console.log(`Cada um deve pagar exatamente: ${divisao}`)
    alert('O valor total será dividido entre ambos pois a Soma total é Impar')