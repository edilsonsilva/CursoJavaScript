var cor = prompt(
  "Digite uma das cores para o plano de fundo: Preto, Vermelho, Verde, Azul, Amarelo"
);

//cor = cor.toUpperCase(); //Converte todas as letras para maiúscula
cor = cor.toLowerCase(); //Converte todas letras para minúsculas
console.log(cor);

// if (cor == "preto") document.bgColor = "black";
// if (cor == "vermelho") document.bgColor = "red";
// if (cor == "verde") document.bgColor = "green";
// if (cor == "azul") document.bgColor = "blue";
// if (cor == "amarelo") document.bgColor = "yellow";

// if (cor == "preto") document.bgColor = "black";
// else if (cor == "vermelho") document.bgColor = "red";
// else if (cor == "verde") document.bgColor = "green";
// else if (cor == "azul") document.bgColor = "blue";
// else if (cor == "amarelo") document.bgColor = "yellow";
// else document.bgColor = "silver";

//Quando temos muitos teste a se fazer utilizamos a
//estrutura switch ao invés de if
switch (cor) {
  case "vermelho":
    document.bgColor = "#f44336";
    break;
  case "roxo":
    document.bgColor = "#9c27b0";
    break;
  case "preto":
    document.bgColor = "#000000";
    break;
  case "verde":
    document.bgColor = "#00ff00";
    break;
  case "azul":
    document.bgColor = "#0000ff";
    break;
  case "amarelo":
    document.bgColor = "#ffff00";
    break;
  case "azul-claro":
    document.bgColor = "#42a5f5";
    break;
  default:
    document.bgColor = "#eeeeee";
    break;
}
