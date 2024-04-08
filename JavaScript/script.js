const tablero = document.getElementById("tablero");
const turno = document.getElementById("jugador");
const mensajes = document.getElementById("mensajes");

let jugadorActual = "X";
let casillas = Array(9).fill("");

// Función para marcar una casilla
function marcarCasilla(casilla) {
  casillas[casilla - 1] = jugadorActual;
  document.getElementById(casilla).textContent = jugadorActual;
  comprobarGanador();
  cambiarTurno();
}

// Función para cambiar de turno
function cambiarTurno() {
  jugadorActual = jugadorActual === "X" ? "O" : "X";
  turno.textContent = jugadorActual;
}

// Función para comprobar si hay un ganador
function comprobarGanador() {
  const combinacionesGanadoras = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  for (const combinacion of combinacionesGanadoras) {
    if (
      casillas[combinacion[0] - 1] === casillas[combinacion[1] - 1] &&
      casillas[combinacion[1] - 1] === casillas[combinacion[2] - 1] &&
      casillas[combinacion[0] - 1] !== ""
    ) {
      mostrarMensaje(`¡${jugadorActual} ha ganado!`);
      reiniciarJuego();
      return;
    }
  }

  // Si no hay ganador y todas las casillas están llenas, es un empate
  if (!casillas.includes("")) {
    mostrarMensaje("Empate");
    reiniciarJuego();
  }
}

// Función para mostrar un mensaje
function mostrarMensaje(mensaje) {
  mensajes.textContent = mensaje;
}

// Función para reiniciar el juego
function reiniciarJuego() {
  casillas = Array(9).fill("");
  jugadorActual = "X";
  turno.textContent = jugadorActual;
  mensajes.textContent = "";

  for (let i = 1; i <= 9; i++) {
    document.getElementById(i).textContent = "";
  }
}

// Añadir eventos a las casillas
for (let i = 1; i <= 9; i++) {
  document.getElementById(i).addEventListener("click", () => {
    if (casillas[i - 1] === "") {
      marcarCasilla(i);
    }
  });
}

// Iniciar el juego
reiniciarJuego();