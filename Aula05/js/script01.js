function carregarFilmes() {
  var dados = filmes;
  console.log(dados.results);

  for (var i = 0; i <= 19; i++) {
    document.getElementById("imagem").innerHTML +=
      "<div><img src=" +
      caminho +
      dados.results[i].poster_path +
      ">" +
      "<h2>" +
      dados.results[i].title +
      "</h2>" +
      "<h3>" +
      dados.results[i].original_title +
      "</h3>" +
      "<p class=media>Media de votos:" +
      dados.results[i].vote_average +
      "</p>" +
      "<p class=texto>" +
      dados.results[i].overview +
      "</p>" +
      "</div>";
  }
}

// popularity: 871.5
// vote_count: 653
// video: false
// poster_path: "/nmlpEQuemz1OMEAVLP5RA8pZUML.jpg"
// id: 475303
// adult: false
// backdrop_path: "/6fkqwqLEcDZOEAnBBfKAniwNxtx.jpg"
// original_language: "en"
// original_title: "A Rainy Day in New York"
// genre_ids: (2) [35, 10749]
// title: "Um Dia de Chuva em Nova York"
// vote_average: 6.7
// overview: "Apaixonado por Nova York, Gatsby (Timothée Chalamet) decide passar um fim de semana na cidade ao lado de Ashleigh (Elle Fanning), sua namorada. No entanto, aquilo que era pra ser uma aventura romântica acaba tomando um rumo inesperado. Aspirante a jornalista, Ashleigh conhece o diretor de cinema Roland Pollard (Liev Schreiber), que a convida para a exibição de seu mais recente trabalho. Gatsby, por sua vez, encontra Chan (Selena Gomez), a irmã mais nova de sua ex-namorada, com quem passa o restante da viagem. Um dia de chuva em Nova York será o suficiente para fazer com que Ashleigh redescubra suas verdadeiras paixões e Gatsby aprenda que só se vive uma vez - mas que é o suficiente se for ao lado da pessoa certa."
// release_date: "2019-07-26"
