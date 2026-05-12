/* ============================================================
   GABARITO — Calculadora de Estacionamento de Shopping
   Disciplina: Introdução ao Desenvolvimento Web (IDW) — 2026/1
   Prof. Ivan Luiz Pedroso Pires
   ============================================================ */

// Passo 1 — Variáveis
const TARIFA_HORA = 8.00;   // valor de cada hora (constante)
let horas = 5;              // tempo de permanência do cliente
let diaSemana = 7;          // 1 = Domingo ... 7 = Sábado
let total = 0;              // acumulador da cobrança

// Passo 2 — Multiplicador do dia (switch case)
let multiplicador;
switch (diaSemana) {
    case 1:                 // Domingo: promoção
        multiplicador = 0.5;
        break;
    case 7:                 // Sábado: movimento alto
        multiplicador = 1.2;
        break;
    default:                // Demais dias
        multiplicador = 1.0;
}

// Passo 3 — Loop de cobrança hora a hora
for (let hora = 1; hora <= horas; hora++) {
    total += TARIFA_HORA * multiplicador;
    console.log("Hora " + hora + " — total parcial: R$ " + total.toFixed(2));

    // operador módulo: nas horas pares, imprime o tique-taque
    if (hora % 2 === 0) {
        console.log("⏰ Tique-taque...");
    }
}

// Passo 4 — Mensagem final (operador ternário)
let mensagem = (total > 30) ? "Tarifa cheia" : "Tarifa promocional";
console.log("Total a pagar: R$ " + total.toFixed(2) + " — " + mensagem);
