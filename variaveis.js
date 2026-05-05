/* REVISÃO DE JAVASCRIPT */

// Declaração de variáveis.

var nome = "João"; // Variável global, pode ser acessada em qualquer parte do código.
let idade = 30; // Variável de escopo de bloco, só pode ser acessada dentro do bloco onde foi declarada.
const PI = 3.14; // Constante, seu valor não pode ser alterado após a atribuição.

console.log(nome, idade);

// teste de variáveis
nome = "Pedro";
// PI = 4.16; // Isso causará um erro, pois PI é uma constante e não pode ser reatribuída.

console.log(nome, idade);   
idade = 25;

// Bloco de código para testar LET
{
    idade = 10;
    console.log(idade);
}

// SINCERÃO! Quando usa var? quase nunca. Na prática a maioria das vezes usamos let ou const.

