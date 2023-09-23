<template>
  <div class="product-grid">
    <pv-card class="product-card" v-for="producto in productos" :key="producto.id" style="width: 20em;">
      <!-- Contenido de cada tarjeta de producto -->
      <template #header>
        <img :src="producto.imagen" alt=""><!-- Contenido del encabezado -->
      </template>
      <template #title>
        {{ producto.nombre }} <!-- Mostrar el nombre del producto -->
      </template>
      <template #content>
        <!-- Mostrar otros detalles del producto -->
        <p>{{ producto.descripcion }}</p>
        <p>Precio: ${{ producto.precio }}</p>
      </template>
      <template #footer>
        <!-- Contenido del pie de la tarjeta -->
        <router-link :to="{ name: 'ProducDetail', params: { id: producto.id, productos: productos } }">
          <button class="btn btn-primary">Detalle</button>
        </router-link>
      </template>
    </pv-card>
  </div>
</template>

<script>
export default {
  name: "producto-card",
  props: {
    productos: Array,
  },
};
</script>
<style scoped>
.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-card {
  flex: 0 0 calc(25% - 16px);
  margin-bottom: 16px;
  margin-right: 16px;
  box-sizing: border-box;
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2); /* Sombra más pronunciada */
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card img {
  max-width: 100%;
  height: auto;
}

.product-card .btn {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: yellow;
  border: 2px solid white;
  border-radius: 10px;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
}

.product-card .btn:hover {
  background-color: orange;
}
</style>