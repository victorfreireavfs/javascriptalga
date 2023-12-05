var eu = {
    nome : 'Victor',
    idade : 16
}

    function checaridade(pessoa){
        console.log('A idade da pessoa é: ' + pessoa.idade)
        if(eu.idade < 18){
            console.log('esta pessoa é menor de idade!')
        }else{
            console.log('esta pessoa é maior de idade')
        }

    }

    checaridade(eu)