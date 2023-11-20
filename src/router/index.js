import { createRouter, createWebHistory } from 'vue-router'
//aca va la ruta del dtail view
import ProducDetail from '../views/produc-detail.vue'
import productoCard from '../components/producto-card.component.vue'
import HomeView from '../views/home-view.vue'
import car from '../components/car.component.vue'
import plan from '../components/plan.vue' 
import iniciarSesion from '../components/login-form.component.vue'
import register from '../components/register-form.component.vue'
import accountEdit from '../components/account-edit.component.vue'
import order from '../components/order.component.vue'
import picturesComponent from '../components/pictures.component.vue'
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
      props: true
    },
    {
      path: '/plan',
      name: 'plan',
      component: plan,
    },
    {
      path: '/iniciarSesion',
      name: 'iniciarSesion',
      component: iniciarSesion,
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path: '/accountEdit',
      name: 'accountEdit',
      component: accountEdit,
    },
    {
      path: '/order',
      name: 'order',
      component: order,
    },
   {
    path: 'picturesComponent',
    name: 'picturesComponent',
    component: picturesComponent,
  },

]
  

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
export default router

