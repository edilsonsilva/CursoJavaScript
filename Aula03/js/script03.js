function cor() {
  /*
    Vamos trabalhar com as cores em RGB e com uma varição de 
    número para formar a cor de 0 a 9. Os número virão de 
    forma aleatória, portanto se faz necessário o uso do 
    comando Math.random();
    Iremos multiplicar os valor obtido por random por 8 e 
    arredondar suas casas decimais.
    */

  //   document.bgColor = "#" + r + "" + r + g + "" + g + b + "" + b;

  var tabela = "<table>";

  for (var linha = 1; linha <= 20; linha++) {
    tabela += "<tr>";
    for (var coluna = 1; coluna <= 20; coluna++) {
      var r = Math.round(Math.random() * 8);
      var g = Math.round(Math.random() * 8);
      var b = Math.round(Math.random() * 8);
      console.log("#" + r + "" + r + g + "" + g + b + "" + b);

      tabela +=
        "<td style=background-color:" +
        "#" +
        r +
        "" +
        r +
        g +
        "" +
        g +
        b +
        "" +
        b +
        ">Cor</td>";
    }
    tabela += "</tr>";
  }
  tabela += "</table>";
  document.getElementById("saida").innerHTML = tabela;
}
