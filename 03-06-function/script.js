function cumprimentar(){
    //console.log('Bom dia')
    console.log(this)
}
 //cumprimentar()

const eu ={
    nome:'victor',
    cumprimentar(){
    console.log(this)
    return'batata'

    }
}

function quantosanospramaioridade(idade){
    return 18 - idade
}

const quantosanos = quantosanospramaioridade(12)

console.log(quantosanos)
