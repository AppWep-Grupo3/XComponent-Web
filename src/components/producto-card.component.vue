<template>
  
  <div class="product-grid">
    <pv-card class="product-card" v-for="producto in productos" :key="producto.id" style="width: 20em;">
      <!-- Contenido de cada tarjeta de producto -->
      <template #header>
        
        <img :src="producto.image" alt=""><!-- Contenido del encabezado -->
      </template>
      <template #title>
        {{ producto.name }} <!-- Mostrar el nombre del producto -->
      </template>
      <template #content>
        <!-- Mostrar otros detalles del producto -->
        
        <p class="descr-general">{{ producto.description }}</p>
        <p class="precio-general">Precio: ${{ producto.price }}</p>
      </template>
      <template #footer>
        <!-- Contenido del pie de la tarjeta -->
       
          <button  @click=" verDetalle(producto.id)"  class="btn btn-primary">Detalle</button>
       
      </template>
    </pv-card>
  </div>

</template>

<script>
import axios from 'axios';
//import router from '../router/index.js';

export default {

  name: "producto-card",
  props: {
    productos: Array,
  },
  //components: { router },

  methods: {
  async verDetalle(idProducto) {
    const infoUSer= JSON.parse(localStorage.getItem('user-info'));
    if(infoUSer){
      console.log('El usuario esta logueado');

    console.log('Haciendo clic en "verDetalle" del producto con ID:', idProducto);
    
    console.log('El id del subproducto es: '+localStorage.getItem('idSubproductSelect'));

    // Llamar al producto seleccionado desde la API
    let productSelect= await axios.get('https://xcomponentapirest.onrender.com/api/v1/product/' + idProducto,{
      headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
    })
      .then(response => {
        const detailsProductSelect = response.data;
        console.log('Detalles del producto seleccionado:', detailsProductSelect)
        // Guardar el producto en el local storage 
        localStorage.setItem('productSelect', JSON.stringify(detailsProductSelect));
      })
      .catch(error => {
        console.log('Error al cargar el producto seleccionado', error);
      });
      console.log('/producto/',idProducto)
      this.$router.push('/producto/'+idProducto);
      console.log('Detalles del producto seleccionado:', productSelect.data);
      
  }
  else{
    console.log('El usuario no esta logueado');
    alert('Debe iniciar sesion para ver los detalles del producto');
    this.$router.push('/iniciarSesion');
  }
  },
}
}






</script>
<style scoped>
.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.product-card {
  flex: 0 0 calc(20% - 20px); /* Cambiar el ancho de la tarjeta y considerar el margen */
  box-sizing: border-box;
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  max-width: 2000px; /* Limitar el ancho máximo */
  margin: 20px 20px 20px 0;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card img {
  max-width: 100%;
  height: auto;
  max-height: 290px;
}

.product-card .btn {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #FFC700;
  border: 2px solid white;
  border-radius: 10px;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
}

.product-card .btn:hover {
  background-color: orange;
}

.precio-general{
  color: #ff0505;
}
.descr-general{
  color: #5e5d5b;
}
</style>