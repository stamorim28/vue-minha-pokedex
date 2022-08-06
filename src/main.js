import { createApp } from 'vue'
import App from '../pages'

import '@/assets/css/reset.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

createApp(App).mount('#app')
AOS.init();
