function calculaCPF() {
  var cpfUsuario;
  var cpf9;
  var peso10 = 10;
  var peso11 = 11;
  var resultado = 0;
  var resto;

  //   cpfUsuario = prompt("Digite o seu cpf");
  cpfUsuario = document.getElementById("cpf").value;
  /*
    Para pegar os 9 primeiros digitos do cpf iremos usar o 
    comando substring, onde você consegue dizer quais 
    são os caracteres que deseja pegar
    */
  cpf9 = cpfUsuario.substring(0, 9);
  //   console.log(cpf9);
  /*
  Para pegar um número por vez do cpf iremos usar
  o index destes números, ou seja, sua posição
  */
  //   console.log(cpf9[0]);

  for (var p = 0; p <= 8; p++) {
    console.log(cpf9[p] + " peguei este número");
    resultado += cpf9[p] * peso10;
    peso10--;
  }
  //   console.log(resultado);
  resto = resultado % 11;

  if (resto < 2) {
    cpf9 += "0";
  } else {
    cpf9 += "" + (11 - resto);
  }
  //   console.log(cpf9);
  //zerando a variável resultado
  resultado = 0;

  for (var p = 0; p <= 9; p++) {
    // console.log(cpf9[p] + " peguei este número");
    resultado += cpf9[p] * peso11;
    peso11--;
  }
  //   console.log(resultado);
  resto = resultado % 11;

  if (resto < 2) {
    cpf9 += "0";
  } else {
    cpf9 += "" + (11 - resto);
  }
  //   console.log(cpf9);

  if (cpfUsuario == cpf9) {
    alert("Cpf válido");
  } else {
    alert("Cpf inválido");
  }
}
