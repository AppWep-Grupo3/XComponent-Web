<template>
  <div>
    <h1>Formulario de Producto</h1>
    <form @submit.prevent="enviarFormulario">
      <label for="marca">Marca:</label>
      <input type="text" id="marca" v-model="producto.marca" required>

      <label for="tiempo">Tiempo de Uso (Meses):</label>
      <input type="text" id="tiempo" v-model="producto.tiempoDeUso" required>

      <label for="modelo">Modelo:</label>
      <input type="text" id="modelo" v-model="producto.modelo" required>

      <label for="imagen">Enlace de Imagen:</label>
      <input type="text" id="imagen" v-model="producto.enlaceDeImagen" required>
      <!-- Muestra el mensaje de error -->
      <div v-if="error" class="error-message">{{ error }}</div>

      <button type="submit">Enviar</button>
    </form>

    <transition name="fade" mode="out-in">
      <div :key="confirmation.show" v-if="confirmation.show" class="confirmation-message">
        <div class="confirmation-content">
          <div class="check-icon">✓</div>
          <p>Se envió correctamente</p>
        </div>
        <router-link to="/carrito">Ir al carrito</router-link>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      producto: {
        marca: "",
        tiempoDeUso: "",
        modelo: "",
        enlaceDeImagen: "",
      },
      confirmation: {
        show: false,
      },
      error: null, // Variable para manejar mensajes de error
    };
  },
  methods: {
    enviarFormulario() {
      this.error = null;
      const urlPattern = /^(http|https):\/\/[\w/\-?=%.]+\.[\w/\-?=%.]+$/;

      if (!urlPattern.test(this.producto.enlaceDeImagen)) {
        // Muestra el mensaje de error
        this.error = "El enlace de la imagen no es válido";
        return;
      }

      // Envía los datos al servidor utilizando Axios
      axios.post('http://localhost:3000/producto', this.producto)
          .then(() => {
            this.confirmation.show = true;
            this.producto = {
              marca: "",
              tiempoDeUso: "",
              modelo: "",
              enlaceDeImagen: "",
            };
            // Activa la redirección automática después de 2 segundos (ajusta el tiempo según tus necesidades)
            setTimeout(() => {
              this.confirmation.autoRedirect = true;
            }, 2000);
          });
    },
  },
  watch: {
    'confirmation.autoRedirect': function (newVal) {
      if (newVal) {
        // Redirige automáticamente a la pantalla de inicio
        this.$router.push('/home'); // Ajusta la ruta de redirección según tu configuración
      }
    },
  },
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.error-message {
  color: red; /* Estilos para los mensajes de error */
}
</style>