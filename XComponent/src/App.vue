<script >



import HeaderSection from "./components/public/header-section.component.vue";




export default{
    name: "App",
    components:{
        HeaderSection,
        
    },
  
    
}


</script>

<template>
    <div class="w/full">

        <header-section />
        
        <router-view/>
        
        
        
    </div>
  
</template>


