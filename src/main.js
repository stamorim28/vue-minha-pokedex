import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '../pages'

import '@/assets/css/reset.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
AOS.init();
