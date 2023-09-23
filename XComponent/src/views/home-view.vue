<script>

  import { ref,reactive } from "vue";
  import ProductoCard from "../components/producto-card.component.vue";
  import { db } from "../Data/productos";
  const state = reactive( {productos: db})
  const data=state.productos
  console.log(state.productos[0])
  


export default {
    name: "HomeView",
    components: {
      ProductoCard,
      
    },
    setup() {
       
      return {
       
        productos:data
      };
    },
  };
</script>


<template>
    
    <div class="home-view">
      
      <div class="product-grid">
        <producto-card :productos="productos" />
      </div>
    </div>
  </template>
  
  

  