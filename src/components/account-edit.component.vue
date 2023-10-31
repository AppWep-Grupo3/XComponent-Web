<template>

<div class="title">
  <h2>Perfil</h2>
</div>

<div class="subtitle">
  <h5>Editar Perfil <i class="pi pi-pencil icon"></i></h5>
</div>

<div class="container">
  <form @submit.prevent="guardarCambios">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" v-model="nombre"/>
  
      <label for="apellido">Apellidos:</label>
      <input type="text" id="apellido" v-model="apellido" />

      <label for="password">Contraseña Actual</label>
      <input type="password" id="password" v-model="password" />

      <label for="newPassword">Nueva Contraseña</label>
      <input type="password" id="newPassword" v-model="newPassword" />
  
      <div class="button-container">
        <button type="submit">Guardar Cambios</button>
        <router-link to="/home" class="cancel-button"><button type="button">Volver</button></router-link>
      </div>

    </form> 
</div>

<div v-if="showSuccessMessage" class="overlay">
    <div class="message-box">
      <button @click="closeSuccessMessage" class="close-button">X</button>
      <i class="pi pi-check-circle"></i>
      <p>Perfil actualizado</p>
    </div>
  </div>

  <div v-if="showErrorMessage" class="overlay error-overlay">
    <div class="message-box error-box">
      <button @click="closeErrorMessage" class="close-button">X</button>
      <i class="pi pi-times-circle"></i>
      <p>Datos incorrectos</p>
    </div>
  </div>


</template>

<script>
import axios from 'axios';

export default{
name: 'accountEdit',

data() {
  const userInfoString = localStorage.getItem("user-info");
  const userInfo = userInfoString ? JSON.parse(userInfoString) : {};

  return {
    userId: userInfo.id || null,
    nombre: userInfo.nombre || '',
    apellido: userInfo.apellido || '',
    password: '',
    newPassword: '',
    userInfo: userInfo,
    showSuccessMessage: false,
    showErrorMessage: false,
  };
},

methods: {
  async guardarCambios() {
    if (this.password !== this.userInfo.password) {
      this.showErrorMessage = true;
      return;
    }

    try {
      let result = await axios.put(`http://localhost:3000/users/${this.userId}`, {
        nombre: this.nombre,
        apellido: this.apellido,
        email: this.userInfo.email,
        password: this.newPassword,
      });

      if (result.status === 200) {
        this.showSuccessMessage = true;
        localStorage.setItem("user-info", JSON.stringify(result.data));
      }
    } catch (error) {
      console.log("Error al guardar los cambios:", error);
    }
  },
  closeSuccessMessage() {
      this.showSuccessMessage = false;
    },
  closeErrorMessage() {
    this.showErrorMessage = false;
  },
},
}
</script>

<style scoped>

*{
  font-family: 'Barlow Semi Condensed', sans-serif;
}

.container{
  width: 80%;
  max-width: 1200px;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid #3b3b3b;
  border-radius: 15px;
}

.title{
  width: 90%;
  font-size: 40px;
  margin: 20px 0px 0px 100px;; 
  border-bottom: 1px solid #3b3b3b;
}

.subtitle{
  width: 90%;
  font-size: 30px;
  margin: 20px 0px 0px 180px;
}

.icon{
  margin-left: 10px; 
}

label{ margin: 0; }

input{
  width: 100%;
  padding: 10px 18px;
  margin: 0px 0px 20px;
  border-style: none;
  border-bottom: 2px solid #2c2c2c;
}

input:focus{
  outline: none;
}

.button-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

button {
  flex: 1;
  max-width: 40%;
  background: #FBCA1F;
  font-family: inherit;
  padding: 0.6em 1.3em;
  font-weight: 900;
  font-size: 16px;
  border: 2px solid black;
  border-radius: 0.4em;
  margin: 0.5em;
  box-shadow: 0.1em 0.1em;
  color: #2c2c2c;
}

.cancel-button button {
  max-width: 100%;
}

button:hover {
  transform: translate(-0.05em, -0.05em);
  box-shadow: 0.15em 0.15em;
}

button:active {
  transform: translate(0.05em, 0.05em);
  box-shadow: 0.05em 0.05em;
}

@media (max-width: 768px) {
  .button-container {
    flex-direction: column;
    align-items: center;
  }
}


.overlay, .error-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  .message-box {
    background: #4CAF50; 
    padding: 30px; 
    text-align: center;
    color: #000000;
    font-size: 25px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border: 2px solid #000000;
    position: relative; 
  }

  .close-button {
    background: none;
    border: none;
    color: #000000;
    font-size: 15px;
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
  }

  .pi, .pi-error{
    font-size: 40px;
  }

.error-box {
  background: #FF5733; 
  color: #000000; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 2px solid #000000;
}

</style>