function alterar(el, pro, va) {
  document.getElementById(el).style.setProperty(pro, va);
}
function mudar() {
  el = document.getElementById("elemento").value;

  pro = document.getElementById("propriedade").value;

  va = document.getElementById("valor").value;

  alterar(el, pro, va);
}
