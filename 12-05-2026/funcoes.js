/* FUNÇÕES EM JAVACRIPT */

// Função - Tradicional
function soma(a, b) {
    return a + b;
}

// Função Anônima - atribuída a uma variável
let multiplicacao = function(a, b) {
    return a * b;
}

/* ### Arrow Function - Forma mais moderna de escrever funções ### */

// Arrow Function com vários parâmetros e várias expressões
const divisao = (a, b) => {
    if (b === 0) return "Divisão por zero não é permitida.";
    return a / b;
}

// Arrow Function com 1 parâmetro e várias expressões. Parênteses são opcionais.
const ehPar = numero => {
    const par = (numero % 2 === 0) ? true : false;
    if(par) return "O número é par.";
    return "O número é ímpar.";
}

// Arrow Function com 1 parâmetro e 1 expressão. Parênteses, chaves e return são opcionais.
const quadrado = numero => numero * numero;

// Arrow Function sem parâmetros
const numeroSorte = () => "Seu número da sorte é " + Math.ceil(Math.random() * 10);

// console.log(soma(2,3))
// console.log(divisao(10,0))
// console.log(multiplicacao(2,8))
// console.log(ehPar(7))
// console.log(quadrado(5))
// console.log(numeroSorte())

// exercicio: faça uma calculadora. Use o prompt para receber número. Exemplo:
