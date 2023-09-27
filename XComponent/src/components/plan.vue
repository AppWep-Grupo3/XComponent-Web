<template>
    <div class="plan-container">
      <!-- Plan Free -->
      <div class="plan free-plan">
        <div class="titulo">{{ planFree.nombre }}</div>
        <div class="precio">{{ planFree.precio }}</div>
        <div class="descripcion">{{ planFree.descripcion }}</div>
        <div class="funcionalidades">{{ planFree.funcionalidades }}</div>
        <div class="acceso">{{ planFree.acceso }}</div>
        <button :style="{ backgroundColor: planFree.botonColor }" class="btn botonFree">{{ planFree.botonTexto }}</button>
        <div :style="{ backgroundColor: planFree.cuadradoColor }" class="cuadrado"></div>
      </div>
  
      <!-- Plan Premium -->
      <div class="plan premium-plan">
        <div class="titulo2">{{ planPremium.nombre }}</div>
        <div class="precio2">{{ planPremium.precio }}</div>
        <div class="descripcion2">{{ planPremium.descripcion }}</div>
        <div class="funcionalidades2">{{ planPremium.funcionalidades }}</div>
        <div class="acceso2">{{ planPremium.acceso }}</div>
        <button :style="{ backgroundColor: planPremium.botonColor }" class="btn botonPREMIUM">{{ planPremium.botonTexto }}</button>
        <div :style="{ backgroundColor: planPremium.cuadradoColor }" class="cuadrado"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        planFree: {
          nombre: "FREE",
          precio: "S/0.00",
          descripcion: "Un componente como parte de pago",
          funcionalidades: "Funcionalidades esenciales",
          acceso:"Acceso a contenido informativo y actualizaciones",
          botonTexto: "Empieza ahora",
          botonColor: "black",
          cuadradoColor: "yellow",
        },
        planPremium: {
          nombre: "PREMIUM",
          precio: "S/14.99",
          descripcion: "Cinco componentes máximos como parte de pago",
          funcionalidades: "Descuentos en productos seleccionados",
          acceso:"Acceso anticipado a promociones",
          botonTexto: "Empieza ahora",
          botonColor: "white",
          cuadradoColor: "black",
        },
      };
    },
  };
  </script>

<style scoped>
.plan-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
.titulo{
    font: 'Poppins', sans-serif;
    font-size: 2rem;
    color: #000000; 
}

.titulo2{
    font: 'Poppins', sans-serif;
    font-size: 2rem;
    color: #ffffff; 
}
.plan {
  border: 2px solid #000;
  padding: 90px;
  text-align: center;
  
  flex: 1; 
}

/* Estilo del plan Free */
.free-plan {
    
  flex: 0 0 calc(20% - 20px); 
  box-sizing: border-box;
  position: relative;
  background-color: hsl(55, 100%, 50%);
  border-radius: 5px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  max-width: 2000px; /* Limitar el ancho máximo */
  margin: 20px 20px 20px 0;
  color: #fffb00; 
    
}

/* Estilo del plan Premium */
.premium-plan {
  flex: 0 0 calc(20% - 20px); 
  box-sizing: border-box;
  position: relative;
  background-color: #000000;
  border-radius: 5px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  max-width: 2000px; 
  margin: 20px 20px 20px 0;
  color: #1100ff; 

}



.precio {
  font-size: 70px;
  margin-top: 10px;
  color: #000000; 

}

.descripcion {
  margin-top: 10px;
  color: #000000; 

}

.funcionalidades {
  margin-top: 10px;
  color: #000000; 

}

.acceso{
    margin-top: 10px; 
    color: #000000; 

}

.precio2 {
  font-size: 70px;
  margin-top: 10px;
  color: #f9f9f9; 
}

.descripcion2 {
  margin-top: 10px;
  color: #f9f9f9; 
}

.funcionalidades2 {
  margin-top: 10px;
  color: #f9f9f9; 
}

.acceso2{
    margin-top: 10px;
    color: #f9f9f9; 
 
}

/*Botones de los planes*/ 
.botonFree {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  border: 2px solid rgb(255, 234, 0);
  border-radius: 10px;
  color: rgb(255, 255, 255);
  padding: 10px 20px;
  cursor: pointer;

}
.botonPREMIUM {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  border: 2px solid rgb(0, 0, 0);
  border-radius: 10px;
  color: rgb(0, 0, 0);
  padding: 10px 20px;
  cursor: pointer;


}


.premium-plan:hover {
  transform: translateY(-10px);
}
.free-plan:hover {
  transform: translateY(-10px);
}
</style>