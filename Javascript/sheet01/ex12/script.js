function calcular(operation) {
  const text1 = parseFloat(document.getElementById("textInput1").value);
  const text2 = parseFloat(document.getElementById("textInput2").value);
  const resultElement = document.getElementById("result");
  let resultText;
  switch (operation) {
    case "sumar":
      resultText = `resultado de ${operation} es: ${text1 + text2}`;
      break;
    case "restar":
      resultText = `resultado de ${operation} es: ${text1 - text2}`;
      break;
    case "multiplicar":
      resultText = `resultado de ${operation} es: ${text1 * text2}`;
      break;
    case "dividir":
      resultText = `resultado de ${operation} es: ${text1 / text2}`;
      break;
    default:
      alert("error de llamar funcion calcular");
  }
  resultElement.textContent = resultText;
}
