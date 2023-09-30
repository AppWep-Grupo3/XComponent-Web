<template >
  <div >
    <div style="background-color: #f1f1f1; overflow: hidden;">
      <div class="product-detail" >

        <div class="product-intern">
        <!-- Producto general izquierda -->
         <h1>{{ product.nombre }}</h1>
         <img :src="product.imagen" alt="" style="max-width: 500px; height: auto;">
         <p>{{ product.detallesGenerales }}</p>
       </div>


      <div>

         <!-- Detalles especificos y precio -->
        <div style="display: flex; margin-top: 40px; margin-bottom: 40px;">

          <div class="content-detailEsp" >
                <div v-for="(detail, index) in product.detallesEspecificos.split('|')" :key="index">
                  <p style="text-align: left; margin-left: 10px; ">{{ detail }}</p>
                </div>
           </div>

           <div class="content-precio">
             <div>
               <h4>Precio*</h4>
               <div>
                 <s v-if="precioAnterior !== null">S./ {{ precioAnterior }}</s>
                 <h1>S./ {{ product.precio }}</h1>
               </div>
               <button @click="agregarProducto(product)">Agregar al carrito</button>
             </div>
           </div>
            
        </div>

      <!-- Mensaje de confirmacion de agregacion -->  
         
         <transition name="fade">
         <div v-if="confirmation.show" class="confirmation-message">
           <div class="confirmation-content">
             <div class="check-icon">✓</div>
             <p>Producto agregado al carrito</p>
           </div>
           <router-link to="/carrito">Ir al carrito</router-link>
         </div>
       </transition>
           
      <!-- Productos que puede intercambiar -->
         <div>
          
            <div class="productIntercam" style=" display: flex;">

              <div v-for="(relatedProduct, index) in product.productosRelacionados" :key="index" class="product-intern">
                <div><img :src="relatedProduct.imagen" alt="" class="related-product"></div>
                <div class="part-1"><small >{{ relatedProduct.nombre }}</small></div>
                <div class="part-2"><p>  {{ relatedProduct.precio }}</p></div>
                
                <button  @click="restarPrecio(product, relatedProduct.precio, index)" >{{ mostrarDeshacer[index] ? 'Deshacer' : 'Lo tengo!' }}</button>
              </div>

            </div>

            <div  style="text-align: center;">
              <h7 >Hey! Recuerda que por ser cliente basico, podras dar como parte <br>de pago un producto usados de tu propiedad</h7>
            </div>
        
          </div>

        </div>
      </div>

      <div style=" text-align: center; margin: 20px;">

        
        <router-link :to="{ name: 'home' }">
          <button class="button-return">Volver</button>
        </router-link>
        
      </div>
    </div>
    
    
    
  </div>
</template>

<script>
import { mapState, useStore } from 'vuex';
import { ref } from 'vue'; // Importa ref
///////

///////

export default {
  props: ['id','product'],
 
  setup() {
    const confirmation = ref({ show: false });
    const precioAnterior=ref(null);
    const mostrarDeshacer = ref(Array(5).fill(false));


    const store = useStore();
  
    const agregarProducto = (product) => {
      store.dispatch('agregarAlCarrito', product);

      // Mostrar el mensaje de confirmación
      confirmation.value.show = true;

      // Ocultar el mensaje después de unos segundos (opcional)
      setTimeout(() => {
        confirmation.value.show = false;
      }, 2000); // Cambia 5000 a la cantidad de milisegundos que desees mostrar el mensaje

      console.log("Agregando producto");
      console.log(product);
      console.log('producto agregado');
      console.log(mostrarDeshacer)
    };

    const restarPrecio=(product,precioProductoRelacionado,index)=>{
      if(mostrarDeshacer.value[index]===false){
        precioAnterior.value=product.precio;
        product.precio = product.precio - precioProductoRelacionado;
        mostrarDeshacer.value[index]=true;

      }else{
        product.precio = precioAnterior.value;
        precioAnterior.value=null;
        mostrarDeshacer.value[index]=false;
      }
 //para manejar varios precios, crea un arreglo de precios anteriores
    }
    
    return { confirmation ,agregarProducto ,restarPrecio,precioAnterior,mostrarDeshacer};
  },

  

  computed: {
    ...mapState(['productos']),
    product() {
      const productos = this.productos;
      console.log(productos);
      if (!productos || !this.id) {
        console.log("No hay productos o id.");
        console.log(this.id);
        console.log(productos);
        return null;
      }
      const product = productos.find(producto => producto.id === Number(this.id));
      return product || null;
    }
  },
  
 
 
}
</script>


<style>
.confirmation-message {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(145, 145, 145, 0.7); /* Fondo amarillo semitransparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Coloca el mensaje por encima de todo */
  opacity: 0;
  transition: opacity 2s; /* Agrega una transición suave de opacidad */
}

.confirmation-content {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.check-icon {
  font-size: 48px;
  color: #fff;
  background-color: #4CAF50; /* Color verde para el check */
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}


/* Mostrar el mensaje */
.fade-enter-active, .fade-leave-active {
  opacity: 1;
}
.fade-enter, .fade-leave-to /* .fade-leave-active en versiones anteriores */ {
  opacity: 0;
}




.product-detail{
  background-color: #ffffff;
  display: flex;
  margin: 30px;
  border-radius: 30px;
}
.product-intern {
  
  
  margin: 10px;
  padding: 10px;
  flex: 1;
  text-align: center;
}
.product-intern img {
  max-width: 100px;
  height: auto;
}

.content-detailEsp{
  margin-top: 20px;
  flex: 1;  
  max-width: 40%;
  background-color: #dddada;
  border-radius: 20px;
}



.content-precio{
  margin: auto;
}

.content-precio div{
  text-align: center;
  margin: 10px;
}

.content-precio h4{
  font-size: 16px;
 color: #acacac;
}
.content-precio h1{
  color: #ff1d1d;
  font-size: 70px;
}

.content-precio button{
  background-color: rgb(235, 200, 47);
  color: #fff;
  padding: 3px 15px;
  border-radius: 20px;
  border: none;
}

.productIntercam .part-1{
  margin: auto;
  font-size: 13px;
  text-align: center;
}
.productIntercam .part-2{
  color:#ff1d1d;
  font-size: 20px;
  text-align: center;
}

.productIntercam button{
  background-color: rgb(235, 200, 47);
  color: #fff;
  padding: 3px 15px;
  border-radius: 20px;
  border: none;
}

.button-return{
  font-size: 20px;
  background-color: rgb(3, 3, 3);
  color: #fff;
  padding: 3px 25px;
  border-radius: 20px;
  border: none;
  
}



</style>
