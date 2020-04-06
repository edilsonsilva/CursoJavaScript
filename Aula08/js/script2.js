window.onload = function () {
  this.relogio();
};

function relogio() {
  var tempo = new Date();
  var hora = tempo.getHours();
  var minuto = tempo.getMinutes();
  var segundo = tempo.getSeconds();
  document.getElementById("saida").innerHTML =
    hora + ":" + minuto + ":" + segundo;
}
window.setInterval(relogio, 1000);
