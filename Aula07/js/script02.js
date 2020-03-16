function formulario() {
  var nome = document.createElement("input");
  var email = document.createElement("input");
  var botao = document.createElement("input");

  nome.setAttribute("placeholder", "Nome");
  email.setAttribute("type", "email");
  email.setAttribute("placeholder", "E-Mail");

  botao.setAttribute("type", "submit");
  botao.setAttribute("value", "Enviar dados");

  document.getElementById("saida").append(nome);
  document.getElementById("saida").append(email);
  document.getElementById("saida").append(botao);
}
