import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vant/lib/index.css';
import '@/assets/styles/vantConfig.css'
import App from './App.vue'
import { router } from './route';
import { Lazyload } from 'vant'
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(Lazyload)
app.mount('#app')
