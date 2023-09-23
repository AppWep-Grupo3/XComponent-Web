

import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from "primevue/config";

//App theme
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

//Add PrimeFlex
import 'primeflex/primeflex.css';

//Add PrimeVue components
import Card from 'primevue/card';
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import router from './router'



createApp(App)
    .use(PrimeVue, {ripple: true})
    .component('pv-card', Card)
    .component('pv-menubar', Menubar)
    .component('pv-button', Button)
    .use(router)
   


.mount('#app')
