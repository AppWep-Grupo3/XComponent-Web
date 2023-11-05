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
      const urlPattern = /^(https?|ftp):\/\/\S*$/;

      if (!urlPattern.test(this.producto.enlaceDeImagen)) {
        // Muestra el mensaje de error
        this.error = "El enlace de la imagen no es válido";
        return;
      }

      // Envía los datos al servidor utilizando Axios
      axios.post('https://xcomponentapirest.onrender.com/api/v1/product', this.descuento)
          .then(() => {
            this.confirmation.show = true;
            this.descuento = {
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

/* Estilo para el contenedor principal */
div {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

/* Estilo para el encabezado del formulario */
h1 {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

/* Estilo para las etiquetas de los campos de entrada */
label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}

/* Estilo para los campos de entrada */
input {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
}

/* Estilo para el mensaje de error */
.error-message {
  color: #d9534f;
  font-size: 14px;
  margin-top: 5px;
}

/* Estilo para el botón de enviar */
button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #337ab7;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 18px;
  cursor: pointer;
}

/* Estilo para el mensaje de confirmación */
.confirmation-message {
  text-align: center;
  background-color: #5bc0de;
  color: #fff;
  padding: 20px;
  border-radius: 5px;
}

.confirmation-content {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.check-icon {
  font-size: 40px;
  margin-right: 10px;
}

/* Estilo para el enlace al carrito */
a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  background-color: #333;
  padding: 10px 20px;
  display: inline-block;
  border-radius: 3px;
  margin-top: 20px;
}
</style>

