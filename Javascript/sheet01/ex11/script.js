function addElement() {
  const text = document.getElementById("textInput").value;
  if (text == "") {
    alert("El texto no puede estar vacío");
  } else {
    const list = document.getElementById("list");
    const item = document.createElement("li");
    item.textContent = text;
    list.appendChild(item);
  }
}
function changeColor() {
  const magia = document.getElementById("magia");
  magia.style.backgroundColor = getRandomColor();
  magia.style.color = getRandomColor();
}
function volverColor() {
  const magia = document.getElementById("magia");
  magia.style.backgroundColor = getRandomColor();
  magia.style.color = getRandomColor();
}

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
