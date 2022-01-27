const listaDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`,
  `Curitiba`,
  `Maceió`
);
const idadePessoaComprador = 18;
const estaAcompanhada = true;
let temPassagemComprada = false;
const Destinos = "Salvador";

console.log("Destinos Liberados \n");
console.log(listaDestinos);

const podeComprar = idadePessoaComprador >= 18 || estaAcompanhada == true;
let contador = 0
let destinoExiste = false;

while (contador < 3) {
  if (listaDestinos[contador] == Destinos) {
    destinoExiste = true
    break;
  } 
  contador++;
}

console.log("Destino existe? ", destinoExiste);