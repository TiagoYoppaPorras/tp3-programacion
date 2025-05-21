function validar() {
      let nombre = document.getElementById("nombre").value.trim();
      let apellido = document.getElementById("apellido").value.trim();
      let edad = parseInt(document.getElementById("edad").value);
      let altura = parseInt(document.getElementById("altura").value);
      let correo = document.getElementById("correo").value.trim();
      let mensaje = document.getElementById("mensaje");

      if (nombre === "" || nombre.length > 50) {
        mensaje.textContent = "El nombre no puede estar vacío ni tener más de 50 caracteres.";
        mensaje.style.color = "red";
        return;
      }

      if (apellido === "" || apellido.length > 50) {
        mensaje.textContent = "El apellido no puede estar vacío ni tener más de 50 caracteres.";
        mensaje.style.color = "red";
        return;
      }

      if (isNaN(edad) || edad <= 0 || edad < 18) {
        mensaje.textContent = "La edad debe ser mayor a 0.";
        mensaje.textContent = "La edad debe ser mayor o igual a 18 años.";
        mensaje.style.color = "red";
        return;
      }
      

      if (isNaN(altura) || altura < 0 || altura > 230) {
        mensaje.textContent = "La altura debe estar entre 0 y 230 cm.";
        mensaje.style.color = "red";
        return;
      }

      if (correo === "" || !correo.includes("@")) {
        mensaje.textContent = "El correo debe contener un '@' y no estar vacío.";
        mensaje.style.color = "red";
        return;
      }

      mensaje.textContent = "Todos los datos son válidos.";
      mensaje.style.color = "green";
    }