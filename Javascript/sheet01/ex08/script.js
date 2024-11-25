// persona = ["Nombre:", "Apellido:", "Edad:", "Ciudad:"];
// persona[0] = "Ana";
// persona[1] = "García";
// persona[2] = 30;
// persona[3] = "Madrid";

const persona = {
  nombre: "Ana",
  apellido: "García",
  edad: 30,
  ciudad: "Madrid",
};

console.log(persona);

function describirPersona(persona) {
  return (
    persona.nombre +
    " " +
    persona.apellido +
    " tiene " +
    persona.edad +
    " años y vive en " +
    persona.ciudad
  );
}

console.log(describirPersona(persona));
