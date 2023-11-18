<template>
  <tr>
    <th scope="row">{{ item.id }}</th>
    <td>{{ item.name }}</td>
    <td>{{ cantidad }}</td>

   
      

    <td>
      <button class="btn btn-info btn-sm" @click="aumentarCantidad">+</button>
      <button class="btn btn-danger btn-sm" @click="disminuirCantidad">-</button>
    </td>
    <td>{{ totalPrecioOneProduct }}</td>
  </tr>
</template>

<script>
import { ref, onMounted,getCurrentInstance } from 'vue';
import axios from 'axios';

export default {
  

  props: ['item', 'count'],
  setup(props,{emit}) {
    const idUser = JSON.parse(localStorage.getItem('user-info'));
    const productsInCart = ref([]);
    const totalProducto = ref(0);
    const totalPrecio = ref(0);
    const totalPrecioOneProduct = ref(0);
    const cantidad = ref(0);
    console.log('Cantidad:', cantidad.value);
    let otroCount = props.count;

    const fetchProductsInCart = async () => {
      try {
        const response = await axios.get('https://xcomponentapirest.onrender.com/api/v1/cart/getcartbyuserid/' + idUser.id,{
          headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
        });
        productsInCart.value = response.data;
        console.log('Productos en el carrito cargados al entrar al carrito:', productsInCart.value);

        cantidad.value = productsInCart.value[otroCount - 1].quantity;
     
      } catch (error) {
        console.log('Error al obtener el carrito de compras', error);
      }
    };

    const updateTotals = () => {
      console.log('Otro count:', otroCount);
      console.log('Producto en estasesion:', productsInCart.value[otroCount - 1])
      if (productsInCart.value[otroCount - 1] != null) {
        totalPrecioOneProduct.value = productsInCart.value[otroCount - 1].totalPrice;
      }

      totalProducto.value = productsInCart.value.reduce((total, product) => total + product.quantity, 0);
      console.log('Total producto:', totalProducto.value);
      totalPrecio.value = productsInCart.value.reduce((total, product) => total + product.totalPrice, 0);
      console.log('Total precio:', totalPrecio.value);
    };

    onMounted(async () => {
      await fetchProductsInCart();
      updateTotals();
    });

    const aumentarCantidad = () => {
      cantidad.value++;
      console.log('Cantidad:', cantidad.value);
      emit('actualizarCantidad', props.item.id, cantidad.value);
      const idUser = JSON.parse(localStorage.getItem('user-info'));
      
      const data = {
        productId: props.item.id,
        quantity: cantidad.value,
        totalPrice: cantidad.value * props.item.price,
      };
      axios.put('https://xcomponentapirest.onrender.com/api/v1/cart/updatequantityandprice/' + idUser.id, data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(response => {
        console.log('Solicitud POST exitosa:', response);
        totalPrecioOneProduct.value = response.data.totalPrice;
      })
      .catch(error => {
        console.error('Error al realizar la solicitud POST:', error);
      });
    };

    const disminuirCantidad = () => {
      cantidad.value--;
      const idUser = JSON.parse(localStorage.getItem('user-info'));
      const data = {
        productId: props.item.id,
        quantity: cantidad.value,
        totalPrice: cantidad.value * props.item.price
      };

      if (cantidad.value >= 1) {
        axios.put('https://xcomponentapirest.onrender.com/api/v1/cart/updatequantityandprice/' + idUser.id, data, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(response => {
          console.log('Solicitud POST exitosa:', response);
          totalPrecioOneProduct.value = response.data.totalPrice;
        })
        .catch(error => {
          console.error('Error al realizar la solicitud POST:', error);
        });
      }

      if (cantidad.value === 0) {
        console.log('Cantidad del carrito vacio:', cantidad.value);
        console.log('Id del producto a eliminar:', props.item.id);
        console.log('Id del usuario:', idUser.id);
        const dataDelete = {
          productId: props.item.id,
          userId: idUser.id
        };
        axios.delete('https://xcomponentapirest.onrender.com/api/v1/cart/DeleteProducCart/' + idUser.id, {
        data: dataDelete,
        headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  }
})
        .then(response => {
          console.log('Solicitud POST exitosa:', response);
        })
        .catch(error => {
          console.error('Error al realizar la solicitud DELETE:', error);
        });
      }
    };

    return {
      totalProducto,
      totalPrecio,
      otroCount,
      totalPrecioOneProduct,
      cantidad,
      aumentarCantidad,
      disminuirCantidad
    };
  },
};
</script>
