class Cliente {
  nome;
  CPF;
}
class ContaCorrente {
  agencia;
  saldo = 0;

  sacar(saque) {
    if (this.saldo <= saque)return;
      this.saldo -= saque;
     
  }

  depositar(deposito){
    if(deposito < 0)return;//if com um comando pode fazer sem as chaves. Aqui ele não retorna nada, é só uma convenção da linguagem de verificação
      this.saldo += deposito;
    }
}

const clienteIsabela = new Cliente();
const contaIsabela = new ContaCorrente();
clienteIsabela.nome = "Isabela";
clienteIsabela.CPF = 1546468445;

console.log(clienteIsabela.nome);
contaIsabela.saldo = 0;
contaIsabela.agencia = 2001;
console.log(contaIsabela.saldo);

contaIsabela.saldo = 1000;
console.log(contaIsabela.saldo);

contaIsabela.sacar(800);
contaIsabela.depositar(50);

console.log(clienteIsabela);
console.log(contaIsabela);