var idade = 22
console.log(`Você tem ${idade} anos.`)

if (idade < 16) {
    console.log('Não vota')

} else if (idade >= 16 && idade < 18 || idade > 65) { //&& operador relacional, ela relaciona a primeira parte com a seguinte; || tem o seignificado de "ou". Neste caso lee-se: Quem tem maior ou igual a 16 "e" idade maior de 18 "ou " 65 = voto opcional
            console.log('Voto opcional')

    } else {
            console.log('Voto obrigatório')
    }