function soma(x, y) {
  console.log(x + y);
}

function somaTudo(valores) {
  var rs = 0;
  for (var i = 0; i < valores.length; i++) {
    rs += valores[i];
  }
  console.log(rs);
}
function testar() {
  var dados = [10, 6, 8, 15, 20, 48];
  somaTudo(dados);
}

function maiorValor(valores) {
  var maior = valores[0];
  for (var i = 1; i < valores.length; i++) {
    if (valores[i] > maior) {
      maior = valores[i];
    }
  }
  return maior;
}

function testaMaior() {
  var n = [1, 0, 53, 8, 16, 45, 370, 65, 968, 21, 30, 49, 70];
  alert(maiorValor(n));
}
