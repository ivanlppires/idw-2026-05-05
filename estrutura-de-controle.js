/* ESTRUTURAS DE CONTROLE */

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

/* **** Estrutura de controle: switch case ***/

let dia = 3;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido.");
}

// É possível fazer a mesma coisa com if else if, mas o switch case é mais organizado e fácil de ler quando temos muitas condições para verificar.
if (dia == 1) console.log("Domingo");
else if (dia == 2) console.log("Segunda-feira");
else if (dia == 3) console.log("Terça-feira");
else if (dia == 4) console.log("Quarta-feira");
else if (dia == 5) console.log("Quinta-feira");
else if (dia == 6) console.log("Sexta-feira");
else if (dia == 7) console.log("Sábado");
else console.log("Dia inválido.");