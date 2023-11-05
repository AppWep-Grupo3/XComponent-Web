import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    user:null,
    productos: [],
    carrito: {},
  },
  mutations: {
    setUser(state,user){
      state.user = user;
    },
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
        const response = await axios.get('https://xcomponentapirest.onrender.com/api/v1/product'); // Reemplaza con la URL de tu API
        console.log(response)
        const data = response.data;
        commit('setProductos', data);
        console.log('Datos cargados correctamente');
      } catch (error) {
        console.log(error);
      }
    },
    agregarAlCarrito({ commit, state }, product) {
      // Verificar si el producto ya está en el carrito
      if (state.carrito.hasOwnProperty(product.id)) {
        // Aumentar la cantidad del producto en el carrito
        state.carrito[product.id].cantidad++;
      } else {
        // Agregar el producto al carrito con una cantidad de 1
        const productInCart = { ...product, cantidad: 1 };
        commit('setCarrito', productInCart);
      }
    },
    setUser(context, user) {
      context.commit('setUser', user);
    },
  },
  getters: {
    totalCantidad(state) {
      return Object.values(state.carrito).reduce((acc, { cantidad }) => acc + cantidad, 0);
    },
    totalPrecio(state) {
      return Object.values(state.carrito).reduce((acc, { cantidad, price }) => acc + cantidad * price, 0);
    },

    isAuthenticated(state) {
      return state.user !== null;
    }
  },
});
