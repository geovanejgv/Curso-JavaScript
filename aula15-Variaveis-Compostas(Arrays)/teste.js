let num = [5,8,2,9,3]

num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem  ${num.length} posições `)
console.log(`O primeiro valor do vetor é ${num[0]}`)


let pos = num.indexOf(4) //  este comando serve para localizar um valor dentro da Array

if (pos == -1){
    console.log('O valor não foi encontrado!')

} else {
console.log(`O valor 8 esta na posição ${pos}`)
}

//Obs: A ordem dos código vai interferir no resultado


/*
Ex1 :num[3] = 6 // Neste comando, o escript ira adicionar o numero 6 na posição 3. Obs: Não esquecer que no JS a primeira posição é = a 0

Ex2 :num.push(7) // Neste comando, o escript ira adicionar o numero 7 na ultima posição do elemento, não importando qual seja a posição

Ex3 : num.lenght // Serve para verificar quantos elementos existem no array

Ex4: num.sort // Serve para colocar os elementos em ordem crescente
*/