function es01(valor) {
  // document.getElementById("caixa").style.propriedade = valor;
  document.getElementById("caixa").style.color = valor;
}

function es02(propriedade, valor) {
  document.getElementById("caixa").style.setProperty(propriedade, valor);
}
