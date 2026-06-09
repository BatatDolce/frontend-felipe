
import { alugarFilme, devolverFilme } from './video-esm.js';

console.log("--- SISTEMA DE LOCAÇÃO DE FILMES (ESM) ---\n");

// Testando Filme 1
console.log(">> Testando Filme 1:");
const aluguel1 = alugarFilme("Extraordinário", "03/06/2026", 12.50);
console.log(aluguel1);

const devolucao1 = devolverFilme("Extraordinário", "05/06/2026");
console.log(devolucao1);

console.log("\n-----------------------------------------\n");


console.log(">> Testando Filme 2:");
const aluguel2 = alugarFilme("A Freira", "03/06/2026", 15.00);
console.log(aluguel2);

const devolucao2 = devolverFilme("A Freira", "10/06/2026");
console.log(devolucao2);