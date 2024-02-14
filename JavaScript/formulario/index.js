/*
  Crea un formulario de registro con los siguientes campos:
  - Nombre
  - Apellido
  - Email
  - Teléfono
  - Contraseña
  - Confirmar contraseña
  - Botón de enviar

  Valida que todos los campos estén llenos y que todos los campos esten correctamente llenados,
  Ademas debes tener en cuenta que una contraseña (Para este sistema) debe tener al menos
  - 1 letra en mayuscula
  - 1 letra en minuscula
  - 1 caracter especial (!.*_-)
  - 1 numero
  - 8 caracteres como mínimo
  - No puede contener espacios

  Si algún campo no está lleno o no está correctamente llenado, debes mostrar un mensaje de error
  El formulario debe ser responsive además de tener un diseño agradable.
  */

function validate() {
  /*Get values from the inputs */
  const name = document.getElementById("name").value;
  const last_name = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const confirm_password = document.getElementById("confirmPassword").value;

  /*Regular expressions to validate inputs*/
  const regex_name = /^[a-zA-ZáéíóúÁÉÍÓÚ]+$/;
  const regex_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const regex_phone = /^\+\d{11,16}$/;
  const regex_password =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!.*_-]).{8,}$/;

  /*Validate inputs*/
  if (!regex_name.test(name)) {
    document.getElementById("nameMessage").innerHTML = "El nombre no es válido";
  }

  if (!regex_name.test(last_name)) {
    document.getElementById("lastnameMessage").innerHTML =
      "El apellido no es válido";
  }

  if (!regex_email.test(email)) {
    document.getElementById("emailMessage").innerHTML = "El email no es válido";
  }

  if (!regex_phone.test(phone)) {
    document.getElementById("phoneMessage").innerHTML =
      "El teléfono no es válido";
  }

  if (!regex_password.test(password)) {
    document.getElementById("passwordMessage").innerHTML =
      "La contraseña no es válida";
  }

  if (password !== confirm_password && confirm_password !== "") {
    document.getElementById("confirmPasswordMessage").innerHTML =
      "Las contraseñas no coinciden";
  }

  /*If all inputs are valid, show success message*/
  if (
    regex_name.test(name) &&
    regex_name.test(last_name) &&
    regex_email.test(email) &&
    regex_phone.test(phone) &&
    regex_password.test(password) &&
    password === confirm_password
  ) {
    document.getElementById("nameMessage").innerHTML = "";
    document.getElementById("lastnameMessage").innerHTML = "";
    document.getElementById("emailMessage").innerHTML = "";
    document.getElementById("phoneMessage").innerHTML = "";
    document.getElementById("passwordMessage").innerHTML = "";
    document.getElementById("confirmPasswordMessage").innerHTML = "";
    document.getElementById("message").innerHTML =
      "Formulario enviado con éxito";
  }
}

document.getElementById("submit").addEventListener("click", validate);