// Arreglo con los nombres de los días de la semana
const diasDeLaSemana = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

// Imprimir cada día de la semana utilizando un bucle
for (let i = 0; i < diasDeLaSemana.length; i++) {
  console.log(diasDeLaSemana[i]);
}

// Función que recibe un arreglo de números y devuelve la suma de todos los números en el arreglo
function sumarArreglo(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}

// Ejemplo de uso de la función sumarArreglo
const numeros = [1, 2, 3, 4, 5, 6, 7];
console.log("La suma del arreglo es:", sumarArreglo(numeros));
