<template>
    <div>
      <pv-menubar class="custom-menu">
        <template #start>
          <img alt="logo" src="https://cdn.discordapp.com/attachments/1044480806938230784/1155039752442097714/image.png" height="70" class="mr-2" />
        </template>
        <template #item="{ label, item, props }">
          <a :href="item.route" v-bind="props.action">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ label }}</span>
          </a>
          <a :href="item.url" :target="item.target" v-bind="props.action">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ label }}</span>
          </a>
        </template>
        <template #end>
          <!-- Botones "Componentes", "Periféricos", "Monitores" y "Laptops" -->
          <a :href="componentesUrl" class="custom-button">
            <span class="pi pi-cog"></span>
            <span>Componentes</span>
          </a>
          <a :href="perifericosUrl" class="custom-button">
            <span class="pi pi-desktop"></span>
            <span>Periféricos</span>
          </a>
          <a :href="monitoresUrl" class="custom-button">
            <span class="pi pi-tv"></span>
            <span>Monitores</span>
          </a>
          <a :href="laptopsUrl" class="custom-button">
            <span class="pi pi-laptop"></span>
            <span>Laptops</span>
          </a>
  
          <!-- Campo de búsqueda -->
          <InputText v-model="searchTerm" placeholder="Buscar" type="text" class="p-d-flex p-jc-center p-ai-center p-inputtext" />
  
          <!-- Botones "Iniciar Sesión" y "Carrito" -->
          <pv-button label="Iniciar Sesión" icon="pi pi-sign-in" @click="onLoginClick" />
         
          <router-link to="/car">
           <pv-button label="Carrito" icon="pi pi-shopping-cart" />
          </router-link> 

         <router-link to="/plan">
          <pv-button label="Planes"/>        
         </router-link>
          
         </template>
      </pv-menubar>
    </div>
  </template>
  
  <script>
import router from '../../router';

  export default {
    name: "header-section",
    data() {
        return {
            searchTerm: "",
            componentesUrl: "/componentes",
            perifericosUrl: "/perifericos",
            monitoresUrl: "/monitores",
            laptopsUrl: "/laptops" // Asegúrate de que esta ruta sea válida
        };
    },
    components: { router }
};
  </script>
  
  <style scoped>
  /* Estilos CSS personalizados para el menú */
  .custom-menu {
    background-color: black; /* Fondo negro */
    
  }
  
  /* Estilos para hacer que las letras sean blancas y eliminar los bordes de los botones */
  .custom-button {
    color: white !important; /* Texto blanco */
    border: none !important; /* Elimina los bordes */
  }
  </style>
  