import { Cliente } from "./Cliente.mjs"
import { ContaCorrente } from "./ContaCorrente.mjs"

const cliente1 = new Cliente();
const conta1 = new ContaCorrente();
cliente1.nome = "Isabela";
cliente1.CPF = 1546468445;

console.log(cliente1.nome);
conta1._saldo = 0;
conta1.agencia = 2001;
console.log(conta1._saldo);

conta1._saldo = 1000;
console.log(conta1._saldo);

conta1.sacar(800);
conta1.depositar(50);

console.log(cliente1);
console.log(conta1);
