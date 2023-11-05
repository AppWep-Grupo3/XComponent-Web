<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-black">
      <a class="navbar-brand" href="#">
        <img alt="logo" src="https://cdn.discordapp.com/attachments/1044480806938230784/1155039752442097714/image.png" height="70"  class="ml-3" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavMobile"
        aria-controls="navbarNavMobile"
        aria-expanded="false"
        :aria-label="mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'"
        @click="toggleMobileMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
     
            <div class="navbar-collapse" :class="{ show: mobileMenuOpen }" id="navbarNavMobile">
              <ul class="navbar-nav">
                <li v-for="(item, index) in menuItems" :key="index" class="nav-item">
                  <router-link :to="item.route" class="nav-link" @click="closeMobileMenu">
                    <i :class="item.icon"></i>
                    {{ item.label }}
                  </router-link>
                </li>
                
                <li class="nav-item">
                  <router-link to="/plan" class="nav-link" @click="closeMobileMenu">
                    Planes
                  </router-link>
                </li>

              </ul>
              <ul class="navbar-nav ml-auto">
               <!-- Si user-data no existe o está vacío, muestra "Iniciar Sesión" y "Registrarse" -->
                  <li class="nav-item" v-if="!localStorageUserData">
                    <router-link to="register" class="nav-link" @click="closeMobileMenu">
                      <i class="pi pi-user"></i>
                      Registrarse
                    </router-link>
                  </li>
                  <li class="nav-item" v-if="!localStorageUserData">
                    <router-link to="iniciarSesion" class="nav-link" @click="closeMobileMenu">
                      <i class="pi pi-user"></i>
                      Iniciar Sesión
                    </router-link>
                  </li>

                  <!-- Si user-data existe y no está vacío, muestra el nombre de usuario -->
                  <li class="nav-item" v-if="localStorageUserData">
                <span class="nav-link user-name large-bold"> <!-- Agrega las clases "user-name" y "large-bold" -->
                  Bienvenid@    {{ localStorageUserData}}.
                 </span>
                    </li>

                <li class="nav-item" style="margin-right: 20px;">
                  <router-link to="/car">
                  <pv-button label="Carrito" icon="pi pi-shopping-cart" class="custom-button" />
                  </router-link>
                </li>
              </ul>
            </div>
    </nav>
  </div>
</template>

<script>
import router from '../../router';
import { mapActions } from 'vuex'; // Importa mapActions desde Vuex

export default {
  name: "header-section",
  data() {
    
    return {
      menuItems: [
        { label: "Inicio", route: "/", icon: "pi pi-home" },
        { label: "Cuenta", route: "/accountEdit", icon: "pi pi-th-large" },
        { label: "Contacto", route: "/contacto", icon: "pi pi-envelope" }
      ],
      mobileMenuOpen: false
    };
  },
  components: { router },


  beforeCreate() {//Esto se ejecuta antes de que se cree el componente
    // Carga la información del usuario desde el LocalStorage
    this.$store.dispatch('setUser', JSON.parse(localStorage.getItem('user-info')));
  },


  computed: {
    localStorageUserData() {
    // Obtén y parsea la variable "user-data" del almacenamiento local
    const userData = JSON.parse(localStorage.getItem('user-info'));
    const nameComplete = userData ? userData.firstName + " " + userData.lastName[0] : null;
   // console.log($store.state.user.firstName);
    
   /// return nameComplete;
    return this.$store.state.user.firstName+" "+this.$store.state.user.lastName[0];
  }
  },
  methods: {
    ...mapActions(['setUser']), // Importa la acción setUser desde Vuex
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    }
  }
};
</script>

<style scoped>
/* Estilos CSS personalizados para el menú */
.navbar {
  background-color: #333;
}

.navbar-brand img {
  max-height: 50px;
}

.navbar-toggler-icon {
  color: white;
}

.nav-link {
  color: white;
  margin-right: 20px;
}

.nav-link i {
  margin-right: 5px;
}
.user-name {
  font-size: 18px; /* Ajusta el tamaño de fuente a tu preferencia */
}

.large-bold {
  font-weight: bold; /* Hace que el texto sea en negrita */
}


.custom-button{
  background-color: #FFC700; /* Cambiar a amarillo */
  color: white; /* Cambiar a blanco */
  border: none; /* Eliminar borde si es necesario */
}

/* Estilos para pantallas pequeñas (responsive) */
@media (max-width: 768px) {
  .navbar-collapse {
    background-color: #333;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 1;
    transition: all 0.3s;
    display: none;
  }

  .navbar-toggler {
    margin-top: 10px;
  }

  .nav-item {
    text-align: center;
    margin-bottom: 10px;
  }

  .navbar-brand img {
    max-height: 40px;
  }

  /* Mostrar el menú de hamburguesa cuando se hace clic en el botón de hamburguesa */
  .navbar-toggler:focus + .navbar-collapse,
  .navbar-toggler:active + .navbar-collapse {
    display: flex;
  }

  /* Estilos para los botones en el menú de hamburguesa */
  .navbar-collapse ul {
    list-style: none;
    padding: 0;
  }

  .navbar-collapse li {
    margin: 10px 0;
  }

  .navbar-collapse.show {
    display: block;
  }
}
</style>