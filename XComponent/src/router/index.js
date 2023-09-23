import { createRouter, createWebHistory } from 'vue-router'
//aca va la ruta del dtail view
import ProducDetail from '../views/produc-detail.vue'
import ProductoCard from '../components/producto-card.component.vue'
import HomeView from '../views/home-view.vue'


const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomeView, // Esta debe ser la componente que muestra todos los productos
    },

    {
      path: '/product/:id',
      name: 'ProducDetail',
      component: ProducDetail,
      props: true
    },
 
]
  

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
export default router

