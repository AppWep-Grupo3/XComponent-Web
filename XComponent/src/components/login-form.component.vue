<template>
    <div class="container">
      <div class="login-form">
        <form @submit="iniciarSesion">
          <div class="welcome-message">
            <h2>Bienvenidos a XComponents</h2>
            <img src="https://i.postimg.cc/MGbz58t3/pexels-andrey-matveev-11443548.jpg" alt="Imagen de ejemplo" style="width: 100px; height: 100px;" />
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
  .container {
    display: flex;
    background-image: url('https://i.postimg.cc/MGbz58t3/pexels-andrey-matveev-11443548.jpg');
    background-size: cover;
    height: 100vh;
  }
  
  .welcome-message {
    flex: 1;
    color: #fff;
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
  