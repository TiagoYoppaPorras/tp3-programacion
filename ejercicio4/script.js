function calcularIMC() {
  const estatura = parseFloat(document.getElementById('estatura').value);
  const peso = parseFloat(document.getElementById('peso').value);

  const imc = peso / (estatura * estatura);
  alert("Tu IMC es: " + imc.toFixed(2));
}

