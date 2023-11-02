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
                <li class="nav-item">
                  <router-link to="register" class="nav-link" @click="closeMobileMenu">
                    <i class="pi pi-user"></i>
                    Registrarse
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="iniciarSesion" class="nav-link" @click="closeMobileMenu">
                    <i class="pi pi-user"></i>
                    Iniciar Sesión
                  </router-link>
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

export default {
  name: "header-section",
  data() {
    return {
      menuItems: [
        { label: "Inicio", route: "/", icon: "pi pi-home" },
        { label: "Productos", route: "/productos", icon: "pi pi-th-large" },
        { label: "Contacto", route: "/contacto", icon: "pi pi-envelope" }
      ],
      mobileMenuOpen: false
    };
  },
  components: { router },
  methods: {
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