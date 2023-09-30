<script>

  //import { ref,reactive, onMounted } from "vue";
  import ProductoCard from "../components/producto-card.component.vue";
  //import { db } from "../Data/productos";

  import {mapState} from 'vuex'


  

export default {
    name: "HomeView",
    
    computed:{
      ...mapState(['productos'])
    },
    components: {
      ProductoCard,
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

<style>

  .home-view{
    background-color: #fff;
  }

</style>
  
  

  