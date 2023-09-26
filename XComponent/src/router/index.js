import { createRouter, createWebHistory } from 'vue-router'
//aca va la ruta del dtail view
import ProducDetail from '../views/produc-detail.vue'
import ProductoCard from '../components/producto-card.component.vue'
import HomeView from '../views/home-view.vue'
import car from '../components/car.component.vue'

const routes = [
  {
    path: '/',
    redirect: '/home', // Redirige la URL principal a /home
  },
    {
        path: '/home',
        name: 'home',
        component: HomeView, // Esta debe ser la componente que muestra todos los productos
        props: true
    },

    {
      path: '/producto/:id',
      name: 'ProducDetail',
      component: ProducDetail,
      props: true
    },
    {
      path: '/car',
      name: 'car',
      component: car, // Esta debe ser la componente que muestra todos los productos
      
  }
 
]
  

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
export default router

