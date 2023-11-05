<template>
  <div class="my-5 text-center">
    <h4>Tus compras</h4>
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Acción</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody id="items">
         
          <item-section 
               v-for="(item, index) in items" 
               :key="item.id" 
               :item="item" 
               :count="index"
               
           
          />
         
         

        
        </tbody>
        <tfoot>
          <tr id="footer-carrito">
              <th scope="row" colspan="5" v-if="Object.keys(items).length===0">Carrito de compras vacio</th>
              <purchase-summary v-else/>
          </tr>
        </tfoot>


       
      </table>
      <router-link :to="{ name: 'home' }">
            <button class="btn btn-primary">Volver</button>
        </router-link>
    </div>
  </div>
</template>

<script>
import {  useStore } from 'vuex';
import {computed} from 'vue'
import ItemSection from './item-section.component.vue'
import PurchaseSummary from './purchase-summary.component.vue'
import axios from 'axios';




export default{
  components:{
      ItemSection,
      PurchaseSummary
  },
  
  setup() {


  const store = useStore();
  const idUser = JSON.parse(localStorage.getItem('user-info'));
  let productsInCart = [];

  // Obtiene el carrito desde el estado de Vuex
  const items = computed(() => store.state.carrito);
  let count = 0;

  const fetchProductsInCart = async () => {
    try {
      const response = await axios.get('https://xcomponentapirest.onrender.com/api/v1/cart/getcartbyuserid/' + idUser.id);
      productsInCart = response.data;

      if (productsInCart.length > 0) {
        const dataProducts = await Promise.all(
          productsInCart.map(element =>
            axios.get('https://xcomponentapirest.onrender.com/api/v1/product/' + element.productId)
          )
        );

        console.log('Los productos recuperados de la bd son:', dataProducts);

        // Actualiza el carrito en el estado de Vuex utilizando una mutación
        dataProducts.forEach(product => {
          store.commit('setCarrito', product.data);
        });

        console.log('Los productos en el carrito son:', items.value);
      } else {
        console.log('El carrito del usuario no tiene productos seleccionados');
      }
    } catch (error) {
      console.error('Error al cargar productos:', error);
    }
  };

  fetchProductsInCart(); // Llama a la función para cargar los productos en el carrito.

  console.log('Los items son nuevos:', items.value);
  return { items,count };
}

  
}


</script>