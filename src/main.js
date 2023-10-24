import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import PrimeVue from "primevue/config";

//App theme
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

//Add Bootstrap

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

//Add PrimeFlex
import 'primeflex/primeflex.css';

//Add PrimeVue components
import Card from 'primevue/card';
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import router from './router'
import InputText from 'primevue/inputtext';


createApp(App)
    .use(PrimeVue, {ripple: true})
    .component('pv-card', Card)
    .component('pv-menubar', Menubar)
    .component('pv-button', Button)
    .use(router)
    .use(store)
   


.mount('#app')
