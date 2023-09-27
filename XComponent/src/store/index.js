import {createStore} from 'vuex';


export default createStore({
    state:{
        productos:[],
        carrito:{}
    },
    mutations:{
        setProductos(state, payload){
            state.productos = payload;//aca se guarda el payload en el state, el payload es el array de productos, que viene de la api
            console.log(state.productos);
        },
//////////////////////////////////////////////
        setCarrito(state, payload){
            state.carrito[payload.id] = payload;

        },
        //////////////////////
        vaciarCarrito(state){
            state.carrito = {};

        },
        //////////////////////////
        aumentar(state, payload){
            state.carrito[payload].cantidad = state.carrito[payload].cantidad + 1;
        },
        //////////////////////////
        disminuir(state, payload){
            state.carrito[payload].cantidad = state.carrito[payload].cantidad - 1;
            if(state.carrito[payload].cantidad === 0){
                delete state.carrito[payload];
            }
        }

    },
    actions:{
        async fetchData({commit}){
            try{
                const res = await fetch('api.json');
                const data = await res.json();
                commit('setProductos', data);
                console.log('Datos cargados correctamente');
              
            }catch(error){
           
                console.log(error);
            }
        },/////////////////////////////////////////////////////
        agregarAlCarrito({commit, state}, product){
            state.carrito.hasOwnProperty(product.id) ? product.cantidad = state.carrito[product.id].cantidad + 1 : product.cantidad = 1;
            commit('setCarrito', product);
        }
    },

    getters:{
        totalCantidad(state){
            return Object.values(state.carrito).reduce((acc, {cantidad}) => acc + cantidad, 0);
        },
        totalPrecio(state){
            return Object.values(state.carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0);
        }
    }



})