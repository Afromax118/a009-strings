// Letra A
const texto = 'Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair"'


// Letra B
const novoTexto = texto.replaceAll("verde" ,"rosa");
const novoTexto2 = novoTexto.replaceAll("azul" ,"laranja"); 

console.log(novoTexto2)

// Letra C
console.log(`A nova string possui \"verde\"?\n ${novaFrase2.includes("laranja")}`)