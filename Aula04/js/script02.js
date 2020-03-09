function array1() {
  var cidades = ["São Paulo", "Leme", "Campinas", "Salvador"];
  console.log(cidades);

  for (var i = 0; i <= 3; i++) {
    console.log(cidades[i] + " => Cidade");
  }
}

function array2() {
  var cidades = [
    ["Campinas", "Cidade de SP", "500000"],
    ["Leme", "Cidade de SP", "200000"],
    ["Salvador", "Cidade de BA", "500000"]
  ];
  console.log(cidades);

  var exibir = "";
  for (var i = 0; i <= 2; i++) {
    exibir += "<div>";
    for (var j = 0; j <= 2; j++) {
      exibir += "<p>" + cidades[i][j] + "</p>";
    }
    exibir += "</div>";
  }
  document.getElementById("saida").innerHTML = exibir;
}
