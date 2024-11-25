function saludar(nombre) {
  console.log(`Holá, ${nombre}`);
}
function mayor(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "Los números son iguales";
  }
}

saludar("Juan");
saludar("Fran");
console.log(`El resultado de mayor(1, 3) es: ${mayor(1, 3)}`);
console.log(`El resultado de mayor(1, 1) es: ${mayor(1, 1)}`);
console.log(`El resultado de mayor(7, 3) es: ${mayor(7, 3)}`);
