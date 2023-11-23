function sum(a, b){
    console.log(this)
    return a + b
}

const eu = {nome: 'Victor'}

sum.call(eu, 1 , 2)