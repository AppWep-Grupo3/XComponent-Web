<template>
  <div class="container">
    <div class="premium-container">
      <span class="text"><a href="/plan">PLAN ESTANDAR</a></span>
    </div>

    <form class="form-container" @submit.prevent="validarFormulario">
      <span class="text">REGISTRARSE</span>

      <div class="form-group">
        <label>Nombres Completos:</label>
        <input type="text" class="form-control" v-model="nombres" />
        <span class="error" v-if="errores.nombres">{{ errores.nombres }}</span>
      </div>

      <div class="form-group">
        <label>Apellidos Completos:</label>
        <input type="text" class="form-control" v-model="apellidos" />
        <span class="error" v-if="errores.apellidos">{{ errores.apellidos }}</span>
      </div>

      <div class="form-group">
        <label>Correo Electrónico:</label>
        <input type="email" class="form-control" v-model="email" />
        <span class="error" v-if="errores.email">{{ errores.email }}</span>
      </div>

      <div class="form-group">
        <label>Contraseña:</label>
        <input type="password" class="form-control" v-model="password" />
        <span class="error" v-if="errores.password">{{ errores.password }}</span>
      </div>

      <div class="form-group">
        <label>Confirmar Contraseña:</label>
        <input type="password" class="form-control" v-model="confirmPassword" />
        <span class="error" v-if="errores.confirmPassword">{{ errores.confirmPassword }}</span>
      </div>

      <div class="acceptance">
        <label>
          <input type="checkbox" v-model="aceptaTerminos" />
          <span class="acceptance-text">Acepto los TÉRMINOS Y CONDICIONES</span>
        </label>
        <label>
          <input type="checkbox" v-model="aceptaPoliticas" />
          <span class="acceptance-text">Acepto las POLÍTICAS DE PRIVACIDAD</span>
        </label>
        <span class="error" v-if="errores.aceptaTerminos">{{ errores.aceptaTerminos }}</span>
        <span class="error" v-if="errores.aceptaPoliticas">{{ errores.aceptaPoliticas }}</span>
      </div>

      <button class="btn btn-primary btn-block">Registrarse</button>
    </form>

    <div class="premium-container">
      <span class="text"><a href="/plan">PLAN PREMIUM</a></span>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'register',
  data() {
    return {
      nombres: '',
      apellidos: '',
      email: '',
      password: '',
      confirmPassword: '',
      aceptaTerminos: false,
      aceptaPoliticas: false,
      errores: {},
    };
  },
  methods: {
    validarFormulario(event) {
      this.errores = {};

      if (!this.nombres) this.errores.nombres = 'El campo de nombres es obligatorio.';
      if (!this.apellidos) this.errores.apellidos = 'El campo de apellidos es obligatorio.';
      if (!this.email) this.errores.email = 'El campo de correo electrónico es obligatorio.';
      if (!this.password) this.errores.password = 'El campo de contraseña es obligatorio.';
      if (!this.confirmPassword) this.errores.confirmPassword = 'Debe confirmar la contraseña.';
      if (!this.aceptaTerminos) this.errores.aceptaTerminos = 'Debes aceptar los términos y condiciones.';
      if (!this.aceptaPoliticas) this.errores.aceptaPoliticas = 'Debes aceptar las políticas de privacidad.';

      const emailPattern = /^[a-zA-Z0-9._-]+@(gmail|hotmail)\.com$/;
      if (!emailPattern.test(this.email)) this.errores.email = 'El correo electrónico debe ser de gmail.com o hotmail.com.';

      const passwordPattern = /^(?=.*[A-Z])(?=.*\d)/;
      if (!passwordPattern.test(this.password)) this.errores.password = 'La contraseña debe contener al menos una letra mayúscula y un número.';

      if (this.password !== this.confirmPassword) this.errores.confirmPassword = 'Las contraseñas no coinciden.';

      if (!this.aceptaTerminos) this.errores.aceptaTerminos = 'Debes aceptar los términos y condiciones.';
      if (!this.aceptaPoliticas) this.errores.aceptaPoliticas = 'Debes aceptar las políticas de privacidad.';

      if (Object.keys(this.errores).length === 0) {
        this.registrarse();
        this.$router.push('/iniciarSesion');
      } else {
        alert('Se encontraron errores en el formulario. Por favor, revísalos y corrige.');
      }
    },

    async registrarse(){
      let result= await axios.post("http://localhost:5172/api/v1/user", {
          FirstName: this.nombres,
          LastName: this.apellidos,
          Email: this.email,
          Password: this.password,
        },
         {
        headers: {
          'Content-Type': 'application/json',
        }
        });

        console.warn("resultado", result);
        if(result.status==201){
          alert("Usuario registrado correctamente");
          localStorage.setItem("user-info", JSON.stringify(result.data));
        }
    }

  },
};
</script>
  
  <style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 800px;
    border-radius: 40px;
    border: 2px solid #252525;
    margin: 40px auto;
  }
  
  .premium-container {
    background-color: black;
    height: 60%;
    color: #fff;
    padding: 20px;
    text-align: center;
    margin: 70px;
    border: 3px solid #2934cf;
    border-radius: 40px;
    flex: 1;
    font-family: 'Barlow Semi Condensed', sans-serif;
  }
  
  .form-container {
    width: 30%;
    background-color: #fff;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin: 10px;
    font-family: 'Barlow Semi Condensed', sans-serif;
  }
  
  .text {
    font-size: xx-large;
    font-family: 'Barlow Semi Condensed', sans-serif;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
  }
  
  .form-group label {
    display: flex;
  }
  
  .form-group input {
    height: 25px;
    border: 1px solid #1b1b1b;
    border-radius: 6px;
    font-family: 'Barlow Semi Condensed', sans-serif;
  }

  .acceptance {
    justify-content: space-between;
    margin: 10px 0;
  }
  
  .acceptance label {
    display: flex;
    align-items: center;
  }
  
  .acceptance-text {
    font-family: 'Barlow Semi Condensed', sans-serif;
    color: blue; 
  }
  
  .acceptance-link {
    text-decoration: underline;
  }
  
  .acceptance input[type='checkbox'] {
    margin-right: 5px;
  }
  
  .btn-primary {
    background-color: #007bff; 
    padding: 10px;
    color: #fff; 
    border: none;
    border-radius: 6px;
  }
  
  .btn-primary:hover {
    background-color: #0056b3; 
  }

@media screen and (max-width: 983px) {
    .premium-container{
        display: none;
    }
    .form-container{
        width: 100%;
    }
}

.error {
    display: flex;
  color: red;
  font-size: 14px;
  margin-top: 5px;
}

  </style>
  