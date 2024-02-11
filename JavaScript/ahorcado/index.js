let palabras = [
  "hola",
  "mundo",
  "javascript",
  "programacion",
  "computadora",
  "teclado",
  "raton",
  "monitor",
  "pantalla",
  "ventana",
  "puerta",
  "silla",
  "mesa",
  "cama",
  "almohada",
  "cobija",
  "cortina",
  "foco",
];

let intentos = 5;
let palabra = palabras[Math.floor(Math.random() * (palabras.length - 1))];
let palabraOculta = palabra.replace(/[a-zA-Z]/g, "_");
let letrasUsadas = [];

document.getElementById("palabra").innerText = palabraOculta
  .split("")
  .join(" ");

function jugar() {
  let letra = document.getElementById("letra").value;
  letrasUsadas.push(letra);
  if (palabra.includes(letra)) {
    let palabraOcultaArray = palabraOculta.split("");
    for (let i = 0; i < palabra.length; i++) {
      if (palabra[i] === letra) {
        palabraOcultaArray[i] = letra;
      }
    }
    palabraOculta = palabraOcultaArray.join("");
    document.getElementById("palabra").innerText = palabraOculta
      .split("")
      .join(" ");
    if (palabraOculta === palabra) {
      alert("Ganaste!");
    }
  } else {
    alert("No acertaste");
    intentos--;
    if (intentos === 0) {
      alert("Perdiste");
      location.reload();
    }
    document.getElementById("intentos").innerText = intentos;
  }
  document.getElementById("letra").value = "";
  document.getElementById("letra").focus();
  console.log(letrasUsadas);
}

function reiniciar() {
  intentos = 5;
  palabra = palabras[Math.floor(Math.random() * (palabras.length - 1))];
  palabraOculta = palabra.replace(/[a-zA-Z]/g, "_");
  letrasUsadas = [];
  document.getElementById("palabra").innerHTML = palabraOculta
    .split("")
    .join(" ");
  document.getElementById("intentos").innerText = intentos;
}
