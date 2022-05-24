console.log(`Trabalhando com condicionais`)
const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
)

const idadeComprador = 18;
const estaAcompanhada = false
const temPassagemComprada = true

console.log('Destinos possíveis: ')
console.log(listaDeDestinos)

/* if (idadeComprador >= 18) {
    console.log('Comprador maior de idade')
    listaDeDestinos.splice(1, 1)
} else {
    if (estaAcompanhada) {
        console.log('Comprador está acompanhado(a)')
        listaDeDestinos.splice(1, 1)
    } else {
        console.log('Não é maior de idade, não posso vender')
    }
} */

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log('Boa viagem!')
    listaDeDestinos.splice(1, 1)
} else {
    console.log('Não é maior de idade, não posso vender')
}

console.log('Embarque: ')

if (idadeComprador >= 18 && temPassagemComprada) {
    console.log('Boa viagem!')
} else {
    console.log('Você não pode embarcar!')
}

 

console.log(listaDeDestinos)


