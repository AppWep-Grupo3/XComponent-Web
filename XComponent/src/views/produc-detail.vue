

<script>
  import { ref,reactive } from "vue";
  import { db } from "../Data/productos";
  const state = reactive( {productos: db})
  


export default {
  props: ['id' ], // Asegúrate de incluir 'productos' como prop
  computed: {
    product() {
      // Accede directamente a state.productos
      const productos = state.productos;

      // Asegúrate de que productos y el id sean válidos
      if (!productos || !this.id) {
        console.log("No hay productos o id.");
        console.log(this.id);
        console.log(productos);
        return null;
      }

      // Busca el producto correspondiente en la lista de productos
      const product = productos.find(producto => producto.id === Number(this.id));

      return product || null; // Devuelve el producto o null si no se encuentra
    }
  }
}
</script>
  
  <template>
    <div class="produc-detail">
        
      <h1>{{ product.nombre }}</h1>
      <img :src="product.imagen" alt="">
      <p>{{ product.descripcion }}</p>
      <p>Precio: ${{ product.precio }}</p>
      <!-- Otros detalles del producto aquí -->
    </div>
  </template>
  