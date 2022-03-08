function gerarRecibo() {
  document.getElementById("recibo_emit").innerHTML = document.getElementById("emit").value;

   document.getElementById("recibo_rec").innerHTML = document.getElementById("rec").value;

   document.getElementById("recibo_value").innerHTML = parseFloat(document.getElementById("value").value).toLocaleString("pt-br", {minimumFractionDigits:2});

   document.getElementById("recibo_data").innerHTML = dataAtual();

  window.print();
}

function dataAtual() {
  let data = new Date();
  return data.getDate() +" / "+ (data.getMonth()+1) +" / "+ data.getFullYear();
}
