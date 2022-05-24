console.log(`Trabalhando com loops`)
const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
)

const idadeComprador = 18;
const estaAcompanhada = false
let temPassagemComprada = false
const destino = 'Salvador'

console.log('Destinos possíveis: ')
console.log(listaDeDestinos)

const podeComprar = idadeComprador >= 18 || estaAcompanhada


let destinoExiste = false
/* while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true
        console.log('Destino existe')
        break
    }
    contador += 1
} */

for (let contador = 0; contador < 3; contador += 1) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true
        console.log('Destino existe')
    }
}

if (destinoExiste == false) {
    console.log('Destino existe: ')
}
console.log(`${destinoExiste}`)

if (podeComprar && destinoExiste) {
    console.log('Boa viagem')
} else {
    console.log('Desculpa tivemos um erro!')
}




