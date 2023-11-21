var pessoa = {
    idade: 14,
    nome: 'Victor'
}

function getAnosParaMaiorIdade(pessoa){
    return 18 - pessoa.idade
}

function AumentarIdadedaPessoa(pessoa){
    pessoa.idade = pessoa.idade + 1
}

AumentarIdadedaPessoa(pessoa)
var contandoidade = getAnosParaMaiorIdade(pessoa)
console.log(contandoidade)