function resetErrorMessages() {
    let errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element) => {
        element.innerText = "";
    });
}
function displayErrorMessage(elementId, message) {
    let errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}
function isValidData(data, pattern) {
    let dataPattern = pattern;
    return dataPattern.test(data);
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const datePattern = /(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])/;
const textPattern = /^[A-Za-zÑñÁáÉéÍíÓóÚúü]+$/;


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formRegistro");

    form.addEventListener("submit", (event) => {
        // Evitar que se envíe el formulario automáticamente
        event.preventDefault();

        // Resetear los mensajes de error
        resetErrorMessages();

        // Validar los campos
        let nombre = document.getElementById("nombre").value.trim();
        let apellido = document.getElementById("apellido").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let fechaDeNacimiento = document.getElementById("fechaDeNacimiento").value.trim();
        let pais = document.getElementById('pais').selectedIndex;
        let terminos = document.querySelector('input[id="terminos"]:checked');



        let isValid = true;


        if (nombre === "") {
            displayErrorMessage("nombreError", "Ingrese su nombre.");
            isValid = false;
        } else if (!isValidData(nombre, textPattern)) {
            displayErrorMessage("nombreError", "El nombre no es válido.");
            isValid = false;
        }

        if (apellido === "") {
            displayErrorMessage("apellidoError", "Ingrese su apellido.");
            isValid = false;
        } else if (!isValidData(apellido, textPattern)) {
            displayErrorMessage("apellidoError", "El apellido no es válido.");
            isValid = false;
        }

        if (email === "") {
            displayErrorMessage("emailError", "Ingrese un correo electrónico.");
            isValid = false;
        } else if (!isValidData(email, emailPattern)) {
            displayErrorMessage("emailError", "Ingrese un correo electrónico válido.");
            isValid = false;
        }

        if (password === "") {
            displayErrorMessage("passwordError", "Ingrese una contraseña.");
            isValid = false;
        } else if (password.length < 8) {
            displayErrorMessage("passwordError", "La contraseña debe tener al menos 8 caracteres.");
            isValid = false;
        }

        if (fechaDeNacimiento === "") {
            displayErrorMessage("fechaDeNacimientoError", "Ingrese una fecha.");
            isValid = false;
        } else if (!isValidData(fechaDeNacimiento, datePattern)) {
            console.log(fechaDeNacimiento);
            displayErrorMessage("fechaDeNacimientoError", "Ingrese una fecha válida.");
            isValid = false;
        }

        if (pais == 0) {
            displayErrorMessage("paisError", "Selecione un país.");
            isValid = false;
        }

        if (terminos == null) {
            displayErrorMessage("terminosError", "Debe aceptar los términos y condiciones.");
            isValid = false;
        }

        if (isValid) {
            alert("¡Formulario enviado correctamente!");
            form.reset();
        }
    });
});