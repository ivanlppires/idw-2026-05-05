<div align="center">

# Introdução ao Desenvolvimento Web

### Aula de 05/05/2026 — Revisão de JavaScript

![UNEMAT](https://img.shields.io/badge/UNEMAT-2026.1-006633?style=for-the-badge)
![Disciplina](https://img.shields.io/badge/Disciplina-IDW-0a66c2?style=for-the-badge)
![Linguagem](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-em%20andamento-brightgreen?style=for-the-badge)

*Material de apoio para a turma de Introdução ao Desenvolvimento Web — 2026/1*

</div>

---

## Sobre o repositório

Este repositório reúne o código produzido em aula durante a disciplina **Introdução ao Desenvolvimento Web (IDW)** da UNEMAT, no semestre **2026/1**. O objetivo é servir de referência para que vocês, alunos e alunas, possam revisar os exemplos discutidos em sala, reproduzir os experimentos em casa e usar como ponto de partida para os exercícios.

Nesta aula, demos início à **revisão de JavaScript** — a linguagem que dará vida às páginas que vocês construirão ao longo do semestre.

---

## Conteúdo desta aula

| Arquivo | Descrição |
| --- | --- |
| [`index.html`](./index.html) | Estrutura HTML mínima que carrega o CSS e o JS |
| [`main.css`](./main.css) | Folha de estilos (apenas um teste de cor de fundo) |
| [`variaveis.js`](./variaveis.js) | Declaração de variáveis: `var`, `let` e `const` |
| [`main.js`](./main.js) | Estruturas de controle: `if/else`, operador ternário e operador de módulo |
| [`aula_funcoes_classes_js.pdf`](./aula_funcoes_classes_js.pdf) | Slides de apoio sobre funções e classes em JS |

---

## Tópicos abordados

### 1. Declaração de variáveis

Em JavaScript moderno temos três formas de declarar variáveis. A regra prática é simples:

> **Sincerão:** quando usar `var`? Quase nunca. Na prática a maioria das vezes usamos `let` ou `const`.

```js
var nome = "João";   // escopo de função (legado)
let idade = 30;      // escopo de bloco — use por padrão
const PI = 3.14;     // constante — não pode ser reatribuída
```

| Palavra-chave | Escopo | Pode reatribuir? | Pode redeclarar? |
| --- | --- | --- | --- |
| `var`   | Função  | Sim | Sim |
| `let`   | Bloco   | Sim | Não |
| `const` | Bloco   | Não | Não |

### 2. Estruturas de controle

Tomadas de decisão com `if`, `else if` e `else`:

```js
let numero = 0;

if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}
```

> **Dica do professor:** quando há apenas uma linha dentro do bloco, é possível omitir as chaves `{}`. Mesmo assim, **sempre use as chaves** — evita bugs sutis quando o código cresce.

### 3. Operador ternário

Forma compacta de escrever um `if/else` que retorna um valor:

```js
let idade = 18;
let maioridade = (idade >= 18) ? "Maior de idade" : "Menor de idade";

let nota1 = 5, nota2 = 8, nota3 = 7;
let aprovado = (nota1 + nota2 + nota3) / 3 >= 6 ? "Aprovado" : "Reprovado";
```

### 4. Operador de módulo (`%`)

Útil para verificar paridade, múltiplos e ciclos:

```js
if (numero % 2 == 0) console.log("O número é par.");
else                 console.log("O número é ímpar.");
```

---

## Como executar

Você não precisa instalar nada. Basta um navegador.

1. **Clone** este repositório:
   ```bash
   git clone https://github.com/ivanlppires/idw-2026-05-05.git
   cd idw-2026-05-05
   ```
2. **Abra** o arquivo `index.html` no navegador (duplo clique resolve).
3. **Pressione `F12`** para abrir o DevTools e clique na aba **Console** — é lá que as mensagens dos `console.log` aparecem.

> **Dica:** se você usa o VS Code, instale a extensão *Live Server* para recarregar a página automaticamente sempre que salvar um arquivo.

---

## Para casa

Sugestões de exercícios para fixar o conteúdo desta aula:

- [ ] Crie uma variável com sua idade e use o operador ternário para imprimir se você pode votar (idade ≥ 16).
- [ ] Dadas três notas, calcule a média e classifique em **Aprovado** (≥ 7), **Recuperação** (≥ 5 e < 7) ou **Reprovado** (< 5).
- [ ] Escreva um trecho que receba um número e diga se ele é múltiplo de 3, de 5, de ambos, ou de nenhum.
- [ ] Experimente trocar `let` por `const` no `variaveis.js` e veja qual erro o navegador retorna.

---

## Próximos passos

Nas próximas aulas avançaremos para:

- Funções (declaração, expressão e arrow functions)
- Classes e orientação a objetos em JS
- Manipulação do DOM
- Eventos e interatividade

---

## Autor

**Prof. Ivan Luiz Pedroso Pires**
Disciplina: Introdução ao Desenvolvimento Web — UNEMAT — 2026/1

<div align="center">

---

*Bom estudo! Em caso de dúvidas, traga para a próxima aula ou abra uma [issue](https://github.com/ivanlppires/idw-2026-05-05/issues) neste repositório.*

</div>
