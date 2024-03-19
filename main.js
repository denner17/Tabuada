function geradorTabuada() {
    var numInput = document.getElementById("numInput").value;
    var tabuadaDiv = document.getElementById("tabuada");
    tabuadaDiv.innerHTML = "";


    if (!numInput || isNaN(numInput)) {
      tabuadaDiv.innerHTML = "<p>Por favor, insira um número válido.</p>";
      return;
    }


    var tableHTML = "<h3>Tabuada do " + numInput + "</h3><table border='1'><tr><th>Número</th><th>Resultado</th></tr>";


    for (var i = 1; i <= 10; i++) {
      tableHTML += "<tr><td>" + numInput + " x " + i + "</td><td>" + (numInput * i) + "</td></tr>";
    }


    tableHTML += "</table>";
    tabuadaDiv.innerHTML = tableHTML;
}