let valores =[8,1,7,4,2,9]
valores.sort()


/*console.log(valores)

//Este é código é chamado de percurso para exibição em vetores

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}*/

for(let pos in valores){ //para cada posição em num 
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) // eu vou mostrar o num pos
}