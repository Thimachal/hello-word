class cliente {
  nome;
  CPF;
}
class ContaCliente {
  agencia;
  saldo;
  imprime(texto) {
  console.log(texto);
}

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
    } else {
      this.imprime(`Sorry, saldo indisponivel para este valor de saque`);
    }
  }
}

const clienteCabeca1 = new cliente();
const contaCabeca1 = new ContaCliente();
const clienteCabeca2 = new cliente();
const contaCabeca2 = new ContaCliente();

clienteCabeca1.nome = `Cabeça 1`;
clienteCabeca1.CPF = 02154156465;
contaCabeca1.agencia = 2002;
contaCabeca1.saldo = 1000;

clienteCabeca2.nome = `Cabeça 2`;
clienteCabeca2.CPF = 98050333331;
contaCabeca2.agencia = 2002;
contaCabeca2.saldo = 2000;

console.log(clienteCabeca1);
console.log(contaCabeca1);
console.log(`\n`, clienteCabeca2);
console.log(contaCabeca2);

contaCabeca1.sacar(350);
contaCabeca2.sacar(3000);

console.log(`\n\n\n`, clienteCabeca1);
console.log(contaCabeca1);
console.log(`\n`, clienteCabeca2);
console.log(contaCabeca2);