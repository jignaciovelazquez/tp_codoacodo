(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

document.getElementById("CONTACT_FORM").addEventListener("submit", () => {
  document.getElementById("SEND").disabled = true;

  if (validarCampos()) {
    MostrarAlerta(
      "alert-danger",
      `Debes completar todos los campos para poder ser contactado por nuestro equipo, vamos, intentalo de nuevo... `
    );
    CerrarAlerta();
    return;
  } else if (validarTelefono()) {
    MostrarAlerta(
      "alert-danger",
      `el Nro de Telefono no cumple con el criterio establecido, debes verificarlo y corregirlo.`
    );
    CerrarAlerta();
    return;
  } else if (validarMail()) {
    MostrarAlerta(
      "alert-danger",
      `el Mail no cumple con el criterio establecido, debes verificarlo y corregirlo.`
    );
    CerrarAlerta();
    return;
  } else {
    let fecha = document.getElementById("FECHA").value;
    let hora = document.getElementById("EDIFPROGRA").value;
    let medio = document.getElementById("CALL").checked
      ? "llamada"
      : "WhatsApp";
    MostrarAlerta(
      "alert-success",
      `Te estaremos contactando a traves de ${medio} el dia ${fecha} entre ${hora}`
    );
    CerrarAlerta();
  }
});

function validarCampos() {
  if (
    document.getElementById("NAME").value == "" ||
    document.getElementById("SURNAME").value == "" ||
    document.getElementById("PHONE").value == "" ||
    document.getElementById("ADDRESS").value == "" ||
    document.getElementById("MAIL").value == "" ||
    document.getElementById("EDIFPROGRA").value == "" ||
    document.getElementById("FECHA").value == "" ||
    document.getElementById("MESSAGE").value == ""
  ) {
    return true;
  } else {
    return false;
  }
}

function validarTelefono() {
  let telefono = document.getElementById("PHONE").value.toString();
  if (
    telefono[0] == "9" &&
    telefono[1] == "1" &&
    telefono[2] == "1" &&
    telefono.length != 11
  ) {
    return true;
  } else if (
    telefono[0] == "1" &&
    telefono[1] == "1" &&
    telefono.length != 10
  ) {
    return true;
  } else if (telefono[0] != "1" && telefono[0] != "9" && telefono.length != 8) {
    return true;
  } else {
    return false;
  }
}

function validarMail() {
  let mail = document.getElementById("MAIL").value;
  if (!mail.includes("@")) {
    return true;
  } else if (!mail.includes(".com")) {
    return true;
  } else {
    return false;
  }
}

function MostrarAlerta(color, mensaje) {
  const ContenedorPadre = document.getElementById("ALERTA");
  ContenedorPadre.innerHTML = "";

  const alertaNueva = document.createElement("DIV");
  alertaNueva.innerHTML = `<div id="alert" class="alert ${color} d-flex align-items-center" role="alert">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>
  <div>${mensaje}</div>
</div>`;
  ContenedorPadre.append(alertaNueva);
}

function CerrarAlerta() {
  setTimeout(function () {
    // Closing the alert
    $("#alert").alert("close");
    document.getElementById("SEND").disabled = false;
  }, 10000);
}

function borrar() {}
