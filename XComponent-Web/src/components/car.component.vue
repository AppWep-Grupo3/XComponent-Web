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
               v-for="item in items" :key="item.id" :item="item"
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




export default{
  components:{
      ItemSection,
      PurchaseSummary
  },
  
  setup(){
      const store = useStore()
      const items = computed(()=>store.state.carrito)
      return {items}
  }

  
}


</script>