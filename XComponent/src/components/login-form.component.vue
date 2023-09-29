<template>
    <div class="container1">
      <img src="https://img.freepik.com/fotos-premium/espacio-trabajo-computadora-portatil-manos-nina-ordenador-plano_264197-16134.jpg" alt="">
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
          <button type="submit" class="buton" style="margin: 0 auto;">
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
        // Realiza la lógica de inicio de sesión aquí si el formulario es válido
        if (this.$refs.form.validate()) {
          console.log('Formulario de inicio de sesión válido.');
          // Llamar a una API o realizar otras acciones de inicio de sesión aquí
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
  }
  
  .welcome-message {
    flex: 1;
    color: #070707;
    text-align: center;
  }
  
  .login-form {
    position: absolute;
    top: 28%;
    right: 50px;
    margin-right: 60px;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
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
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
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
  </style>
  