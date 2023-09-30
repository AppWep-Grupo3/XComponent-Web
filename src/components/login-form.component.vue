<template>
  <div class="container1">
    <div class="login-form">
      <form @submit="iniciarSesion">
        <div class="welcome-message">
          <h2>Bienvenidos a XComponents</h2>
          <img src="https://cdn.discordapp.com/attachments/1044480806938230784/1155039752442097714/image.png" alt="Imagen de ejemplo" style="width: 200px; height: 100px;" />
        </div>
        <div>
          <label for="correo">Correo Electrónico:</label>
          <input
            type="email"
            id="correo"
            v-model="correo"
            name="correo"
            rules="required|email"
          />
          <ErrorMessage name="correo" />
        </div>
        <div>
          <label for="contrasena">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            v-model="contrasena"
            name="contrasena"
            rules="required"
          />
          <ErrorMessage name="contrasena" />
        </div>
        <button type="submit" class="buton">
          Iniciar Sesión
        </button>
      </form>
      <p>¿No tienes una cuenta? <router-link to="/register">Regístrate aquí</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      correo: '',
      contrasena: '',
    };
  },
  methods: {
    iniciarSesion() {
      if (this.$refs.form.validate()) {
        console.log('Formulario de inicio de sesión válido.');
      } else {
        console.log('Formulario de inicio de sesión no válido. Revise los errores.');
      }
    },
  },
};
</script>

<style>
.container1 {
  display: flex;
  height: 100vh;
  background-image: url("https://cdn.discordapp.com/attachments/1044480806938230784/1157370826740477972/image.png?ex=65185d14&is=65170b94&hm=ceb4c19702d5231caa83cacae4c6487613c6caa835ce993c0969555397004cb6&"); ;
  background-size: cover; /* Añadir esta línea */
  background-repeat: no-repeat; /* Evitar que se repita la imagen */
}

.welcome-message {
  flex: 1;
  color: #070707;
  text-align: center;
}

.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

form {
  display: flex;
  flex-direction: column;
  align-items: left;
}

label {
  margin-bottom: 10px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button[type="submit"] {
  width: auto;
  background-color: #FFC700;
  color: #fff;
  padding: 10px 5px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

p {
  text-align: center;
  margin-top: 10px;
}

.buton {
  align-items: center;
}

router-link {
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
}

router-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  /* Estilos para pantallas pequeñas (responsive) */
  .login-form {
    width: 80%;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
}
</style>
