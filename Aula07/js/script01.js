function abrir() {
  /*
Essa função abre um menu lateral da esquerda para a direita, esse menu
foi formatado em css e inicialmente ele não apresentado no site. 
quando o usuário clica sobre o botão de menu é chamada essa função 
para abrir o menu. Usamos o comando style.left para manipular a posição 
ao lado esquerdo colocando-a em 0(zero)vw(viewport width = largura do dispositivo),
isso faz o menu abrir
*/
  document.getElementById("menu").style.left = "0vw";
}
function fechar() {
  /*
    Para fechar o menu foi aplicado um estilo na posição colocando-a em -10vw, assim
    nos estamos escondendo o menu ao lado esquerdo do navegador
    */
  document.getElementById("menu").style.left = "-10vw";
}
function abrirImagem(info) {
  /*
    Criamos uma função para pegar algumas informações da imagem clicada pelo
    usuário, neste caso estamos pegando o endereço da imagem(src)
    */
  console.log(info.src);
  /*
  Criar um elemento de html de forma dinâmica para exibir uma
   imagem
  */

  //   document.bgColor = "black";

  /*
  Criando um elemento de html de forma dinâmica para fazer um efeito de 
  sobreposição com uma cor escura para dar a ideia de uma sobra.
  Usamos o comando createElement para criar uma div e, isso poderia ser feito
  com qualquer elemento html.
  */
  var fundo = document.createElement("div");

  /*
  foi aplicada a div um id com o nome fundo. Usamos o comando setAttribute para 
  essa operação
  */
  fundo.setAttribute("id", "fundo");
  fundo.style.backgroundColor = "rgba(0,0,0, 0.6)";
  fundo.style.width = "100vw";
  fundo.style.height = "100vh";
  fundo.style.position = "absolute";
  fundo.style.left = "0px";
  fundo.style.top = "0px";
  fundo.zIndex = "9999";

  /*
  Para exibir a imagem em tamanho maior foi necessário criar um novo elemento
  com o comando createElement para uma nova div
  */
  var caixa = document.createElement("div");
  /*
para essa div aplicamos o atributo id com o nome de exibir
*/
  caixa.setAttribute("id", "exibir");

  /*
  O comando append(adiciona) e, portanto, neste exemplo estamos adicionando a 
  caixa dentro do fundo.
  Os elemento caixa e fundo foram nomeados com os respectivos ids fundo exibir
  */
  fundo.append(caixa);

  /*
  Para exibir a imagem em um tamanho maior, criamos um elemento de imagem(img)
  com o comando createElement. Para essa imagem será passado o atributo src, que 
  indica a origem da foto, ou seja, o caminho da que deve ser aberta.
  O caminho da foto é obtido pelo paramêtro da função abrirImagem que tem o nome
  de info.
  Pegamos, então a informação da imagem clicada e passamos como parametro para 
  o elemento imagem que foi criado logo abaixo
  */

  var imagem = document.createElement("img");
  imagem.src = info.src;

  imagem.setAttribute("id", "exibirImg");

  caixa.append(imagem);

  document.getElementById("conteudo").append(fundo);

  var d = document.getElementById("exibir");
  var i = document.getElementById("exibirImg");

  d.style.width = "30%";
  d.style.position = "absolute";
  d.style.zIndex = 10000;
  d.style.left = "35vw";
  d.style.top = "0vh";
  d.style.boxShadow = "0px 0px 20px black";
  d.style.transition = "ease 0.5s";

  i.style.width = "100%";
  i.style.cursor = "pointer";

  /*
  Foi a aplicado a imagem um atributo chamado onclick, que na verdade é um 
  evento de javascript para que o meu usuario clique na imagem e faça alguma
  operação. Veja que neste exemplo o valor do atributo é uma função->fecharImagem().
  O que quer dizer que quando nosso usuário clica na imagem criada será chamada
  a função fecharImagem()
  */
  i.setAttribute("onclick", "fecharImagem()");
}
function fecharImagem() {
  /*
    Para fechar a imagem aberta em tamanho maior, estamos usando o comando remove para 
    remover do código e, portanto, da tela o elemento "fundo" criado na função abrirImagem()
    */
  document.getElementById("fundo").remove();
  //   document.bgColor = "white";
}
