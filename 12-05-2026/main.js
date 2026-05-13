/* EXERCÍCIO CALCULADORA EM JS */

const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => (b>0) ? a / b : "Divisão por zero não é permitida";

const num1 = parseInt(prompt("Digite o primeiro número:"));
const num2 = parseInt(prompt("Digite o segundo número:"));
const operacao = prompt("Digite a operação (+, -, *, /):");

let resultado;

if(operacao === "+") resultado = soma(num1, num2);
else if(operacao === "-") resultado = subtracao(num1, num2);
else if(operacao === "*") resultado = multiplicacao(num1, num2);
else if(operacao === "/") resultado = divisao(num1, num2);
else resultado = "Operação inválida.";

console.log("Resultado: " + resultado);

/* OBSERVAÇÃO */
// = é uma atribuição
// == é uma comparação de valor (pode ser perigoso, pois 0 == false é true)
// === é uma comparação de valor e tipo (recomendada, pois 0 === false é false)