var cx = document.getElementById("saida");
var bt = document.getElementById("btn");

bt.onclick = function () {
  cx.style.width = "200px";
  cx.style.height = "200px";
  cx.style.backgroundColor = "#ff0";
};
cx.onclick = function () {
  cx.style.width = "300px";
  cx.style.height = "400px";
};
