<template>
<div class="text-center">
    <div>
      <th scope="row" colspan="2">Total productos</th>
      <td>{{ totalProducto }}</td>
      <td>
        <button class="btn btn-danger btn-sm" id="vaciar-carrito" @click="vaciarCarrito">
          vaciar todo
        </button>
      </td>
      <td class="font-weight-bold">$ <span>{{ totalPrecio }}</span></td>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'; // Importa ref y onMounted desde Vue Composition API
import axios from 'axios';

export default {
  setup() {
    const idUser = JSON.parse(localStorage.getItem('user-info'));
    const productsInCart = ref([]);
    const totalProducto = ref(0);
    const totalPrecio = ref(0);
    
    
   

    const fetchProductsInCart = async () => {
      try {
        const response = await axios.get('http://localhost:5172/api/v1/cart/getcartbyuserid/' + idUser.id);
        productsInCart.value = response.data;
        console.log('Productos en el carrito cargados al entrar al carrito:', productsInCart.value);

        //cantidad.value = productsInCart.value[otroCount - 1].quantity;
     
      } catch (error) {
        console.log('Error al obtener el carrito de compras', error);
      }
    };

    const updateTotals = () => {
     
    
      totalProducto.value = productsInCart.value.reduce((total, product) => total + product.quantity, 0);
      console.log('Total producto:', totalProducto.value);
      totalPrecio.value = productsInCart.value.reduce((total, product) => total + product.totalPrice, 0);
      console.log('Total precio:', totalPrecio.value);
    };

    onMounted(async () => {
      await fetchProductsInCart();
      updateTotals();
    });

    const vaciarCarrito = () => {
      // Lógica para vaciar el carrito manualmente
      // Puedes restablecer totalCantidad y totalPrecio a 0 aquí
      totalProducto.value = 0;
      totalPrecio.value = 0;
    };

    return { totalProducto, totalPrecio, vaciarCarrito };
  },
};
</script>