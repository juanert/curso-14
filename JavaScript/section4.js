//LOCALSTORAGE
/*
  El localstorage es una forma de almacenar datos en el navegador del usuario,
  estos datos no se eliminan al cerrar el navegador, pero si se pueden eliminar
  si el usuario lo desea.
*/

function saveData() {
  //Obtenemos el valor del input
  let task = document.getElementById("task").value;
  //Creamos un array para guardar las tareas
  let tasks = [];
  //Si ya existe la tarea, la obtenemos y la guardamos en el array
  if (localStorage.getItem("task")) {
    //Obtenemos las tareas
    tasks = JSON.parse(localStorage.getItem("task"));
  }
  //Agregamos la nueva tarea
  tasks.push(task);
  //Guardamos el array de tareas
  localStorage.setItem("task", JSON.stringify(tasks));
  //Mostramos las tareas
  showData();
}

function showData() {
  let tasks = JSON.parse(localStorage.getItem("task"));
  let list = document.getElementById("list");
  list.innerHTML = "";
  tasks.map((task) => {
    let li = document.createElement("li");
    li.innerHTML = task;
    list.appendChild(li);
  });
}

showData();

// Session Storage
/*
  El session storage es similar al local storage, pero este se elimina al cerrar
  el navegador.
*/

function saveDataSession() {
  //Obtenemos el valor del input
  let task = document.getElementById("task").value;
  //Creamos un array para guardar las tareas
  let tasks = [];
  //Si ya existe la tarea, la obtenemos y la guardamos en el array
  if (sessionStorage.getItem("task")) {
    //Obtenemos las tareas
    tasks = JSON.parse(sessionStorage.getItem("task"));
  }
  //Agregamos la nueva tarea
  tasks.push(task);
  //Guardamos el array de tareas
  sessionStorage.setItem("task", JSON.stringify(tasks));
  //Eliminar un item
  //Mostramos las tareas
  showDataSession();
}

function showDataSession() {
  let tasks = JSON.parse(sessionStorage.getItem("task"));
  let list = document.getElementById("listSession");
  list.innerHTML = "";
  tasks.map((task) => {
    let li = document.createElement("li");
    li.innerHTML = task;
    list.appendChild(li);
  });
}

showDataSession();

// Cookies
/*
  Las cookies son pequeños archivos de texto que se guardan en el navegador
  del usuario, estas cookies tienen un tiempo de vida y pueden ser eliminadas
  por el usuario.
*/

function saveDataCookie() {
  //Obtenemos el valor del input
  let task = document.getElementById("task").value;
  //Creamos un array para guardar las tareas
  let tasks = [];
  //Si ya existe la tarea, la obtenemos y la guardamos en el array
  if (getCookie("task")) {
    //Obtenemos las tareas
    tasks = JSON.parse(getCookie("task"));
  }
  //Agregamos la nueva tarea
  tasks.push(task);
  //Guardamos el array de tareas
  setCookie("task", JSON.stringify(tasks), 1);
  //Mostramos las tareas
  showDataCookie();
}

function showDataCookie() {
  let tasks = JSON.parse(getCookie("task"));
  let list = document.getElementById("listCookie");
  list.innerHTML = "";
  tasks.map((task) => {
    let li = document.createElement("li");
    li.innerHTML = task;
    list.appendChild(li);
  });
}

showDataCookie();

function setCookie(name, value, days) {
  let date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  //Creamos el nombre de la cookie
  let cookie = name + "=";
  //Obtenemos las cookies
  let decodedCookie = decodeURIComponent(document.cookie);
  //Separamos las cookies
  let ca = decodedCookie.split(";");
  //Buscamos la cookie
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    //Eliminamos los espacios
    while (c.charAt(0) == " ") {
      //Eliminamos el primer caracter
      c = c.substring(1);
    }
    //Si encontramos la cookie, retornamos el valor
    if (c.indexOf(cookie) == 0) {
      return c.substring(cookie.length, c.length);
    }
  }
  return "";
}

/*
  Ejercicio:
  Crea un register de usuarios, donde se almacene un array de objetos que represente
  un usuario y contengan el nombre, correo y contraseña

  Debes tener dos variables en el localstorage, una para almecenar todos los usuarios
  y otra para almacenar el usuario actual.

  Crea una pantalla donde puedas registrar un usuario, otra donde puedas loguearte,
  otra donde puedas cerrar sesion, ademas de una pantalla de bienvenida.

  Si el usuario no existe, mostrar un mensaje de error
  Si el usuario existe, redirigir a la pantalla de bienvenida
  Si el usuario no esta logueado, no podra ver la pantalla de bienvenida

  Fecha de entrega: 04/03/24
*/
