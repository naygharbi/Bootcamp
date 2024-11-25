function generarNumeroAleatorio() {
  let min = 1;
  let max = 100;

  const rnd = parseInt(Math.random() * (max - min) + min);
  console.log("RND: ", rnd);
  return rnd;
}

const buton = document.getElementById("rnd_button");
console.log(buton);
buton.addEventListener("click", function () {
  const result = generarNumeroAleatorio();
  const parraf = document.getElementById("result");
  parraf.innerText = `El numero aleatorio es:${result}`;
});
//console.log(generarNumeroAleatorio());
