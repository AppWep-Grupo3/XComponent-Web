<script >
import { computed, onMounted } from 'vue';

import HeaderSection from "./components/public/header-section.component.vue";
import FooterSection from "./components/public/footer-section.component.vue";
import {useStore} from 'vuex';
import plan from './components/plan.vue'; 
import iniciarSesion from './components/login-form.component.vue'



export default{
    name: "App",
    components:{
        HeaderSection,
        FooterSection,
        plan,
        iniciarSesion,
    },
    setup(){
        const store = useStore()
        onMounted(() => {
            store.dispatch('fetchData')
        })
        
        const productos=computed(()=>store.state.productos)
        console.log('sasa')
        
        const carrito = computed(()=>store.state.carrito)
        
        return {productos,carrito}

    },
  
    
}


</script>

<template>
    <div class="w/full">
       
       
 
        <header-section />
        
        <router-view/>
        
        <footer-section/>
        
    </div>
  
</template>


