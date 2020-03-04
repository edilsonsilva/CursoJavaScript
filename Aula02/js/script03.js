/*
Foi cria a função alteraCor para que seja chamada pelo
botão de formulário no html. Assim  o usuário poderá
interagir com os elementos em tela.
*/

function alteraCor() {
  /*
Para saber em qual botão de rádio o usuário clicou, estamos
usando o comando document.forms[0].cor[x].checked, onde:
document trata dos elementos que estão no body
para pegar o formulário usamos o comando forms[0], ou seja,
o primeiro formulário de uma página html sempre terá o seu
índice igual a zero(0), portanto estamos pegando o primeiro
formulário.
E para pegar os elementos dentro do formulário também usamos
os seus índices, assim temos cor que é um botão de radio e 
seguido de seu índice, Ex.: cor[0] assim pegamos o primeiro 
elemento do formulário.
Depois usamos o comando checked para saber se a caixa foi 
selecionada.
*/

  if (document.forms[0].cor[0].checked) document.bgColor = "red";
  else if (document.forms[0].cor[1].checked) document.bgColor = "green";
  else if (document.forms[0].cor[2].checked) document.bgColor = "blue";
  else if (document.forms[0].cor[3].checked) document.bgColor = "yellow";
  else if (document.forms[0].cor[4].checked) document.bgColor = "black";
}

function abreFoto(x) {
  //   if (x == 1)
  //     document.getElementById("area").innerHTML = "<img src=img/gravida.jpg>";
  //   else if (x == 2)
  //     document.getElementById("area").innerHTML = "<img src=img/moto.jpg>";
  //   else if (x == 3)
  //     document.getElementById("area").innerHTML = "<img src=img/ponte.jpg>";
  //   else if (x == 4)
  //     document.getElementById("area").innerHTML = "<img src=img/predio.jpg>";
  switch (x) {
    case 1:
      document.getElementById("area").innerHTML = "<img src=img/gravida.jpg>";
      break;
    case 2:
      document.getElementById("area").innerHTML = "<img src=img/moto.jpg>";
      break;
    case 3:
      document.getElementById("area").innerHTML = "<img src=img/ponte.jpg>";
      break;
    case 4:
      document.getElementById("area").innerHTML = "<img src=img/predio.jpg>";
      break;
    case 5:
      document.getElementById("area").innerHTML = "<img src=img/luz.jpg>";
      break;
    case 6:
      document.getElementById("area").innerHTML = "<img src=img/brilho.jpg>";
      break;
  }
}
