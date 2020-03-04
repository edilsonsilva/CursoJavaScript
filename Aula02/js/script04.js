/*
Esta estrutura de código é para a utilização das estruturas de 
repetição tais como:
    -While;
    -For;
    -For in*;

As estrutura de repetição possuem 4 partes distintas:
    - Inicio da variável;
    - Condição para repetição;
    - Corpo;
    - Incrementação ou decrementação
*/
function contagem() {
  var x = 0;
  while (x <= 10) {
    console.log("Contei " + x);
    x = x + 1;
  }
}
