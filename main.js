/* ESTRUTURAS DE CONTROLE E REPETIÇÃO */

// Estrutura de controle: if, else if, else

let numero = 0;

if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

// quando há apenas 1 linha de código dentro do bloco, podemos omitir as chaves {}. 
// No entanto, é recomendado sempre usar as chaves para evitar erros futuros.

if(numero%2==0) console.log("O número é par.");
else console.log("O número é ímpar.");

let idade = 18;
let maioridade = (idade >=18) ? "Maior de idade" : "Menor de idade"; // Operador ternário

let nota1=5, nota2=8, nota3=7;
let aprovado = (nota1+nota2+nota3)/3 >= 6 ? "Aprovado" : "Reprovado";

console.log(maioridade);
console.log(aprovado);