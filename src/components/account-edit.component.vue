<template>
    <form @submit.prevent="guardarCambios">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" v-model="nombre"/>
  
      <label for="apellido">Apellido:</label>
      <input type="text" id="apellido" v-model="apellido" />

      <label for="password">Contraseña Actual</label>
      <input type="text" id="password" v-model="password" />

      <label for="newPassword">Nueva Contraseña</label>
      <input type="text" id="newPassword" v-model="newPassword" />
  
      <button type="submit">Guardar Cambios</button>
    </form>

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
  };
},

methods: {
  async guardarCambios() {
    if (this.password !== this.userInfo.password) {
      alert("La contraseña actual es incorrecta");
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
        alert("Cambios guardados con éxito");
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push('/home');
      }
    } catch (error) {
      console.log("Error al guardar los cambios:", error);
    }
  },
},
}
</script>

<style scoped>
*{
    display: block;
    margin: 10px;
    padding: 0;
    box-sizing: border-box;
}
</style>