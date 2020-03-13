var rs = function() {
  return "Esta é uma função anonima";
};

function usar() {
  console.log(rs);
}
var x = function(x, y) {
  console.log(x + y);
};
function usar1() {
  x(10, 20);
}
// Vamos fazer uma requisição ao servidor do site themoviedb e
// obter todos os dados referentes a filmes.
//Essa chamada(requisição) será feita usando AJAX. Com os
//dados obtidos iremos exibir em uma div
var caminho = "https://image.tmdb.org/t/p/w500";

for (var p = 1; p <= 25; p++) {
  document.getElementById("paginas").innerHTML +=
    "<a href=# onclick='pg(" + p + ")'>" + p + "</a>";
}

function pg(n) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);

      var exibir = "";
      for (var i = 0; i <= 19; i++) {
        var barra = "<div>";

        for (v = 1; v <= myObj.results[i].vote_average; v++) {
          barra =
            "<p style=background-color:red;color:white;width:" +
            v * 10 +
            "px>" +
            myObj.results[i].vote_average +
            "%</p>";
        }
        barra += "</div>";

        exibir +=
          "<div><img src=" +
          caminho +
          myObj.results[i].backdrop_path +
          ">" +
          "<h2>" +
          myObj.results[i].title +
          "</h2>" +
          "<h3>Lançamento: " +
          myObj.results[i].release_date +
          "</h3>" +
          "<p class=texto>" +
          myObj.results[i].overview +
          "</p>" +
          "<p>" +
          barra +
          "</p></div>";
      }

      document.getElementById("saida").innerHTML = exibir;

      console.log(myObj.results[0].title);
    } else {
      console.log("Não possível obter os dados");
    }
  };
  xmlhttp.open(
    "GET",
    "https://api.themoviedb.org/3/movie/popular?api_key=e8ee1b7136ab091a2fb872089bf3c840&language=pt-BR&page=" +
      n,
    true
  );
  xmlhttp.send();
}
