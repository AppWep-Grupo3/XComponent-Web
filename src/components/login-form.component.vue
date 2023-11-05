<template>
  <div class="container1">
    <div class="login-form">
      <form class="form-container" @submit.prevent="login">
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
        </div>
        <button class="btn btn-warning btn-block">
            Iniciar Sesión
          </button>
      </form>
      <p>¿No tienes una cuenta? <router-link to="/register">Regístrate aquí</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex'; // Importa mapActions desde Vuex

export default {
  name: 'iniciarSesion',
  data() {
    return {
      correo: '',
      contrasena: '',
    };
  },
  methods: {
    ...mapActions(['setUser']), // Importa la acción setUser desde Vuex

    async login(){
      let result = await axios.get(
        'https://xcomponentapirest.onrender.com/api/v1/user/find?email='+this.correo+'&password='+this.contrasena
      )

      if(result.status==200 && result.data.length>0){
          alert("Usuario inicio sesión correctamente");
          localStorage.setItem("user-info", JSON.stringify(result.data[0]));
          
          

// Actualiza el estado en Vuex
          this.$store.dispatch('setUser', result.data[0]);

// Redirige al usuario a otra página

          this.$router.push('/home');
        }
        else {
          alert("Usuario o contraseña incorrectos");
        }
    }
  }
};
</script>

<style>
.container1 {
  display: flex;
  height: 100vh;
  background-image: url("https://cdn.discordapp.com/attachments/1044480806938230784/1157370826740477972/image.png?ex=65185d14&is=65170b94&hm=ceb4c19702d5231caa83cacae4c6487613c6caa835ce993c0969555397004cb6&"); ;
  background-size: cover;
  background-repeat: no-repeat;
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
  .login-form {
    width: 80%;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
}
</style>
