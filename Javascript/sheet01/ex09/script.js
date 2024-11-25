function invertirCadena(cad) {
  let nuevaCadena = "";
  for (let i = cad.length - 1; i >= 0; i--) {
    nuevaCadena += cad[i];
  }
  return nuevaCadena;
}
console.log(invertirCadena("naya"));

function contarVocales(cad) {
  let vocales = "aeiouAEIOU";
  let counter = 0;
  for (let i = 0; i < cad.length; i++) {
    if (vocales.indexOf(cad[i]) !== -1) {
      counter++;
    }
  }
  return counter;
}
console.log(contarVocales("aaaeeeiibbbuu"));
