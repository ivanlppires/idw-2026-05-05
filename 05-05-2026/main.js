/* Estrutura de Repetição */

let contador = 0;

// while (condição) { bloco de código }

while (contador <= 7) {
    console.log("Contador1: " + contador);
    contador++;
}

// do { bloco de código } while (condição)
do {
    // console.log("Contador2: " + contador);
    contador++;
} while (contador < 5);


// for (inicialização; condição; passo) { bloco de código }

for (let i = 0; i < 5; i++) { // com incremento
    console.log("Contador do for1: " + i);
}

for (let j = 10; j > 5; j--) { // com decremento
    console.log("Contador do for2: " + j);
}
for (let k=20; k>0; k-=2) { // com decremento de 2 em 2
    console.log("Contador do for3: " + k);
}

