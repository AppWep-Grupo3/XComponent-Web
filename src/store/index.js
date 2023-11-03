import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    productos: [],
    carrito: {},
  },
  mutations: {
    setProductos(state, payload) {
      state.productos = payload;
      console.log(state.productos);
    },
    setCarrito(state, payload) {
      state.carrito[payload.id] = payload;
    },
    vaciarCarrito(state) {
      state.carrito = {};
    },
    aumentar(state, payload) {
      state.carrito[payload].cantidad = state.carrito[payload].cantidad + 1;
    },
    disminuir(state, payload) {
      state.carrito[payload].cantidad = state.carrito[payload].cantidad - 1;
      if (state.carrito[payload].cantidad === 0) {
        delete state.carrito[payload];
      }
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        // Realiza una solicitud GET a la API utilizando Axios
        const response = await axios.get('http://localhost:5172/api/v1/product'); // Reemplaza con la URL de tu API
        console.log(response)
        const data = response.data;
        commit('setProductos', data);
        console.log('Datos cargados correctamente');
      } catch (error) {
        console.log(error);
      }
    },
    agregarAlCarrito({ commit, state }, product) {
      state.carrito.hasOwnProperty(product.id)
        ? (product.cantidad = state.carrito[product.id].cantidad + 1)
        : (product.cantidad = 1);
      commit('setCarrito', product);
    },
  },
  getters: {
    totalCantidad(state) {
      return Object.values(state.carrito).reduce((acc, { cantidad }) => acc + cantidad, 0);
    },
    totalPrecio(state) {
      return Object.values(state.carrito).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0);
    },
  },
});
