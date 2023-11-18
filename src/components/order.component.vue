<template>
  <div class="order">
    <h4>Resumen de orden</h4>
    <div class="p-card p-mb-3">
      <div class="p-card-header">Su orden</div>
      <div class="p-card-body">
        <ul>
          <li v-for="(item, index) in items" :key="index">
            <span style="font-weight: bold;">Producto: </span> {{ item.name }}
            <span style="font-weight: bold;">- Precio: </span> {{ item.price }}$
          </li>
        </ul>
      </div>
    </div>

    <router-link to="/home" class="p-button p-button-danger custom-button">
      Volver
    </router-link>

    <router-link to="/home" class="p-button p-button-important custom-button">
      Realizar Pedido
    </router-link>

    <!--
    <button class="p-button p-button-danger custom-button" @click="submitOrder">
    Realizar Pedido
    </button> 
    -->

  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'order',
  setup() {
    const store = useStore();
    const router = useRouter();
    const items = computed(() => store.state.carrito);

    const totalAmount = computed(() => {
      return Array.isArray(items.value)
        ? items.value.reduce((total, item) => {
            const itemPrice = item.price || 0;
            const itemQuantity = item.quantity || 0;
            return total + itemPrice * itemQuantity;
          }, 0)
        : 0;
    });

    function submitOrder() {
      console.log('Pedido realizado con éxito!');
    }

    return {
      items,
      totalAmount,
      submitOrder,
      router
    };
  },
};
</script>

<style scoped>
.order {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.p-card-body,
text {
  margin: 40px;
  font-size: 20px;
}

.p-card-header,
text {
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
}

.p-card {
  width: 50%;
  margin: 20px;
  border: 3px solid rgb(0, 0, 0);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.custom-button {
  margin: 5px;
  width: 20%;
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

h4 {
  font-size: 30px;
  font-weight: bold;
  margin: 20px;
}
</style>
