<template>
  <div class="produc-detail">
    <h1>{{ product.nombre }}</h1>
    <img :src="product.imagen" alt="">
    <p>{{ product.descripcion }}</p>
    <p>Precio: ${{ product.precio }}</p>
    <!-- Otros detalles del producto aquí -->
    <router-link :to="{ name: 'home' }">
      <button class="btn btn-primary">Volver</button>
    </router-link>
    <button @click="agregarProducto(product)">Agregar</button>
  </div>
</template>

<script>
import { mapState, mapActions, useStore } from 'vuex';

///////

///////

export default {
  props: ['id','product'],
 setup(){
        const store = useStore()
       const agregarProducto = (product) => {
        store.dispatch('agregarAlCarrito', product)
      
        console.log("Agregando producto");
        console.log(product);
        console.log('producto agregado')
       }
       return {agregarProducto}
        
       
        
        

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
