const min = 1;
const max = 100;
const numeroAdivinar = parseInt(Math.random() * 101);
//console.log("Adivinar: ", numeroAdivinar);

function adivinarNumero(input) {
  if (input > numeroAdivinar) {
    let p = document.getElementById("estado");
    p.style.color = "red";
    return "El numero es menor";
  } else if (input < numeroAdivinar) {
    let p = document.getElementById("estado");
    p.style.color = "red";
    return "El numero es mayor";
  } else {
    let p = document.getElementById("estado");
    p.style.color = "green";
    return "Acierto!";
  }
}
const buton = document.getElementById("boton");

buton.addEventListener("click", function () {
  const input = document.getElementById("input").value;
  let msg = adivinarNumero(input);
  let result = document.getElementById("estado");
  result.textContent = msg;
});
